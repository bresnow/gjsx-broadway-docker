import * as Gtk from "gi://Gtk?version=4.0";
import Gjsx from "./lib/gjsx.js";
Gtk.init();
let argv = ARGV
let gtkSettings = Gtk.Settings.get_default()

if (argv.some(info => info === '--dark')) {
    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = true
    gtkSettings.gtk_theme_name = 'PRO-dark-XFCE-edition II'
} else {
    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = false

    gtkSettings.gtk_theme_name = 'Adwaita'
}
const MainWindow = function ({ app }:{app: Gtk.Application}) {
    const names = ["Hello", "Hyperscript", "Gtk"];


    return (
        <Gtk.Window title="Hello World" application={app}>
            <Gtk.Button
                label={"Now with events!"}
                onClicked={() => print("hello world")}
            />
        </Gtk.Window>
    );
};

function Layout({ names }:{names: string[]}) {
        return (
            <Gtk.VBox>
            <Gtk.Button
                label={"Now with events!"}
                onClicked={() => print("hello world")}
            />
            </Gtk.VBox>
    );
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
app.run([]);
