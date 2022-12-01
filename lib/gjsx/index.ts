import Gtk from "gi://Gtk?version=4.0";
const Fragment = Symbol("Fragment");
let uiregex = /<(\/?)(interface|requires|object|template|property|signal|child|menu|item|attribute|link|submenu|section)(.*?)>/g;

const createWidget = (
  Widget: any,
  attributes: any,
  ...args: any[]
): WidgetConstructed => {
  const children = args ? args.map((args) => args) : [];
  return { Widget, attributes, children };
};



const render = ({ Widget, attributes, children }: { Widget: Gtk.Widget | any; attributes: Record<string, any>; children: any[] }) => {

  if (!isConstructor(Widget)) {
    if (typeof Widget === "string" && uiregex.test(Widget)) {
      return templateRender({ Widget, attributes, children })
    }
    // component functions that aren't widgets.
    return render(Widget(attributes));
  }

  const signals: any = {};
  const connectSig: Record<string, (...arg: any[]) => void> = {};
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
      } else if (attr === 'connect') {
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

  // connect signals
  for (const signal in signals) {
    if (signals.hasOwnProperty(signal)) {
      const handler = signals[signal];
      widget.connect(signal, handler);
    }
  }
  for (const signal in connectSig) {
    if (connectSig.hasOwnProperty(signal)) {
      const handler = connectSig[signal];
      widget.connect(handler);
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
        } else if (typeof widget.add_child === "function") {
          widget.add_child(child);
        } else if (typeof widget.set_child === "function") {
          widget.set_child(child);
        }
      });
  }

  return widget;
};

/* UTILS */
let encode = new TextEncoder().encode
function templateRender({ Widget, attributes, children }: { Widget: string; attributes: Record<string, string>; children: any[] }) {
  let props = Object.entries(attributes).reduce((acc, curr) => {
    let [key, value] = curr;
    let result = acc + ` ${key}="${value}"`
    return result
  }, "");
  let front_tag = `<${Widget}${props}>`, back_tag = `</${Widget}>`
  let _children = children.map(child => {
    if (child && uiregex.test(child)) {
      return templateRender(child)
    }
    return child
  })

  return encode('<?xml version="1.0" encoding="UTF-8"?>' + front_tag + _children + back_tag)

}

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


type WidgetConstructed = {
  Widget: Gtk.Widget | string;
  attributes: Record<string, any>;
  children: WidgetConstructed[];
};
export default { render, createWidget, isConstructor };
