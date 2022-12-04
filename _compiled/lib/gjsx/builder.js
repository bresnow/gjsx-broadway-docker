import Gtk from "gi://Gtk?version=3.0";
export function builder(xml) {
  return Gtk.Builder.new_from_string(xml, xml.length);
}
export function build(id, builder2) {
  return [builder2, getObject(builder2, id), (n) => getObject(builder2, n)];
}
export function getObject(builder2, id) {
  return builder2.get_object(id);
}
