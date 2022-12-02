import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";
import GObject from 'gi://GObject';
import Gio from "gi://Gio"
import { giState } from '../lib/gjsx/gistate.js';
interface Props extends Gtk.Grid_ConstructProps {
  argument?: string
}
const [state, setter] = giState({ try: "Listen Up LibTard... I masturbate with soap." });


const GridStack = GObject.registerClass({}, class extends Gtk.Grid {
  constructor(params: Props) {
    super(params);
  }


})
export function MainWindow({ app, reference }: { app: Gtk.Application; reference: any }) {
  const panel = [{ name: "Gtk4-Demo", icon_path: "assets/images/fltngmmth/Black_fullStack.png", executable: "" }, { name: "Gtk4 Tour", icon_path: "assets/images/logo.svg", executable: "gtk4-tour" }, { name: "Demo App", icon_path: "assets/images/logo.svg", executable: ["gjs", "-m", "assets/apps/demo.js"] }];
  //useState babyyyy 


  return (
    <AppWindow application={app}>
      <BoxContainer css_name={'box'}>
        <HeadLayout services={panel} />
        <Gtk.Separator orientation={Gtk.Orientation.HORIZONTAL} />
        <Gtk.Button label={"try Meeeee"} onClicked={(butt) => {
          setter({ try: "Yelllllerrrrrrr" })
        }} style={{ backgroundColor: "#000" }} />
        <GridStack />
        <Gtk.Label label={state.try} style={{ color: "#fff" }} />
      </BoxContainer>
    </AppWindow >
  );
};