import fetch from "./std/fetch.js";
import WebSocket from "./std/websocket.js";
import EventEmitter from './std/events.js';

const importer = {
    toString(import_location: string) { return new TextDecoder().decode(imports.gi.Gio.File.new_for_path(import_location).load_contents(null)[1]) },
    json(import_location: string):Record<string,any> { return JSON.parse(importer.toString(import_location)) },
    builder(import_location: string) {
        return imports.gi.Gtk.Builder.new_from_file(import_location)
    },
    css(import_location: string){
        return new imports.gi.Gtk.CssProvider().load_from_file(imports.gi.Gio.File.new_for_uri(imports.gi.GLib.filename_to_uri(import_location)))
    }

}
export function installGlobals() {
    return Object.entries({ importer, EventEmitter, fetch, WebSocket }).forEach(([key, value]) => {
        if (!globalThis[key]) globalThis[key] = value;
    });
}