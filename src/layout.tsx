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
    Template: JSON.stringify(
        <\?xml version="1.0" encoding="UTF-8"\?>
<interface>
	<template class="FbrWelcomeWidget">
		<property name="layout-manager">
			<object class="GtkBoxLayout">
				<property name="orientation">vertical</property>
				<property name="spacing">18</property>
			</object>
		</property>
		<child>
			<object class="GtkImage">
				<property name="icon-name">system-file-manager-symbolic</property>
				<property name="icon-size">large</property>
			</object>
		</child>
		<child>
			<object class="GtkLabel">
				<property name="label">Welcome to our new file browser!</property>
				<property name="wrap">true</property>
				<property name="justify">center</property>
			</object>
		</child>
		<child>
			<object class="GtkButton">
				<property name="label">Let's go!</property>
				<property name="halign">center</property>
			</object>
		</child>
	</template>
</interface>)
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
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      <WelcomeWidget />
      {names.map((name, i) => (
        <Gtk.Button
          onClicked={(button) => {
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
