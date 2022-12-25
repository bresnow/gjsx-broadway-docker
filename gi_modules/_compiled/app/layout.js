import Gjsx from "../gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
const paidlogo = imports.gi.Gio.File.new_for_uri(import.meta.url)
  .get_parent()
  .resolve_relative_path("../assets/images/paid_logo.png")
  .get_uri()
  .replace("file://", "");
const cnxtLogo = imports.gi.Gio.File.new_for_uri(import.meta.url)
  .get_parent()
  .resolve_relative_path("../assets/images/cnxt.png")
  .get_uri()
  .replace("file://", "");
const bdsLogo = imports.gi.Gio.File.new_for_uri(import.meta.url)
  .get_parent()
  .resolve_relative_path("../assets/images/bds-mark.png")
  .get_uri()
  .replace("file://", "");
const style = {
  box: {
    padding: "15px",
    background: "rgba(0, 0, 50, 0.8)",
    color: "#fff",
    borderRadius: "15px",
  },
};
export function HeadLayout({ services }) {
  return /* @__PURE__ */ Gjsx.createWidget(
    Gtk.Box,
    { spacing: 18, style: style.box, orientation: Gtk.Orientation.HORIZONTAL },
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      file: cnxtLogo,
      style: { marginLeft: "5px" },
      pixel_size: 100,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      file: paidlogo,
      style: { marginLeft: "5px" },
      pixel_size: 65,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      file: bdsLogo,
      style: { marginLeft: "5px" },
      pixel_size: 65,
    }),
    services.map(({ name, icon_path, icon_name }, i) => {
      function clickHandler(self) {
        log("Executing");
      }
      return /* @__PURE__ */ Gjsx.createWidget(
        Gtk.Button,
        {
          onClicked: clickHandler,
          halign: Gtk.Align.CENTER,
          label: name,
          css_name: "buttonbottom",
        },
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
          file: icon_path,
          pixel_size: 50,
        })
      );
    })
  );
}
