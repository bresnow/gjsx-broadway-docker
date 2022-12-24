import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import GLib from "gi://GLib";

const { string } = GObject.ParamSpec
export const WebViewer = GObject.registerClass(
  {
    GTypeName: "WebMessageWidget", Properties: {
      'url': string(
        'url',                     // property name
        'Url Source',                  // nickname
        'The url of the webkit view',   // description
        GObject.ParamFlags.READWRITE,       // READABLE/READWRITE/CONSTRUCT/etc
        'https://drawio.fltngmmth.com'  // default value if omitting getter/setter
      )
    }
  },
  class extends Gtk.Box {
    url?: string
    webView: Webkit.WebView
    constructor(opts?: Gtk.Box_ConstructProps & { url?: string }) {
      super(opts);
      this.url = opts?.url ?? "https://drawio.fltngmmth.com";
      this.build()
    };

    set _url(url: string) {
      this.url = url;
    }
    get _url(): string {
      return this.url;
    }
    build() {
      this.setAttr()
      let webView: Webkit.WebView,
     
        scroll: Gtk.ScrolledWindow,
        settings: Webkit.Settings
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings, editable: true });
        webView.load_uri(this.url)
        scroll = new Gtk.ScrolledWindow({
          child: webView as unknown as Gtk.Widget,
        });
        this.append(scroll)
      } catch (e) {
        logError(e);
      }
    };
    _connect(signal:string, callback:(_self: Webkit.WebView, ...args: any[]) => void){

    }
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
