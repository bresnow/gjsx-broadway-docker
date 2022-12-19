import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "..//..gjsx/index.js";
const { encode } = Gjsx;
const ButtonResource = ({
  id,
  align,
  label,
  clickhandler,
  className,
  ...prop
}) => {
  return /* @__PURE__ */ Gjsx.createWidget(
    "object",
    { class: "GtkButton", id: id ?? "button" },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "label" },
      label ?? " #PressPlay"
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "halign" },
      align ?? "center"
    ),
    Object.entries(prop).map(([key, value]) => {
      if (typeof value === "string") {
        return /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: key },
          value
        );
      }
    }),
    /* @__PURE__ */ Gjsx.createWidget("signal", {
      name: "clicked",
      handler: clickhandler ?? "onButtonClicked",
    }),
    /* @__PURE__ */ Gjsx.createWidget(
      "style",
      null,
      /* @__PURE__ */ Gjsx.createWidget("class", {
        name: className ?? "suggested-action",
      })
    )
  );
};
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
    /* @__PURE__ */ Gjsx.createWidget("child", null, ButtonResource())
  )
);
const label_buttons = /* @__PURE__ */ Gjsx.createWidget(
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
      /* @__PURE__ */ Gjsx.createWidget(ButtonResource, {
        id: "actionButton",
        align: "baseline",
        label: "XDESK",
        clickhandler: "activate",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(ButtonResource, {
        id: "closeButton",
        align: "baseline",
        label: "PaidMedia",
        recieves_default: "1",
      })
    )
  )
);
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
        app = new Gtk.Application();
      try {
        (window = new Gtk.Window({ application: app })),
          (builder = Gtk.Builder.new_from_string(
            label_buttons,
            label_buttons.length
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
        window.set_child(root);
        window.show();
        window.present();
        app.run([]);
      } catch (error) {
        _button.label = error.message;
      }
    }
  }
);
