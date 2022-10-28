import Gtk from "gi://Gtk?version=4.0";
import Gio from "gi://Gio";
import GObject from "gi://GObject";
import Gjsx from "../lib/gjsx.js";
import { readTextFileSync } from "../lib/util.js";
// import ByteArray from "byteArray"

// template file path is based on the root folder
const Template = readTextFileSync(Gio.File.new_for_path("gtk4-template.ui"));


<template>
  <object class="GtkVideo" id="video"></object>
</template>

const WelcomeWidget = function () {
  return (GObject.registerClass(
    {
      GTypeName: "FbrWelcomeWidget",
      Template
    },
    class extends Gtk.Widget { }
  ));
}

export function Layout({ names }: { names: string[] }) {
  return (
    <Gtk.Box
      spacing={18}
      valign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
    >
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      <WelcomeWidget />
      {names.map((name, i) => (
        <Gtk.Button onClicked={(button: Gtk.Button) => {
          if (button.label !== name) {
            button.label = name;
          } else {
            button.label = `Button ${i} was pressed`;
          }
        }}
          halign={Gtk.Align.CENTER}
          label={name}
        />
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
