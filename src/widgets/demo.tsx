import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gjsx";
const Template = `<?xml version="1.0" encoding="UTF-8"?>
  <interface>
  <template class="Demo" parent="GtkBox">
    <child>
      <object class="GtkVideo" id="video"></object>
    </child>
    <child>
      <object class="GtkPicture" id="picture"></object>
    </child>
  </template>
</interface>`;
export const Demo = GObject.registerClass(
  {
    GTypeName: "Demo",
    Template: new TextEncoder().encode(Template) as any,
  },
  class Demo2 extends Gtk.Box {}
);

const Template1 = (
  <interface>
    <template class="Demo" parent="GtkBox">
      <child>
        <object class="GtkVideo" id="video"></object>
      </child>
      <child>
        <object class="GtkPicture" id="picture"></object>
      </child>
    </template>
  </interface>
);
