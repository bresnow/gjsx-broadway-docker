import httpProxy from 'http-proxy'
import express from 'express'
import { createServer } from 'http'
import { Broadway, env } from './Broadway.js'

const opt = { ws: true }
var proxy = httpProxy.createProxyServer(opt)

const app = express()
const server = createServer(app)
var broadway_port = 8080 + Number(env.BROADWAY_DISPLAY.replace(':', ''));

app.use(express.static('./public'))
app.get('/', function(req, res){
    res.sendFile("./public/index.html")
})

proxy.on('open', async function (client) {
    console.log('CONNECTION received by proxy from client');
    var broadway = new Broadway();
    broadway.on('message', function (msg) {
        client.emit(msg);
    });

    client.on('message', function (msg) {
        broadway.send(msg);
    });

    broadway.connect();

})
server.on('request', function (req, response) {
    proxy.web(req, response, { target: `http://0.0.0.0:${broadway_port}` });
});

server.on('upgrade', function (req, socket, head) {
    // console.log(head, socket)
    
    proxy.ws(req, socket, head, { target: `http://0.0.0.0:${broadway_port}` });
});
server.on('error', ({ code }) => {
    if (code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(8086);
        }, 1000);
    }
});
server.listen(8086);