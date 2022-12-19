import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
export const WebViewer = GObject.registerClass(
  {
    GTypeName: "WebMessageWidget",
    Properties: {
      url: GObject.ParamSpec.string(
        "url",
        "Url Source",
        "The url of the webkit view",
        GObject.ParamFlags.READWRITE,
        "A default"
      ),
    },
  },
  class WebMessageWidget extends Gtk.Box {
    url;
    _init() {
      super._init();
      this.setAttr();
      let webView, scroll, settings;
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings, editable: true });
        webView.load_url(this.url);
        scroll = new Gtk.ScrolledWindow({
          child: webView,
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
