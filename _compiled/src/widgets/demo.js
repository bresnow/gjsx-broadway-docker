import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../../lib/gjsx/index.js";
import { encode } from "../../lib/util.js";
const ResourceTemplateDemo = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "template",
    {
      class: "MyWidget",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      {
        name: "layout-manager",
      },
      /* @__PURE__ */ Gjsx.createWidget("object", {
        class: "GtkBinLayout",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        {
          class: "GtkLabel",
          id: "label",
        },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "label",
          },
          "Hello World"
        )
      )
    )
  )
);
export const Demo = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template: encode(ResourceTemplateDemo),
  },
  class Demo2 extends Gtk.Box {}
);
