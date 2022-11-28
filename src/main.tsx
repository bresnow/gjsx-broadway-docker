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
css.load("assets/styles/output.css").display

export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();

// exec('echo "DONE"')
app.connect("activate", () => {
  Gjsx.render(<MainWindow app={app} />)

  let dname = Gdk.Display.get_default().get_name()
dname === 'Broadway' && log('Broadway Proxy Initiated For Application')
});
app.run([]);

