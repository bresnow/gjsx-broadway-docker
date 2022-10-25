import  Gtk from "gi://Gtk?version=4.0"; 
export function theme(argv, themeName) {
  let gtkSettings = Gtk.Settings.get_default();
  if (argv.some((info) => info === "--dark")) {
    let gtkSettings2 = Gtk.Settings.get_default();
    gtkSettings2.gtk_application_prefer_dark_theme = true;
    gtkSettings2.gtk_theme_name = themeName ?? "PRO-dark-XFCE-edition II";
  } else {
    let gtkSettings2 = Gtk.Settings.get_default();
    gtkSettings2.gtk_application_prefer_dark_theme = false;
    gtkSettings2.gtk_theme_name = themeName ?? "Mc-OS-Transparent";
  }
}
