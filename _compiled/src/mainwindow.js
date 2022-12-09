import Gjsx from "../lib/gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import GObject from "gi://GObject";
import { Demo } from "./widgets/demo.js";
import { StackSwitch } from "./widgets/stackswitch.js";
import { WebMessage } from "./widgets/webmsg_grid.js";
const { BaselinePosition } = Gtk;
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
      this.set_baseline_position(BaselinePosition.CENTER);
      let picture = new Gtk.Picture({
          file: "assets/images/5g2-18.jpg",
          width_request: this.get_allocated_width(),
          height_request: this.get_allocated_height(),
          hexpand_set: true,
        }),
        overlay = Gtk.Overlay.new(),
        grid = Gtk.Grid.new();
      overlay.child = picture;
      grid.attach(overlay, 0, 0, 1, 1);
      overlay.add_overlay(new Gtk.Dialog());
      this.append(overlay);
    }
  }
);
export function MainWindow({ app, reference }) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/icons/blue/settings.svg",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/icons/blue/settings.svg",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/icons/blue/new_window.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/icons/blue/mic.svg",
      executable: "gnome-calendar",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/icons/blue/power.svg",
      executable: "gnome-calendar",
    },
  ];
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    {
      application: app,
    },
    /* @__PURE__ */ Gjsx.createWidget(
      Gtk.ScrolledWindow,
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        StackSwitch,
        {
          orientation: Gtk.Orientation.VERTICAL,
          spacing: 10,
        },
        /* @__PURE__ */ Gjsx.createWidget(WebMessage, null),
        /* @__PURE__ */ Gjsx.createWidget(Demo, null),
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
          orientation: Gtk.Orientation.HORIZONTAL,
        }),
        /* @__PURE__ */ Gjsx.createWidget(HeadLayout, {
          services: panel,
        })
      )
    )
  );
}
function PeerEntry() {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, {
    label: "Peer Cnxt",
  });
}
