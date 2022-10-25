import * as Gtk from "gi://Gtk?version=4.0";
import * as Gio from "gi://Gio";
import * as GObject from "gi://GObject";
import Gjsx from "./lib/gjsx.js";

// template file path is based on the root folder
const file = Gio.File.new_for_path("gtk4-template.ui");
const [isLoaded, template] = file.load_contents(null);

/*
 * Widget rendered from XML template.
 *
 */
const WelcomeWidget = GObject.registerClass(
  {
    GTypeName: "FbrWelcomeWidget",
    Template: template,
  },
  class extends Gtk.Widget {}
);

export function Layout({ names }: { names: string[] }) {
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
          print("Event fired!!");
          button.label = "Pushed Real Guuud";
        }}
        halign={Gtk.Align.CENTER}
      />
    </Gtk.Box>
  );
}
