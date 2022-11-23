import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import util from "../../lib/gjsx/utils/index.js";
const css_prov = util.CssProvider();
export const Web2 = GObject.registerClass(
  { GTypeName: "Web2" },
  class WebMessageWidget extends Gtk.Box {
    _setAttr() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
      this.spacing = 10;
    }
    _init() {
      super._init();
      this._setAttr();
      let webView, scroll, settings, button, box2, label, css1, buttonLabel;
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings, editable: true });
        css_prov.append(webView);
        buttonLabel = new Gtk.Label({
          label: "",
          use_markup: true,
          wrap: true,
        });
        webView.load_uri("https://vscode-tout038.fltngmmth.com");
        scroll = new Gtk.ScrolledWindow({ child: webView });
        box2 = new Gtk.Box({
          vexpand: true,
          spacing: 10,
          orientation: Gtk.Orientation.VERTICAL,
        });
        this.append(scroll);
      } catch (e) {
        logError(e);
      }
    }
  }
);
