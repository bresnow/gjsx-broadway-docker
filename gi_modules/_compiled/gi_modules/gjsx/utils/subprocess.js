import GLib from "gi://GLib";
import Gio from "gi://Gio";
async function execFailCheck(argv, cancellable = null) {
  let cancelId = 0;
  let proc = new Gio.Subprocess({
    argv,
    flags: Gio.SubprocessFlags.NONE
  });
  proc.init(cancellable);
  if (cancellable instanceof Gio.Cancellable) {
    cancelId = cancellable.connect("cancelled", () => proc.force_exit());
  }
  return new Promise((resolve, reject) => {
    proc.wait_check_async(null, (proc2, res) => {
      try {
        if (!proc2.wait_check_finish(res)) {
          let status = proc2.get_exit_status();
          throw new Error(JSON.stringify({
            code: Gio.io_error_from_errno(status),
            message: GLib.strerror(status)
          }, null, 2));
        }
        resolve(void 0);
      } catch (e) {
        reject(e);
      } finally {
        if (cancelId > 0) {
          cancellable.disconnect(cancelId);
        }
      }
    });
  });
}
async function execCommunicate(argv, input, cancellable = null) {
  let cancelId = 0;
  let flags = Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE;
  if (input !== null)
    flags |= Gio.SubprocessFlags.STDIN_PIPE;
  let proc = new Gio.Subprocess({
    argv,
    flags
  });
  proc.init(cancellable);
  if (cancellable instanceof Gio.Cancellable) {
    cancelId = cancellable.connect("cancelled", () => proc.force_exit());
  }
  return new Promise((resolve, reject) => {
    proc.communicate_utf8_async(input, null, (proc2, res) => {
      try {
        let [, stdout, stderr] = proc2.communicate_utf8_finish(res);
        let status = proc2.get_exit_status();
        if (status !== 0) {
          throw new Error(JSON.stringify({
            code: Gio.io_error_from_errno(status),
            message: stderr ? stderr.trim() : GLib.strerror(status)
          }, null, 2));
        }
        resolve(stdout.trim());
      } catch (e) {
        reject(e);
      } finally {
        if (cancelId > 0) {
          cancellable.disconnect(cancelId);
        }
      }
    });
  });
}
const launch = (argv, opts) => {
  let launcher = new Gio.SubprocessLauncher({
    flags: Gio.SubprocessFlags.STDIN_PIPE | Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
  });
  opts?.env.forEach((variable) => {
    Object.entries(variable).forEach(([key, val]) => {
      launcher.setenv(key.toUpperCase(), val, false);
    });
  });
  typeof argv === "string" ? argv = [argv] : argv = argv;
  launcher.set_stderr_file_path(`/var/logs/${argv.reduce((p, c) => p + c).slice(0, 9).replace(" ", "_")}_error.log`);
  return launcher.spawnv(argv);
};
export {
  execCommunicate,
  execFailCheck,
  launch
};
