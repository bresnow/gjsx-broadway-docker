import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { Layout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessage } from "./widgets/webmsg_grid.js";

export function MainWindow({ app }: { app: Gtk.Application }) {
    const names = [
        "GnomeJSX",
        "Typescript",
        "Gtk-4.0"
    ];
    const layoutStyle = {
        borderRadius: "10px",
        padding: "10px"
    };
    return (
        <AppWindow application={app}>
            <BoxContainer css_name="box" style={layoutStyle}>
                <Layout names={names} />
                <Gtk.Separator />
                <WebMessage />
            </BoxContainer>
        </AppWindow>
    );
};