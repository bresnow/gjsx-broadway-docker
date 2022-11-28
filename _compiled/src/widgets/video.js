import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import { __dirname } from "../main.js";
export const Video = GObject.registerClass(
  { GTypeName: "Video" },
  class extends Gtk.Box {
    _setAttr() {
      this.orientation = Gtk.Orientation.VERTICAL;
      this.valign = Gtk.Align.BASELINE;
      this.vexpand = true;
      this.homogeneous = true;
      this.margin_start = 18;
      this.spacing = 10;
    }
    _init() {
      super._init();
      this._setAttr();
      try {
        let lonelyShades = Gio.File.new_for_path(
            __dirname + "/assets/video/lonelyshade.mp4"
          ),
          stream = Gtk.MediaFile.new_for_file(lonelyShades);
        let video = Gtk.Video.new_for_media_stream(stream);
        video.set_autoplay(true);
        video.set_hexpand(true);
        video.set_vexpand(true);
        video.show();
        this.append(video);
      } catch (e) {
        logError(e);
      }
    }
  }
);
