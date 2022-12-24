import Gjsx from "../gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
const style = {
  box: {
    padding: "15px",
    background: "rgba(0, 0, 50, 0.8);",
    color: "#fff",
    borderRadius: "15px",
  },
};
export function HeadLayout({ services }) {
  let logo = "/gjsx/gi_modules/assets/images/cnxt.png";
  let paidlogo = "/gjsx/gi_modules/assets/images/paid_logo.png";
  return /* @__PURE__ */ Gjsx.createWidget(
    Gtk.Box,
    { spacing: 18, style: style.box, orientation: Gtk.Orientation.HORIZONTAL },
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      file: logo,
      style: { marginLeft: "5px" },
      pixel_size: 100,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
      file: paidlogo,
      style: { marginLeft: "5px" },
      pixel_size: 100,
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
