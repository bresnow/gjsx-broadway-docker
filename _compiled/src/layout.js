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
      file: __dirname + "/assets/cnxt.png",
      pixel_size: 100,
    })
  );
}
