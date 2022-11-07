import Gtk from "gi://Gtk?version=4.0";
import Gjsx from "gjsx";
import { Layout } from "./layout.js";
import { theme } from "../lib/util.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessageGrid } from "./widgets/webmsg_grid.js";
import convertMd from "markdown-convert"

Gtk.init();
let argv = ARGV;
theme(argv);
print(convertMd(`# Lemony Snicket\n - lego my eggo \n \`\`\`\n code master\n \`\`\` `))

const MainWindow = function ({ app }: { app: Gtk.Application }) {
  const names = [
    "GnomeJSX",
    "Typescript",
    "Gtk-4.0",
    "Simplest React For Gjs Library",
  ];
  return (
    <AppWindow application={app} >
      <BoxContainer css_name="" css_classes={[]}>
        <WebMessageGrid />
        <Gtk.Separator />
        <Layout names={names} />
        <Gtk.Separator />
      </BoxContainer>
    </AppWindow>
  );
};

const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
// TODO: add run method to Application class
//@ts-ignore
app.run([]);
