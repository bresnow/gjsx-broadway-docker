import Gtk from "gi://Gtk?version=4.0";
import GLib from "gi://GLib";
import Gjsx from "../lib/gjsx/index.js";
import { gtkSystemTheme } from "../lib/util.js";
import util from "../lib/gjsx/utils/index.js";
import { MainWindow } from "./mainwindow.js";
Gtk.init();
const css = util.CssProvider();
const spawn = util.execCmd;
let argv = ARGV;
gtkSystemTheme(argv);
css.load("assets/styles.css").display;
export const __dirname = GLib.get_current_dir();
const app = new Gtk.Application();
exec('echo "DONE"');
app.connect("activate", () => {
  Gjsx.render(
    /* @__PURE__ */ Gjsx.createWidget(MainWindow, {
      app,
    })
  );
});
app.run([]);
function exec(cmd = "") {
  let [done, stdout, stderr] = spawn(`${cmd}`);
  print("EXEC CMD");
  print(new TextDecoder().decode(stdout));
}
