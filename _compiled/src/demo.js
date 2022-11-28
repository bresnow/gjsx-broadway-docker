import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import { __dirname } from "./main.js";
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
    Template: new TextEncoder().encode(Template),
  },
  class Demo2 extends Gtk.Box {
    _init() {
      super._init();
      this.video.set_file(
        Gio.File.new_for_path(__dirname + "/assets/video/640.mp4")
      );
      this.picture.set_file(
        Gio.File.new_for_path(__dirname + "/assets/images/mrs_arnold.jpg")
      );
    }
  }
);
