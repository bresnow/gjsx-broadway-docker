import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Webkit from "gi://WebKit2?version=5.0";
export const WebMessageGrid = GObject.registerClass(
  { GTypeName: "WebMessageWidget" },
  class WebMessageWidget extends Gtk.Grid {
    constructor(options) {
      super(options);
      this.init();
    }
    init() {
      this.margin_top = 10;
      this.row_spacing = 10;
      let webView, settings, button, label, box;
      try {
        settings = new Webkit.Settings({ default_font_size: 14 });
        webView = new Webkit.WebView({ settings });
        webView.load_uri(
          GLib.filename_to_uri("/home/app/assets/egWebmsg.html", null)
        );
        webView.connect("notify::title", (self, params) => {
          label.label = webView.title;
        });
        button = new Gtk.Button({ label: "GTK to Webkit message" });
        button.connect("clicked", () => {
          webView.run_javascript(
            'messageFromGTK("Message from GTK!");',
            null,
            (self, result, error) => {
              self.run_javascript_finish(result);
            }
          );
        });
        label = new Gtk.Label({ label: "" });
        this.attach(webView, 0, 0, 2, 3);
        this.attach(button, 0, 1, 1, 1);
        this.attach(label, 1, 1, 1, 1);
      } catch (e) {
        log(e);
      }
    }
    add_child(widget) {
      this.attach(widget, 0, 2, 2, 1);
    }
  }
);
