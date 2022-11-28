import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk"
import GLib from 'gi://GLib';
import Gjsx from "gjsx";
import Webkit from "gi://WebKit2?version=5.0";
import { gtkSystemTheme } from "../lib/util.js";
import util from "gjsx/utils";
import { MainWindow } from "./mainwindow.js";

Gtk.init();
const css = util.CssProvider();
let dname = Gdk.Display.get_default().get_name()

let argv = ARGV;
gtkSystemTheme(argv);
css.load("/assets/styles/gtk.css").display

export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();

app.connect("activate", () => {
  if (dname === 'Broadway') {
    Gjsx.render(<MainWindow app={app} reference={'cool'} />)
    log('Broadway Proxy Initiated For Application')
    try {
      let webView = new Webkit.WebView();
      // Load the html asset 
      webView.load_uri('http://0.0.0.0:8086');
      webView.connect("notify::title", function ($obj) {
        let doc = $obj
        log(doc.title)
        doc.run_javascript('test();', null, function (self, res, err) {
          self.run_javascript_finish(res)
        })
      })
    } catch (e) {
      logError(e)
    }
  }
});
app.run([]);

