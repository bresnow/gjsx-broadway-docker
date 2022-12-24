import Gjsx from "gi://Gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { Demo } from "./widgets/demo.js";
import { StackSwitch } from './widgets/stackswitch.js';
import { BoxContainer } from './widgets/box_container.js';



const { installGlobals } = Gjsx;
installGlobals()
interface Props extends Gtk.Overlay_ConstructProps {
  argument?: string;
}

function widgetArray(arr: typeof Gtk.Widget[]) {
  return arr.map((Widget) => {
    return new Widget();
  });
}


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
      icon_path: "/gjsx/gi_modules/assets/images/icons/blue/settings.svg",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "/gjsx/gi_modules/assets/images/icons/blue/list_add.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "/gjsx/gi_modules/assets/images/icons/blue/mic.svg",
      executable: "gnome-calendar"
    },
  ];

  return (
    <AppWindow application={app}>
      <BoxContainer style={{ padding: "15px", background: "rgba(0, 0, 50, 0.8)", color: "#fff" }}>
        <Gtk.Label style={{ fontSize: "30px", fontWeight: "bold" }} label="X://ProgramaticAssets" />
        <Demo />
        <Gtk.Separator orientation={Gtk.Orientation.VERTICAL} />
        <Gtk.Label style={{ fontSize: "30px", fontWeight: "bold" }} label="Title Of Contract" />
        {"Lorem ipsum dolor sit am attaches to this address is."}
        {"Lorem ipsum dolor sit am attaches to this address is."}
        {"Lorem ipsum dolor sit am attaches to this address is."}
        {"Lorem ipsum dolor sit am attaches to this address is."}
        {"Lorem ipsum dolor sit am attaches to this address is."}
        <Gtk.Separator orientation={Gtk.Orientation.VERTICAL} />
        <StackSwitch orientation={Gtk.Orientation.VERTICAL} spacing={10}>
          <Gtk.Entry style={{ marginLeft: "130px" }} />
        </StackSwitch>
        <HeadLayout services={panel} />
      </BoxContainer>
    </AppWindow>
  );
}

