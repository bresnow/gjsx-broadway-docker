const Gio   = imports.gi.Gio;
const GLib  = imports.gi.GLib;
const Lang  = imports.lang;

class SpawnReader {
    constructor() { }
    spawn(path, command, func) {

        let pid, stdin, stdout, stderr, stream, reader;

        [res, pid, stdin, stdout, stderr] = GLib.spawn_async_with_pipes(
            path, command, null, GLib.SpawnFlags.SEARCH_PATH, null);

        stream = new Gio.DataInputStream({ base_stream: new Gio.UnixInputStream({ fd: stdout }) });

        this.read(stream, func);
    }
    read(stream, func) {

        stream.read_line_async(GLib.PRIORITY_LOW, null, Lang.bind(this, function (source, res) {

            let out, length;

            [out, length] = source.read_line_finish(res);
            if (out !== null) {
                func(out);
                this.read(source, func);
            }
        }));
    }
}



