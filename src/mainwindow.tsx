import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { Layout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessage } from "./widgets/webmsg_grid.js";
import { __dirname } from "./main.js";
import { Web2 } from './widgets/web.js';

export function MainWindow({ app }: { app: Gtk.Application }) {
    const names = [
        "GnomeJSX",
        "Typescript",
        "Gtk-4.0"
    ];

    return (
        <AppWindow application={app}>
            <BoxContainer css_classes={["bg-black"]}>
                <Layout names={names} />
                <Gtk.Separator />
                <WebMessage />
                <Web2 />
            </BoxContainer>
        </AppWindow >
    );
};