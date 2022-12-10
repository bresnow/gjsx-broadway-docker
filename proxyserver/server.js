const path = require("path");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

const BUILD_DIR = path.join(process.cwd(), "build");

const app = express();
import hp from "http-proxy";
import { createServer } from 'http';
import process from 'process';
import { fs } from 'zx'
import Gun from 'gun';


const proxyport = process.env.PORT || 8086;
const proxy = hp.createProxyServer({ target: `http://localhost:${displayport()}`, ws: true });
const server = createServer(app)

// Proxy websockets
server.on('upgrade', function (req, socket, head) {
  console.log("proxying upgrade request", `0.0.0.0:${proxyport}` + req.url);
  proxy.ws(req, socket, head);
});

// serve static content
// app.use('/', express.static("/home/app/assets/public"));
// app.use('/out', express.static("/home/app/assets/public/checkout.html"));
server.listen(proxyport);
function displayport() {
  return Number(process.env.BROADWAY_DISPLAY.replace(':', '')) + 8080
}
app.use(compression());
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);
app.use(express.static("public", { maxAge: "1h" }));
app.use(morgan("tiny"));

app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? (req, res, next) => {
        purgeRequireCache();

        return createRequestHandler({
          build: require(BUILD_DIR),
          getLoadContext,
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
    : createRequestHandler({
        build: require(BUILD_DIR),
        getLoadContext,
        mode: process.env.NODE_ENV,
      })
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});



let gunserver = createServer(app);
// Gun Database Server
const gun = Gun({
  web: gunserver.listen(8087), radisk: true, file: 'datastore_gundb'
})  //weird test event listeners laying down the law
let proxnode = gun.get('gjsx/broadway/proxy').get('new_file')
proxnode.on(({ command, name, result, error }) => {
  fs.writeFileSync(name, JSON.stringify(result, null, 2));
  gun.get('add_data').put({ data: result, command })
})
(async () => {
  await import("chainlocker"); // this is a module I built that keeps the keypair in the vault context to encrypt and compress data to utf16 characters. Object values are almost 50% smaller
  gun.keys(SECRET_KEY_ARRAY, (masterKeys) => {
    gun.vault("REMIX_GUN", masterKeys);
    let locker = gun.locker(["ENCRYPTED_APP_CONTEXT"]);
    locker.put(data);
  });
})();
function getLoadContext() {
  return async function () {
    return {
      authorizedDB() {
        return { gun };
      },
      SECRET_KEY: process.env.SECRET_KEY
    };
  };
}

function purgeRequireCache() {
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}
