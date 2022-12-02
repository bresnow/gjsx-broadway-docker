import Gtk from "gi://Gtk?version=3.0";
import GObject from "gi://GObject";

export function builder(xml: string) {
    // log(xml);
    return Gtk.Builder.new_from_string(xml, xml.length);
}
/**
 *
 */
export type GetObject = <Object extends GObject.Object>(
    id: string
) => Object | null;

export function build<GtkClass extends GObject.Object = GObject.Object>(
    id: string,
    builder: Gtk.Builder
): [Gtk.Builder, GtkClass | null, GetObject] {
    return [
        builder,
        getObject<GtkClass>(builder, id),
        (n: string) => getObject(builder, n),
    ];
}

export function getObject<Object extends GObject.Object = GObject.Object>(
    builder: Gtk.Builder,
    id: string
): Object | null {
    return builder.get_object(id) as Object;
}