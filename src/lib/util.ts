import * as  Gtk from "gi://Gtk?version=4.0"; 
export function theme(argv:string[], themeName?: string) {
  let gtkSettings = Gtk.Settings.get_default();
  if (argv.some((info) => info === "--dark")) {
    gtkSettings.gtk_application_prefer_dark_theme = true;
    gtkSettings.gtk_theme_name = themeName ?? "PRO-dark-XFCE-edition II";
  } else {
    gtkSettings.gtk_application_prefer_dark_theme = false;
    gtkSettings.gtk_theme_name = themeName ?? "Mc-OS-Transparent";
  }
}
