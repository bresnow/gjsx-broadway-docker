import GLib from 'gi://GLib';

declare global {
    class TextEncoder {
        static new(): TextEncoder;
        encode(str: string): Uint8Array;
    }
    class TextDecoder {
        static new(): TextDecoder;
        decode(bytes: Uint8Array): string;
    }
    const env: Record<string, string>
    function fetch(url: string | FetchOptions, options?: FetchOptions): Promise<{
        status: number;
        statusText: string;
        ok: boolean;
        type: string;
        json(): Promise<any>;
        text(): Promise<string>;
        arrayBuffer(): Promise<any>;
        gBytes(): Promise<GLib.Bytes>;
}>
}
type FetchOptions = { url: string; method: "GET" | "POST" | "PATCH" | "DELETE"; headers: Record<string, string>; body: Uint8Array; }
declare const __dirname: string;
declare const ARGV: string[]
/**
 * GJS Environment Type Definitions
 */

declare function log(msg: any): void;
declare function print(msg: any): void;
declare function logError(error: Error, msg?: any): void;
declare function printerr(msg: any): void;




declare function setTimeout(fn: () => void, timeout: number): void;
declare interface GjsGiImports {
    versions: {
        [key: string]: string;
    };
    byteArray: typeof import("byteArray");
    GLib: typeof import("gi://GLib");
    Gtk: typeof import("gi://Gtk?version=4.0");
    Gio: typeof import("gi://Gio");
    GObject: typeof import("gi://GObject");
    Gdk: typeof import("gi://Gdk");
    WebKit2: typeof import("gi://WebKit2?version=5.0");
    Soup: typeof import("gi://Soup?version=3.0");
    system: typeof import("system");
}

declare module "gmodule" {
    var _: any;

    export default _;
}
declare interface GjsImports {
    cairo: any;
    gi: GjsGiImports;
}

declare const imports: GjsImports;
type GtkClass =
    | "GtkAboutDialog"
    | "GtkAccelLabel"
    | "GtkActionBar"
    | "GtkAlignment"
    | "GtkAppChooserButton"
    | "GtkAppChooserDialog"
    | "GtkAppChooserWidget"
    | "GtkApplicationWindow"
    | "GtkArrow"
    | "GtkAspectFrame"
    | "GtkAssistant"
    | "GtkBox"
    | "GtkButton"
    | "GtkButtonBox"
    | "GtkCalendar"
    | "GtkCellView"
    | "GtkCheckButton"
    | "GtkCheckMenuItem"
    | "GtkColorButton"
    | "GtkColorChooserDialog"
    | "GtkColorChooserWidget"
    | "GtkColorSelection"
    | "GtkColorSelectionDialog"
    | "GtkComboBox"
    | "GtkComboBoxText"
    | "GtkDialog"
    | "GtkDrawingArea"
    | "GtkEntry"
    | "GtkEventBox"
    | "GtkExpander"
    | "GtkFileChooserButton"
    | "GtkFileChooserDialog"
    | "GtkFileChooserWidget"
    | "GtkFixed"
    | "GtkFlowBox"
    | "GtkFlowBoxChild"
    | "GtkFontButton"
    | "GtkFontChooserDialog"
    | "GtkFontChooserWidget"
    | "GtkFontSelection"
    | "GtkFontSelectionDialog"
    | "GtkFrame"
    | "GtkGLArea"
    | "GtkGrid"
    | "GtkHBox"
    | "GtkHButtonBox"
    | "GtkHPaned"
    | "GtkHSV"
    | "GtkHScale"
    | "GtkHScrollbar"
    | "GtkHSeparator"
    | "GtkHandleBox"
    | "GtkHeaderBar"
    | "GtkIconView"
    | "GtkImage"
    | "GtkImageMenuItem"
    | "GtkInfoBar"
    | "GtkInvisible"
    | "GtkLabel"
    | "GtkLayout"
    | "GtkLevelBar"
    | "GtkLinkButton"
    | "GtkListBox"
    | "GtkListBoxRow"
    | "GtkLockButton"
    | "GtkMenu"
    | "GtkMenuBar"
    | "GtkMenuButton"
    | "GtkMenuItem"
    | "GtkMenuToolButton"
    | "GtkMessageDialog"
    | "GtkModelButton"
    | "GtkNotebook"
    | "GtkOffscreenWindow"
    | "GtkOverlay"
    | "GtkPaned"
    | "GtkPlacesSidebar"
    | "GtkPlug"
    | "GtkPopover"
    | "GtkPopoverMenu"
    | "GtkProgressBar"
    | "GtkRadioButton"
    | "GtkRadioMenuItem"
    | "GtkRadioToolButton"
    | "GtkRecentChooserDialog"
    | "GtkRecentChooserMenu"
    | "GtkRecentChooserWidget"
    | "GtkRevealer"
    | "GtkScale"
    | "GtkScaleButton"
    | "GtkScrollbar"
    | "GtkScrolledWindow"
    | "GtkSearchBar"
    | "GtkSearchEntry"
    | "GtkSeparator"
    | "GtkSeparatorMenuItem"
    | "GtkSeparatorToolItem"
    | "GtkShortcutLabel"
    | "GtkShortcutsGroup"
    | "GtkShortcutsSection"
    | "GtkShortcutsShortcut"
    | "GtkShortcutsWindow"
    | "GtkSocket"
    | "GtkSpinButton"
    | "GtkSpinner"
    | "GtkStack"
    | "GtkStackSidebar"
    | "GtkStackSwitcher"
    | "GtkStatusbar"
    | "GtkSwitch"
    | "GtkTable"
    | "GtkTearoffMenuItem"
    | "GtkTextView"
    | "GtkToggleButton"
    | "GtkToggleToolButton"
    | "GtkToolButton"
    | "GtkToolItem"
    | "GtkToolItemGroup"
    | "GtkToolPalette"
    | "GtkToolbar"
    | "GtkTreeView"
    | "GtkVBox"
    | "GtkVButtonBox"
    | "GtkVPaned"
    | "GtkVScale"
    | "GtkVScrollbar"
    | "GtkVSeparator"
    | "GtkViewport"
    | "GtkVideo"
    | "GtkVolumeButton"
    | "GtkPicture"
    | "GtkWindow";
    declare namespace JSX {
        interface ResourceUi {
            interface: {
                domain?: string;
            };
            requires: {
                lib: "gtk+";
                version: "3.0" | "4.0" // TODO
                // no children
            };
            object: {
                class: GtkClass;
                id?: string; //xsd:ID
                "type-func"?: string;
            };
            template: {
                class: string;
                parent: string;
            };
            property: {
                name: string;
                translatable?: "yes" | "no";
                comments?: string;
                context?: string;
                "bind-source"?: string;
                "bind-property"?: string;
                "bind-flags"?: string;
            };
            signal: {
                name: string;
                handler: string;
                after?: string;
                swapped?: string;
                object?: string;
                last_modification_time?: string;
            };
            packing: {};
            child: {
                type?: string;
                "internal-child"?: string;
            };
            menu: {
                id: string; // { xsd:ID },
                domain?: string;
            };
            item: {
                id?: string; // { xsd:ID } ?,
            };
            attribute: {
                name: string;
                type?: string;
                translatable?: "yes" | "no";
                context?: string;
                comments?: string;
            };
            lookup: {
                name: string;
                type?: string;
                id: string;
            };
            ink: {
                id?: string; //{ xsd:ID } ?,
                name: string; // { text },
            };
            script: {
                source?: string
            },
            submenu: {
                id?: string; //  { xsd:ID } ?,
            };
            section: {
                id?: string; // { xsd:ID } ?,
            };
            placeholder: Partial<{
                [key: string]: string;
            }>;
        }
        interface GnomeResource {
            gresources: {
                domain?: string;
            }
            gresource: {
                prefix?: string;
            }
            file: Partial<{
                compressed: string;
                preprocess: string;
                alias: string;
            }>

        }
        interface DBus {
            node: {};
            method: {
                name: string;
            };
            property: {
                readonly?: string | boolean;
            };
            arg: {
                name: string;
                type: string;
            };
            signal: {};
            annotation: {};
            interface: {
                domain?: string;
            }
        }
        interface GnomeSchema {
[key: string]: string;
        }

    }
