import Gjsx from 'gi://Gjsx';
import Gtk from "gi://Gtk?version=4.0";

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
    background: "rgba(0, 0, 50, 0.8);", 
    color: "#fff", 
    borderRadius: "15px" 
  },
  

}

export function HeadLayout({
  services,
}: {
  services: Services[];
}) {

  let logo = "/gjsx/gi_modules/assets/images/cnxt.png";
  let paidlogo = "/gjsx/gi_modules/assets/images/paid_logo.png"

  return (
    <Gtk.Box spacing={18} style={style.box} orientation={Gtk.Orientation.HORIZONTAL}>
      <Gtk.Image file={logo} style={{ marginLeft: "5px" }} pixel_size={100} />
      <Gtk.Image file={paidlogo} style={{ marginLeft: "5px" }} pixel_size={100} />
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
