import Gtk from "gi://Gtk?version=4.0";
import { getFileInfo, writeTextFileSync } from "../lib/util.js";
import Gjsx from "gjsx";
import { __dirname } from './main.js';
import Webkit from "gi://WebKit2?version=5.0";
import Util from "gjsx/utils"
import Gio from "gi://Gio";

const horizontal = Gtk.Orientation.HORIZONTAL;
const spawn = Util.execCmd;
export function exec(cmd: string, opt?: { logfile: string; }) {
  let [done, stdout, stderr] = spawn(`${cmd}`);
  let decoded = new TextDecoder().decode(stdout);
  log(decoded)
  if (opt?.logfile)
    writeTextFileSync(Gio.File.new_for_path(`/var/log/${opt?.logfile}`), stdout)
}
export function HeadLayout({ services }: { services: { name: string; executable: string | string[]; icon_path?: string; icon_name?: string }[] }) {
  let webView = new Webkit.WebView();
  webView.load_uri('http://0.0.0.0:8086');
  let logo = __dirname + "/assets/images/cnxt.png"

  return (
    <Gtk.Box
      spacing={18}
      style={{ padding: '5px' }}
      orientation={horizontal}
    >
      <Gtk.Image
        file={logo}
        pixel_size={100}
      />

      {services.map(({ name, executable: execCmd, icon_path, icon_name }, i) => {
        function clickHandler(self: Gtk.Button) {
          if (self.has_frame) {
            self.set_has_frame(false)
            typeof execCmd === "string" ? exec(execCmd) : exec(execCmd.join(" "))
            try {
              let doc = webView
              doc.run_javascript(`clickmsg(${name}); test(12345678);`, null, function (self: Webkit.WebView, res, err) {
                self.run_javascript_finish(res)
              })
            } catch (error) {
              logError(error)
            }
          } else {
            self.set_has_frame(true)
          }

        }
        return (
          <Gtk.Button
            css_name="button"
            onClicked={clickHandler}
            halign={Gtk.Align.CENTER}
            label={name}
          ><Gtk.Image file={__dirname + "/" + icon_path} pixel_size={150} /></Gtk.Button>
        )
      })}
    </Gtk.Box>
  );
}
