import Gtk from "gi://Gtk?version=4.0";
import GObject from 'gi://GObject';
import GLib from "gi://GLib"
import Webkit from "gi://WebKit2?version=5.0";

export const WebMessageGrid = GObject.registerClass({ GTypeName: "WebMessageWidget" }, class WebMessageWidget extends Gtk.Box {
    constructor(options: Gtk.Grid_ConstructProps) {
        super(options);
        this.init()
    };

    init() {
        this.orientation = Gtk.Orientation.VERTICAL;
        this.valign = Gtk.Align.CENTER;
        this.homogeneous = true;
        this.margin_start = 18;
        let webView: Webkit.WebView, settings: Webkit.Settings, button: Gtk.Button, label: Gtk.Label, buttonLabel: Gtk.Label;
        try {
            settings = new Webkit.Settings()
            settings.set_default_font_size(20)
            webView = new Webkit.WebView({settings});

            webView.set_zoom_level(1.1)
            // Label using markup syntax
            // TODO: Markdown support
            label = new Gtk.Label({ label: '', use_markup: true, wrap:true });
            buttonLabel = new Gtk.Label({ label:'' , use_markup: true, wrap:true });
            // Load the html asset 
            webView.load_uri(GLib.filename_to_uri('/home/app/assets/egWebmsg.html', null));

            // Get Webkit messages into GTK listening to 'notify::title' signals
            webView.connect('notify::title', (self: Webkit.WebView, params: any) => {
                buttonLabel.label = '<small>Press To Send Message To WebView From Interface</small>'
                label.label = `<b>Document Title: </b>${webView.title}`;
            });

            button = new Gtk.Button();
            button.set_margin_top(20)
            button.set_child(buttonLabel)
            button.connect('clicked', () => {
                // Execute one Webkit function to send a message from GTK to Webkit
                webView.run_javascript('messageFromGTK("Sent Web Message From Gtk Interface To Webkit Html!");', null, (self: Webkit.WebView, result: any, error: any) => {
                    self.run_javascript_finish(result);
                    button.set_has_frame(false);
                    buttonLabel.label = '<b>Sent!</b>'
                    label.label = "<b>Mutated Message</b>";
                });
            });


            this.append(webView as unknown as Gtk.Widget);
            this.append(button);
            this.append(label);
        } catch (e) {
            logError(e)
        }
    }

})