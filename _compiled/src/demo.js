import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../lib/gjsx/index.js";
import Gio from "gi://Gio";
import { __dirname } from "./main.js";
const Template = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "template",
    {
      class: "Demo",
      parent: "GtkBox",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget("object", {
        class: "GtkVideo",
        id: "video",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget("object", {
        class: "GtkPicture",
        id: "picture",
      })
    )
  )
);
export const Demo = GObject.registerClass(
  {
    GTypeName: "Demo",
    Template,
  },
  class Demo2 extends Gtk.Box {
    _init() {
      super._init();
      this.homogeneous = true;
      this.orientation = Gtk.Orientation.HORIZONTAL;
      this.video.set_file(
        Gio.File.new_for_path(__dirname + "/assets/video/shades.webm")
      );
      this.picture.set_file(
        Gio.File.new_for_path(
          __dirname + "/assets/images/icons/authentication.png"
        )
      );
    }
  }
);
