import  Gtk from "gi://Gtk?version=4.0"; 
import  Gio from "gi://Gio"; 
import  GObject from "gi://GObject"; 
import Gjsx from "./lib/gjsx.js";
const file = Gio.File.new_for_path("gtk4-template.ui");
const [isLoaded, template] = file.load_contents(null);
const WelcomeWidget = GObject.registerClass(
  {
    GTypeName: "FbrWelcomeWidget",
    Template: template
  },
  class extends Gtk.Widget {
  }
);
export function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Box, {
    spacing: 18,
    valign: Gtk.Align.CENTER,
    orientation: Gtk.Orientation.VERTICAL
  }, /* @__PURE__ */ Gjsx.createWidget(WelcomeWidget, null), /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
    label: "Text label as widget tag",
    wrap: true
  }), names.map((name) => /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: name
  })), "Text label as string. Placed right in the jsx markup.", /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: "Pushing My Buttons",
    onClicked: (button) => {
      print("Event fired!!");
      button.label = "Pushed Real Guuud";
    },
    halign: Gtk.Align.CENTER
  }));
}
