import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../lib/gjsx.js";
const Template = `<?xml version="1.0" encoding="UTF-8" ?>
<interface>
  <template class="MyWidget">
            <property name="layout-manager">
              <object class="GtkBinLayout" />
            </property>
            <child>
              <object class="GtkLabel">
                <property name="label">Hello World</property>
              </object>
            </child>
          </template>
</interface>`;
const WelcomeWidget = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template
  },
  class extends Gtk.Widget {
  }
);
export function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Box, {
    spacing: 18,
    valign: Gtk.Align.CENTER,
    orientation: Gtk.Orientation.VERTICAL
  }, /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
    label: "Text label as widget tag",
    wrap: true
  }), /* @__PURE__ */ Gjsx.createWidget(WelcomeWidget, null), names.map((name, i) => /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
    onClicked: (button) => {
      if (button.label !== name) {
        button.label = name;
      } else {
        button.label = `Button ${i} was pressed`;
      }
    },
    halign: Gtk.Align.CENTER,
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
