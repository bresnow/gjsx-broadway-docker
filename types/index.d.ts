
declare const ARGV: string[]
/**
 * GJS Environment Type Definitions
 */

declare function log(msg: string): void;
declare function print(msg: string): void;
declare function logError(error: Error, msg?: string): void;
declare function printerr(msg: string): void;
declare class TextEncoder {
    static new(): TextEncoder;
    encode(str: string): Uint8Array;
}
declare class TextDecoder {
    static new(): TextDecoder;
    decode(bytes: Uint8Array): string;
}
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
}

declare module "@gi-types/gmodule" {
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


declare module "gjsx-ui" {
    namespace ResourceJsx {
        interface IntrinsicElements {
            interface: {
                domain?: string;
                // children: ( requires | object | template | menu )
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
                // "constructor"?: string;
                // children: (property | signal | child | ANY)
            };
            template: {
                class: string;
                parent: string;
                // children: property | signal | child | ANY
            };
            property: {
                name: string;
                translatable?: "yes" | "no";
                comments?: string;
                context?: string;
                "bind-source"?: string;
                "bind-property"?: string;
                "bind-flags"?: string;
                // children: text ?
            };
            signal: {
                name: string;
                handler: string;
                after?: string;
                swapped?: string;
                object?: string;
                last_modification_time?: string;
                // children empty
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
                // children: (attribute_ | link) *
            };
            attribute: {
                name: string;
                type?: string;
                translatable?: "yes" | "no";
                context?: string;
                comments?: string;
                // children:text ?
            };
            ink: {
                id?: string; //{ xsd:ID } ?,
                name: string; // { text },
                // children: item *
            };
            script: {
                source?: string
            },
            submenu: {
                id?: string; //  { xsd:ID } ?,
                // children: (attribute_ | item | submenu | section) *
            };
            section: {
                id?: string; // { xsd:ID } ?,
                // children: (attribute_ | item | submenu | section) *
            };
            /**
             * glade?
             */
            placeholder: {
                // ??
            };
        }
    }
}
