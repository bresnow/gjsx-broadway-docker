// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from 'gi://GObject';
import Webkit from "gi://WebKit2?version=5.0";
import Gio from "gi://Gio"
import GLib from 'gi://GLib';
import util from "gjsx/utils";
import { __dirname } from '../main.js';

const css_prov = util.CssProvider()
export const Web2 = GObject.registerClass({ GTypeName: "Web2" }, class WebMessageWidget extends Gtk.Box {

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

        let webView: Webkit.WebView, scroll: Gtk.ScrolledWindow, settings: Webkit.Settings, button: Gtk.Button, box2: Gtk.Box, label: Gtk.Label, css1: Gtk.CssProvider, buttonLabel: Gtk.Label;
        try {

            // settings = new Webkit.Settings({ minimum_font_size: 16 });
            // webView = new Webkit.WebView({ settings, editable: true });

            // css_prov.load({ borderRadius: "20px" })
            // css_prov.append(webView as unknown as Gtk.Widget)

            // buttonLabel = new Gtk.Label({ label: '', use_markup: true, wrap: true });
            // Load the html asset 
            // webView.load_uri('https://vscode-tout038.fltngmmth.com');
            // webView.load_uri(GLib.filename_to_uri(`${__dirname}/assets/webMsg.html`, null));


            let vid = new Gtk.Video({ file: Gio.File.new_for_path(__dirname + '/assets/640.mp4') })
            // scro/ll = new Gtk.ScrolledWindow({ child: webView as unknown as Gtk.Widget })

            // box2 = new Gtk.Box({ baseline_position: Gtk.BaselinePosition.CENTER, homogeneous: true, spacing: 10, orientation: Gtk.Orientation.HORIZONTAL });
            // box2.append(scroll);
            this.append(vid)
            // this.append(box2)
        } catch (e) {
            logError(e)
            // this.append(null)
        }
    }

})