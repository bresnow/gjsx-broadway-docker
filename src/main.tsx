import * as Gtk from "gi://Gtk?version=4.0";
import * as GObject from "gi://GObject";
import * as Gio from "gi://Gio";
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

const file = Gio.File.new_for_path("gtk4-template.ui");
const [, template] = file.load_contents(null);

/*
 * Widget rendered from XML template.
 * */

export const WelcomeWidget = GObject.registerClass(
  {
    GTypeName: "FbrWelcomeWidget",
    Template: template,
  },
  class extends Gtk.Widget {}
);
const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0",
    "Simplest React For Gjs Library",
  ];

  return (
    <Gtk.ApplicationWindow title="Hello World" application={app}>
      <Layout names={names} />
    </Gtk.ApplicationWindow>
  );
};

function Layout({ names }: { names: string[] }) {
  return (
    <Gtk.Box
      spacing={18}
      valign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
    >
      <WelcomeWidget />
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      {names.map((name) => (
        <Gtk.Button label={name} />
      ))}
      {"Text label as string. Placed right in the jsx markup."}
      <Gtk.Button
        label={"Pushing My Buttons"}
        onClicked={(button) => {
          log("Event fired!!");
          button.label = "Pushed Real Guuud";
        }}
        halign={Gtk.Align.CENTER}
      />
    </Gtk.Box>
  );
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
app.run([]);
