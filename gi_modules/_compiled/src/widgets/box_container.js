import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
const BoxContainer = GObject.registerClass(
{ GTypeName: "BoxContainer" },
class BoxContainer2 extends Gtk.Box {
_init() {
super._init();
this.orientation = Gtk.Orientation.VERTICAL;
this.spacing = 8;
}
}
);
export {
BoxContainer
};
