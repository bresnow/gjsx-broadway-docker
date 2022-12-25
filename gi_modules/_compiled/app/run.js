import Gjsx from "../gjsx/index.js";
import Soup from "gi://Soup?version=3.0";
import GObject from "gi://GObject";
const broadwayScript = new TextDecoder().decode(
  imports.gi.Gio.File.new_for_uri(import.meta.url)
    .get_parent()
    .resolve_relative_path("../assets/views/js/broadway.mjs")
    .load_contents(null)[1]
);
const indexHtml = new TextDecoder().decode(
  imports.gi.Gio.File.new_for_uri(import.meta.url)
    .get_parent()
    .resolve_relative_path("../assets/views/index.html")
    .load_contents(null)[1]
);
Gjsx.installGlobals();
const { encode, launch } = Gjsx;
const BroadwayProxy = GObject.registerClass(
  {
    GTypeName: "BroadwayProxyServer",
    Properties: {
      Port: GObject.ParamSpec.int(
        "port",
        "display-port",
        "Broadway Display Port",
        GObject.ParamFlags.READWRITE,
        8081,
        5e4,
        8085
      ),
    },
  },
  class extends Soup.Server {
    port;
    constructor(config) {
      super(config);
      this.port = config.port ?? get_display_port();
    }
    get displayPort() {
      return this.port;
    }
    nextPort() {
      this.port = this.port++;
    }
    broadwayLaunch() {
      let _init = launch(["nohup", "gtk4-broadwayd", `--port=${this.port}`]);
      if (_init.get_exit_status() !== 0) {
        this.nextPort();
        this.broadwayLaunch();
      }
    }
    use(path, callback) {
      this.add_handler(path, callback);
    }
    serve(callback) {}
  }
);
export function runServer() {
  let server = new Soup.Server();
  server.add_handler("/broadway.js", (_server, msg, _path, _query) => {
    msg.set_status(200, null);
    msg
      .get_response_headers()
      .set_content_type("text/javascript", { charset: "UTF-8" });
    msg.get_response_body().append(broadwayScript);
  });
  server.add_handler("/hello", function (_server, msg, path, query) {
    msg.set_status(200, null);
    msg
      .get_response_headers()
      .set_content_type("text/html", { charset: "UTF-8" });
    msg.get_response_body().append(indexHtml);
  });
  server.listen_local(1060, Soup.ServerListenOptions.IPV4_ONLY);
  server.connect("request-started", (_server) => {
    log("Server Request Started");
    _server.get_uris().forEach((uri) => {
      print("URI ON REQUEST\n" + uri);
    });
  });
}
function get_display_port() {
  return parseInt(env.BROADWAY_DISPLAY.replace(":", "")) + 8080;
}
