// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from 'gi://GObject';
import Webkit from "gi://WebKit2?version=5.0";
import GLib from 'gi://GLib';
import { __dirname } from '../main.js';


export const WebMessage = GObject.registerClass({ GTypeName: "WebMessageWidget" }, class WebMessageWidget extends Gtk.Box {

    constructor(opts: Gtk.Box_ConstructProps) {
        super(opts);
        this.init();
    };
    init() {
        this.orientation = Gtk.Orientation.VERTICAL;
        this.valign = Gtk.Align.BASELINE;
        this.vexpand = true;
        this.homogeneous = true;
        this.margin_start = 18;
        let webView: Webkit.WebView, scroll: Gtk.ScrolledWindow, settings: Webkit.Settings, button: Gtk.Button, box2: Gtk.Box, label: Gtk.Label, css1: Gtk.CssProvider, buttonLabel: Gtk.Label;
        try {

            settings = new Webkit.Settings({ minimum_font_size: 16 });
            webView = new Webkit.WebView({ settings });
            css1 = new Gtk.CssProvider();
            css1.load_from_data(' * { color: #fff; font-size: 12px; background-color: rgba(0, 0, 0, 0.5); border-radius: 5px; }');
            label = new Gtk.Label({ label: '', use_markup: true, wrap: true });
            label.get_style_context().add_provider(css1, 0)
            buttonLabel = new Gtk.Label({ label: '', use_markup: true, wrap: true });
            // Load the html asset 
            webView.load_uri('https://fileshare.fltngmmth.com');
            // webView.load_uri(GLib.filename_to_uri(`${__dirname}/assets/webMsg.html`, null));

            // Get Webkit messages into GTK listening to 'notify::title' signals
            webView.connect('notify::title', (self: Webkit.WebView, params: any) => {
                // buttonLabel.label = `<small>Press To Send Message To WebView From Interface</small>`
                label.label = `<span><b>Document Title: </b>${webView.title}</span>`;
            });

            button = new Gtk.Button();
            button.set_margin_top(20)
            button.set_child(buttonLabel)
            scroll = new Gtk.ScrolledWindow({ child: new Gtk.Image({ file: __dirname + '/assets/mrs_arnold.jpeg' }) })
            // scroll = new Gtk.ScrolledWindow({child:webView as unknown as Gtk.Widget})
            // button.connect('clicked', () => {
            //     // Execute one Webkit function to send a message from GTK to Webkit
            //     settings.set_minimum_font_size(90)
            //     webView.run_javascript('messageFromGTK("Sent Web Message From Gtk Interface To Webkit Html!");', null, (self: Webkit.WebView, result: any, error: any) => {
            //         self.run_javascript_finish(result);
            //         button.set_has_frame(false);
            //         buttonLabel.label = '<b>Sent!</b>'
            //         label.label = `<b>Mutated Message</b>`;
            //     });
            // });

            box2 = new Gtk.Box({ vexpand: true, spacing: 10, orientation: Gtk.Orientation.VERTICAL });
            this.append(scroll);
            box2.append(button);
            box2.append(label);
            this.append(box2)
        } catch (e) {
            logError(e)
        }
    }

})