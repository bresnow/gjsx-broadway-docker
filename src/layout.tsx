import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gjsx";
// import ByteArray from "byteArray"
// The build script will automatically compile ui tags down to string.


const WelcomeWidget = GObject.registerClass({
  GTypeName: "WelcomeWidget",
}, class WelcomeWidget extends Gtk.Widget {
  label: Gtk.Label
  constructor() {
    super();
  };
  buildUi() {
    print("hello")
  }

}
);

const CustomGrid = GObject.registerClass({GTypeName: "CustomGrid"}, 
class CustomGrid extends Gtk.Grid{
constructor(){
  super();
}
});


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
