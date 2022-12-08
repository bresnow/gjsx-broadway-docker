import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../../lib/gjsx/index.js";
const { build, builder } = Gjsx;
const grid_resource = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "object",
    {
      class: "GtkGrid",
      id: "grid_root",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        {
          class: "GtkLabel",
          id: "description",
        },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "label",
          },
          "Description"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "layout",
          null,
          /* @__PURE__ */ Gjsx.createWidget(
            "property",
            {
              name: "column",
            },
            "0"
          ),
          /* @__PURE__ */ Gjsx.createWidget(
            "property",
            {
              name: "row",
            },
            "0"
          ),
          /* @__PURE__ */ Gjsx.createWidget(
            "property",
            {
              name: "row-span",
            },
            "1"
          ),
          /* @__PURE__ */ Gjsx.createWidget(
            "property",
            {
              name: "column-span",
            },
            "1"
          )
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        {
          class: "GtkBox",
          id: "entry_box",
        },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "layout-manager",
          },
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            {
              class: "GtkBoxLayout",
            },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "orientation",
              },
              "vertical"
            )
          )
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "child",
          null,
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            {
              class: "GtkEntry",
              id: "vs_entry",
            },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "valign",
              },
              "center"
            ),
            /* @__PURE__ */ Gjsx.createWidget(
              "style",
              null,
              /* @__PURE__ */ Gjsx.createWidget("class", {
                name: "big",
              })
            )
          )
        )
      )
    )
  )
);
const stack_resource = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "object",
    {
      class: "GtkStackSwitcher",
      id: "stack_switch",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      {
        name: "stack",
      },
      "viewStack"
    )
  ),
  /* @__PURE__ */ Gjsx.createWidget(
    "object",
    {
      class: "GtkStack",
      id: "viewStack",
    },
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        {
          class: "GtkStackPage",
          id: "page1",
        },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "name",
          },
          "welcome"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "title",
          },
          "Welcome"
        ),
        /* @__PURE__ */ Gjsx.createWidget("property", {
          name: "child",
        })
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "child",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "object",
        {
          class: "GtkStackPage",
          id: "page2",
        },
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "name",
          },
          "files"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "title",
          },
          "Files"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "property",
          {
            name: "child",
          },
          /* @__PURE__ */ Gjsx.createWidget(
            "object",
            {
              class: "GtkLabel",
            },
            /* @__PURE__ */ Gjsx.createWidget(
              "property",
              {
                name: "label",
              },
              "We will display files here"
            )
          )
        )
      )
    )
  )
);
const overlay_resource = {
  widget: /* @__PURE__ */ Gjsx.createWidget(
    "interface",
    null,
    /* @__PURE__ */ Gjsx.createWidget("object", {
      class: "GtkOverlay",
      id: "overlay",
    })
  ),
  overlay: /* @__PURE__ */ Gjsx.createWidget(
    "interface",
    null,
    /* @__PURE__ */ Gjsx.createWidget(
      "object",
      {
        class: "GtkImage",
        id: "picture",
      },
      /* @__PURE__ */ Gjsx.createWidget(
        "property",
        {
          name: "file",
        },
        "/home/app/assets/images/carbone-fiber-background.jpg"
      )
    )
  ),
};
export const TopOverlay = GObject.registerClass(
  {},
  class extends Gtk.Overlay {
    _init() {
      super._init();
      let [builderOvelayPic, picture, getPictureObject] = build(
        "picture",
        builder(overlay_resource.overlay)
      );
      picture.set_pixel_size(1e3);
      this.set_child(picture);
    }
    append(widget) {
      this.add_overlay(widget);
    }
  }
);
export const StackSwitch = GObject.registerClass(
  {},
  class extends Gtk.Box {
    _init() {
      super._init();
      const { Align, Orientation, EntryIconPosition } = Gtk;
      this.valign = Align.FILL;
      this.orientation = Orientation.VERTICAL;
      let [builderStack, stack, getStackObject] = build(
        "viewStack",
        builder(stack_resource)
      );
      let [builderGrid, grid, getGridObject] = build(
        "grid_root",
        builder(grid_resource)
      );
      this.gridSettings(grid);
      let entry = getGridObject("tag_search");
      grid.attach(stack, 1, 1, 1, 1);
      this.append(grid);
    }
    gridSettings(grid) {
      grid.set_column_homogeneous(true);
      grid.set_row_homogeneous(true);
      grid.set_vexpand(true);
      grid.set_hexpand(true);
    }
  }
);
