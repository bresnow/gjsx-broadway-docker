import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gjsx from "../index.js"
import { TextDecoder } from '../../textcoderlite/index.js';
const File = Gio.File;

export const __dirname = GLib.get_current_dir();

export default function Util() {
    return {
        CssProvider,
        Spawn
    }
}
export function spawn_sync(command: string) {
    return GLib.spawn_command_line_sync(command);
}
/**
 * Execute or stream commands asynchronously
 * @param options 
 * @returns 
 */
function Spawn(options?: { prefix: Record<string, string> }) {
    let prefix: string | undefined, array_prefix: [string, string][] | null = null;
    if (options.prefix) {
        array_prefix = Object.entries(options.prefix)
        prefix = array_prefix.reduce((pre, curr) => {
            let [key, val] = curr;
            return `${pre}` + `${key}=${val} `;
        }, "")
    };
    return {
        exec(command_line: string) {
            return GLib.spawn_command_line_async(prefix && prefix + command_line)
        },
        stream(command_line: string, callback: (data: string | Uint8Array) => void, { decode = true }) {
            command_line = prefix && prefix + command_line;
            let [res, pid, stdin, stdout, stderr] = GLib.spawn_async_with_pipes(
                __dirname, command_line.split(/(\s)+/g), null, GLib.SpawnFlags.SEARCH_PATH, null);

            const stream = new Gio.DataInputStream({ base_stream: new Gio.UnixInputStream({ fd: stdout }) });

            stream.read_line_async(GLib.PRIORITY_LOW, null, function (self: Gio.DataInputStream, res) {

                let [out, length] = self.read_line_finish(res);
                if (out !== null) {
                    if (decode) {
                        callback(TextDecoder().decode(out))
                    } else {
                        callback(out)
                    };
                }
            });
        }


    }
}

/**
 * Utility function for Gtk.CssProvider. 
 * @returns 
 * append(): the provider to widget
 * load(): any css styles as data or file path for individual widgets or globally for the full display.
 * 
 */
function CssProvider() {
    let provider = new Gtk.CssProvider();
    return {
        append(widget: Gtk.Widget) {
            widget.get_style_context().add_provider(provider, null);
        },
        load(data: Record<string, string> | string) {
            if (typeof data !== "string") {
                provider.load_from_data(` * { ${styleObjectToCssData(data)} }`);
            } else {
                let file_uri = GLib.filename_to_uri(data, null)
                const file = File.new_for_uri(file_uri)
                provider.load_from_file(file);
            }
            return {
                display: Gtk.StyleContext.add_provider_for_display(Gdk.Screen.get_default(),
                    provider,
                    Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)

            }
        }
    }
}
function styleObjectToCssData(styleAttr: Record<string, string>) {
    if (typeof styleAttr === "object") {
        return Object.entries(styleAttr).reduce((acc, curr) => {
            let [key, value] = curr;
            key = camelToKebab(key)
            let result = acc + ` ${key}:${value};`
            return result
        }, "");
    } else {
        throw new Error('Style attributes must be an object')
    }
};

function camelToKebab(string: string) {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}