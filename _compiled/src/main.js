import Gtk from "gi://Gtk?version=4.0";
import Gio from "gi://Gio";
import Gjsx from "../lib/gjsx.js";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
Gtk.init();
let argv = ARGV;
theme(argv);
function currentFileInfo() {
  let stack = new Error().stack, stackLine = stack.split("\n")[1], coincidence, path, file;
  if (!stackLine)
    throw new Error("Could not find current file (1)");
  coincidence = new RegExp("@(.+):\\d+").exec(stackLine);
  if (!coincidence)
    throw new Error("Could not find current file (2)");
  path = coincidence[1];
  file = Gio.File.new_for_path(path);
  let route = file.get_parent().get_path().split(":")[1];
  let current = route + "/" + file.get_basename();
  return [route, current];
}
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
