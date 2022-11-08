import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import { theme, getFileInfo } from "../lib/util.js";
import Gjsx from "gjsx";
// import ByteArray from "byteArray"
// The build script will automatically compile ui tags down to string.

let [route, file] = getFileInfo()
export function Layout({ names }: { names: string[] }) {

  return (
    <Gtk.Box
      spacing={18}
      orientation={Gtk.Orientation.HORIZONTAL}
    >
      <Gtk.Image iconName={'system-file-manager-symbolic'} iconSize={Gtk.IconSize.LARGE} />
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      {`<span><b>Bold string using markup syntax.</b></span>`}
      {"<span><small>Small string using markup syntax.</small></span>"}
      {names.map((name, i) => (
        <Gtk.Button
          onClicked={(button) => {
            if (button.label !== name) {
              button.label = name;
            } else {
              button.label = `Button ${i} was pressed`;
            }
          }}
          halign={Gtk.Align.CENTER}
          label={name}
        />
      ))}
    </Gtk.Box>
  );
}
