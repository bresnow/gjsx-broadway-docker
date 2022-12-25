import Gjsx from "gi://Gjsx";
import Soup from "gi://Soup?version=3.0";
import GObject from 'gi://GObject';
import broadwayScript from "../assets/views/js/broadway.mjs" assert {type: 'string'}
//@ts-expect-error
import indexHtml from "../assets/views/index.html" assert {type: 'string'}
Gjsx.installGlobals()
const { encode, launch } = Gjsx

const BroadwayProxy = GObject.registerClass({
    GTypeName: "BroadwayProxyServer",
    Properties: {
        Port: GObject.ParamSpec.int("port", "display-port", "Broadway Display Port", GObject.ParamFlags.READWRITE, 8081, 50000, 8085),
    }
}, class extends Soup.Server {
    port: number
    constructor(config: Soup.Server_ConstructProps & { port?: number }) {
        super(config);
        this.port = config.port ?? get_display_port()
    }
    get displayPort(): number {
        return this.port;
    }
    nextPort() {
        this.port = this.port++
    }
    broadwayLaunch() {
        let _init = launch(["nohup", "gtk4-broadwayd", `--port=${this.port}`])
        if (_init.get_exit_status() !== 0) {
            this.nextPort();
            this.broadwayLaunch()
        }
    }
    use(path: string, callback: Soup.ServerCallback) {
        this.add_handler(path, callback)
    }
    serve( callback?: () => void) {

    }
})
export function runServer() {
    // launch(["nohup", "gtk4-broadwayd", `--port=${get_display_port() + 1}`],{env:[{EXAMPLE:""}],error_logpath: '/gjsx/docker/log/'})
    let server = new Soup.Server();
    server.add_handler('/broadway.js', (_server, msg, _path, _query) => {
        msg.set_status(200, null);
        msg.get_response_headers().set_content_type('text/javascript', { charset: 'UTF-8' });
        msg.get_response_body().append(broadwayScript);
    });
    server.add_handler('/hello', function (_server, msg, path, query: { name?: string }) {
        msg.set_status(200, null);
        msg.get_response_headers().set_content_type('text/html', { charset: 'UTF-8' });
        msg.get_response_body().append(indexHtml);
    });
    server.listen_local(1060, Soup.ServerListenOptions.IPV4_ONLY);
    server.connect("request-started", (_server) => {

        log("Server Request Started")
        _server.get_uris().forEach(uri => {
            print('URI ON REQUEST\n' + uri);
        })
    })


}


// Mainloop
function get_display_port() {
    return parseInt(env.BROADWAY_DISPLAY.replace(':', '')) + 8080
}
