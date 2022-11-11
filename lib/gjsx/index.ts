import Gtk from "gi://Gtk?version=4.0";
import convertMd from "../markdown-convert/index.js";
import GLib from 'gi://GLib';
const Fragment = Symbol("Fragment") || Symbol("");

const createWidget = (
  Widget: any,
  attributes: any,
  ...args: any[]
): WidgetConstructed => {
  const children = args ? args.map((args) => args) : [];
  return { Widget, attributes, children };
};



const render = ({ Widget, attributes, children }: { Widget: any; attributes: Record<string, any>; children: any[] }) => {

  // component functions that aren't widgets.
  if (!isConstructor(Widget) && typeof Widget === "function") {
    return render(Widget(attributes));
  }
  if (!isConstructor(Widget) && typeof Widget === "string") {
    let uiregex = /(interface|requires|object|template|property|signal|child|menu|item|attribute|link|submenu|section)/g
    if (uiregex.test(Widget)) {
      children = children.map((child) => {
        if (typeof child === "string" && !uiregex.test(child)) {
          return child
        } else {
          return render(child)
        }
      })

      let resource = `<?xml version="1.0" encoding="UTF-8"?>\n<${Widget} ${templateAttributes(attributes)}${children.length > 0 ? `>${children.reduce((acc, curr) => acc + curr, "")}</${Widget}>` : ` />`}`
      print(resource)
      return resource
    }
  }
  if (Widget === Fragment) {
    return children;
  }
  const signals: any = {};
  const styleClass: any = {};
  const constructParams: any = {};
  // Separate attributes 
  for (const attr in attributes) {
    if (attributes.hasOwnProperty(attr)) {
      const element = attributes[attr];
      const attributName = camelToKebab(attr);
      if (attr.startsWith("on")) {
        const signal = attributName.replace("on-", "");
        signals[signal] = element;
      } else if (attr === "style") {
        styleClass[attr] = element;
      } else {
        constructParams[attr] = element;
      }
    }
  }
  // call the widget constructor
  const widget = new Widget({ visible: true, ...constructParams });

  // connect signals TODO: Signal handlers to run as attributes
  for (const signal in signals) {
    if (signals.hasOwnProperty(signal)) {
      const handler = signals[signal];
      widget.connect(signal, handler);
    }
  }
  // Css attributes to add to the widget style context
  for (const style in styleClass) {
    if (styleClass["style"]) {
      let css = new Gtk.CssProvider();
      const _style = styleClass[style];
      css.load_from_data(`* { ${styleObjectToCssData(_style)} }`);
      widget.get_style_context().add_provider(css, 0)
    }
  }

  if (children) {
    children
      .reduce((acc: string | any[], val: any) => acc.concat(val), [])
      .map(
        (
          child:
            | { Widget: Gtk.Widget; attributes: any; children: any[] }
            | string
        ) => {
          if (typeof child === "string") {
            return new Gtk.Label({ label: child, use_markup: true, wrap: true });
          } else {
            return render(child);
          }
        }
      )
      .forEach((child: any) => {
        if (typeof widget.append === "function") {
          widget.append(child);
          const isWindow = Widget instanceof Gtk.ApplicationWindow || Widget instanceof Gtk.Window;
          if (isWindow && typeof widget.present === "function") {
            widget.present()
          };
        }
      });
  }

  return widget;
};

/* UTILS */

function camelToKebab(string: string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

function isConstructor(f: any) {
  try {
    new f();
  } catch (err) {
    return false;
  }
  return true;
}
function templateAttributes(attr: Record<string, string>) {
  if (typeof attr === "object") {
    return Object.entries(attr).reduce((acc, curr) => {
      let [key, value] = curr;
      key = camelToKebab(key)
      let result = acc + ` ${key}="${value}"`
      // print(`STYLE RESULT: ${result}`);
      return result
    }, "");
  } else {
    throw new Error('Attributes must be an object')
  }
}

function styleObjectToCssData(styleAttr: Record<string, string>) {
  if (typeof styleAttr === "object") {
    return Object.entries(styleAttr).reduce((acc, curr) => {
      let [key, value] = curr;
      key = camelToKebab(key)
      let result = acc + ` ${key}:${value};`
      // print(`STYLE RESULT: ${result}`);
      return result
    }, "");
  } else {
    throw new Error('Style attributes must be an object')
  }
}

export const __dirname = GLib.get_current_dir();

type WidgetConstructed = {
  Widget: Gtk.Widget | string;
  attributes: Record<string, any>;
  children: WidgetConstructed[];
};
export default { render, createWidget, isConstructor, styleObjectToCssData };