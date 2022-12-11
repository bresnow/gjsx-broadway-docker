import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

export function builder(resource: string) {
    // log(xml);
    return Gtk.Builder.new_from_string(resource, resource.length);
}
/**
 *
 */
export type GetObject = <Object >(
    id: string
) => Object | null;

export function build<GtkClass>(
    id: string,
    builder: Gtk.Builder
): [Gtk.Builder, GtkClass | null, GetObject] {
    return [
        builder,
        getObject<GtkClass>(builder, id),
        (n: string) => getObject(builder, n),
    ];
}

export function getObject<Object>(
    builder: Gtk.Builder,
    id: string
): Object | null {
    return builder.get_object(id) as Object;
}

