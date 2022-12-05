import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "gjsx";
import { encode } from '../../lib/util.js';

const Template =
  <interface>
    <template class="MyWidget">
      <property name="layout-manager">
        <object class="GtkBinLayout" ></object>
      </property>
      <child>
        <object class="GtkLabel" id="label">
          <property name="label">Hello World</property>
        </object>
      </child>
    </template>
  </interface>;

export const Demo = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template: encode(Template) as any
  },
  class Demo2 extends Gtk.Box { }
);

