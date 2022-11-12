import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import { __dirname } from "../main.js";
export const WebMessage = GObject.registerClass(
  { GTypeName: "WebMessageWidget" },
  class WebMessageWidget extends Gtk.Box {
    constructor(opts) {
      super(opts);
      this.init();
    }
    init() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
      let webView, scroll, settings, button, box2, label, css1, buttonLabel;
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings });
        css1 = new Gtk.CssProvider();
        css1.load_from_data(
          " * { color: #fff; font-size: 12px; background-color: rgba(0, 0, 0, 0.5); border-radius: 5px; }"
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
          label.label = `<span><b>Document Title: </b>${webView.title}</span>`;
        });
        button = new Gtk.Button();
        button.set_margin_top(20);
        button.set_child(buttonLabel);
        scroll = new Gtk.ScrolledWindow({
          child: new Gtk.Image({ file: __dirname + "/assets/mrs_arnold.jpeg" }),
        });
        box2 = new Gtk.Box({
          vexpand: true,
          spacing: 10,
          orientation: Gtk.Orientation.VERTICAL,
        });
        this.append(scroll);
        box2.append(button);
        box2.append(label);
        this.append(box2);
      } catch (e) {
        logError(e);
      }
    }
  }
);
