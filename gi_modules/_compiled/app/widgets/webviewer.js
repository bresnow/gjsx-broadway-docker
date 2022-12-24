import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
const { string } = GObject.ParamSpec;
export const WebViewer = GObject.registerClass(
  {
    GTypeName: "WebMessageWidget",
    Properties: {
      url: string(
        "url",
        "Url Source",
        "The url of the webkit view",
        GObject.ParamFlags.READWRITE,
        "https://drawio.fltngmmth.com"
      ),
    },
  },
  class extends Gtk.Box {
    url;
    webView;
    constructor(opts) {
      super(opts);
      this.url = opts?.url ?? "https://drawio.fltngmmth.com";
      this.build();
    }
    set _url(url) {
      this.url = url;
    }
    get _url() {
      return this.url;
    }
    build() {
      this.setAttr();
      let webView, scroll, settings;
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings, editable: true });
        webView.load_uri(this.url);
        scroll = new Gtk.ScrolledWindow({
          child: webView,
        });
        this.append(scroll);
      } catch (e) {
        logError(e);
      }
    }
    _connect(signal, callback) {}
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
