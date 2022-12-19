import Gjsx from "gi://Gjsx";
import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import { MainWindow } from "./mainwindow.js";
import styles from "../assets/styles/gtk.css" assert {type: "css"};

let description = `CNXT is built using the FLTNGMMTH mobile operating system.`;


Gtk.init();
// gtkSystemTheme()
// Global stylesheet
const display = Gdk.Display.get_default()
Gtk.StyleContext.add_provider_for_display(display,
  styles,
  Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)

let dname = display.get_name(),
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
