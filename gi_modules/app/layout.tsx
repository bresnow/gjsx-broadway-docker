import Gjsx from 'gi://Gjsx';
import Gtk from "gi://Gtk?version=4.0";
//@ts-expect-error
import paidlogo from "../assets/images/paid_logo.png";
//@ts-expect-error
import cnxtLogo from "../assets/images/cnxt.png"
//@ts-expect-error
import bdsLogo from "../assets/images/bds-mark.png" ;
//test
type Services = {
  name: string;
  executable: string | string[];
  icon_path?: string;
  icon_name?: string;
};
// Ha ha! This line convinced me to write a higher level parser. 
const style = {
  box: { 
    padding: "15px", 
    background: "rgba(0, 0, 50, 0.8)", 
    color: "#fff", 
    borderRadius: "15px" 
  },
  

}
//TODO: this
export function HeadLayout({
  services,
}: {
  services: Services[];
}) {



  return (
    <Gtk.Box spacing={18} style={style.box} orientation={Gtk.Orientation.HORIZONTAL}>
      <Gtk.Image file={cnxtLogo} style={{ marginLeft: "5px" }} pixel_size={100} />
      <Gtk.Image file={paidlogo} style={{ marginLeft: "5px" }} pixel_size={65} />
      <Gtk.Image file={bdsLogo} style={{ marginLeft: "5px" }} pixel_size={65} />
      {services.map(
        ({ name, icon_path, icon_name }, i) => {
          function clickHandler(self: Gtk.Button) {
            log("Executing")
          }
          return (
            <Gtk.Button
              onClicked={clickHandler}
              halign={Gtk.Align.CENTER}
              label={name}
              css_name="buttonbottom"
            >
              <Gtk.Image file={icon_path} pixel_size={50} />
            </Gtk.Button>
          );
        }
      )}
    </Gtk.Box>
  );
}
