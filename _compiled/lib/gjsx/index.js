import Gtk from "gi://Gtk?version=4.0";
const Fragment = Symbol("Fragment") || Symbol("");
const createWidget = (Widget, attributes, ...args) => {
  const children = args ? args.map((args2) => args2) : [];
  return { Widget, attributes, children };
};
const render = ({ Widget, attributes, children }) => {
  if (!isConstructor(Widget) && typeof Widget === "function") {
    return render(Widget(attributes));
  }
  if (Widget === Fragment) {
    return children;
  }
  const signals = {};
  const styleClass = {};
  const constructParams = {};
  for (const attr in attributes) {
    if (attributes.hasOwnProperty(attr)) {
      const element = attributes[attr];
      const attributName = camelToKebab(attr);
      if (attr.startsWith("on")) {
        const signal = attributName.replace("on-", "");
        signals[signal] = element;
      } else if (attr === "css_name") {
        styleClass[attr] = element;
      } else if (attr === "style") {
        styleClass[attr] = element;
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
    children
      .reduce((acc, val) => acc.concat(val), [])
      .map((child) => {
        if (typeof child === "string") {
          return new Gtk.Label({
            label: child,
            use_markup: true,
            visible: true,
          });
        } else {
          return render(child);
        }
      })
      .forEach((child) => {
        if (typeof widget.append === "function") {
          widget.append(child);
          const isWindow =
            Widget instanceof Gtk.ApplicationWindow ||
            Widget instanceof Gtk.Window;
          if (isWindow && typeof widget.present === "function") {
            widget.present();
          }
        } else if (typeof widget.add_child === "function") {
          widget.add_child(child);
        } else if (typeof widget.set_child === "function") {
          widget.set_child(child);
        }
      });
  }
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
export default { render, createWidget, isConstructor };
