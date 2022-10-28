import Gtk from "gi://Gtk?version=4.0";
import { stringify } from "./gnompile/ltx.js";
const Fragment = Symbol("Fragment") || Symbol("");
const temp_frag = Symbol("template"), iface_frag = Symbol("interface"), xml_frag = Symbol("<xml>");
export const createWidget = (Widget, attributes, ...args) => {
  const children = args.length ? [].concat(args) : null;
  let tmpl = [], $gtype, element;
  if (Widget === xml_frag || Widget === iface_frag || Widget === temp_frag) {
    if (Widget === temp_frag && Object.keys(attributes).some((key) => key === "class")) {
      $gtype = attributes["class"];
    }
    let childElements = children.map((el) => el.toString()).join("\n");
    element = Widget.toString();
    element = '<?xml version="1.0" encoding="UTF-8"?> \n' + element + childElements;
    let Template = stringify(element, 2, 1);
    print(Template);
    return Template;
  } else {
    return { Widget, attributes, children };
  }
};
export const render = ({ Widget, attributes, children }) => {
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
      } else if (attr === "class") {
        styleClass[attr.replace("Name", "")] = element;
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
    children.reduce((acc, val) => acc.concat(val), []).map(
      (child) => {
        if (typeof child === "string") {
          return new Gtk.Label({ label: child, visible: true });
        } else {
          return render(child);
        }
      }
    ).forEach((child) => {
      if (typeof widget.append === "function") {
        widget.append(child);
      } else if (typeof widget.add_child === "function") {
        widget.add_child(child);
      } else if (typeof widget.set_child === "function") {
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
export default { render, createWidget, isConstructor };
