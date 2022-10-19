
import * as Gjsx from "./lib/gjsx.js";
import * as Gtk from "gi://Gtk?version=4.0";
Gtk.init(null);
let argv = ARGV
let gtkSettings = Gtk.Settings.get_default()
gtkSettings.gtk_application_prefer_dark_theme = true
gtkSettings.gtk_theme_name = 'PRO-dark-XFCE-edition II'
//gtkSettings.gtk_theme_name = 'Adwaita'

//Setting up optional Dark theme (gotta love it!)
//./browser.js google.com --dark
if (argv.some(info => info === '--dark')) {
    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = true
    gtkSettings.gtk_theme_name = 'PRO-dark-XFCE-edition II'
} else if (argv.some(info => info === '--light')) {
    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = false

    gtkSettings.gtk_theme_name = 'Adwaita'
}
const MainWindow = function ({ app }) {
    const names = ["Hello", "Hyperscript", "Gtk"];


    return (
        <Gtk.ApplicationWindow title="Hello World" application={app}>
            <Layout names={names} />
        </Gtk.ApplicationWindow>
    );
};

function Layout({ names }) {
        return (
        <Gtk.VBox>
            {names}
            <Gtk.Button
                orientation={Gtk.Orientation.HORIZONTAL}
                label={"Now with events!"}
                onClicked={() => print("hello world")}
            />
        </Gtk.VBox>
    );
}
const app = new Gtk.Application();
app.connect("activate", () => Gjsx.render(<MainWindow app={app} />));
app.run([]);
