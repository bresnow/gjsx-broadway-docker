import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { Layout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";

export function MainWindow({ app, reference }: { app: Gtk.Application; reference: any }) {
    const names = [
        "GnomeJSX",
        "Typescript",
        "Gtk-4.0"
    ];
    return (
        <AppWindow application={app}>
            <BoxContainer css_name={'box'}>
                <Layout names={names} />
                <Gtk.Separator />
                <Gtk.Label label={reference} />
            </BoxContainer>
        </AppWindow >
    );
};