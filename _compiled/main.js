import  Gjsx from "./lib/gjsx.js";  
import  Gtk from "gi://Gtk?version=4.0";  
Gtk.init(null);
let argv = ARGV;
let gtkSettings = Gtk.Settings.get_default();
gtkSettings.gtk_application_prefer_dark_theme = true;
gtkSettings.gtk_theme_name = "PRO-dark-XFCE-edition II";
if (argv.some((info) => info === "--dark")) {
  let gtkSettings2 = Gtk.Settings.get_default();
  gtkSettings2.gtk_application_prefer_dark_theme = true;
  gtkSettings2.gtk_theme_name = "PRO-dark-XFCE-edition II";
} else if (argv.some((info) => info === "--light")) {
  let gtkSettings2 = Gtk.Settings.get_default();
  gtkSettings2.gtk_application_prefer_dark_theme = false;
  gtkSettings2.gtk_theme_name = "Adwaita";
}
const MainWindow = function({ app: app2 }) {
  const names = ["Hello", "Hyperscript", "Gtk"];
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.ApplicationWindow, {
    title: "Hello World",
    application: app2
  }, /* @__PURE__ */ Gjsx.createWidget(Layout, {
    names
  }));
};
function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.VBox, null, names, /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    orientation: Gtk.Orientation.HORIZONTAL,
    label: "Now with events!",
    onClicked: () => print("hello world")
  }));
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(/* @__PURE__ */ Gjsx.createWidget(MainWindow, {
  app
})));
app.run([]);
