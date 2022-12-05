import Gjsx from "../lib/gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import GObject from "gi://GObject";
import { Demo } from "./widgets/demo.js";
function widgetArray(arr) {
  return arr.map((Widget) => {
    return new Widget();
  });
}
const BgOverlay = GObject.registerClass(
  { GTypeName: "BgOverlay" },
  class BgOverlay2 extends Gtk.Box {
    _init() {
      super._init();
      let picture = new Gtk.Picture({ file: "assets/images/mrs_arnold.jpeg" }),
        overlay,
        grid = new Gtk.Grid();
      grid.attach(picture, 0, 0, 1, 1);
      this.append(grid);
    }
  }
);
export function MainWindow({ app, reference }) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/fltngmmth/Black_fullStack.png",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/logo.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/logo.svg",
      executable: "gnome-calendar",
    },
  ];
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    {
      application: app,
    },
    /* @__PURE__ */ Gjsx.createWidget(
      BoxContainer,
      {
        css_name: "box",
      },
      /* @__PURE__ */ Gjsx.createWidget(HeadLayout, {
        services: panel,
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
        orientation: Gtk.Orientation.HORIZONTAL,
      }),
      /* @__PURE__ */ Gjsx.createWidget(
        Gtk.ScrolledWindow,
        {
          has_frame: true,
          overlay_scrolling: true,
        },
        /* @__PURE__ */ Gjsx.createWidget(
          Gtk.Box,
          {
            orientation: Gtk.Orientation.HORIZONTAL,
            spacing: 10,
          },
          /* @__PURE__ */ Gjsx.createWidget(Demo, null),
          /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, {
            file: "assets/images/mrs_arnold.jpeg",
          })
        )
      )
    )
  );
}
function PeerEntry() {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, {
    label: "Peer Cnxt",
  });
}
