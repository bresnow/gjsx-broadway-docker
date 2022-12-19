import Gio from "gi://Gio";
import Gjsx from "..//..gjsx/index.js";
let proxy = null;
const SETTINGS_PORTAL_INTERFACE = /* @__PURE__ */ Gjsx.createWidget(
  "node",
  null,
  /* @__PURE__ */ Gjsx.createWidget(
    "interface",
    { name: "org.freedesktop.portal.Settings" },
    /* @__PURE__ */ Gjsx.createWidget(
      "method",
      { name: "Read" },
      /* @__PURE__ */ Gjsx.createWidget("arg", {
        direction: "in",
        type: "s",
        name: "namespace",
      }),
      /* @__PURE__ */ Gjsx.createWidget("arg", {
        direction: "in",
        type: "s",
        name: "key",
      }),
      /* @__PURE__ */ Gjsx.createWidget("arg", {
        direction: "out",
        type: "v",
        name: "value",
      })
    ),
    /* @__PURE__ */ Gjsx.createWidget(
      "signal",
      { name: "SettingChanged" },
      /* @__PURE__ */ Gjsx.createWidget("arg", {
        type: "s",
        name: "namespace",
      }),
      /* @__PURE__ */ Gjsx.createWidget("arg", { type: "s", name: "key" }),
      /* @__PURE__ */ Gjsx.createWidget("arg", { type: "v", name: "value" })
    ),
    /* @__PURE__ */ Gjsx.createWidget("property", {
      name: "version",
      access: "read",
      type: "u",
    })
  )
);
export default function DbusProxyWrap() {
  const TestProxy = Gio.DBusProxy.makeProxyWrapper(SETTINGS_PORTAL_INTERFACE);
  try {
    proxy = new TestProxy(
      Gio.BusType.SESSION,
      "guide.gjs.Test",
      "/guide/gjs/Test"
    );
  } catch (e) {
    logError(e, "Constructing proxy");
  }
  log(`ReadOnlyProperty: ${proxy.ReadOnlyProperty}`);
  log(`ReadWriteProperty: ${proxy.ReadWriteProperty}`);
  proxy.ReadWriteProperty = true;
  log(`ReadWriteProperty: ${proxy.ReadWriteProperty}`);
  proxy.connect("g-properties-changed", (proxy2, changed, invalidated) => {});
  proxy.SimpleMethodSync();
  proxy.ComplexMethodRemote("input string", (returnValue, errorObj, fdList) => {
    if (errorObj === null) {
      log(`ComplexMethod('input string'): ${returnValue}`);
      if (fdList !== null) {
      }
    } else {
      log(errorObj);
    }
  });
  const handlerId = proxy.connectSignal(
    "TestSignal",
    (proxy2, nameOwner, args) => {
      log(`TestSignal: ${args[0]}, ${args[1]}`);
      proxy2.disconnectSignal(handlerId);
    }
  );
}
