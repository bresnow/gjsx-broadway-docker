import * as Gtk from "gi://Gtk?version=4.0";

export function Layout({ names }: { names: string[] }) {
  return (
    <Gtk.Box
      spacing={18}
      valign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
    >
      <WelcomeWidget />
      <Gtk.Label label={"Text label as widget tag"} wrap={true} />
      {names.map((name) => (
        <Gtk.Button label={name} />
      ))}
      {"Text label as string. Placed right in the jsx markup."}
      <Gtk.Button
        label={"Pushing My Buttons"}
        onClicked={(button) => {
          print("Event fired!!");
          button.label = "Pushed Real Guuud";
        }}
        halign={Gtk.Align.CENTER}
      />
    </Gtk.Box>
  );
}
