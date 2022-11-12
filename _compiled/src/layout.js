import Gtk from "gi://Gtk?version=4.0";
import { getFileInfo } from "../lib/util.js";
import Gjsx from "../lib/gjsx/index.js";
import { __dirname } from "./main.js";
let [route, file] = getFileInfo();
export function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(
    Gtk.Box,
    {
      spacing: 18,
      orientation: Gtk.Orientation.HORIZONTAL,
    },
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      file: __dirname + "/assets/mrs_arnold.jpeg",
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
      label: "Text label as widget tag",
      wrap: true,
    }),
    `<span><b>Bold string using markup syntax.</b></span>`,
    "<span><small>Small string using markup syntax.</small></span>",
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
    )
  );
}
