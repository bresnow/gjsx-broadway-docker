import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

/**
 * Borderless Fullscreen Application Window
 * Use GObject.registerClass() to create custom widgets
 */


class Window extends Gtk.ApplicationWindow {
  constructor(config: Gtk.ApplicationWindow_ConstructProps) {
    super(config);
    this.fillscreen()
    this.set_focus_on_click(false)
  }
  fillscreen() {
    this.set_decorated(false);
    this.maximize();
  }
};

export const AppWindow = GObject.registerClass(
  { GTypeName: "AppWindow" },
  Window
);