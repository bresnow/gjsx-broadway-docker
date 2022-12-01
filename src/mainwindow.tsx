import Gjsx from "gjsx";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { __dirname } from "./main.js";
import { Video } from "./widgets/video.js";
import GObject from 'gi://GObject';
import Gio from "gi://Gio"
import { Demo } from "./demo.js";

const Stack = GObject.registerClass({}, class extends Gtk.Grid {

    _init() {
        super._init();
        let pageOne = new Gtk.StackPage({ child: new Video() }), stack = new Gtk.Stack(), sidebar = new Gtk.StackSidebar();
        stack.set_vexpand(true)
        stack.set_hexpand(true)
        this.attach(stack, 1, 0, 1, 1)
        stack.add_titled(new Video(), "page_one", "Page One")
        stack.add_titled(new Gtk.Picture({ file: Gio.File.new_for_path(__dirname + "/assets/images/icons/fullscreen.png") }), "page_two", "Page Two")
        sidebar.set_stack(stack)
        this.attach(sidebar, 0, 0, 1, 1)

    }

})
export function MainWindow({ app, reference }: { app: Gtk.Application; reference: any }) {
    const panel = [{ name: "Gtk4-Demo", icon_path: "assets/images/icons/speaker-buffering.png", executable: "" }, { name: "Gtk4 Tour", icon_path: "assets/images/logo.svg", executable: "gtk4-tour" }, { name: "Demo App", icon_path: "assets/images/logo.svg", executable: ["gjs", "-m", "assets/apps/demo.js"] }];
    return (
        <AppWindow application={app}>
            <BoxContainer css_name={'box'}>
                <HeadLayout services={panel} />
                <Gtk.Separator />
                <Gtk.Label label={reference} />
                <Demo />
            </BoxContainer>
        </AppWindow >
    );
};