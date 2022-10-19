import  Gtk from "gi://Gtk?version=4.0";  
import  WebKit from "gi://WebKit2";  
let argv = ARGV;
Gtk.init(null);
let window = new Gtk.Window({
  title: "Floating Mammoth Browser",
  type: Gtk.WindowType.TOPLEVEL,
  window_position: Gtk.WindowPosition.CENTER
});
let webView = new WebKit.WebView();
let appbutton = new Gtk.AppChooserButton();
appbutton.set_heading("Button");
let toolbar = new Gtk.Toolbar();
let button = {
  back: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_BACK),
  forward: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_FORWARD),
  refresh: Gtk.ToolButton.new_from_stock(Gtk.STOCK_REFRESH)
};
let urlBar = new Gtk.Entry();
let scrollWindow = new Gtk.ScrolledWindow({});
let hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
let vbox = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL });
let gtkSettings = Gtk.Settings.get_default();
gtkSettings.gtk_application_prefer_dark_theme = true;
if (argv.some((info) => info === "--dark")) {
  let gtkSettings2 = Gtk.Settings.get_default();
  gtkSettings2.gtk_application_prefer_dark_theme = true;
  gtkSettings2.gtk_theme_name = "PRO-dark-XFCE-edition II";
} else if (argv.some((info) => info === "--light")) {
  let gtkSettings2 = Gtk.Settings.get_default();
  gtkSettings2.gtk_application_prefer_dark_theme = false;
  gtkSettings2.gtk_theme_name = "Adwaita";
}
webView.load_uri(url(argv.filter((url2) => "-" !== url2[0])[0] || "https://darkoverlordofdata.com"));
webView.connect("load-changed", (widget, loadEvent, data) => {
  switch (loadEvent) {
    case 2:
      urlBar.set_text(widget.get_uri());
      button.back.set_sensitive(webView.can_go_back());
      button.forward.set_sensitive(webView.can_go_forward());
      break;
  }
});
button.back.connect("clicked", () => webView.go_back());
button.forward.connect("clicked", () => webView.go_forward());
button.refresh.connect("clicked", () => webView.reload());
toolbar.add(button.back);
toolbar.add(button.forward);
toolbar.add(button.refresh);
urlBar.connect("activate", () => {
  let href = url(urlBar.get_text());
  urlBar.set_text(href);
  webView.load_uri(href);
});
scrollWindow.add(webView);
hbox.pack_start(toolbar, false, false, 0);
hbox.pack_start(urlBar, true, true, 5);
hbox.pack_start(appbutton, true, true, 3);
vbox.pack_start(hbox, false, true, 0);
vbox.pack_start(scrollWindow, true, true, 0);
window.set_default_size(1024, 720);
window.set_resizable(true);
window.connect("show", () => {
  window.set_keep_above(true);
  Gtk.main();
});
window.connect("destroy", () => Gtk.main_quit());
window.connect("delete_event", () => false);
window.add(vbox);
window.show_all();
function url(href) {
  return /^([a-z]{2,}):/.test(href) ? href : "https://" + href;
}
