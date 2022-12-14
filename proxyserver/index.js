import express, { Router } from 'express';
import hp from "http-proxy";
import { createServer } from 'http';
import process from 'process';
import { fs } from 'zx'
import Gun from 'gun';

const routes = new Router()
routes.get('/', function (req, res) {
    res.send(fs.readFileSync())

})
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
app.use('/disconnect', express.static("/home/app/assets/public/disconnect.html"));
server.listen(proxyport);

// Database server listen 
let gunserver = createServer(app);
// Gun Database Server
const gun = Gun({
    web: gunserver.listen(8087), radisk: true, file: 'datastore_gundb'
})

//weird test event listeners laying down the law
let proxnode = gun.get('gjsx/broadway/proxy').get('new_file')
proxnode.on(({ command, name, result, error }) => {
    fs.writeFileSync(name, JSON.stringify(result, null, 2));
    gun.get('add_data').put({ data: result, command })
})
function displayport() {
    return Number(process.env.BROADWAY_DISPLAY.replace(':', '')) + 8080
}
