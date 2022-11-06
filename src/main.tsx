import Gtk from "gi://Gtk?version=4.0";
import Gjsx from "gjsx";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessageGrid } from "./widgets/webmsg_grid.js";

Gtk.init();
let argv = ARGV;
theme(argv);


const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0",
    "Simplest React For Gjs Library",
  ];
  return (
    <AppWindow application={app} >
      <BoxContainer >
        <WebMessageGrid />
        <Layout names={names} />
      </BoxContainer>
    </AppWindow>
  );
};

const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
//@ts-ignore
app.run([]);
