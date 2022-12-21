"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_http = require("http");
var import_morgan = __toESM(require("morgan"));
var import_gun = __toESM(require("gun"));
var import_http_proxy = __toESM(require("http-proxy"));
var import_path = require("path");
var import_routes = require("@remix-run/server-runtime/dist/routes.js");
var import_routeMatching = require("@remix-run/server-runtime/dist/routeMatching.js");
var import_node = require("@remix-run/node");
var import_process = __toESM(require("process"));
var import_express2 = require("@remix-run/express");
(0, import_node.installGlobals)();
const BROADWAY_DISPLAY = import_process.default.env.BROADWAY_DISPLAY ?? ":5";
const PROXY_PORT = import_process.default.env.PORT ? parseInt(import_process.default.env.PORT) : displayport() + 1;
const NODE_ENV = import_process.default.env.NODE_ENV || "development";
let importPath = (0, import_path.resolve)("build/index.js");
let publicPath = (0, import_path.resolve)("public");
const app = (0, import_express.default)();
app.use((0, import_compression.default)({
  filter: (req, res) => {
    let contentTypeHeader = res.getHeader("Content-Type");
    let contentType = "";
    if (typeof contentTypeHeader === "string") {
      contentType = contentTypeHeader;
    } else if (typeof contentTypeHeader === "number") {
      contentType = String(contentTypeHeader);
    } else if (contentTypeHeader) {
      contentType = contentTypeHeader.join("; ");
    }
    if (noCompressContentTypes && noCompressContentTypes.some((regex) => regex.test(contentType))) {
      return false;
    }
    return true;
  }
}));
app.use((0, import_morgan.default)("tiny"));
app.disable("x-powered-by");
app.use(import_express.default.static(publicPath, { maxAge: "5m" }));
const noCompressContentTypes = [
  /text\/html/,
  /text\/remix-deferred/,
  /text\/event-stream/
];
if (NODE_ENV === "development") {
  app.all("*", async (req, res, next) => {
    try {
      purgeRequireCache(importPath);
      remixEarlyHints(await import(importPath))(req, res, next);
      await (0, import_express2.createRequestHandler)({
        build: await import(`${importPath}?${Date.now()}`),
        getLoadContext,
        mode: NODE_ENV
      })(req, res, next);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
} else {
  app.all(
    "*",
    (0, import_express2.createRequestHandler)(
      {
        build: require(importPath),
        getLoadContext,
        mode: NODE_ENV
      }
    )
  );
}
function purgeRequireCache(path) {
  delete require.cache[require.resolve(path)];
}
function getLoadContext() {
  return {
    authorizedDB() {
      return { gun };
    }
  };
}
;
function remixEarlyHints(build) {
  function getRel(resource) {
    if (resource.endsWith(".js")) {
      return "modulepreload";
    }
    return "preload";
  }
  const routes = (0, import_routes.createRoutes)(build.routes);
  return (req, res, next) => {
    const matches = (0, import_routeMatching.matchServerRoutes)(routes, req.path);
    let resources = matches && matches.flatMap((match) => [
      build.assets.routes[match.route.id].module,
      ...build.assets.routes[match.route.id].imports || []
    ]);
    if (resources && resources.length > 0) {
      res.socket?.write("HTTP/1.1 103\r\n");
      for (const resource of resources) {
        res.socket?.write(`Link: <${resource}>; rel=${getRel(resource)}\r
`);
      }
      res.socket?.write("\r\n");
    }
    if (next)
      next();
  };
}
let gunServer = (0, import_http.createServer)(app);
const gun = (0, import_gun.default)({
  web: gunServer.listen(PROXY_PORT + 1, () => {
    console.log("Relay Server on port " + parseInt(PROXY_PORT + 1));
  }),
  radisk: true,
  file: "/home/app/datastore_gundb"
});
gun.get("database").on(function({ data }) {
  console.log("TEST DAT", data);
});
const proxy = import_http_proxy.default.createProxyServer({ target: `http://0.0.0.0:${displayport()}`, ws: true });
const app2 = (0, import_express.default)();
const server = (0, import_http.createServer)(app2);
server.on("upgrade", function(req, socket, head) {
  console.log("proxying upgrade request", `0.0.0.0:${PROXY_PORT}` + req.url);
  proxy.ws(req, socket, head);
});
app2.use("/", import_express.default.static(__dirname + "/views"));
server.listen(PROXY_PORT);
function displayport() {
  return parseInt(BROADWAY_DISPLAY.replace(":", "")) + 8080;
}
