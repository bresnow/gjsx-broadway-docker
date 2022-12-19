import Gtk from "gi://Gtk?version=4.0";

export function builder(resource: string) {
    return Gtk.Builder.new_from_string(resource, resource.length);
}
export function fileBuilder(path: string){
    return Gtk.Builder.new_from_file(path);
}
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

