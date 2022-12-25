import Gjsx from "gi://Gjsx";
import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Soup from "gi://Soup?version=3.0"
import { runServer } from './run.js';
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
    dname.toLowerCase() === env["GDK_BACKEND"]
  ) {
    Gjsx.render(<MainWindow app={app} reference={description} />);
    log("Broadway Proxy Initiated For Application");
  } else {
    throw new Error(`The ${dname} display backend is not supported`);
  }
});

runServer()

// Mainloop
app.run([]);
