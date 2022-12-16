import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gi://Gjsx";
const { encode } = Gjsx;
/**
 * Use JSX as a Builder Resource to build Gtk Widgets as if it were .ui files. 
 * Gtk.Builder.new_from_string would also work as the Gjsx.render() function returns
 *  these intrinsic jsx/xml properties as a string.
 */
const ButtonResource = ({ id, align, label, clickhandler, className, ...prop }: Partial<Record<string, string>>) => {
  return (
    <object class="GtkButton" id={id ??"button"}>
      <property name="label">{label ?? " #PressPlay"}</property>
      <property name="halign">{align ?? "center"}</property>
      {Object.entries(prop).map(([key, value]) => {
        if (typeof value === "string") {
          return <property name={key} >{value}</property>;
        }
      })}
      <signal name="clicked" handler={clickhandler ?? "onButtonClicked"}></signal>
      <style>
        <class name={className ?? "suggested-action"} />
      </style>
    </object>)
}
const ResourceTemplateDemo =
  <interface>
    <template class="MyWidget" >
      <property name="layout-manager">
        <object class="GtkBoxLayout">
          <property name="orientation">vertical</property>
        </object>
      </property>
      <child>
        <object class="GtkImage" id="picture">
          <property name="file">/home/app/assets/images/cnxt.png</property>
          <property name="icon-size">large</property>
          <property name="pixel-size">300</property>
        </object>
      </child>
      <child>
        <object class="GtkLabel" id="welcomeLabel">
          <property name="visible">false</property>
          <property name="wrap">true</property>
          <property name="justify">center</property>
        </object>
      </child>
      <child>
        {ButtonResource()}
      </child>
    </template>
  </interface>
const label_buttons =
  <interface>
    <object class="GtkBox" id="root">
      <property name="orientation">vertical</property>
      <child>
        <object class="GtkLabel" id="helloLabel">
          <property name="vexpand">1</property>
          <property name="label">Hello World!</property>
        </object>
      </child>
      <child>
        <ButtonResource id="actionButton" align="baseline" label="XDESK" clickhandler="activate" />
      </child>
      <child>
        <ButtonResource id="closeButton" align="baseline" label="PaidMedia" recieves_default="1" />
      </child>
    </object>
  </interface>


export const Demo = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template: encode(ResourceTemplateDemo)
  },
  class extends Gtk.Box {
    _init() {
      super._init();
    };
    onButtonClicked(_button: Gtk.Button) {
      let window: Gtk.Window, builder: Gtk.Builder, app = new Gtk.Application();
      try {
        window = new Gtk.Window({ application: app }), builder = Gtk.Builder.new_from_string(label_buttons, label_buttons.length)
        let root = builder.get_object('root');

        var actionButton = builder.get_object('actionButton');
        actionButton.connect('clicked', () => {
          print('actionButton clicked')
        })

        var closeButton = builder.get_object('closeButton')
        closeButton.connect('clicked', () => {
          print('closeButton clicked')
        });
        window.set_child(root as Gtk.Button)
        window.show()
        window.present()
        app.run([])
      } catch (error) {
        _button.label = error.message
      }
    }
  }
);

