// Updated in August 2022

import Gtk from 'gi://Gtk?version=3.0';
import WebKit from 'gi://WebKit2?version=5.0';
import GObject from "gi://GObject";
import Gdk from 'gi://Gdk';

Gtk.init(null);

const WebBrowser = GObject.registerClass(
  class WebBrowser extends Gtk.Application {
    // Create the application itself
    _init() {
      super._init({
        application_id: "org.example.WebBrowser",
      });

      // eslint-disable-next-line no-undef
      this._homeUrl = ARGV[0] || "gnome.org";

      // Connect 'activate' and 'startup' signals to the callback functions
      this.connect("activate", () => this._onActivate());
      this.connect("startup", () => this._onStartup());
    }

    // Callback function for 'activate' signal
    _onActivate() {
      // Present window when active
      this._window.present();
      // Grab focus to the Url Bar when active
      this._urlBar.grab_focus();
      let text = this._homeUrl;
      let uri;
      if (text.startsWith("http://")) uri = text;
      else uri = "http://" + text;
      // Load the default home page when active
      this._webView.load_uri(uri);
    }

    // Callback function for 'startup' signal
    _onStartup() {
      // Build the UI
      this._buildUI();

      // Connect the UI signals
      this._connectSignals();
    }

    // Build the application's UI
    _buildUI() {
      const screen = Gdk.Screen.get_default();
      // Create the application window
      this._window = new Gtk.ApplicationWindow({
        application: this,
        window_position: Gtk.WindowPosition.CENTER,
        default_height: 768,
        default_width: 1024,
        border_width: 0,
        title: "WebKit Sample",
      });

      let window = this._window;
// window.maximize()
      window.set_default_size(screen.get_width(), screen.get_height());
      // Create the application toolbar
      let toolbar = new Gtk.HeaderBar({ show_close_button: false });

      // Create the browser buttons (Back, Forward and Reload)
      this._backButton = Gtk.Button.new_from_icon_name(
        "go-previous-symbolic",
        Gtk.IconSize.MENU
      );
      this._backButton.get_style_context().add_class("flat");
      this._forwardButton = Gtk.Button.new_from_icon_name(
        "go-next-symbolic",
        Gtk.IconSize.MENU
      );
      this._forwardButton.get_style_context().add_class("flat");
      this._reloadButton = Gtk.Button.new_from_icon_name(
        "view-refresh-symbolic",
        Gtk.IconSize.MENU
      );
      this._reloadButton.get_style_context().add_class("flat");

      // Create the Url Bar
      this._urlBar = new Gtk.Entry({ hexpand: true });

      // Add browser buttons to the toolbar
      toolbar.pack_start(this._backButton);
      toolbar.pack_start(this._forwardButton);
      toolbar.pack_start(this._reloadButton);
      // toolbar.set_custom_title(this._urlBar);

      // Create the WebKit WebView, our window to the web
      this._webView = new WebKit.WebView();
      this._webView.get_settings().enableJavascript = true;
      this._webView.get_settings().set_javascript_can_access_clipboard(true);
      this._webView
        .get_settings()
        .set_javascript_can_open_windows_automatically(false);

      // Add the box to the window
//      this._window.set_titlebar(toolbar);
      this._window.add(this._webView);

      // Show the window and all child widgets
      this._window.show_all();
    }

    _connectSignals() {
      // When an URL is entered, call web_view to open it
      this._urlBar.connect("activate", () => {
        this._webView.load_uri(this._urlBar.text);
      });

      // Update the url bar and buttons when a new page is loaded
      this._webView.connect("load_changed", (webView, loadEvent) => {
        if (loadEvent !== WebKit.LoadEvent.COMMITTED) {
          return;
        }
        this._urlBar.text = this._webView.get_uri();
        this._updateButtons();
      });

      // When the back button is clicked, go back
      this._backButton.connect("clicked", () => {
        this._webView.go_back();
      });

      // When the forward button is clicked, go forward
      this._forwardButton.connect("clicked", () => {
        this._webView.go_forward();
      });

      // When the realod button is clicked, reload
      this._reloadButton.connect("clicked", () => {
        this._webView.reload();
      });
    }

    _updateButtons() {
      // Set back button and forward button sensitive if it's possible to go
      // back or forward respectively
      this._backButton.sensitive = this._webView.can_go_back();
      this._forwardButton.sensitive = this._webView.can_go_forward();
    }
  }
);

// Run the application
const browser = new WebBrowser();
// eslint-disable-next-line no-undef
browser.run(ARGV);
