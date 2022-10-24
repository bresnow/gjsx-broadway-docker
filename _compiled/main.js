import  Gtk from "gi://Gtk?version=4.0";  
import  GObject from "gi://GObject";  
import  Gio from "gi://Gio";  
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
const file = Gio.File.new_for_path("gtk4-template.ui");
const [, template] = file.load_contents(null);
const ExampleWindow = GObject.registerClass(
  {
    GTypeName: "ExampleWindow",
    Template: template,
    Children: ["box"],
    InternalChildren: ["button"]
  },
  class ExampleWindow2 extends Gtk.Window {
    constructor(params = {}) {
      super(params);
      this.box.visible = true;
      this._button.visible = true;
    }
    _onButtonClicked(button) {
      if (this instanceof Gtk.Window)
        log("Callback scope is bound to `ExampleWindow`");
      button.label = "Button was clicked!";
    }
  }
);
const MainWindow = function({ app: app2 }) {
  const names = ["Hello", "Hyperscript", "Gtk"];
  return /* @__PURE__ */ Gjsx.createWidget(ExampleWindow, {
    title: "Hello World",
    application: app2
  }, /* @__PURE__ */ Gjsx.createWidget(Layout, {
    names
  }));
};
function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Box, {
    spacing: 18,
    valign: Gtk.Align.CENTER,
    orientation: Gtk.Orientation.VERTICAL
  }, /* @__PURE__ */ Gjsx.createWidget(Gtk.Overlay, null, /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null)), /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
    label: "Text label as widget tag",
    wrap: true
  }), names.map((name) => /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: name
  })), "Text label as string.\n Placed right in the jsx markup.", /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: "Pushing My Buttons",
    onClicked: () => {
      log("Event fired!!");
    },
    halign: Gtk.Align.CENTER
  }));
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(/* @__PURE__ */ Gjsx.createWidget(MainWindow, {
  app
})));
app.run([]);
