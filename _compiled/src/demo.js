import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import { __dirname } from "./main.js";
import Gjsx from "../lib/gjsx/index.js";
const Template = /* @__PURE__ */ React.createElement(
  "interface",
  null,
  /* @__PURE__ */ React.createElement(
    "template",
    {
      class: "Demo",
      parent: "GtkBox",
    },
    /* @__PURE__ */ React.createElement(
      "child",
      null,
      /* @__PURE__ */ React.createElement("object", {
        class: "GtkVideo",
        id: "video",
      })
    ),
    /* @__PURE__ */ React.createElement(
      "child",
      null,
      /* @__PURE__ */ React.createElement("object", {
        class: "GtkPicture",
        id: "picture",
      })
    )
  )
);
export const Demo = GObject.registerClass(
  {
    GTypeName: "Demo",
    Template: Gjsx.renderUi(
      /* @__PURE__ */ React.createElement(Template, null)
    ),
  },
  class extends Gtk.Box {
    _init() {
      super._init();
      print(Template);
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
