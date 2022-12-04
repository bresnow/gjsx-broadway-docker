import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../../lib/gjsx/index.js";
const Template = `<?xml version="1.0" encoding="UTF-8"?>
  <interface>
  <template class="Demo" parent="GtkBox">
    <child>
      <object class="GtkVideo" id="video"></object>
    </child>
    <child>
      <object class="GtkPicture" id="picture"></object>
    </child>
  </template>
</interface>`;
export const Demo = GObject.registerClass(
  {
    GTypeName: "Demo",
    Template: new TextEncoder().encode(Template),
  },
  class Demo2 extends Gtk.Box {}
);
const Template1 = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "template",
    {
      class: "Demo",
      parent: "GtkBox",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget("object", {
        class: "GtkVideo",
        id: "video",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget("object", {
        class: "GtkPicture",
        id: "picture",
      })
    )
  )
);
