import path from "path";
import express from "express";
import compression from "compression";
import {createRequire} from "module"
import { createServer } from 'http';
import morgan from "morgan";
import Gun from "gun"
import hp from "http-proxy"
import fs from "fs-extra";
import remixConfig from "../remix.config"
import { createRequestHandler } from "@remix-run/express";


const require = createRequire(import.meta.url)
const BUILD_DIR = remixConfig.serverBuildPath ?? path.join(process.cwd(), "build");

const PROXY_PORT = Number(process.env.PORT) ?? displayport() + 1;
const BROADWAY_DISPLAY = process.env.BROADWAY_DISPLAY ?? ":5"
const NODE_ENV = process.env.NODE_ENV || "development";



const app = express();


app.use(compression());
app.use(morgan("tiny"));
app.disable("x-powered-by");



const proxy = hp.createProxyServer({ target: `http://localhost:${displayport()}`, ws: true });
const server = createServer(app)
server.on('upgrade', function (req, socket, head) {
  console.log("proxying upgrade request", `0.0.0.0:${PROXY_PORT}` + req.url);
  proxy.ws(req, socket, head);
});


app.all(
  "*",
NODE_ENV === "development"
    ? (req, res, next) => {
        purgeRequireCache();
        createRequestHandler({
          build: require(BUILD_DIR),
          mode: NODE_ENV,
        })(req, res, next);
      }
    : createRequestHandler({
        build: require(BUILD_DIR),
        mode: NODE_ENV,
      })
);


server.listen(PROXY_PORT, () => {
  console.log(`Express server listening on port ${PROXY_PORT}`);
});

const purgeRequireCache = () => {
  for (let key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
};
function displayport() {
  return Number(BROADWAY_DISPLAY.replace(':', '')) + 8080
}
// Gun Database Server
const gun = Gun({
  web: createServer(app).listen(PROXY_PORT + 1), radisk: true, file: 'datastore_gundb'
})