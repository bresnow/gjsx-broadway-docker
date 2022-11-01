import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import Gjsx from "../lib/gjsx.js";
const Template = () =>
  /* @__PURE__ */ Gjsx.createWidget(
    "interface",
    null,
    /* @__PURE__ */ Gjsx.createWidget(
      "template",
      {
        class: "MyWidget",
        parent: "GtkBox",
      },
      /* @__PURE__ */ Gjsx.createWidget(
        "child",
        null,
        /* @__PURE__ */ Gjsx.createWidget(
          "object",
          {
            class: "GtkButton",
          },
          /* @__PURE__ */ Gjsx.createWidget(
            "property",
            {
              name: "label",
            },
            "Click Me"
          ),
          /* @__PURE__ */ Gjsx.createWidget("signal", {
            name: "clicked",
            handler: "onButtonClicked",
          })
        )
      )
    )
  );
const MyWidget = GObject.registerClass(
  {
    GTypeName: "MyWidget",
    Template: /* @__PURE__ */ Gjsx.createWidget(Template, null),
  },
  class extends Gtk.Box {
    constructor() {
      super();
      this.orientation = Gtk.Orientation.HORIZONTAL;
      this.initialize();
    }
    initialize() {
      let button = new Gtk.Button({ label: "Click" });
      button.connect("clicked", (button2) => {
        log(button2.label);
      });
      this.append(button);
    }
    onButtonClicked(button) {
      log(button.label);
    }
  }
);
export function Layout({ names }) {
  return /* @__PURE__ */ Gjsx.createWidget(
    Gtk.Box,
    {
      spacing: 18,
      valign: Gtk.Align.CENTER,
      orientation: Gtk.Orientation.VERTICAL,
    },
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
      label: "Text label as widget tag",
      wrap: true,
    }),
    /* @__PURE__ */ Gjsx.createWidget(
      MyWidget,
      null,
      "Text label as string. Placed right in the jsx markup."
    ),
    names.map((name, i) =>
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
        onClicked: (button) => {
          if (button.label !== name) {
            button.label = name;
          } else {
            button.label = `Button ${i} was pressed`;
          }
        },
        halign: Gtk.Align.CENTER,
        label: name,
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(Gtk.Button, {
      label: "Pushing My Buttons",
      onClicked: (button) => {
        print("Event fired!!");
        button.label = "Pushed Real Guuud";
      },
      halign: Gtk.Align.CENTER,
    })
  );
}
