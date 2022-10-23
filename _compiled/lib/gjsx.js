import  Gtk from "gi://Gtk?version=4.0";  
const Fragment = Symbol("Fragment") || Symbol("");
export const createWidget = (Widget, attributes, ...args) => {
  const children = args.length ? [].concat(args) : null;
  return { Widget, attributes, children };
};
export const render = ({ Widget, attributes, children }) => {
  if (!isConstructor(Widget) && typeof Widget === "function") {
    return render(Widget(attributes));
  }
  if (Widget === Fragment) {
    return children;
  }
  const signals = {};
  const constructParams = {};
  for (const attr in attributes) {
    if (attributes.hasOwnProperty(attr)) {
      const element = attributes[attr];
      const attributName = camelToKebab(attr);
      if (attr.startsWith("on")) {
        const signal = attributName.substr(3);
        signals[signal] = element;
      } else {
        constructParams[attr] = element;
      }
    }
  }
  const widget = new Widget({ visible: true, ...constructParams });
  for (const signal in signals) {
    if (signals.hasOwnProperty(signal)) {
      const handler = signals[signal];
      widget.connect(signal, handler);
    }
  }
  if (children) {
    let isGrid = Widget === Gtk.Grid, isBox = Widget === Gtk["Box"] || Widget === Gtk["VBox"] || Widget === Gtk["HBox"];
    children.reduce((acc, val) => acc.concat(val), []).map(
      (child) => {
        if (typeof child === "string") {
          return new Gtk.Label({ label: child, visible: true });
        } else {
          return render(child);
        }
      }
    ).forEach((child) => {
      if (isBox) {
        widget.append(child);
      } else {
        widget.set_child(child);
      }
    });
  }
  const isWindow = Widget === Gtk.ApplicationWindow || Widget === Gtk.Window;
  if (isWindow && typeof widget.present === "function")
    widget.present();
  return widget;
};
function camelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
function isConstructor(f) {
  try {
    new f();
  } catch (err) {
    return false;
  }
  return true;
}
export default { render, createWidget };
