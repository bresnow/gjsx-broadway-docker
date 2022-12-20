const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");
const {installGlobals} = require("@remix-run/node")
const { createRoutes } = require("@remix-run/server-runtime/dist/routes");
const config = require("./config")
const Gun = require("gun")
const {
  matchServerRoutes,
} = require("@remix-run/server-runtime/dist/routeMatching");
installGlobals()
const buildPath = "./build";

const app = express();

const noCompressContentTypes = [
  /text\/html/,
  /text\/remix-deferred/,
  /text\/event-stream/,
];

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

app.use(
  compression({
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

      if (
        noCompressContentTypes &&
        noCompressContentTypes.some((regex) => regex.test(contentType))
      ) {
        return false;
      }

      return true;
    },
  })
);

// Remix fingerprints its assets so we can cache forever.
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

app.all(
  "*",
  ...(config.NODE_ENV === "development"
    ? [
        (req, res, next) => {
          purgeRequireCache(buildPath);

          remixEarlyHints(require(buildPath))(req, res);
          return createRequestHandler({
            build:config.NODE_ENV,
            getLoadContext,
          })(req, res, next);
        },
      ]
    : [
        remixEarlyHints(require(buildPath)),
        createRequestHandler({
          build: require(buildPath),
          getLoadContext,
          mode: config.NODE_ENV,
        }),
      ])
);


function purgeRequireCache(path) {
  delete require.cache[require.resolve(path)];
}


function remixEarlyHints(build) {
  function getRel(resource) {
    if (resource.endsWith(".js")) {
      return "modulepreload";
    }
    return "preload";
  }
  
  const routes = createRoutes(build.routes);
  
  /**
   *
   * @param {*} req
   * @param {import("express").Response} res
   * @param {*} next
  */
 return (req, res, next) => {
   const matches = matchServerRoutes(routes, req.path);
   
   let resources =
   matches &&
   matches.flatMap((match) => [
        build.assets.routes[match.route.id].module,
        ...(build.assets.routes[match.route.id].imports || []),
      ]);

      if (resources && resources.length > 0) {
        res.socket.write("HTTP/1.1 103\r\n");
      for (const resource of resources) {
        res.socket.write(
          `Link: <${resource}>; rel=${getRel(resource)}\r\n`
        );
      }
      res.socket.write("\r\n");
    }

    if (next) next();
  };
}
const hp = require('http-proxy');

const proxy = new hp.createProxyServer({ target: `ws://0.0.0.0:${config.BROADWAY_PORT}`, ws: true })
const http = require('http');
// const _app = express();
app.use('/broadway', express.static(__dirname+"/views"));
const server = http.createServer(app);
// Proxy websockets
server.on('upgrade', function (req, socket, head) {
  console.log("proxying upgrade request", `0.0.0.0:${config.PROXY_PORT}` + req.url);
  proxy.ws(req, socket, head);
});
server.listen(config.PROXY_PORT, () => {
    console.log(`frontend server listening on port ${config.PROXY_PORT}`);
  });
  const gun = Gun({
  web: hp.createProxyServer({ target: `ws://0.0.0.0:${config.BROADWAY_PORT}`, ws: true }).listen(8088, ()=> console.log("Gun Socket Proxy")), radisk: true, file: 'db'
})

function getLoadContext(){
  return {gun}
}