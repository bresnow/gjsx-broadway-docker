import  Gtk from "gi://Gtk?version=4.0";  
import Gjsx from "./lib/gjsx.js";
Gtk.init();
let argv = ARGV;
let gtkSettings = Gtk.Settings.get_default();
if (argv.some((info) => info === "--dark")) {
  let gtkSettings2 = Gtk.Settings.get_default();
  gtkSettings2.gtk_application_prefer_dark_theme = true;
  gtkSettings2.gtk_theme_name = "PRO-dark-XFCE-edition II";
} else {
  let gtkSettings2 = Gtk.Settings.get_default();
  gtkSettings2.gtk_application_prefer_dark_theme = false;
  gtkSettings2.gtk_theme_name = "Adwaita";
}
const MainWindow = function({ app: app2 }) {
  const names = ["Hello", "Hyperscript", "Gtk"];
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Window, {
    title: "Hello World",
    application: app2
  }, /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: "Now with events!",
    onClicked: () => print("hello world")
  }));
};
function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.VBox, null, /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: "Now with events!",
    onClicked: () => print("hello world")
  }));
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(/* @__PURE__ */ Gjsx.createWidget(MainWindow, {
  app
})));
app.run([]);
