import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import system from "system";
import { installGlobals } from "./globals.js";
const File = Gio.File;
export const __dirname = GLib.get_current_dir();
export function atob(data) {
  return new TextDecoder().decode(GLib.base64_decode(data));
}
export function btoa(data) {
  return GLib.base64_encode(data);
}
export function execCmd(command) {
  return GLib.spawn_command_line_sync(command);
}
export function CssProvider() {
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
        display: (bool) =>
          bool &&
          Gtk.StyleContext.add_provider_for_display(
            Gdk.Display,
            provider,
            Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
          ),
      };
    },
    provider,
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
export function promiseTask(object, method, finishMethod, ...args) {
  return new Promise((resolve2, reject) => {
    object[method](...args, (self, asyncResult) => {
      try {
        resolve2(object[finishMethod](asyncResult));
      } catch (err) {
        reject(err);
      }
    });
  });
}
export class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
}
function normalizeEmitter(emitter) {
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
function promiseSignal(object, signal, error_signal) {
  return new Promise((resolve2, reject) => {
    const handler_id = object.connect(signal, handler);
    let error_handler_id;
    function cleanup() {
      object.disconnect(handler_id);
      if (error_handler_id) object.disconnect(error_handler_id);
    }
    if (error_signal) {
      error_handler_id = object.connect(error_signal, (self, error) => {
        cleanup();
        reject(error);
      });
    }
    function handler(self, ...params) {
      cleanup();
      resolve2(params);
    }
  });
}
function promiseEvent(object, signal, error_signal) {
  const { addListener, removeListener } = normalizeEmitter(object);
  return new Promise((resolve2, reject) => {
    addListener(signal, listener);
    function cleanup() {
      removeListener(signal, listener);
      if (error_signal) removeListener(error_signal, error_listener);
    }
    if (error_signal) {
      addListener(error_signal, error_listener);
    }
    function error_listener(err) {
      cleanup();
      reject(err);
    }
    function listener(...params) {
      cleanup();
      resolve2(params);
    }
  });
}
export function delay(ms) {
  let timeout_id;
  const promise = new Promise((resolve2) => {
    setTimeout(() => {
      resolve2();
    }, ms);
  });
  return promise;
}
async function timeout(ms) {
  return delay(ms).then(() => {
    throw new TimeoutError(`Promise timed out after ${ms} milliseconds`);
  });
}
export function once(
  object,
  signal,
  options = {
    error: "",
    timeout: -1,
  }
) {
  let promise;
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
    clearTimeout(promise_timeout.timeout_id);
  });
}
function noop(...args) {}
export class Deferred extends Promise {
  resolve;
  reject;
  constructor(def) {
    let res, rej;
    super((resolve2, reject) => {
      def(resolve2, reject);
      res = resolve2;
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
export function resolve(uri, path) {
  return GLib.build_filenamev([
    GLib.path_get_dirname(GLib.Uri.parse(uri, null).get_path()),
    path,
  ]);
}
export function getPid() {
  const credentials = new Gio.Credentials();
  return credentials.get_unix_pid();
}
export function getFileInfo() {
  let stack = new Error().stack,
    stackLine = stack.split("\n")[1],
    coincidence,
    path,
    file;
  if (!stackLine) throw new Error("Could not find current file (1)");
  coincidence = new RegExp("@(.+):\\d+").exec(stackLine);
  if (!coincidence) throw new Error("Could not find current file (2)");
  path = coincidence[1];
  file = Gio.File.new_for_path(path);
  let route = file.get_parent().get_path().split(":")[1];
  let current = route + "/" + file.get_basename();
  return [route.replace("_compiled", ""), current, file.get_basename()];
}
export function* readDirSync(file) {
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
export function readTextFileSync(file) {
  const [, contents] = file.load_contents(null);
  return decode(contents);
}
export function writeTextFileSync(file, contents) {
  file.replace_contents(contents, null, false, Gio.FileCreateFlags.NONE, null);
}
export function encode(data) {
  return new TextEncoder().encode(data);
}
export function decode(data) {
  return new TextDecoder().decode(data);
}
export function appIdToPrefix(appid) {
  return `/${appid.replace(".", "/")}`;
}
export function basename(filename) {
  const [name, basename2, extension] =
    GLib.path_get_basename(filename).match(/(.+?)(\.[^.]*$|$)/);
  return [name, basename2, extension];
}
export function gtkSystemTheme() {
  let gtkSettings;
  const theme = GLib.getenv("GTK_THEME");
  gtkSettings = Gtk.Settings.get_default();
  gtkSettings.gtk_application_prefer_dark_theme = false;
  gtkSettings.gtk_theme_name = theme;
}
export * from "./subprocess.js";
export { installGlobals };
