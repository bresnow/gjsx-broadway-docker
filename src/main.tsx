import Gtk from "gi://Gtk?version=4.0";
import GLib from 'gi://GLib';
import Gjsx from "gjsx";
import { theme } from "../lib/util.js";
import Util from "gjsx/utils";
import { MainWindow } from "./mainwindow.js";

Gtk.init();
const css = Util().CssProvider();
const spawn = Util().Spawn();
let argv = ARGV;
theme(argv);

// Spawn
spawn.exec(`ls -a`);
export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();

app.connect("activate", () => {
  css.load("assets/styles.css").display
  Gjsx.render(<MainWindow app={app} />)
});

//@ts-ignore
app.run([]);
