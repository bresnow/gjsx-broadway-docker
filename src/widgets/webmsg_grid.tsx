// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Webkit from "gi://WebKit2?version=5.0";
import Gio from "gi://Gio";
import { __dirname } from "../main.js";

export const WebMessage = GObject.registerClass(
  { GTypeName: "WebMessageWidget",

},
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

      let webView: Webkit.WebView,
        scroll: Gtk.ScrolledWindow,
        settings: Webkit.Settings,
        box2: Gtk.Box,
        buttonLabel: Gtk.Label;
      try {
        settings = new Webkit.Settings({ minimum_font_size: 16 });
        webView = new Webkit.WebView({ settings, editable: true });

        buttonLabel = new Gtk.Label({
          label: "",
          use_markup: true,
          wrap: true,
        });
        // Load the html asset
        webView.load_uri("https://gnome.org");
        // webView.load_uri(GLib.filename_to_uri(`${__dirname}/assets/webMsg.html`, null));

  
        scroll = new Gtk.ScrolledWindow({
          child: webView as unknown as Gtk.Widget,
        });

        box2 = new Gtk.Box({
          vexpand: true,
          spacing: 10,
          orientation: Gtk.Orientation.VERTICAL,
        });
        this.append(scroll);
        // this.append(vid)
        // this.append(box2)
      } catch (e) {
        logError(e);
      }
    }
  }
);
