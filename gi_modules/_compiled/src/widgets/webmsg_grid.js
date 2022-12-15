import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import Gio from "gi://Gio";
import { __dirname } from "../main.js";
const WebMessage = GObject.registerClass(
{ GTypeName: "WebMessageWidget" },
class WebMessageWidget extends Gtk.Box {
_init() {
super._init();
this.setAttr();
let webView, scroll, settings, box2, buttonLabel;
try {
settings = new Webkit.Settings({ minimum_font_size: 16 });
webView = new Webkit.WebView({ settings, editable: true });
buttonLabel = new Gtk.Label({
label: "",
use_markup: true,
wrap: true
});
webView.load_uri("https://google.com");
let vid = new Gtk.Video({
file: Gio.File.new_for_path(
__dirname + "/assets/video/lonelyshade.mp4"
)
});
scroll = new Gtk.ScrolledWindow({
child: webView
});
box2 = new Gtk.Box({
vexpand: true,
spacing: 10,
orientation: Gtk.Orientation.VERTICAL
});
this.append(scroll);
} catch (e) {
logError(e);
}
}
setAttr() {
this.orientation = Gtk.Orientation.VERTICAL;
this.valign = Gtk.Align.BASELINE;
this.vexpand = true;
this.homogeneous = true;
this.margin_start = 18;
this.spacing = 10;
}
}
);
export {
WebMessage
};
