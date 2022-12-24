import Gjsx from "gi://Gjsx";
import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Soup from "gi://Soup?version=3.0";
import { MainWindow } from "./mainwindow.js";
Gjsx.installGlobals()
const { encode } = Gjsx
let description = `CNXT is built using the FLTNGMMTH mobile operating system.`
// Global stylesheet
const display = Gdk.Display.get_default()
let dname = display.get_name();
 var DEBUG = env.DEBUG,
  argv = ARGV;
log(DEBUG)
const app = new Gtk.Application();
app.connect("activate", () => {
  // make sure the display matches the backend environnment ( Broadway)
  if (
    dname === "Broadway" ||
    dname.toLowerCase() === GLib.getenv("GDK_BACKEND")
  ) {
    Gjsx.render(<MainWindow app={app} reference={description} />);
    log("Broadway Proxy Initiated For Application");
  } else {
    throw new Error(`The ${dname} display backend is not supported`);
  }
});

let server = new Soup.Server();
server.add_handler('/', (_server, msg, _path, _query) => {
  msg.set_status(200, null);
  msg.get_response_headers().set_content_type('text/html', { charset: 'UTF-8' });
  msg.get_response_body().append(`
        <html>
        <body>
          Welcome Home... This is the server running on GJSX ☺<br>
        </body>
        </html>
    `);
});
server.add_handler('/hello', function (_server, msg, path, query: { name?: string }) {
  // if (!query) {
  //   msg.set_redirect(302, '/');
  //   return;
  // }

  msg.set_status(200, null);
  msg.get_response_headers().set_content_type('text/html', { charset: 'UTF-8' });
  msg.get_response_body().append(encode(`
        <html>
        <body>
            Hello, ${query?.name ?? "Stranger"}! ☺<br>
            <a href="/">Go back</a>
        </body>
        </html>
    `));
});
server.listen_local(1080, Soup.ServerListenOptions.IPV4_ONLY);
server.connect("request-started", (_server) => {

  log("Server Request Started")
  _server.get_uris().forEach(uri => {
    print('URI ON REQUEST\n'+uri);
  })
})



// Mainloop
app.run([]);
