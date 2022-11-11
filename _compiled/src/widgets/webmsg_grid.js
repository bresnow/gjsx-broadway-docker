import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import Gjsx from "../../lib/gjsx/index.js";
const styleObjectToCssData = Gjsx.styleObjectToCssData;
export const WebMessage = GObject.registerClass(
  { GTypeName: "WebMessageWidget" },
  class WebMessageWidget extends Gtk.Box {
    constructor(opts) {
      super(opts);
      this.init();
    }
    setBoxAttributes() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
    }
    init() {
      this.setBoxAttributes();
      let webView,
        settings,
        button = { reload: void 0, send: void 0 },
        box2,
        label,
        css1,
        buttonLabel;
      try {
        settings = new Webkit.Settings({ minimum_font_size: 10 });
        webView = new Webkit.WebView({ settings });
        css1 = new Gtk.CssProvider();
        css1.load_from_data(
          ` * { ${styleObjectToCssData({ borderRadius: "" })} }`
        );
        label = new Gtk.Label({ label: "", use_markup: true, wrap: true });
        label.get_style_context().add_provider(css1, 0);
        buttonLabel = new Gtk.Label({
          label: "",
          use_markup: true,
          wrap: true,
        });
        webView.load_uri("https://fileshare.fltngmmth.com");
        webView.connect("notify::title", (self, params) => {
          buttonLabel.label = `<small>Press To Send Message To WebView From Interface</small>`;
          label.label = `<span><b>Document Title: </b>${webView.title}</span>`;
        });
        button.send = new Gtk.Button({ margin_start: 10 });
        button.send.set_child(buttonLabel);
        webView.connect("notify::zoom-level", (self, params) => {
          print("zoom-notify" + params + "   " + self.get_zoom_level());
        });
        button.send.connect("clicked", () => {
          settings.set_minimum_font_size(90);
          webView.run_javascript(
            'messageFromGTK("Sent Web Message From Gtk Interface To Webkit Html!");',
            null,
            (self, result, error) => {
              self.run_javascript_finish(result);
              button.send.set_has_frame(false);
              buttonLabel.label = "<b>Sent!</b>";
              label.label = `<b>Mutated Message</b>`;
            }
          );
        });
        button.reload = new Gtk.Button({ label: "Reload" });
        button.reload.connect("clicked", (self) => {
          button.send.set_has_frame(true);
          webView.reload();
        });
        box2 = new Gtk.Box({
          vexpand: true,
          spacing: 10,
          orientation: Gtk.Orientation.VERTICAL,
        });
        this.append(webView);
        box2.append(button.send);
        box2.append(button.reload);
        box2.append(label);
        this.append(box2);
      } catch (e) {
        logError(e);
      }
    }
  }
);
