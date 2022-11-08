import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
export const BoxContainer = GObject.registerClass(
  { GTypeName: "BoxContainer" },
  class BoxContainer2 extends Gtk.Box {
    constructor(opts) {
      super(opts);
      this.init();
    }
    init() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.spacing = 8;
    }
  }
);
