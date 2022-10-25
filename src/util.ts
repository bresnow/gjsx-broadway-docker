import * as Gtk from "gi://Gtk?version=4.0";


export function theme(argv: typeof ARGV){

let gtkSettings = Gtk.Settings.get_default();

if (argv.some((info) => info === "--dark")) {
  let gtkSettings = Gtk.Settings.get_default();
  gtkSettings.gtk_application_prefer_dark_theme = true;
  gtkSettings.gtk_theme_name = "PRO-dark-XFCE-edition II";
} else {
  let gtkSettings = Gtk.Settings.get_default();
  gtkSettings.gtk_application_prefer_dark_theme = false;

  gtkSettings.gtk_theme_name = "Adwaita";
}

}
