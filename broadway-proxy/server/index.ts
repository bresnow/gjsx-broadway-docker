import type { Request, Response } from "express";
import express from "express";
import compression from "compression";
import { createServer } from 'http';
import morgan from "morgan";
import Gun from "gun"
import hp from "http-proxy"
import { dirname, resolve ,join} from "path";
import { createRoutes } from "@remix-run/server-runtime/dist/routes.js";
import { matchServerRoutes } from "@remix-run/server-runtime/dist/routeMatching.js";
import { installGlobals } from "@remix-run/node";
import process from "process";
import { createRequestHandler } from "@remix-run/express";
import fs from 'fs';

installGlobals();

const BROADWAY_DISPLAY = process.env.BROADWAY_DISPLAY ?? ":5"
const PROXY_PORT = process.env.PORT ? parseInt(process.env.PORT) : displayport() + 1;
const NODE_ENV = process.env.NODE_ENV || "development";

// let require = createRequire(import.meta.url);
let packagePath = dirname("../package.json");
let importPath = resolve("build/index.js");
let publicPath = resolve("public");

const app = express();


app.use(compression({
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
}));
  app.use(morgan("tiny"));
  app.disable("x-powered-by");
  app.use(express.static(publicPath, { maxAge: "5m" }));
  
  
  




  
  


const noCompressContentTypes = [
  /text\/html/,
  /text\/remix-deferred/,
  /text\/event-stream/,
];


// eslint-disable-next-line no-undef
if (NODE_ENV === "development") {
  app.all("*", async (req, res, next) => {
    try {
      purgeRequireCache(importPath);
      remixEarlyHints(await import(importPath))(req, res, next);
      await createRequestHandler({
        build: await import(`${importPath}?${Date.now()}`),
        getLoadContext,
        mode: NODE_ENV,
      })(req, res, next);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
} else {
  //
  app.all(
    "*",
    createRequestHandler({
      build: require(importPath),
        getLoadContext,
        mode: NODE_ENV,

      }
      ));
    }
    
    function purgeRequireCache(path: string) {
      delete require.cache[require.resolve(path)];
    }
    
    function getLoadContext() {
      return {
        authorizedDB() {
        return { gun };
      }
    };
  };
  function remixEarlyHints(build: any) {
    function getRel(resource: string) {
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
  return (req: Request, res: Response, next: () => void) => {
    const matches = matchServerRoutes(routes, req.path);

    let resources =
    matches &&
      matches.flatMap((match) => [
        build.assets.routes[match.route.id].module,
        ...(build.assets.routes[match.route.id].imports || []),
      ]);

    if (resources && resources.length > 0) {
      res.socket?.write("HTTP/1.1 103\r\n");
      for (const resource of resources) {
        res.socket?.write(`Link: <${resource}>; rel=${getRel(resource)}\r\n`);
      }
      res.socket?.write("\r\n");
    }

    if (next) next();
  };
  
}




let gunServer = createServer(app)
// Gun Database Server
const gun = Gun({
  web: gunServer.listen(PROXY_PORT + 1, ()=> { console.log("Relay Server on port " + parseInt(PROXY_PORT +1))}), radisk: true, file: '/home/app/datastore_gundb'
})

gun.get("database").on(function ({data}){
console.log("TEST DAT",data)
})


const proxy = hp.createProxyServer({ target: `http://0.0.0.0:${displayport()}`, ws: true });
const app2 = express();
const server = createServer(app2)

// Proxy websockets
server.on('upgrade', function (req, socket, head) {
  console.log("proxying upgrade request", `0.0.0.0:${PROXY_PORT}` + req.url);
  proxy.ws(req, socket, head);
});

// serve static content
app2.use('/', express.static(__dirname+"/views"));
// app2.use('/disconnect', express.static("/home/app/assets/public/disconnect.html"));
server.listen(PROXY_PORT);
// let serve = createServer(function(request, response){
//   fs.readFile(resolve(join(__dirname, `views/${request.url??'index.html'}`)),
//     (err: Error | null, data: any) => {
//       if (err) {
//         response.writeHead(500);
//         return response.end('Error loading index.html');
//       }

//       response.writeHead(200);
//       response.end(data);
//     })

// }).on('upgrade', function (req, socket, head) {
//   console.log("proxying upgrade request", `0.0.0.0:${PROXY_PORT}` + req.url);
//   proxy.ws(req, socket, head);
// })

// serve.listen(PROXY_PORT, () => {
//   console.log(`Broadway proxy server listening on port ${PROXY_PORT}`);
// });

function displayport() {
  return parseInt(BROADWAY_DISPLAY.replace(':', '')) + 8080
}
