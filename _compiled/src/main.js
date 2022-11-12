import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gjsx from "../lib/gjsx/index.js";
import { theme } from "../lib/util.js";
import Util from "../lib/gjsx/utils/index.js";
import { MainWindow } from "./mainwindow.js";
Gtk.init();
const css = Util().CssProvider();
const spawn = Util().Spawn();
let argv = ARGV;
theme(argv);
spawn.exec(`ls -a`);
export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();
app.connect("activate", () => {
  css.load("assets/styles.css").display;
  Gjsx.render(
    /* @__PURE__ */ Gjsx.createWidget(MainWindow, {
      app,
    })
  );
});
app.run([]);
