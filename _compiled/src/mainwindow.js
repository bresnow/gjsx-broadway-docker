import Gjsx from "../lib/gjsx/index.js";
import Gtk from "gi://Gtk?version=4.0";
import { Layout } from "./layout.js";
import { AppWindow } from "./widgets/appwindow.js";
import { BoxContainer } from "./widgets/box_container.js";
import { WebMessage } from "./widgets/webmsg_grid.js";
export function MainWindow({ app }) {
  const names = ["GnomeJSX", "Typescript", "Gtk-4.0"];
  const layoutStyle = {
    borderRadius: "10px",
    padding: "10px",
  };
  return /* @__PURE__ */ Gjsx.createWidget(
    AppWindow,
    {
      application: app,
    },
    /* @__PURE__ */ Gjsx.createWidget(
      BoxContainer,
      {
        css_name: "box",
        style: layoutStyle,
      },
      /* @__PURE__ */ Gjsx.createWidget(Layout, {
        names,
      }),
      /* @__PURE__ */ Gjsx.createWidget(Gtk.Separator, null),
      /* @__PURE__ */ Gjsx.createWidget(WebMessage, null)
    )
  );
}
