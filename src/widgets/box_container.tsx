// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
// import Gjsx from "gjsx"

export const BoxContainer = GObject.registerClass(
  { GTypeName: "BoxContainer" },
  class BoxContainer extends Gtk.Box {
    _init() {
      super._init();
      this.orientation = Gtk.Orientation.VERTICAL;
      this.spacing = 8;
    }
  }
);
