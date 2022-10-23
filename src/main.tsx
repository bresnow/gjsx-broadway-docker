import * as Gtk from "gi://Gtk?version=4.0";
import Gjsx from "./lib/gjsx.js";
Gtk.init();
let argv = ARGV;
let gtkSettings = Gtk.Settings.get_default();

if (argv.some((info) => info === "--dark")) {
  let gtkSettings = Gtk.Settings.get_default();
  gtkSettings.gtk_application_prefer_dark_theme = true;
  gtkSettings.gtk_theme_name = "PRO-dark-XFCE-edition II";
} else {
  let gtkSettings = Gtk.Settings.get_default();
  gtkSettings.gtk_application_prefer_dark_theme = false;

  gtkSettings.gtk_theme_name = "Adwaita";
}
const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = ["Hello", "Hyperscript", "Gtk"];

  return (
    <Gtk.ApplicationWindow title="Hello World" application={app}>
      <Gtk.Box
        spacing={18}
        valign={Gtk.Align.CENTER}
        orientation={Gtk.Orientation.VERTICAL}
      >
        <Gtk.Label label={"Text label as widget tag"} wrap={true} />
        {names.map((name) => name)}
        {"Text label as string.\n Placed right in the jsx markup."}
        <Gtk.Button
          label={"Now with events!"}
          onClicked={() => (names[1] = "hello world")}
          halign={Gtk.Align.CENTER}
        />
      </Gtk.Box>
    </Gtk.ApplicationWindow>
  );
};

const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
app.run([]);
