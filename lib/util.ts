import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import system from "system";

export function getPath(path: string) {
  const res = `/home/app/${path}`
  return res;
}

export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TimeoutError";
  }
}

export function promiseTask(
  object: any,
  method: string,
  finish: string,
  ...args: any
) {
  return new Promise((resolve, reject) => {
    object[method](...args, (self: any, asyncResult: any) => {
      try {
        resolve(object[finish](asyncResult));
      } catch (err) {
        reject(err);
      }
    });
  });
}

function normalizeEmitter(emitter: { on: any; addListener: any; addEventListener: any; off: any; removeListener: any; removeEventListener: any; }) {
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

function promiseSignal(object: { connect: (arg0: any, arg1: { (self: any, ...params: any[]): void; (self: any, error: any): void; }) => any; disconnect: (arg0: any) => void; }, signal: any, error_signal: string) {
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

export function getGIRepositoryVersion(repo: { get_major_version: any; get_minor_version: any; get_micro_version: any; }) {
  const { get_major_version, get_minor_version, get_micro_version } = repo;
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

export function decode(data: any) {
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

export function gtkSystemTheme(argv: typeof ARGV, themeName?: string) {
  let gtkSettings: Gtk.Settings;
  if (argv.some((info) => info === "--dark")) {
    gtkSettings = Gtk.Settings.get_default();
    gtkSettings.gtk_application_prefer_dark_theme = true;
    gtkSettings.gtk_theme_name = themeName ?? "PRO-dark-XFCE-edition II";
  } else {
    gtkSettings = Gtk.Settings.get_default();
    gtkSettings.gtk_application_prefer_dark_theme = false;
    gtkSettings.gtk_theme_name = themeName ?? "Mc-OS-Transparent";
  }
}
