import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gjsx";
// import ByteArray from "byteArray"
// The build script will automatically compile ui tags down to string.
const Template = () => (
  <interface>
    <template class="MyWidget" parent="GtkBox">
      <child>
        <object class="GtkButton">
          <property name="label">Click Me</property>
          <signal name="clicked" handler="onButtonClicked" />
        </object>
      </child>
    </template>
  </interface>)

const MyWidget = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template: <Template />
  },
  class extends Gtk.Box {
    constructor() {
      super();
      this.orientation = Gtk.Orientation.HORIZONTAL;
      this.initialize();
    }
    initialize() {
      let button = new Gtk.Button({ label: "Click" });
      button.connect("clicked", (button) => {
        log(button.label);
      });
      this.append(button);
    }
    onButtonClicked(button) {
      log(button.label); // Click Me
    }
  }
);

export function Layout({ names }: { names: string[] }) {
  return (
    <Gtk.Box
      spacing={18}
      valign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
    >
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      <MyWidget >
        {"Text label as string. Placed right in the jsx markup."}
      </MyWidget>
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
