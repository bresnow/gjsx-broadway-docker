import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk"
import GLib from 'gi://GLib';
import Gjsx from "gjsx";
import { gtkSystemTheme } from "../lib/util.js";
import util from "gjsx/utils";
import { MainWindow } from "./mainwindow.js";
import WebSocket from '../lib/websocket.js';

Gtk.init();
const css = util.CssProvider();
const spawn = util.execCmd;

let argv = ARGV;
gtkSystemTheme(argv);
css.load("assets/styles.css").display

export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();

// exec('echo "DONE"')
app.connect("activate", () => {
  Gjsx.render(<MainWindow app={app} />)
});
let websocket = new WebSocket('ws://localhost:8085/socket', 'broadway')
// log(websocket._connection.get_uri())
websocket.onerror = (err) => {
  logError(err)
}
app.run([]);

function exec(cmd = '') {
  let [done, stdout, stderr] = spawn(`${cmd}`);
  print('EXEC CMD')
  print(new TextDecoder().decode(stdout))
}