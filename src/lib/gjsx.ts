import * as Gtk from "gi://Gtk?version=4.0";

const Fragment = Symbol("Fragment");
export const createWidget = (Widget: any, attributes: any, ...args: any[]) => {
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
  const signals: any = {};
  const constructParams: any = {};
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
    if (typeof widget.set_child !== "function") {
      throw new Error("Cannot add child to non Container widget");
    }
    children
      .reduce((acc: string | any[], val: any) => acc.concat(val), [])
      .map((child: { Widget: any; attributes: any; children: any }) =>
        typeof child === "string"
          ? new Gtk.Label({ label: child, visible: true })
          : render(child)
      )
      .forEach((child: any) => {
        widget.set_child(child);
      });
  }

  if (typeof widget.present === "function") widget.present();

  return widget;
};

/* UTILS */

function camelToKebab(string: string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

function isConstructor(f: new () => any) {
  try {
    new f();
  } catch (err) {
    return false;
  }
  return true;
}

export default { render, createWidget };
