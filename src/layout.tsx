import Gtk from "gi://Gtk?version=4.0";
import { getFileInfo, writeTextFileSync } from "../lib/util.js";
import Gjsx from "gjsx";
import { __dirname } from "./main.js";
import Webkit from "gi://WebKit2?version=5.0";
import Util from "gjsx/utils";
import Gio from "gi://Gio";

const horizontal = Gtk.Orientation.HORIZONTAL;
const spawn = Util.execCmd;
export function exec(cmd: string, opt?: { logfile: string }) {
  let [done, stdout, stderr] = spawn(`${cmd}`);
  let decoded = new TextDecoder().decode(stdout);
  log(decoded);
  if (opt?.logfile)
    writeTextFileSync(
      Gio.File.new_for_path(`/var/log/${opt?.logfile}`),
      stdout
    );
}
export function HeadLayout({
  services,
}: {
  services: {
    name: string;
    executable: string | string[];
    icon_path?: string;
    icon_name?: string;
  }[];
}) {
  let webview = new Webkit.WebView();
  webview.load_uri("http://0.0.0.0:8086");
  let logo = __dirname + "/assets/images/cnxt.png";

  return (
    <Gtk.Box spacing={18} style={{ padding: "5px" }} orientation={horizontal}>
      <Gtk.Image file={logo} style={{ marginLeft: "5px" }} pixel_size={100} />

      {services.map(
        ({ name, executable: execCmd, icon_path, icon_name }, i) => {
          function clickHandler(self: Gtk.Button) {
            typeof execCmd === "string"
              ? exec(execCmd, { logfile: "clickhandle.log" })
              : exec(execCmd.join(" "), { logfile: "clickhandle.log" });
            try {
              webview.run_javascript(
                'clickmsg("willy lumpppp lump");',
                null,
                function (self: Webkit.WebView, res: Gio.AsyncResult) {
                  self.run_javascript_finish(res);
                }
              );
            } catch (error) {
              logError(error);
            }
          }
          return (
            <Gtk.Button
              onClicked={clickHandler}
              halign={Gtk.Align.CENTER}
              label={name}
            >
              <Gtk.Image file={__dirname + "/" + icon_path} pixel_size={50} />
            </Gtk.Button>
          );
        }
      )}
    </Gtk.Box>
  );
}
