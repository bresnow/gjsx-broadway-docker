import fetch from "./std/fetch.js";
import Gio from 'gi://Gio';
import GLib from "gi://GLib";
import Gtk from "gi://Gtk?version=4.0";
import WebSocket from "./std/websocket.js";

/**
 * GLOBAL IMPORTERS FOR MODUOLE BUNDLING
 * @description To make Gtk builds like web development I wrote these global imports for the module compiler/bundler
 */
Gtk.init()
const resolve = (path: string) => {
    const file = Gio.File.new_for_uri(import.meta.url);
    return file.get_parent().resolve_relative_path(path);
}
const _current = () => {
    const [filename] = GLib.filename_from_uri(import.meta.url);
    return GLib.path_get_dirname(filename);
}
const __dirname = GLib.get_current_dir();
const importer = {
    toString(import_location: string) { return new TextDecoder().decode(importer.file(import_location).load_contents(null)[1]) },
    json(import_location: string): Record<string, any> { return JSON.parse(importer.toString(import_location)) },
    builder(import_location: string) {
        return Gtk.Builder.new_from_file(`${__dirname}/${import_location.replace("../", "")}`)
    },
    //return css provider after loading to display
    css(import_location: string) {
        return new imports.gi.Gtk.CssProvider().load_from_file(imports.gi.Gio.File.new_for_path(`"${__dirname}/${import_location.replace("../","")}"`))
    },
    file(import_location: string) {
        return Gio.File.new_for_path(`${__dirname}/${import_location.replace("../", "")}`)
    },


}

let arr = GLib.get_environ()
let env: Record<string, string | undefined> = arr.reduce((acc,[key,value])=>{
return {...acc, [key]:value};
},{})
export function installGlobals() {
    return Object.entries({ env, __dirname, importer, fetch, WebSocket }).forEach(([key, value]) => {
        if (!globalThis[key]) globalThis[key] = value;
    });
}


