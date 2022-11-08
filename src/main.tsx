import Gtk from "gi://Gtk?version=4.0";
import GLib from 'gi://GLib';
import Gjsx from "gjsx";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessage } from "./widgets/webmsg_grid.js";
// import convertMd from "markdown-convert" TODO: Markup conversion
export const __dirname = GLib.get_current_dir();
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
// TODO: add run method to Application class
//@ts-ignore
app.run([]);
