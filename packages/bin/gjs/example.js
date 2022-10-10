#!/usr/bin/gjs

import Gtk from 'gi://Gtk?version=3.0';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

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

class EventSq {
    constructor() {
        this.title = 'Example Event';
        GLib.set_prgname(this.title);

        this.text = 'Click here ... ';
        this.counter = 0;
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
    buildUI() {

        this.window = new Gtk.ApplicationWindow({
            application: this.application,
            title: this.title,
            default_height: 200,
            default_width: 200,
            window_position: Gtk.WindowPosition.CENTER
        });
        try {
            this.window.set_icon_from_file(path + '/assets/appIcon.png');
        } catch (err) {
            this.window.set_icon_name('application-x-executable');
        }

        this.window.add(this.getBody());
    }
    getBody() {

        let event;

        this.label = new Gtk.Label({ halign: Gtk.Align.CENTER, label: this.text, valign: Gtk.Align.CENTER });

        event = new Gtk.EventBox();
        event.add(this.label);
        event.connect('button-press-event', () => {
            this.counter = this.counter + 1;
            this.label.set_text(this.text + this.counter);
        });

        return event;
    }
}






//Run the application
let ev = new EventSq();
ev.run(ARGV);