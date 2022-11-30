import Gjsx from "../lib/gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { HeadLayout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { AppPanel } from "./widgets/panel.js";
export function MainWindow({ app, reference }) {
  const panel = [
    {
      name: "Gtk4-Demo",
      icon_path: "assets/images/logo.svg",
      executable: "gtk4-demo",
    },
    {
      name: "Gtk4 Tour",
      icon_path: "assets/images/logo.svg",
      executable: "gtk4-tour",
    },
    {
      name: "Demo App",
      icon_path: "assets/images/logo.svg",
      executable: ["gjs", "-m", "assets/apps/demo.js"],
    },
  ];
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    {
      application: app,
    },
    /* @__PURE__ */ Gjsx.createWidget(
      BoxContainer,
      {
        css_name: "box",
      },
      /* @__PURE__ */ Gjsx.createWidget(HeadLayout, {
        services: panel,
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, null),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Label, {
        label: reference,
      }),
      /* @__PURE__ */ Gjsx.createWidget(AppPanel, null)
    )
  );
}
