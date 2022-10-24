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
const ExampleWindow = GObject.registerClass(
  {
    GTypeName: "ExampleWindow",
    Template: template,
    Children: ["box"],
    InternalChildren: ["button"],
  },
  class ExampleWindow extends Gtk.Window {
    constructor(params = {}) {
      super(params);
      this.box.visible = true;
      // Internal children are set on the instance prefixed with a `_`
      this._button.visible = true;
    }
    // The signal handler bound in the UI file
    _onButtonClicked(button) {
      if (this instanceof Gtk.Window)
        log("Callback scope is bound to `ExampleWindow`");
      button.label = "Button was clicked!";
    }
  }
);

const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = ["Hello", "Hyperscript", "Gtk"];

  return (
    <ExampleWindow title="Hello World" application={app}>
      <Layout names={names} />
    </ExampleWindow>
  );
};

function Layout({ names }: { names: string[] }) {
  return (
    <Gtk.Box
      spacing={18}
      valign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
    >
      <Gtk.Overlay>
        <Gtk.Entry />
      </Gtk.Overlay>
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      {names.map((name) => (
        <Gtk.Button label={name} />
      ))}
      {"Text label as string.\n Placed right in the jsx markup."}
      <Gtk.Button
        label={"Pushing My Buttons"}
        onClicked={() => {
          log("Event fired!!");
        }}
        halign={Gtk.Align.CENTER}
      />
    </Gtk.Box>
  );
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
app.run([]);
