import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../lib/gjsx.js";
// import ByteArray from "byteArray"

// template file path is based on the root folder
const Template =(
  <xml>
<interface>
	<template class="MyWidget">
		<property name="layout-manager">
			<object class="GtkBinLayout"/>
		</property>
		<child>
			<object class="GtkLabel">
				<property name="label">Hello World</property>
			</object>
		</child>
	</template>
</interface>
</xml> )


const WelcomeWidget = function () {
  return (GObject.registerClass(
    {
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
      {/* {names.map((name, i) => (
        <Gtk.Button onClicked={(button) => {
          if (button.label !== name) {
            button.label = name;
          } else {
            button.label = `Button ${i} was pressed`;
          }
        }}
          halign={Gtk.Align.CENTER}
          label={name}
        />
      ))} */}
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
