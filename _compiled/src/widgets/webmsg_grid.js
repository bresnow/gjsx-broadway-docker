import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Webkit from "gi://WebKit2?version=5.0";
export const WebMessageGrid = GObject.registerClass(
  { GTypeName: "WebMessageWidget" },
  class WebMessageWidget extends Gtk.Box {
    constructor(options) {
      super(options);
      this.init();
    }
    init() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
      let webView, settings, button, box2, label, css1, buttonLabel;
      try {
        settings = new Webkit.Settings({
          default_monospace_font_size: 30,
          default_font_size: 30,
        });
        webView = new Webkit.WebView({ settings, zoom_level: 5 });
        css1 = new Gtk.CssProvider();
        css1.load_from_data(
          " * { color: #a0a; font-size: 12px; background-color: rgba(0, 0, 0, 0.5); border-radius: 5px; }"
        );
        label = new Gtk.Label({ label: "", use_markup: true, wrap: true });
        label.get_style_context().add_provider(css1, 0);
        buttonLabel = new Gtk.Label({
          label: "",
          use_markup: true,
          wrap: true,
        });
        webView.load_uri(
          GLib.filename_to_uri("/home/app/assets/egWebmsg.html", null)
        );
        webView.connect("notify::title", (self, params) => {
          buttonLabel.label = `<small>Press To Send Message To WebView From Interface</small>`;
          label.label = `<span><b>Document Title: </b>${webView.title}</span>`;
        });
        button = new Gtk.Button();
        button.set_margin_top(20);
        button.set_child(buttonLabel);
        webView.connect("notify::zoom-level", (self, params) => {
          print(params);
        });
        button.connect("clicked", () => {
          webView.run_javascript(
            'messageFromGTK("Sent Web Message From Gtk Interface To Webkit Html!");',
            null,
            (self, result, error) => {
              self.run_javascript_finish(result);
              button.set_has_frame(false);
              buttonLabel.label = "<b>Sent!</b>";
              label.label = `<b>Mutated Message</b>`;
            }
          );
        });
        box2 = new Gtk.Box({
          vexpand: true,
          spacing: 10,
          orientation: Gtk.Orientation.VERTICAL,
        });
        this.append(webView);
        box2.append(button);
        box2.append(label);
        this.append(box2);
      } catch (e) {
        logError(e);
      }
    }
  }
);
