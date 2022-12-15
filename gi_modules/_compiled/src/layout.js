import Gjsx from "../../_compiled/gi_modules/gjsx/index.js";
import { __dirname } from "./main.js";
import Gtk from "gi://Gtk?version=4.0";
import Webkit from "gi://WebKit2?version=5.0";
function HeadLayout({
services
}) {
let webview = new Webkit.WebView();
let logo = __dirname + "/assets/images/cnxt.png";
return /* @__PURE__ */ Gjsx.createWidget(Gtk.Box, { spacing: 18, orientation: Gtk.Orientation.HORIZONTAL }, /* @__PURE__ */ Gjsx.createWidget(Gtk.Image, { file: logo, style: { marginLeft: "5px" }, pixel_size: 100 }), services.map(
({ name, executable: execCmd, icon_path, icon_name }, i) => {
function clickHandler(self) {
log("Executing");
}
return /* @__PURE__ */ Gjsx.createWidget(
Gtk.Button,
{
onClicked: clickHandler,
halign: Gtk.Align.CENTER,
label: name,
css_name: "buttonbottom"
},
/* @__PURE__ */ Gjsx.createWidget(Gtk.Image, { file: __dirname + "/" + icon_path, pixel_size: 50 })
);
}
));
}
export {
HeadLayout
};
