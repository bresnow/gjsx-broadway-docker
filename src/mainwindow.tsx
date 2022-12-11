import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import Gio from "gi://Gio"
import { __dirname } from "./main.js";
import GObject from "gi://GObject";
import { Demo } from "./widgets/demo.js";
import { Video } from './widgets/video.js';
import { StackSwitch, TopOverlay } from './widgets/stackswitch.js';
import { WebMessage } from "./widgets/webmsg_grid.js";

interface Props extends Gtk.Overlay_ConstructProps {
  argument?: string;
}

function widgetArray(arr: typeof Gtk.Widget[]) {
  return arr.map((Widget) => {
    return new Widget();
  });
}


const BgOverlay = GObject.registerClass(
  { GTypeName: "BgOverlay" },
  class BgOverlay extends Gtk.Box {
    _init() {
      super._init();
      const {File} = Gio
      
      let picture = new Gtk.Picture({ file: File.new_for_path("assets/images/mrs_arnold.jpeg") }), overlay, grid = new Gtk.Grid();
      grid.attach(picture, 0, 0, 1, 1);
      this.append(grid)
    }
  }
);

export function MainWindow({
  app,
  reference,
}: {
  app: Gtk.Application;
  reference: any;
}) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/icons/blue/settings.svg",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/icons/blue/list_add.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/icons/blue/mic.svg",
      executable: "gnome-calendar"
    },
  ];
  return (
    <AppWindow application={app}>
      <Gtk.ScrolledWindow>
        <StackSwitch orientation={Gtk.Orientation.VERTICAL} spacing={10}>
          <Demo />
          <WebMessage/>
          <Gtk.Separator orientation={Gtk.Orientation.HORIZONTAL} />
          <HeadLayout services={panel} />
        </StackSwitch>
      </Gtk.ScrolledWindow>
    </AppWindow>
  );
}

function PeerEntry() {
  return <Gtk.Entry label="Peer Cnxt" />;
}
