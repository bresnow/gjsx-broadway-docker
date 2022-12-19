import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import GLib from "gi://GLib";


export const WebViewer = GObject.registerClass(
  {
    GTypeName: "WebMessageWidget", Properties: {
      'url': GObject.ParamSpec.string(
        'url',                     // property name
        'Url Source',                  // nickname
        'The url of the webkit view',   // description
        GObject.ParamFlags.READWRITE,       // READABLE/READWRITE/CONSTRUCT/etc
        'A default'  // default value if omitting getter/setter
      )
    }
  },
  class WebMessageWidget extends Gtk.Box {
    url?: string
    _init() {
      super._init();
      this.setAttr();

      let webView: Webkit.WebView,
        scroll: Gtk.ScrolledWindow,
        settings: Webkit.Settings
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings, editable: true });
        webView.load_url(this.url)
        scroll = new Gtk.ScrolledWindow({
          child: webView as unknown as Gtk.Widget,
        });
        this.append(scroll);
      } catch (e) {
        logError(e);
      }
    };
    setAttr() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
      this.spacing = 10;
    };
  }
);
