import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Gjsx from "../gi_modules/gjsx/index";
import {CssProvider} from "../gi_modules/gjsx/utils/index";
import { MainWindow } from "./mainwindow.js";

let description = `CNXT is built using the FLTNGMMTH mobile operating system.`;
export const __dirname = GLib.get_current_dir();

Gtk.init();
const css = CssProvider();
// gtkSystemTheme()
// Global stylesheet
css.load("assets/styles/gtk.css").display(true);

let dname = Gdk.Display.get_default().get_name(),
  DEBUG = GLib.getenv("DEBUG"),
  argv = ARGV;

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

// Mainloop
app.run([]);
