import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../lib/gjsx.js";
const Template = /* @__PURE__ */ Gjsx.createWidget("xml", null, /* @__PURE__ */ Gjsx.createWidget("interface", null, /* @__PURE__ */ Gjsx.createWidget("template", {
  class: "MyWidget"
}, /* @__PURE__ */ Gjsx.createWidget("property", {
  name: "layout-manager"
}, /* @__PURE__ */ Gjsx.createWidget("object", {
  class: "GtkBinLayout"
})), /* @__PURE__ */ Gjsx.createWidget("child", null, /* @__PURE__ */ Gjsx.createWidget("object", {
  class: "GtkLabel"
}, /* @__PURE__ */ Gjsx.createWidget("property", {
  name: "label"
}, "Hello World"))))));
const WelcomeWidget = function() {
  return GObject.registerClass(
    {
      Template
    },
    class extends Gtk.Widget {
    }
  );
};
export function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Box, {
    spacing: 18,
    valign: Gtk.Align.CENTER,
    orientation: Gtk.Orientation.VERTICAL
  }, /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
    label: "Text label as widget tag",
    wrap: true
  }), /* @__PURE__ */ Gjsx.createWidget(WelcomeWidget, null), "Text label as string. Placed right in the jsx markup.", /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    label: "Pushing My Buttons",
    onClicked: (button) => {
      print("Event fired!!");
      button.label = "Pushed Real Guuud";
    },
    halign: Gtk.Align.CENTER
  }));
}
