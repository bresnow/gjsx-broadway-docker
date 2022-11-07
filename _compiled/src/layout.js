import Gtk from "gi://Gtk?version=4.0";
import { getFileInfo } from "../lib/util.js";
import Gjsx from "../lib/gjsx/index.js";
let [route, file] = getFileInfo();
export function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(
    Gtk.Box,
    {
      spacing: 18,
      orientation: Gtk.Orientation.VERTICAL,
    },
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      iconName: "system-file-manager-symbolic",
      iconSize: Gtk.IconSize.LARGE,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
      label: "Text label as widget tag",
      wrap: true,
    }),
    "**String Widget",
    "<span><b>String Widget Types</b></span>",
    "<span><small>String Widget Types</small></span>",
    names.map((name, i) =>
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
        onClicked: (button) => {
          if (button.label !== name) {
            button.label = name;
          } else {
            button.label = `Button ${i} was pressed`;
          }
        },
        halign: Gtk.Align.CENTER,
        label: name,
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
      label: "Pushing My Buttons",
      onClicked: (button) => {
        print("Event fired!!");
        button.label = "Pushed Real Guuud";
      },
      halign: Gtk.Align.CENTER,
    })
  );
}
