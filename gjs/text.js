#!/usr/bin/gjs

import Gtk from 'gi://Gtk?version=3.0';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
Gtk.init(null);

const box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL });

const entry = new Gtk.Entry({
    buffer: new Gtk.EntryBuffer()
});
const image = new Gtk.Image({
    vexpand: true
});

box.add(image);

const button2 = Gtk.FileChooserButton.new('Pick An Image', Gtk.FileChooserAction.OPEN);

button2.connect('file-set', () => {
    const fileName = button.get_filename();
    image.set_from_file(fileName);
});
box.add(entry);
box.add(button2)
const button = new Gtk.Button({
    label: 'Enter'
});

button.connect('clicked', () => {
    log('Entered in the entry: ' + entry.get_buffer().text);
});

box.add(button);

const win = new Gtk.Window({ defaultHeight: 600, defaultWidth: 800 });
win.set_decorated(false)
win.connect('destroy', () => { Gtk.main_quit(); });
win.add(box);
win.show_all();
win.maximize()
Gtk.main();