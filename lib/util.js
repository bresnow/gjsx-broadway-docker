import Gtk from "gi://Gtk?version=4.0";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
export function* readDirSync(file) {
  const enumerator = file.enumerate_children(
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null
  );
  while (true) {
    try {
      const info = enumerator.next_file(null);
      if (info === null)
        break;
      yield enumerator.get_child(info);
    } catch (err) {
      enumerator.close(null);
      throw err;
    }
  }
  enumerator.close(null);
}
export function readTextFileSync(file) {
  const [, contents] = file.load_contents(null);
  return decode(contents);
}
export function writeTextFileSync(file, contents) {
  file.replace_contents(
    contents,
    null,
    false,
    Gio.FileCreateFlags.NONE,
    null
  );
}
export function decode(data) {
  return new TextDecoder().decode(data);
}
export function appIdToPrefix(appid) {
  return `/${appid.replace(".", "/")}`;
}
export function basename(filename) {
  const [name, basename2, extension] = GLib.path_get_basename(filename).match(/(.+?)(\.[^.]*$|$)/);
  return [name, basename2, extension];
}
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
