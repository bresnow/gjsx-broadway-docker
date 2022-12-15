import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import { __dirname } from "../main.js";
const Video = GObject.registerClass(
{ GTypeName: "Video" },
class extends Gtk.Box {
_setAttr() {
this.orientation = Gtk.Orientation.VERTICAL;
this.valign = Gtk.Align.CENTER;
this.vexpand = true;
this.homogeneous = true;
this.spacing = 10;
}
_init() {
super._init();
this._setAttr();
let button;
try {
button = new Gtk.Button({ label: "Push for Video" });
let lonelyShades = Gio.File.new_for_path(
__dirname + "/assets/video/shades.webm"
);
let video = Gtk.Video.new_for_file(lonelyShades);
video.set_autoplay(true);
video.set_vexpand(true);
video.set_visible(false);
this.append(video);
button.connect("clicked", (self) => {
if (video.get_visible()) {
video.set_visible(false);
} else {
video.set_visible(true);
}
});
this.append(button);
} catch (e) {
logError(e);
}
}
}
);
export {
Video
};
