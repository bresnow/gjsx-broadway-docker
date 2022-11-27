import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import util from "../../lib/gjsx/utils/index.js";
import { __dirname } from "../main.js";
const css_prov = util.CssProvider();
export const Web2 = GObject.registerClass(
  { GTypeName: "Web2" },
  class WebMessageWidget extends Gtk.Box {
    _setAttr() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
      this.spacing = 10;
    }
    _init() {
      super._init();
      this._setAttr();
      let webView, scroll, settings, button, box2, label, css1, buttonLabel;
      try {
        let vid = new Gtk.Picture({
          file: Gio.File.new_for_path(__dirname + "/assets/640.mp4"),
        });
        this.append(vid);
      } catch (e) {
        logError(e);
      }
    }
  }
);
