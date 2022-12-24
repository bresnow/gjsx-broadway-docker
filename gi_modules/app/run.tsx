import Gjsx from "gi://Gjsx";
import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import { MainWindow } from "./mainwindow.js";
Gtk.init();
 

let description = "";
// Global stylesheet
const display = Gdk.Display.get_default()
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
