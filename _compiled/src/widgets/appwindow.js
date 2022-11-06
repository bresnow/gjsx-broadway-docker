import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
export const AppWindow = GObject.registerClass(
  { GTypeName: "AppWindow" },
  class AppWindow2 extends Gtk.ApplicationWindow {
    constructor(config) {
      super(config);
      this.init();
    }
    init() {
      this.set_decorated(false);
      this.maximize();
    }
  }
);
