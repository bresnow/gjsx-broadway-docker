import Gtk from "gi://Gtk?version=4.0";
import GObject from 'gi://GObject';
import GLib from "gi://GLib"
import Webkit from "gi://WebKit2?version=5.0"
import { getFileInfo } from "../../lib/util.js";

export const WebMessageGrid = GObject.registerClass({ GTypeName: "WebMessageWidget" }, class WebMessageWidget extends Gtk.Grid {
    constructor(options: Gtk.Grid_ConstructProps) {
        super(options);
        this.init()
    }
    init() {
        this.margin_top = 10
        this.row_spacing = 10;
        let webView: Webkit.WebView, settings: Webkit.Settings, button: Gtk.Button, label: Gtk.Label, box: Gtk.Box;
        try {

            settings = new Webkit.Settings({ default_font_size: 14 })
            webView = new Webkit.WebView({ settings });
            // webView.load_uri('https://www.google.com');
            webView.load_uri(GLib.filename_to_uri('/home/app/assets/egWebmsg.html', null));
            webView.connect('notify::title', (self: any, params: any) => {
                // Get Webkit messages into GTK listening to 'notify::title' signals
                label.label = webView.title;
            });

            button = new Gtk.Button({ label: 'GTK to Webkit message' });
            button.connect('clicked', () => {
                // Execute one Webkit function to send a message from GTK to Webkit
                webView.run_javascript('messageFromGTK("Message from GTK!");', null, (self: Webkit.WebView, result: any, error: any) => {
                    self.run_javascript_finish(result);
                });
            });

            label = new Gtk.Label({ label: '' });
            // box = new Gtk.Box({ homogeneous: true, orientation: Gtk.Orientation.HORIZONTAL });
            // box.append();
            this.attach(webView as unknown as Gtk.Widget, 0, 0, 2, 3);
            this.attach(button, 0, 1, 1, 1);
            this.attach(label, 1, 1, 1, 1);
        } catch (e) {
            log(e)
        }
    }
    add_child(widget: Gtk.Widget) {
        this.attach(widget, 0, 2, 2, 1);
    }
})