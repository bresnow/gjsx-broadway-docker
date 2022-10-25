import * as Gtk from "gi://Gtk?version=4.0";
import * as GObject from "gi://GObject";
import * as Gio from "gi://Gio";
import Gjsx from "./lib/gjsx.js";
import {Layout} from "./layout.js"
Gtk.init();
let argv = ARGV;
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

const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
app.run([]);
