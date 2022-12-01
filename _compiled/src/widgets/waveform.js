import Gtk from "gi://Gtk?version=4.0";
import Adw from "gi://Adw";
import Cairo from "gi://Cairo";
import GObject from "gi://GObject";
var WaveType = {
  RECORDER: 0,
  PLAYER: 1,
};
const GUTTER = 4;
var WaveForm = GObject.registerClass(
  {
    Properties: {
      position: GObject.ParamSpec.float(
        "position",
        "Waveform position",
        "Waveform position",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        0,
        1,
        0
      ),
      peak: GObject.ParamSpec.float(
        "peak",
        "Waveform current peak",
        "Waveform current peak in float [0, 1]",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        0,
        1,
        0
      ),
    },
    Signals: {
      "position-changed": { param_types: [GObject.TYPE_FLAGS] },
      "gesture-pressed": {},
    },
  },
  class WaveForm2 extends Gtk.DrawingArea {
    constructor(params, type) {
      super(params);
      this._peaks = [];
      this._position = 0;
      this.lastPosition = 0;
      this.waveType = type;
      if (this.waveType === WaveType.PLAYER) {
        this._dragGesture = Gtk.GestureDrag.new();
        this._dragGesture.connect("drag-begin", this.dragBegin.bind(this));
        this._dragGesture.connect("drag-update", this.dragUpdate.bind(this));
        this._dragGesture.connect("drag-end", this.dragEnd.bind(this));
        this.add_controller(this._dragGesture);
      }
      this._hcId = Adw.StyleManager.get_default().connect(
        "notify::high-contrast",
        (_) => {
          this.queue_draw();
        }
      );
      this.set_draw_func(this.draw_func);
    }
    notify(arg0) {
      throw new Error("Method not implemented.");
    }
    add_controller(_dragGesture) {
      throw new Error("Method not implemented.");
    }
    queue_draw() {
      throw new Error("Method not implemented.");
    }
    dragBegin(gesture, _) {
      gesture.set_state(Gtk.EventSequenceState.CLAIMED);
      this.emit("gesture-pressed");
    }
    emit(...arg0) {
      throw new Error("Method not implemented.");
    }
    dragUpdate(_, offsetX) {
      this._position = this._clamped(offsetX + this._lastX);
      this.queue_draw();
    }
    dragEnd() {
      this._lastX = this._position;
      this.emit("position-changed", this.position);
    }
    draw_func(da, ctx) {
      const maxHeight = da.get_allocated_height();
      const vertiCenter = maxHeight / 2;
      const horizCenter = da.get_allocated_width() / 2;
      let pointer = horizCenter + da._position;
      const styleContext = da.get_style_context();
      const leftColor = styleContext.get_color();
      const [_, rightColor] = styleContext.lookup_color("dimmed_color");
      const dividerName =
        da.waveType === WaveType.PLAYER ? "accent_color" : "destructive_color";
      let [ok, dividerColor] = styleContext.lookup_color(dividerName);
      if (!ok) dividerColor = styleContext.get_color();
      ctx.setLineCap(Cairo.LineCap.ROUND);
      ctx.setLineWidth(2);
      da._setSourceRGBA(ctx, dividerColor);
      ctx.moveTo(horizCenter, vertiCenter - maxHeight);
      ctx.lineTo(horizCenter, vertiCenter + maxHeight);
      ctx.stroke();
      ctx.setLineWidth(1);
      da._peaks.forEach((peak) => {
        if (da.waveType === WaveType.PLAYER && pointer > horizCenter)
          da._setSourceRGBA(ctx, rightColor);
        else da._setSourceRGBA(ctx, leftColor);
        ctx.moveTo(pointer, vertiCenter + peak * maxHeight);
        ctx.lineTo(pointer, vertiCenter - peak * maxHeight);
        ctx.stroke();
        if (da.waveType === WaveType.PLAYER) pointer += GUTTER;
        else pointer -= GUTTER;
      });
    }
    set peak(p) {
      if (this._peaks.length > this.get_allocated_width() / (2 * GUTTER))
        this._peaks.pop();
      this._peaks.unshift(p.toFixed(2));
      this.queue_draw();
    }
    set peaks(p) {
      this._peaks = p;
      this.queue_draw();
    }
    set position(pos) {
      this._position = this._clamped(-pos * this._peaks.length * GUTTER);
      this._lastX = this._position;
      this.queue_draw();
      this.notify("position");
    }
    get position() {
      return -this._position / (this._peaks.length * GUTTER);
    }
    _clamped(position) {
      if (position > 0) position = 0;
      else if (position < -this._peaks.length * GUTTER)
        position = -this._peaks.length * GUTTER;
      return position;
    }
    _setSourceRGBA(cr, rgba) {
      cr.setSourceRGBA(rgba.red, rgba.green, rgba.blue, rgba.alpha);
    }
    destroy() {
      Adw.StyleManager.get_default().disconnect(this._hcId);
      this._peaks.length = 0;
      this.queue_draw();
    }
  }
);
export default WaveForm;
