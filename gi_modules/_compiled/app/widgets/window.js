import Gjsx from "../../gjsx/index.js";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk?version=4.0";
const Template = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "template",
    { class: "GWindow" },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "titlebar" },
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkHeaderBar" },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          { name: "title-widget" },
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            { class: "GtkStackSwitcher" },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "stack" },
              "viewStack"
            )
          )
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "child" },
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        { class: "GtkStack", id: "viewStack" },
        /* @__PURE__ */ Gjsx.createWidget(
          "child",
          null,
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            { class: "GtkStackPage" },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "name" },
              "welcome"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "title" },
              "Welcome"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "child" },
              /* @__PURE__ */ Gjsx.createWidget(
                "object",
                { class: "GtkLabel" },
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  { name: "label" },
                  "Welcome to our new file browser!"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  { name: "valign" },
                  "center"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "style",
                  null,
                  /* @__PURE__ */ Gjsx.createWidget("class", { name: "big" })
                )
              )
            )
          )
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "child",
          null,
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            { class: "GtkStackPage" },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "name" },
              "files"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "title" },
              "Files"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              { name: "child" },
              /* @__PURE__ */ Gjsx.createWidget(
                "object",
                { class: "GtkLabel" },
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  { name: "label" },
                  "Welcome to our new file browser!"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "property",
                  { name: "valign" },
                  "center"
                ),
                /* @__PURE__ */ Gjsx.createWidget(
                  "style",
                  null,
                  /* @__PURE__ */ Gjsx.createWidget("class", { name: "big" })
                )
              )
            )
          )
        )
      )
    )
  )
);
export const Window = GObject.registerClass(
  {
    GTypeName: "GWindow",
    Template,
    InternalChildren: ["viewStack"],
  },
  class extends Gtk.ApplicationWindow {
    _viewStack;
    constructor(params) {
      super(params);
      this.#setupActions();
      this.#bindSizeToSettings();
    }
    _vfunc_close_request() {
      super.vfunc_close_request();
      this.run_dispose();
    }
    #setupActions() {
      const changeViewAction = new Gio.SimpleAction({
        name: "change-view",
        parameter_type: GLib.VariantType.new("s"),
      });
      changeViewAction.connect("activate", (_action, params) => {
        this._viewStack.visible_child_name = params.get_string()[0];
      });
      this.add_action(changeViewAction);
    }
    #bindSizeToSettings() {
      this.set_decorated(false);
      this.maximize();
    }
  }
);
