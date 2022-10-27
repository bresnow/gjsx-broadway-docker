import * as Gtk from "gi://Gtk?version=4.0";
/*
 * <Fragment></Fragment> || <></> tags
 * */
const Fragment = Symbol("Fragment") || Symbol("");
export const createWidget = (Widget: any, attributes: any, ...args: any[]) => {
  const children = args.length ? [].concat(args) : null;
  return { Widget, attributes, children };
};

export const render = ({ Widget, attributes, children }) => {
  if (!isConstructor(Widget) && typeof Widget === "function") {
    // component functions that aren't widgets.
    return render(Widget(attributes));
  }
  if (Widget === Fragment) {
    return children;
  }
  const signals: any = {};
  const styleClass: any = {};
  const constructParams: any = {};
  for (const attr in attributes) {
    if (attributes.hasOwnProperty(attr)) {
      const element = attributes[attr];
      const attributName = camelToKebab(attr);
      if (attr.startsWith("on")) {
        const signal = attributName.substr(3);
        signals[signal] = element;
      } else if (attr === "class" || attr === "className") {
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
    let isBox =
      Widget === Gtk["Box"] || Widget === Gtk["VBox"] || Widget === Gtk["HBox"];
    let isGrid = (w: Gtk.Widget) =>  w === new Gtk.Grid;

    children
      .reduce((acc: string | any[], val: any) => acc.concat(val), [])
      .map(
        (child: { Widget: any; attributes: any; children: any[] } | string) => {
          if (typeof child === "string") {
            return new Gtk.Label({ label: child, visible: true });
          } else {
            return render(child);
          }
        }
      )
      .forEach((child: any) => {
        if (isBox) {
          widget.append(child);
        } else {
          widget.set_child(child);
        }
      });
  }
  const isWindow = Widget === Gtk.ApplicationWindow || Widget === Gtk.Window;
  if (isWindow && typeof widget.present === "function") widget.present();

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

export default { render, createWidget, isConstructor };