import Soup from 'gi://Soup?version=3.0';
import GLib from 'gi://GLib';
import EventEmitter from 'gi:Gjsx';

function restartApp(_server:Soup.Server, msg, _path, _query) {
    msg.set_status(200, null);
    msg.get_response_headers().set_content_type('text/html', { charset: 'UTF-8' });
    msg.get_response_body().append(`
        <html>
        <body>
            Greetings, visitor from ${msg.get_remote_host()}<br>
            What is your name?
            <form action="/hello">
                <input name="myname">
            </form>
        </body>
        </html>
    `);
}

function helloHandler(_server, msg, path, query) {
    if (!query) {
        msg.set_redirect(302, '/');
        return;
    }

    msg.set_status(200, null);
    msg.get_response_headers().set_content_type('text/html', { charset: 'UTF-8' });
    msg.get_response_body().append(`
        <html>
        <body>
            Hello, ${query.myname}! ☺<br>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
}

// class Server extends EventEmitter {
//     server: Soup.Server;
//     constructor() {
//         super();
//         this.server = new Soup.Server();
//     }
//     handle(path: string, handler: (req, res) => void) {
//         this.server.add_handler(path, function (_self, msg, path, query));
//     }
//     listen(port: number, callback: ()=> void) {
//         this.server.listen_local(port, Soup.ServerListenOptions.IPV4_ONLY);}
// }

export function createServer() {
    let server = new Soup.Server();
    server.add_handler('/', restartApp);
    server.add_handler('/hello', helloHandler);
    server.listen_local(1080, Soup.ServerListenOptions.IPV4_ONLY);
}

