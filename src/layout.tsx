import Gtk from "gi://Gtk?version=4.0";
import { getFileInfo, writeTextFileSync } from "../packages/gjsx/util";
import Gjsx from "gjsx";
import { __dirname } from "./main.js";
import Webkit from "gi://WebKit2?version=5.0";
import Util from "gjsx/utils";
import Gio from "gi://Gio";

const horizontal = Gtk.Orientation.HORIZONTAL;

export function HeadLayout({
  services,
}: {
  services: {
    name: string;
    executable: string | string[];
    icon_path?: string;
    icon_name?: string;
  }[];
}) {
  let webview = new Webkit.WebView();
  let logo = __dirname + "/assets/images/cnxt.png";

  return (
    <Gtk.Box spacing={18} orientation={horizontal}>
      <Gtk.Image file={logo} style={{ marginLeft: "5px" }} pixel_size={100} />

      {services.map(
        ({ name, executable: execCmd, icon_path, icon_name }, i) => {
          function clickHandler(self: Gtk.Button) {
              log("Executing")
          }
          return (
            <Gtk.Button
              onClicked={clickHandler}
              halign={Gtk.Align.CENTER}
              label={name}
              css_name="buttonbottom"
            >
              <Gtk.Image file={__dirname + "/" + icon_path} pixel_size={50} />
            </Gtk.Button>
          );
        }
      )}
    </Gtk.Box>
  );
}
