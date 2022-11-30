import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
export const AppPanel = GObject.registerClass(
  { GTypeName: "Panel" },
  class extends Gtk.Widget {
    constructor(param) {
      super(param);
      this.build();
    }
    build() {
      var box = new Gtk.Box({
        orientation: Gtk.Orientation.HORIZONTAL,
        spacing: 10,
      });
      Gio.DesktopAppInfo.set_desktop_env("GNOME");
      let apps = Gio.AppInfo.get_all();
      for (let i in apps) {
        let app = apps[i];
        if (app.should_show()) {
          var image = new Gtk.Image({ gicon: app.get_icon() });
          var button = new Gtk.Button({ label: app.get_display_name() });
          button.set_child(image);
          box.append(button);
          button.connect("clicked", function (button2) {
            try {
              let context = button2.get_display().get_app_launch_context();
              app.launch([], context);
            } catch (err) {
              print(err);
            }
          });
        }
      }
      let scroll = new Gtk.ScrolledWindow({ vexpand: true });
      scroll.set_child(box);
      scroll.set_child_visible(true);
    }
  }
);
