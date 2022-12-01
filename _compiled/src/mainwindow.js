import Gjsx from "../lib/gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";
import { Video } from "./widgets/video.js";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import { giState } from "../lib/gjsx/gistate.js";
import WaveForm from "./widgets/waveform.js";
const Stack = GObject.registerClass(
  {},
  class extends Gtk.Grid {
    _init() {
      super._init();
      let pageOne = new Gtk.StackPage({ child: new Video() }),
        stack = new Gtk.Stack(),
        sidebar = new Gtk.StackSidebar();
      stack.set_vexpand(true);
      stack.set_hexpand(true);
      this.attach(stack, 1, 0, 1, 1);
      let wave = new WaveForm({ content_height: 150 }, null);
      stack.add_titled(
        new Gtk.Video({
          file: Gio.File.new_for_path(__dirname + "/assets/video/shades.webm"),
        }),
        "page_two",
        "Page Two"
      );
      sidebar.set_stack(stack);
      this.attach(sidebar, 0, 0, 1, 1);
    }
  }
);
export function MainWindow({ app, reference }) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/icons/speaker-buffering.png",
      executable: "",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/logo.svg",
      executable: "gtk4-tour",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/logo.svg",
      executable: ["gjs", "-m", "assets/apps/demo.js"],
    },
  ];
  const [state, setter] = giState("Wallalalalalalala");
  setTimeout(() => {
    setter("ShimmyShimmyYahhh");
  }, 1700);
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    {
      application: app,
    },
    /* @__PURE__ */ Gjsx.createWidget(
      BoxContainer,
      {
        css_name: "box",
      },
      /* @__PURE__ */ Gjsx.createWidget(HeadLayout, {
        services: panel,
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
        orientation: Gtk.Orientation.HORIZONTAL,
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
        label: state,
        style: { color: "#fff" },
      })
    )
  );
}
