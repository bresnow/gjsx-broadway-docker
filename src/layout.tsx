import Gtk from "gi://Gtk?version=4.0";
import { getFileInfo } from "../lib/util.js";
import Gjsx from "gjsx";
import { __dirname } from './main.js';
import GObject from 'gi://GObject';

let [route, file] = getFileInfo()

export function Layout({ names }: { names: string[] }) {
  return (
    <Gtk.Box
      spacing={18}
      orientation={Gtk.Orientation.HORIZONTAL}
    >
      <Gtk.Image
        file={__dirname + "/assets/cnxt.png"}
        pixel_size={100}
      />
      {/* 
      {names.map((name, i) => (
        <Gtk.Button
          onClicked={(button) => {
            if (button.label !== name) {
              button.label = name;
            } else {
              button.label = `Button ${i} was pressed`;
            }
          }}
          halign={Gtk.Align.CENTER}
          label={name}
        />
      ))} */}
    </Gtk.Box>
  );
}
