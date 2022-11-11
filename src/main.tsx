import Gtk from "gi://Gtk?version=4.0";
import Gjsx, { __dirname } from "gjsx";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessage } from "./widgets/webmsg_grid.js";
// import convertMd from "markdown-convert" TODO: Markup conversion
Gtk.init();
let argv = ARGV;
theme(argv);

const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0"
  ];
  const layoutStyle = {
    color: "#fff",
    fontSize: "12px",
    backgroundColor: "rgba(0, 0, 50, 0.8)",
    borderRadius: "10px",
    padding: "10px"
  }

  return (
    <AppWindow application={app} >
      <BoxContainer style={layoutStyle} >
        <Layout names={names} />
        <Gtk.Separator />
        <WebMessage />
      </BoxContainer>
    </AppWindow>
  );
};

const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
//@ts-ignore
app.run([]);
