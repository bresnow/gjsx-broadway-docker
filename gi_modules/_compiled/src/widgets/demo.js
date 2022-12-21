import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../../gjsx/index.js";
import { WebViewer } from "./webviewer.js";
const { encode } = Gjsx;
const Button = /* @__PURE__ */ Gjsx.createWidget(
  "object",
  { class: "GtkButton", id: "button" },
  /* @__PURE__ */ Gjsx.createWidget("property", { name: "label" }, "Let's go!"),
  /* @__PURE__ */ Gjsx.createWidget("property", { name: "halign" }, "center"),
  /* @__PURE__ */ Gjsx.createWidget("signal", {
    name: "clicked",
    handler: "onButtonClicked",
  }),
  /* @__PURE__ */ Gjsx.createWidget(
    "style",
    null,
    /* @__PURE__ */ Gjsx.createWidget("class", { name: "suggested-action" })
  )
);
const ResourceTemplateDemo = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "template",
    { class: "MyWidget" },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "layout-manager" },
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkBoxLayout" },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "orientation" },
          "vertical"
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkImage", id: "picture" },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "file" },
          "/home/app/assets/images/cnxt.png"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "icon-size" },
          "large"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "pixel-size" },
          "300"
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkLabel", id: "welcomeLabel" },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "visible" },
          "false"
        ),
        /* @__PURE__ */ Gjsx.createWidget("property", { name: "wrap" }, "true"),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "justify" },
          "center"
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget("child", null, Button)
  )
);
const buildaBitch = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "object",
    { class: "GtkBox", id: "root" },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "orientation" },
      "vertical"
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkLabel", id: "helloLabel" },
        /* @__PURE__ */ Gjsx.createWidget("property", { name: "vexpand" }, "1"),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "label" },
          "Hello World!"
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkButton", id: "actionButton" },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "label", translatable: "yes" },
          "Action"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "receives_default" },
          "1"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "style",
          null,
          /* @__PURE__ */ Gjsx.createWidget("class", {
            name: "suggested-action",
          })
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkButton", id: "closeButton" },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "label", translatable: "yes" },
          "Close"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "receives_default" },
          "1"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "style",
          null,
          /* @__PURE__ */ Gjsx.createWidget("class", {
            name: "suggested-action",
          })
        )
      )
    )
  )
);
log(typeof buildaBitch);
export const Demo = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template: encode(ResourceTemplateDemo),
  },
  class extends Gtk.Box {
    _init() {
      super._init();
    }
    onButtonClicked(_button) {
      let window,
        builder,
        app = new Gtk.Application(),
        webmsg = new WebViewer();
      try {
        (window = new Gtk.Window({ application: app })),
          (builder = Gtk.Builder.new_from_string(
            buildaBitch,
            buildaBitch.length
          ));
        let root = builder.get_object("root");
        var actionButton = builder.get_object("actionButton");
        actionButton.connect("clicked", () => {
          print("actionButton clicked");
        });
        var closeButton = builder.get_object("closeButton");
        closeButton.connect("clicked", () => {
          print("closeButton clicked");
        });
        app.connect("activate", () => {
          window.set_child(webmsg);
          window.show();
          window.maximize();
          window.present();
        });
        app.run([]);
      } catch (error) {
        _button.label = error.message;
      }
    }
  }
);
