import Gtk from "gi://Gtk?version=4.0";
import Gio from "gi://Gio"
import Gjsx from "gjsx";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
Gtk.init();
let argv = ARGV;

theme(argv);


const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0",
    "Simplest React For Gjs Library",
  ];
  return (
    <Gtk.ApplicationWindow title={""} application={app}>
      <Layout names={names} />
    </Gtk.ApplicationWindow>
  );
};

const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
//@ts-ignore
app.run([]);
