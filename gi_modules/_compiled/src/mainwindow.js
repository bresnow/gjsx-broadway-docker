import Gjsx from "../gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import Gio from "gi://Gio";
import GObject from "gi://GObject";
import { Demo } from "./widgets/demo.js";
import { StackSwitch } from "./widgets/stackswitch.js";
import { WebViewer } from "./widgets/webmsg_grid.js";
import { BoxContainer } from "./widgets/box_container.js";
const { installGlobals } = Gjsx;
installGlobals();
function widgetArray(arr) {
  return arr.map((Widget) => {
    return new Widget();
  });
}
(async function () {
  try {
    let response = await fetch("http://0.0.0.0:8087/interface/test", {
      method: "GET",
    });
    let data = await response.json();
    log(response);
    log(JSON.stringify(data, null, 2));
    log("http://0.0.0.0:8087/interface/test");
  } catch (error) {
    log(JSON.stringify(error));
  }
})();
const BgOverlay = GObject.registerClass(
  { GTypeName: "BgOverlay" },
  class BgOverlay2 extends Gtk.Box {
    _init() {
      super._init();
      const { File } = Gio;
      let picture = new Gtk.Picture({
          file: File.new_for_path("assets/images/mrs_arnold.jpeg"),
        }),
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
      icon_path: "assets/images/icons/blue/settings.svg",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/icons/blue/list_add.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/icons/blue/mic.svg",
      executable: "gnome-calendar",
    },
  ];
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    { application: app },
    /* @__PURE__ */ Gjsx.createWidget(
      Gtk.ScrolledWindow,
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        StackSwitch,
        { orientation: Gtk.Orientation.VERTICAL, spacing: 10 },
        /* @__PURE__ */ Gjsx.createWidget(Demo, null),
        /* @__PURE__ */ Gjsx.createWidget(
          BoxContainer,
          { css_name: "box", style: { padding: "15px" } },
          /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
            orientation: Gtk.Orientation.HORIZONTAL,
          }),
          /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null)
        ),
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
          orientation: Gtk.Orientation.VERTICAL,
        }),
        /* @__PURE__ */ Gjsx.createWidget(WebViewer, null),
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
          orientation: Gtk.Orientation.HORIZONTAL,
        }),
        /* @__PURE__ */ Gjsx.createWidget(HeadLayout, { services: panel })
      )
    )
  );
}
function PeerEntry() {
  return /* @__PURE__ */ Gjsx.createWidget(
    BoxContainer,
    null,
    "  ",
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
      orientation: Gtk.Orientation.HORIZONTAL,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
      orientation: Gtk.Orientation.HORIZONTAL,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
      orientation: Gtk.Orientation.HORIZONTAL,
    }),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, null)
  );
}
