import Gtk from "gi://Gtk?version=4.0";
import Gjsx from "../lib/gjsx.js";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
Gtk.init();
let argv = ARGV;
theme(argv);
const MainWindow = function({ app: app2 }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0",
    "Simplest React For Gjs Library"
  ];
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.ApplicationWindow, {
    title: "",
    application: app2
  }, /* @__PURE__ */ Gjsx.createWidget(Layout, {
    names
  }));
};
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(/* @__PURE__ */ Gjsx.createWidget(MainWindow, {
  app
})));
app.run([]);
