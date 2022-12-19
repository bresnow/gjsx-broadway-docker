import Gtk from "gi://Gtk?version=4.0";
export function builder(resource) {
  return Gtk.Builder.new_from_string(resource, resource.length);
}
export function fileBuilder(path) {
  return Gtk.Builder.new_from_file(path);
}
export function build(id, builder2) {
  return [builder2, getObject(builder2, id), (n) => getObject(builder2, n)];
}
export function getObject(builder2, id) {
  return builder2.get_object(id);
}
