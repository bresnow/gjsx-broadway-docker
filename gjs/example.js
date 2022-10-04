#!/usr/bin/gjs

import Gtk from 'gi://Gtk?version=3.0';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
Gtk.init(null);


// Get application folder and add it into the imports path
function getAppFileInfo() {
    let stack = (new Error()).stack,
        stackLine = stack.split('\n')[1],
        coincidence, path, file;

    if (!stackLine) throw new Error('Could not find current file (1)');

    coincidence = new RegExp('@(.+):\\d+').exec(stackLine);
    if (!coincidence) throw new Error('Could not find current file (2)');

    path = coincidence[1];
    file = Gio.File.new_for_path(path);
    return [file.get_path(), file.get_parent().get_path(), file.get_basename()];
}
const path = getAppFileInfo()[1];
imports.searchPath.push(path);

class App {
    constructor() {
        this.title = 'Example Asset';
        GLib.set_prgname(this.title);
this.button2
        this.button;
    }
    run(ARGV) {

        this.application = new Gtk.Application();
        this.application.connect('activate', () => { this.onActivate(); });
        this.application.connect('startup', () => { this.onStartup(); });
        this.application.run([]);
    }
    onActivate() {

        this.window.show_all();
    }
    onStartup() {

        this.buildUI();
    }
    showModal() {

        let label, modal, contentArea, button, actionArea;

        label = new Gtk.Label({
            label: "Hello 'Modal'!",
            vexpand: true
        });

        modal = new Gtk.Dialog({
            default_height: 200,
            default_width: 200,
            modal: true,
            transient_for: this.window,
            title: 'Modal',
            use_header_bar: false,
            modal_position: Gtk.WindowPosition.RIGHT
        });
modal.set_decorated(false)
        modal.connect('response', function () {
            modal.destroy();
        });

        contentArea = modal.get_content_area();
        contentArea.add(label);

        button = Gtk.Button.new_with_label('OK');
        button.connect("clicked", () => {
            print('OK pressed');
            modal.destroy();
        });

        actionArea = modal.get_action_area();
        actionArea.add(button);

        modal.show_all();
    }
    buildUI() {
       let  grid = new Gtk.Grid({ column_homogeneous: true });
  
        this.window = new Gtk.ApplicationWindow({
            application: this.application,
            title: this.title,
            default_height: 200,
            default_width: 200,
            window_position: Gtk.WindowPosition.CENTER
        });
        this.window.set_decorated(false);

        try {
            this.window.set_icon_from_file(path + '/assets/fist.png');
        } catch (err) {
            this.window.set_icon_name('application-x-executable');
        }
let butt = new Gtk.Button({label: "second button"})
        this.button = new Gtk.Button({ label: "Show Modal" });
        this.button.connect('clicked', () => { this.showModal(); });

        grid.attach(this.button, 0, 1, 1, 1);
        grid.attach(butt,1, 0, 1, 1);

        this.window.add(grid);
    }
}





//Run the application
let app = new App();
app.run(ARGV);
