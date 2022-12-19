import fetch from "./std/fetch.js";
import GLib from "gi://GLib";
import WebSocket from "./std/websocket.js";
import EventEmitter from './std/events.js';

const __dirname = GLib.get_current_dir();
const importer = {
    toString(import_location: string) { return new TextDecoder().decode(imports.gi.Gio.File.new_for_path(import_location).load_contents(null)[1]) },
    json(import_location: string): Record<string, any> { return JSON.parse(importer.toString(import_location)) },
    builder(import_location: string) {
        return imports.gi.Gtk.Builder.new_from_file(import_location)
    },
    css(import_location: string) {
        return new imports.gi.Gtk.CssProvider().load_from_file(imports.gi.Gio.File.new_for_path(import_location))
    },
    default(import_location: string){
        
    }

}
export function installGlobals() {
    return Object.entries({ __dirname, importer, fetch, WebSocket }).forEach(([key, value]) => {
        if (!globalThis[key]) globalThis[key] = value;
    });
}

