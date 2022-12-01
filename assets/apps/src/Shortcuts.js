// import Gtk from "gi://Gtk";

export default function Shortcuts({
  application,
  window,
  // onReload,
  // onStopLoading,
  // onGoBack,
  // onGoForward,
  // onGoHome,
  onToggleWebInspector,
}) {
  // const shortcuts = [
  //   // [["<Alt>Home"], onGoHome],
  //   // [["Escape"], onStopLoading],
  //   // [["<Primary>R", "F5"], () => onReload(false)],
  //   // [["<Primary><Shift>R", "<Shift>F5"], () => onReload(true)],
  //   // [["<Alt>Left"], onGoBack],
  //   // [["<Alt>Right"], onGoForward],
  //   [["<Primary><Shift>I"], onToggleWebInspector],
  // ];

  // const shortcutController = new Gtk.ShortcutController();
  // shortcuts.forEach(([accels, fn]) => {
  //   const shortcut = new Gtk.Shortcut({
  //     trigger: Gtk.ShortcutTrigger.parse_string(accels.join("|")),
  //     action: Gtk.CallbackAction.new(() => {
  //       fn();
  //       return true;
  //     }),
  //   });
  //   shortcutController.add_shortcut(shortcut);
  // });

  application.set_accels_for_action("app.quit", ["<Primary>Q"]);
  application.set_accels_for_action("app.inspector", ["<Primary><Shift>D"]);
  application.set_accels_for_action("app.shortcuts", ["<Primary>question"]);
  application.set_accels_for_action("win.inspector", ["<Primary><Shift>I"]);

  // window.add_controller(shortcutController);
}
