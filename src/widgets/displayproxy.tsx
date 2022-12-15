// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Util from "../../gi_modules/gjsx/utils/index";
import { __dirname } from "../main.js";

export const ProxiedBroadwayWebView = GObject.registerClass(
  { GTypeName: "ProxiedBroadwayWebView" },
  class extends Gtk.Box {
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
    }
  }
);
