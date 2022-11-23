import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

export const StackGrid = GObject.registerClass({ GTypeName: "StackGrid" }, class extends Gtk.Grid {
  _init() {
    super._init()
    const stack = new Gtk.Stack({ vexpand: true, hexpand: true })
    this.attach(stack, 1, 0, 1, 1)
  };

})