import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";
import GObject from "gi://GObject";
import { Demo } from "./widgets/demo.js";
import { Video } from './widgets/video.js';
import { StackSwitch } from './widgets/stackswitch.js';

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
      let picture = new Gtk.Picture({ file: "assets/images/mrs_arnold.jpeg" }), overlay, grid = new Gtk.Grid();
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
      icon_path: "assets/images/fltngmmth/Black_fullStack.png",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/logo.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/logo.svg",
      executable: "gnome-calendar"
    },
  ];
  return (
    <AppWindow application={app}>
      <BoxContainer css_name={"box"}>
        <Demo />
        <Gtk.Separator orientation={Gtk.Orientation.HORIZONTAL} />
        <StackSwitch orientation={Gtk.Orientation.VERTICAL} spacing={10}>
          <HeadLayout services={panel} /></StackSwitch>
      </BoxContainer>
    </AppWindow>
  );
}

function PeerEntry() {
  return <Gtk.Entry label="Peer Cnxt" />;
}
