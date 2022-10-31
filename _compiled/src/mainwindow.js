import Gtk from "gi://Gtk?version=4.0";
import Gjsx from "../lib/gjsx.js";
import { Layout } from "./layout.js";
export const MainWindow = function({ app }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0",
    "Simplest React For Gjs Library"
  ];
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.ApplicationWindow, {
    title: "",
    application: app
  }, /* @__PURE__ */ Gjsx.createWidget(Layout, {
    names
  }));
};
