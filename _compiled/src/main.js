import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Gjsx from "../lib/gjsx/index.js";
import { gtkSystemTheme } from "../lib/util.js";
import util from "../lib/gjsx/utils/index.js";
import { MainWindow } from "./mainwindow.js";
Gtk.init();
const css = util.CssProvider();
let dname = Gdk.Display.get_default().get_name();
dname === "Broadway" && log("Broadway Proxy Initiated For Application");
let argv = ARGV;
gtkSystemTheme(argv);
css.load("/assets/styles/gtk.css").display;
export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();
app.connect("activate", () => {
  Gjsx.render(
    /* @__PURE__ */ Gjsx.createWidget(MainWindow, {
      app,
    })
  );
});
app.run([]);
