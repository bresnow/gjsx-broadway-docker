import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import system from 'system';
import { installGlobals } from './globals.js';
const File = Gio.File;

export const __dirname = GLib.get_current_dir();

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
export function CssProvider() {
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
              //@ts-ignore
                display: (bool: boolean) => bool && Gtk.StyleContext.add_provider_for_display(Gdk.Display,
                    provider,
                    Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)

            }
        },
        provider
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

export function promiseTask<ResolveType>(
  object: any,
  method: string,
  finishMethod: string,
  ...args: any
): Promise<ResolveType> {
  return new Promise((resolve, reject) => {
    object[method](...args, (self: any, asyncResult: any) => {
      try {
        resolve(object[finishMethod](asyncResult));
      } catch (err) {
        reject(err);
      }
    });
  });
}
export class TimeoutError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TimeoutError";
    }
}

function normalizeEmitter(emitter: any) {
    const addListener =
        emitter.on || emitter.addListener || emitter.addEventListener;
    const removeListener =
        emitter.off || emitter.removeListener || emitter.removeEventListener;

    if (!addListener || !removeListener) {
        throw new TypeError("Emitter is not compatible");
    }

    return {
        addListener: addListener.bind(emitter),
        removeListener: removeListener.bind(emitter),
    };
}

function promiseSignal<Namespace,>(object: { connect: (arg0: any, arg1: { (self: any, ...params: any[]): void; (self: any, error: any): void; }) => any; disconnect: (arg0: any) => void; }, signal: any, error_signal: string) {
    return new Promise((resolve, reject) => {
        const handler_id = object.connect(signal, handler);
        let error_handler_id: any;

        function cleanup() {
            object.disconnect(handler_id);
            if (error_handler_id) object.disconnect(error_handler_id);
        }

        if (error_signal) {
            error_handler_id = object.connect(error_signal, (self: any, error: any) => {
                cleanup();
                reject(error);
            });
        }

        function handler(self: any, ...params: any[]) {
            cleanup();
            resolve(params);
        }
    });
}

function promiseEvent(object: any, signal: any, error_signal: string) {
    const { addListener, removeListener } = normalizeEmitter(object);

    return new Promise((resolve, reject) => {
        addListener(signal, listener);

        function cleanup() {
            removeListener(signal, listener);
            if (error_signal) removeListener(error_signal, error_listener);
        }

        if (error_signal) {
            addListener(error_signal, error_listener);
        }

        function error_listener(err: any) {
            cleanup();
            reject(err);
        }

        function listener(...params: any[]) {
            cleanup();
            resolve(params);
        }
    });
}

export function delay(ms: number) {
    let timeout_id: any;
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
    return promise;
}

async function timeout(ms: number) {
    return delay(ms).then(() => {
        throw new TimeoutError(`Promise timed out after ${ms} milliseconds`);
    });
}

export function once(
    object: { connect: any; disconnect: any; },
    signal: any,
    options = {
        error: "",
        timeout: -1,
    }
) {
    let promise: Promise<unknown>;
    if (object.connect && object.disconnect) {
        promise = promiseSignal(object, signal, options.error);
    } else {
        promise = promiseEvent(object, signal, options.error);
    }

    if (options.timeout < 0) {
        return promise;
    }

    const promise_timeout = timeout(options.timeout);
    return Promise.race([promise, promise_timeout]).finally(() => {
        // @ts-ignore
        clearTimeout(promise_timeout.timeout_id);
    });
}

function noop(...args: any[]) { }

export class Deferred extends Promise<any> {
    resolve: any;
    reject: any;
    constructor(def: typeof noop) {
        let res: any, rej: any;
        super((resolve: any, reject: any) => {
            def(resolve, reject);
            res = resolve;
            rej = reject;
        });
        this.resolve = res;
        this.reject = rej;
    }
}


export function getGtkVersion() {
    const { get_major_version, get_minor_version, get_micro_version } = Gtk;
    return `${get_major_version()}.${get_minor_version()}.${get_micro_version()}`;
}

export function getGLibVersion() {
    return `${GLib.MAJOR_VERSION}.${GLib.MINOR_VERSION}.${GLib.MICRO_VERSION}`;
}

export function getGjsVersion() {
    const v = system.version.toString();
    return `${v[0]}.${+(v[1] + v[2])}.${+(v[3] + v[4])}`;
}

// To use with import.meta.url
export function resolve(uri: string, path: string) {
    return GLib.build_filenamev([
        GLib.path_get_dirname(GLib.Uri.parse(uri, null).get_path()),
        path,
    ]);
}

export function getPid() {
    const credentials = new Gio.Credentials();
    return credentials.get_unix_pid();
}
export function getFileInfo(): string[] {
    let stack = new Error().stack,
        stackLine = stack.split("\n")[1],
        coincidence: any[],
        path: string,
        file: Gio.File;
    if (!stackLine) throw new Error("Could not find current file (1)");
    coincidence = new RegExp("@(.+):\\d+").exec(stackLine);
    if (!coincidence) throw new Error("Could not find current file (2)");
    path = coincidence[1];
    file = Gio.File.new_for_path(path);
    let route = file.get_parent().get_path().split(":")[1];
    let current = route + "/" + file.get_basename();
    return [route.replace("_compiled", ""), current, file.get_basename()];
}
// https://gitlab.gnome.org/GNOME/gjs/-/merge_requests/784
export function* readDirSync(file: Gio.File) {
    const enumerator = file.enumerate_children(
        "standard::name",
        Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
        null
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

export function readTextFileSync(file: Gio.File) {
    const [, contents] = file.load_contents(null);
    return decode(contents);
}

export function writeTextFileSync(file: Gio.File, contents: Uint8Array) {
    file.replace_contents(
        contents, // contents
        null, // etag
        false, // make_backup
        Gio.FileCreateFlags.NONE, // flags
        null // cancellable
    );
}

export function encode(data: string) {
    return new TextEncoder().encode(data);
}

export function decode(data: Uint8Array) {
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

export function gtkSystemTheme() {
    let gtkSettings: Gtk.Settings;
    const theme = GLib.getenv("GTK_THEME")
    gtkSettings = Gtk.Settings.get_default();
    gtkSettings.gtk_application_prefer_dark_theme = false;
    gtkSettings.gtk_theme_name = theme;

}

export * from "./subprocess.js"
export {installGlobals}