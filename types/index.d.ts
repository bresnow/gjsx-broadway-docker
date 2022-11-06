
declare const ARGV: string[]
/**
 * GJS Environment Type Definitions
 */

declare function log(msg: string): void;
declare function print(msg: string): void;
declare function logError(error: Error, msg?: string): void;
declare function printerr(msg: string): void;

declare interface GjsGiImports {
    versions: {
        [key: string]: string;
    };
    GLib: typeof import("gi://GLib");
    Gtk: typeof import("gi://Gtk?version=4.0");
    Gio: typeof import("gi://Gio");
    GObject: typeof import("gi://GObject");
    Gdk: typeof import("gi://Gdk");
    WebKit2: typeof import("gi://WebKit2?version=5.0");
    Soup: typeof import("gi://Soup");
}

declare module "@gi-types/gmodule" {
    var _: any;

    export default _;
}

declare interface GjsImports {
    gi: GjsGiImports;
}

declare const imports: GjsImports;
