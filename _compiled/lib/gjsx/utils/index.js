import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import { TextDecoder } from "../../textcoderlite/index.js";
const File = Gio.File;
export const __dirname = GLib.get_current_dir();
export default function Util() {
  return {
    CssProvider,
    Spawn,
  };
}
export function spawn_sync(command) {
  return GLib.spawn_command_line_sync(command);
}
function Spawn(options) {
  let prefix,
    array_prefix = null;
  if (!options?.prefix) {
    prefix = "";
  } else {
    array_prefix = Object.entries(options.prefix);
    prefix = array_prefix.reduce((pre, curr) => {
      let [key, val] = curr;
      return `${pre}${key}=${val} `;
    }, "");
  }
  return {
    exec(command_line) {
      return GLib.spawn_command_line_async(prefix + command_line);
    },
    stream(command_line, callback, { decode = true }) {
      let [res, pid, stdin, stdout, stderr] = GLib.spawn_async_with_pipes(
        __dirname,
        command_line.split(/(\s)+/),
        null,
        GLib.SpawnFlags.SEARCH_PATH,
        null
      );
      const stream = new Gio.DataInputStream({
        base_stream: new Gio.UnixInputStream({ fd: stdout }),
      });
      stream.read_line_async(GLib.PRIORITY_LOW, null, function (self, res2) {
        let [out, length] = self.read_line_finish(res2);
        if (out !== null) {
          if (decode) {
            callback(TextDecoder().decode(out));
          } else {
            callback(out);
          }
        }
      });
    },
  };
}
function CssProvider() {
  let provider = new Gtk.CssProvider();
  return {
    append(widget) {
      widget.get_style_context().add_provider(provider, null);
    },
    load(data) {
      if (typeof data !== "string") {
        provider.load_from_data(` * { ${styleObjectToCssData(data)} }`);
      } else {
        let file_uri = GLib.filename_to_uri(__dirname + "/" + data, null);
        const file = File.new_for_uri(file_uri);
        provider.load_from_file(file);
      }
      return {
        display: Gtk.StyleContext.add_provider_for_display(
          Gdk.Display.get_default(),
          provider,
          Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        ),
      };
    },
  };
}
function styleObjectToCssData(styleAttr) {
  if (typeof styleAttr === "object") {
    return Object.entries(styleAttr).reduce((acc, curr) => {
      let [key, value] = curr;
      key = camelToKebab(key);
      let result = acc + ` ${key}:${value};`;
      return result;
    }, "");
  } else {
    throw new Error("Style attributes must be an object");
  }
}
function camelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
