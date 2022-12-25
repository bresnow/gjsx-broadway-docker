import Gjsx from "gi://Gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { Demo } from "./widgets/demo.js";
import { StackSwitch } from './widgets/stackswitch.js';
import { BoxContainer } from './widgets/box_container.js';
//@ts-expect-error
import asset from "../assets/images/icons/white/check.svg";
import { WebViewer } from "./widgets/webviewer.js";

const MenuTemplate =
  <interface>
    <object class="GtkMenuButton">
      <property name="menu-model">menu</property>
    </object>
    <menu id="menu">
      <section>
        <attribute name="display-hint">horizontal-buttons</attribute>
        <item>
          <attribute name="label">Copy</attribute>
          <attribute name="action">app.copy</attribute>
          <attribute name="verb-icon">edit-copy-symbolic</attribute>
        </item>
        <item>
          <attribute name="label">Paste</attribute>
          <attribute name="action">app.paste</attribute>
        </item>
      </section>
      <section>
        <item>
          <attribute name="label">Close</attribute>
          <attribute name="action">win.close</attribute>
        </item>
      </section>
    </menu>
  </interface>

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
      <Gtk.HeaderBar >
        <Gtk.StackSwitcher name={"viewStack"} />
      </Gtk.HeaderBar>
      <BoxContainer style={{ padding: "15px", background: "rgba(0, 0, 50, 0.8)", color: "#fff" }}>
        <Gtk.Label style={{ fontSize: "30px", fontWeight: "bold" }} label="X://ProgramaticAssets" />
        <Gtk.Separator orientation={Gtk.Orientation.VERTICAL} />
        <Gtk.Label style={{ fontSize: "30px", fontWeight: "bold" }} label="Title Of Contract" />
        <WebViewer url={"http://localhost:1060/hello"} />
        <Gtk.Separator orientation={Gtk.Orientation.VERTICAL} />
        <StackSwitch orientation={Gtk.Orientation.VERTICAL} spacing={10}>
          <Gtk.Entry style={{ marginLeft: "130px" }} />
        </StackSwitch>
        <HeadLayout services={panel} />
      </BoxContainer>
    </AppWindow>
  );
}
