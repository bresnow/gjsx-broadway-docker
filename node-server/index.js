import express from 'express';
import hp from "http-proxy";
import { createServer } from 'http';

const app = express();
const proxy = hp.createProxyServer({ target: 'http://localhost:8085', ws: true });
const server = createServer(app)
// Proxy websockets
server.on('upgrade', function (req, socket, head) {
    console.log("proxying upgrade request", req.url);
    proxy.ws(req, socket, head);
});

// serve static content
app.use('/', express.static("/home/app/node-server/public"));
server.listen(8086);
// class BroadWaySocket extends EventEmitter {
//     connect() {
//         let that = this;
//         setTimeout(() => {
//             var self = that
//             console.log('Connected to the WS')
//             self.websocket = new WebSocket(`ws://127.0.0.1:8085/socket`, 'broadway');
//             self.websocket.onmessage = function (event) {
//                 self.emit('message', event)
//             }
//         }, 1000);
//     }

//     send(msg) {
//         np
//         if (this.websocket) {
//             this.websocket.send(msg)
//         }
//     }
// };