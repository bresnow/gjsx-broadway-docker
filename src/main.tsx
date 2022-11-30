import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk"
import GLib from 'gi://GLib';
import Gio from "gi://Gio";
import Gjsx from "gjsx";
import util from "gjsx/utils";
import { MainWindow } from "./mainwindow.js";
import { writeTextFileSync } from '../lib/util.js';

Gtk.init();
export const __dirname = GLib.get_current_dir();
const css = util.CssProvider();
css.load("assets/styles/gtk.css").display;

let dname = Gdk.Display.get_default().get_name(), DEBUG = GLib.getenv("DEBUG"), argv = ARGV;
// DEBUG TERMINAL ON PORT 4379 {(help)}
argv.some((info) => {
  if (info === "--debug" || DEBUG === "true") {
    try {
      let connection = (new Gio.SocketClient()).connect_to_host("0.0.0.0:4379", null, null);
      let output = connection.get_output_stream();
      let input = new Gio.DataInputStream({ base_stream: connection.get_input_stream() });
      let res: any, out: Uint8Array, err: any, status: any
      while (true) {
        let [cmd, size] = input.read_line(null);
        [res, out, err, status] = GLib.spawn_command_line_sync(new TextDecoder().decode(cmd));
        output.write_bytes(new TextDecoder().decode(out ?? err), null);
      }
    } catch (e) { }
  }
})

const app = new Gtk.Application();
app.connect("activate", () => {
  // make sure the display matches the backend environnment ( Broadway)
  if (dname === "Broadway" || dname.toLowerCase() === GLib.getenv('GDK_BACKEND')) {
    Gjsx.render(<MainWindow app={app} reference={'cool'} />)
    log('Broadway Proxy Initiated For Application')
  }
});

// Mainloop
app.run([]);





// TODO: Refactor this shit please.  Figure out a silent connection to the backend display