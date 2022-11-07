// @gjsx-resource
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
// import Gjsx from "gjsx"

export const BoxContainer = GObject.registerClass({ GTypeName: "BoxContainer" }, class BoxContainer extends Gtk.Box {
  constructor(opts: Gtk.Box_ConstructProps) {
    super(opts);
    this.init()
  };
  init() {
    this.orientation = Gtk.Orientation.VERTICAL;
    this.spacing = 18;
    // this.vexpand = true;
    let css1 = new Gtk.CssProvider();
    css1.load_from_data(' * { color: #000; font-size: 12px; background-color: rgba(255, 100, 146 , 0.6); border-radius: 5px; }');
    this.get_style_context().add_provider(css1, 0)
  }
});