import Gjsx from "../lib/gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import GObject from "gi://GObject";
function widgetArray(arr) {
  return arr.map((Widget) => {
    return new Widget();
  });
}
const GridStack = GObject.registerClass(
  {},
  class extends Gtk.Grid {
    constructor(params) {
      super(params);
    }
  }
);
const BgOverlay = GObject.registerClass(
  {},
  class extends Gtk.Overlay {
    constructor(arg) {
      super(arg);
      this.build();
    }
    build() {
      let [label, button, picture] = [
        new Gtk.Label({ label: "dahsfshkfkdhafklhj" }),
        new Gtk.Button({ label: "button" }),
        new Gtk.Picture({ file: "assets/images/images/mrs_arnold.jpeg" }),
      ];
      this.set_clip_overlay(picture, true);
      this.set_child(label);
    }
  }
);
export function MainWindow({ app, reference }) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/fltngmmth/Black_fullStack.png",
      executable: "",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/logo.svg",
      executable: "gtk4-tour",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/logo.svg",
      executable: ["gjs", "-m", "assets/apps/demo.js"],
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
        BgOverlay,
        null,
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
          label: "try Meeeee",
          onClicked: (butt) => {},
        }),
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
          label: reference,
          style: { color: "#fff" },
        })
      ),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null),
      /* @__PURE__ */ Gjsx.createWidget(GridStack, null)
    )
  );
}
function PeerEntry() {
  return /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, {
    label: "Peer Cnxt",
  });
}
