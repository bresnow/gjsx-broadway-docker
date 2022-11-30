import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
const File = Gio.File;

export const __dirname = GLib.get_current_dir();

export default {
    CssProvider,
    execCmd
}
export function atob(data: string) {
    return new TextDecoder().decode(GLib.base64_decode(data));
}

export function btoa(data: Uint8Array) {
    return GLib.base64_encode(data);
}
export function execCmd(command: string) {
    return GLib.spawn_command_line_sync(command);
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
                let file_uri = GLib.filename_to_uri(__dirname + "/" + data, null)
                const file = File.new_for_uri(file_uri)
                provider.load_from_file(file);
            }
            return {
                display: (bool: boolean) => bool && Gtk.StyleContext.add_provider_for_display(Gdk.Display.get_default(),
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