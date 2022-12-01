import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gdk from "gi://Gdk"
import Gjsx from "gjsx";
import Gio from 'gi://Gio';
import { __dirname } from './main.js';


const Template =
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

export const Demo = GObject.registerClass({
  GTypeName: 'Demo',
  Template
}, class extends Gtk.Box {
  video: Gtk.Video
  picture: Gtk.Picture
  _init() {
    super._init();
    print(Template)
    this.homogeneous = true;
    this.orientation = Gtk.Orientation.HORIZONTAL;
    this.video.set_file(Gio.File.new_for_path(__dirname + "/assets/video/shades.webm"));
    this.picture.set_file(Gio.File.new_for_path(__dirname + "/assets/images/icons/authentication.png"));
    // this.picture.size_allocate(new Gdk.Rectangle(), 2)
  }

})