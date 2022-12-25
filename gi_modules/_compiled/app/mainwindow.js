import Gjsx from "../gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { StackSwitch } from "./widgets/stackswitch.js";
import { BoxContainer } from "./widgets/box_container.js";
const asset = imports.gi.Gio.File.new_for_uri(import.meta.url)
  .get_parent()
  .resolve_relative_path("../assets/images/icons/white/check.svg")
  .get_uri()
  .replace("file://", "");
import { WebViewer } from "./widgets/webviewer.js";
const MenuTemplate = /* @__PURE__ */ Gjsx.createWidget(
  "interface",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "object",
    { class: "GtkMenuButton" },
    /* @__PURE__ */ Gjsx.createWidget(
      "property",
      { name: "menu-model" },
      "menu"
    )
  ),
  /* @__PURE__ */ Gjsx.createWidget(
    "menu",
    { id: "menu" },
    /* @__PURE__ */ Gjsx.createWidget(
      "section",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "attribute",
        { name: "display-hint" },
        "horizontal-buttons"
      ),
      /* @__PURE__ */ Gjsx.createWidget(
        "item",
        null,
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "label" },
          "Copy"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "action" },
          "app.copy"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "verb-icon" },
          "edit-copy-symbolic"
        )
      ),
      /* @__PURE__ */ Gjsx.createWidget(
        "item",
        null,
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "label" },
          "Paste"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "action" },
          "app.paste"
        )
      )
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "section",
      null,
      /* @__PURE__ */ Gjsx.createWidget(
        "item",
        null,
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "label" },
          "Close"
        ),
        /* @__PURE__ */ Gjsx.createWidget(
          "attribute",
          { name: "action" },
          "win.close"
        )
      )
    )
  )
);
export function MainWindow({ app, reference }) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "/gjsx/gi_modules/assets/images/icons/blue/settings.svg",
      executable: "gnome-tour",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "/gjsx/gi_modules/assets/images/icons/blue/list_add.svg",
      executable: "gnome-calculator",
    },
    {
      name: "Demo App",
      icon_path: "/gjsx/gi_modules/assets/images/icons/blue/mic.svg",
      executable: "gnome-calendar",
    },
  ];
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    { application: app },
    /* @__PURE__ */ Gjsx.createWidget(
      Gtk.HeaderBar,
      null,
      /* @__PURE__ */ Gjsx.createWidget(Gtk.StackSwitcher, {
        name: "viewStack",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      BoxContainer,
      {
        style: {
          padding: "15px",
          background: "rgba(0, 0, 50, 0.8)",
          color: "#fff",
        },
      },
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
        style: { fontSize: "30px", fontWeight: "bold" },
        label: "X://ProgramaticAssets",
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
        orientation: Gtk.Orientation.VERTICAL,
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
        style: { fontSize: "30px", fontWeight: "bold" },
        label: "Title Of Contract",
      }),
      /* @__PURE__ */ Gjsx.createWidget(WebViewer, {
        url: "http://localhost:1060/hello",
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, {
        orientation: Gtk.Orientation.VERTICAL,
      }),
      /* @__PURE__ */ Gjsx.createWidget(
        StackSwitch,
        { orientation: Gtk.Orientation.VERTICAL, spacing: 10 },
        /* @__PURE__ */ Gjsx.createWidget(Gtk.Entry, {
          style: { marginLeft: "130px" },
        })
      ),
      /* @__PURE__ */ Gjsx.createWidget(HeadLayout, { services: panel })
    )
  );
}
