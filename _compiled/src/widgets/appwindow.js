import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
class Window extends Gtk.ApplicationWindow {
  constructor(config) {
    super(config);
    this.fillscreen();
  }
  fillscreen() {
    this.set_decorated(false);
    this.maximize();
  }
}
export const AppWindow = GObject.registerClass(
  { GTypeName: "AppWindow" },
  Window
);
