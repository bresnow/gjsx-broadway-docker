import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Gjsx from "../lib/gjsx/index.js";
import { gtkSystemTheme } from "../lib/util.js";
import util from "../lib/gjsx/utils/index.js";
import { MainWindow } from "./mainwindow.js";
import WebSocket from "../lib/websocket.js";
Gtk.init();
const css = util.CssProvider();
const spawn = util.execCmd;
let argv = ARGV;
gtkSystemTheme(argv);
css.load("assets/styles.css").display;
export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();
app.connect("activate", () => {
  Gjsx.render(
    /* @__PURE__ */ Gjsx.createWidget(MainWindow, {
      app,
    })
  );
  let dname = Gdk.Display.get_default().get_name();
  log(dname);
});
let websocket = new WebSocket("ws://localhost:8085/socket", "broadway");
log(websocket.protocol);
websocket.onmessage = (data) => {
  print(data);
};
websocket.onerror = (err) => {
  logError(err);
};
app.run([]);
function exec(cmd = "") {
  let [done, stdout, stderr] = spawn(`${cmd}`);
  print("EXEC CMD");
  print(new TextDecoder().decode(stdout));
}
