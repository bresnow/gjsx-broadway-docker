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
      file: __dirname + "/assets/images/cnxt.png",
      pixel_size: 100,
    }),
    names.map((name, i) =>
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
        style: { backgroundColor: "red" },
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
