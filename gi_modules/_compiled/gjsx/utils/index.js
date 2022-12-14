import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import Soup from "gi://Soup?version=3.0";
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
export function promiseTask(object, method, finishMethod, ...args) {
  return new Promise((resolve, reject) => {
    object[method](...args, (self, asyncResult) => {
      try {
        resolve(object[finishMethod](asyncResult));
      } catch (err) {
        reject(err);
      }
    });
  });
}
export default async function fetch(url, options) {
  if (typeof url === "object") {
    options = url;
    url = options.url;
  }
  const session = new Soup.Session();
  const method = options.method || "GET";
  const uri = GLib.Uri.parse(url, GLib.UriFlags.NONE);
  const message = new Soup.Message({
    method,
    uri,
  });
  const headers = options.headers || {};
  const request_headers = message.get_request_headers();
  for (const header in headers) {
    request_headers.append(header, headers[header]);
  }
  if (typeof options.body === "string") {
    message.set_request_body_from_bytes(null, new GLib.Bytes(options.body));
  }
  const inputStream = await promiseTask(
    session,
    "send_async",
    "send_finish",
    message,
    null,
    null
  );
  const { status_code, reason_phrase } = message;
  const ok = status_code >= 200 && status_code < 300;
  return {
    status: status_code,
    statusText: reason_phrase,
    ok,
    type: "basic",
    async json() {
      const text = await this.text();
      return JSON.parse(text);
    },
    async text() {
      const gBytes = await this.gBytes();
      return new TextDecoder().decode(gBytes.toArray());
    },
    async arrayBuffer() {
      const gBytes = await this.gBytes();
      return gBytes.toArray().buffer;
    },
    async gBytes() {
      const outputStream = Gio.MemoryOutputStream.new_resizable();
      await promiseTask(
        outputStream,
        "splice_async",
        "splice_finish",
        inputStream,
        Gio.OutputStreamSpliceFlags.CLOSE_TARGET |
          Gio.OutputStreamSpliceFlags.CLOSE_SOURCE,
        GLib.PRIORITY_DEFAULT,
        null
      );
      const bytes = outputStream.steal_as_bytes();
      return bytes;
    },
  };
}
