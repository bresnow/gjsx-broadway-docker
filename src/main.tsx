import Gtk from "gi://Gtk?version=4.0";
import GLib from 'gi://GLib';
import Gjsx from "gjsx";
import { gtkSystemTheme } from "../lib/util.js";
import Util from "gjsx/utils";
import { MainWindow } from "./mainwindow.js";

Gtk.init();
const css = Util.CssProvider();
const spawn = Util.execCmd;

let [done, stdout, stderr] = spawn(`ls -a`);
if (done) {
  print('EXEC CMD')
  print(new TextDecoder().decode(stdout))
} else {
  print('EXEC ERRR')
  print(new TextDecoder().decode(stderr))
}
let argv = ARGV;
gtkSystemTheme(argv);


export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();

app.connect("activate", () => {
  css.load("assets/styles.css").display
  Gjsx.render(<MainWindow app={app} />)
});

app.run([]);
