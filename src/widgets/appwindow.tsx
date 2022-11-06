import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
// No need for Gjsx in ts files... yet
// import Gjsx from "gjsx";

/**
 * Borderless Fullscreen Application Window 
 * Use GObject.registerClass() to create custom widgets 
 */

 export const AppWindow = GObject.registerClass({ GTypeName: "AppWindow" }, class AppWindow extends Gtk.ApplicationWindow {
    constructor(config: Gtk.ApplicationWindow_ConstructProps) {
      super(config);
      this.init();
    }
    init() {
      this.set_decorated(false)
      this.maximize();
    }
  })