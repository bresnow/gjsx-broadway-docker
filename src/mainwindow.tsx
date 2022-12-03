import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";
import GObject from "gi://GObject";

interface Props extends Gtk.Overlay_ConstructProps {
  argument?: string;
}

function widgetArray(arr: typeof Gtk.Widget[]) {
  return arr.map((Widget) => {
    return new Widget();
  });
}

const GridStack = GObject.registerClass(
  {},
  class extends Gtk.Grid {
    constructor(params: Props) {
      super(params);
    }
  }
);

const BgOverlay = GObject.registerClass(
  {},
  class extends Gtk.Overlay {
    constructor(arg: Gtk.Overlay_ConstructProps) {
      super(arg);
      this.build();
    }

    build() {
      let [label, button, picture] = [
        new Gtk.Label({ label: "dahsfshkfkdhafklhj" }),
        new Gtk.Button({ label: "button" }),
        new Gtk.Picture({ file: "assets/images/images/mrs_arnold.jpeg" }),
      ];
      this.set_clip_overlay(picture, true);
      this.set_child(label);
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

  return (
    <AppWindow application={app}>
      <BoxContainer css_name={"box"}>
        <HeadLayout services={panel} />
        <Gtk.Separator orientation={Gtk.Orientation.HORIZONTAL} />
        <BgOverlay>
          <Gtk.Button label={"try Meeeee"} onClicked={(butt) => {}} />
          <Gtk.Label label={reference} style={{ color: "#fff" }} />
        </BgOverlay>
        <Gtk.Entry />
        <GridStack />
      </BoxContainer>
    </AppWindow>
  );
}

function PeerEntry() {
  return <Gtk.Entry label="Peer Cnxt" />;
}
