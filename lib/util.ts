import Gtk from "gi://Gtk?version=4.0";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

// https://gitlab.gnome.org/GNOME/gjs/-/merge_requests/784
export function* readDirSync(file: Gio.File) {
  const enumerator = file.enumerate_children(
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );

  while (true) {
    try {
      const info = enumerator.next_file(null);
      if (info === null) break;
      yield enumerator.get_child(info);
    } catch (err) {
      enumerator.close(null);
      throw err;
    }
  }
  enumerator.close(null);
}

export function readTextFileSync(file:Gio.File) {
  const [, contents] = file.load_contents(null);
  return decode(contents);
}

export function writeTextFileSync(file:Gio.File, contents:Uint8Array) {
  file.replace_contents(
    contents, // contents
    null, // etag
    false, // make_backup
    Gio.FileCreateFlags.NONE, // flags
    null, // cancellable
  );
}

export function decode(data:any) {
  //@ts-ignore
  return new TextDecoder().decode(data);
}

export function appIdToPrefix(appid: string) {
  return `/${appid.replace(".", "/")}`;
}

export function basename(filename: string) {
  const [name, basename, extension] =
    GLib.path_get_basename(filename).match(/(.+?)(\.[^.]*$|$)/);
  return [name, basename, extension];
}

export function theme(argv: typeof ARGV, themeName?: string) {
  let gtkSettings = Gtk.Settings.get_default();
  if (argv.some((info) => info === "--dark")) {
    let gtkSettings = Gtk.Settings.get_default();
    gtkSettings.gtk_application_prefer_dark_theme = true;
    gtkSettings.gtk_theme_name = themeName ?? "PRO-dark-XFCE-edition II";
  } else {
    let gtkSettings = Gtk.Settings.get_default();
    gtkSettings.gtk_application_prefer_dark_theme = false;
    gtkSettings.gtk_theme_name = themeName ?? "Mc-OS-Transparent";
  }
}