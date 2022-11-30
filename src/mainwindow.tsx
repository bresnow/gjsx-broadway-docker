import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";

export function MainWindow({ app, reference }: { app: Gtk.Application; reference: any }) {
    const panel = [{ name: "Gtk4-Demo", icon_path: "assets/images/logo.svg", executable: "gtk4-demo" }, { name: "Gtk4 Tour", icon_path: "assets/images/logo.svg", executable: "gtk-tour" }, { name: "Demo App", icon_path: "assets/images/logo.svg", executable: ["gjs", "-m", "assets/apps/demo.js"] }];
    return (
        <AppWindow application={app}>
            <BoxContainer css_name={'box'}>
                <HeadLayout services={panel} />
                <Gtk.Separator />
                <Gtk.Label label={reference} />
            </BoxContainer>
        </AppWindow >
    );
};