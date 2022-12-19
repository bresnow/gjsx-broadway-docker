import Gjsx from 'gi://Gjsx';
import Gtk from "gi://Gtk?version=4.0";
import Webkit from "gi://WebKit2?version=5.0";
type Services = {
    name: string;
    executable: string | string[];
    icon_path?: string;
    icon_name?: string;
  };

export function HeadLayout({
  services,
}: {
  services: Services[];
}) {
  let webview = new Webkit.WebView();
  let logo = __dirname + "/assets/images/cnxt.png";

  return (
    <Gtk.Box spacing={18} orientation={Gtk.Orientation.HORIZONTAL}>
      <Gtk.Image file={logo} style={{ marginLeft: "5px" }} pixel_size={100} />

      {services.map(
        ({ name, executable: execCmd, icon_path, icon_name }, i) => {
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
              <Gtk.Image file={__dirname + "/" + icon_path} pixel_size={50} />
            </Gtk.Button>
          );
        }
      )}
    </Gtk.Box>
  );
}
