import fetch from "./std/fetch.js";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk?version=4.0";
import WebSocket from "./std/websocket.js";
Gtk.init();
const resolve = (path) => {
  const file = Gio.File.new_for_uri(import.meta.url);
  return imports.gi.Gio.File.new_for_uri(import.meta.url)
    .get_parent()
    .resolve_relative_path(path);
};
const _current = () => {
  const [filename] = GLib.filename_from_uri(import.meta.url);
  return GLib.path_get_dirname(filename);
};
const __dirname = GLib.get_current_dir();
let arr = GLib.get_environ();
let env = arr.reduce((acc, curr) => {
  let [key, value] = curr.split("=");
  return { ...acc, [key]: value };
}, {});
export function installGlobals() {
  return Object.entries({ env, __dirname, fetch, WebSocket }).forEach(
    ([key, value]) => {
      if (!globalThis[key]) globalThis[key] = value;
    }
  );
}
