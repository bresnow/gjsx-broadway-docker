import express from 'express';
import hp from "http-proxy";
import { createServer } from 'http';
import process from 'process';
import Gun from 'gun';


const proxyport = process.env.PORT || 8086;
const app = express();
const proxy = hp.createProxyServer({ target: `http://localhost:${displayport()}`, ws: true });
const server = createServer(app)

// Proxy websockets
server.on('upgrade', function (req, socket, head) {
    console.log("proxying upgrade request", `0.0.0.0:${proxyport}` + req.url);
    proxy.ws(req, socket, head);
});

// serve static content
app.use('/', express.static("/home/app/assets/public"));
server.listen(proxyport);

// Database server listen 
let gunserver = createServer(app);
// Gun Database Server
Gun({
    web: gunserver.listen(8087), radisk: true, file: 'proxyserver/db'
})


function displayport() {
    return Number(process.env.BROADWAY_DISPLAY.replace(':', '')) + 8080
}
