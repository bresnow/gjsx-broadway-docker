import GLib from 'gi://GLib'
import Gio from 'gi://Gio'



/**
 * Execute a command asynchronously and check the exit status.
 *
 * If given, @cancellable can be used to stop the process before it finishes.
 *
 * @param {string[]} argv - a list of string arguments
 * @param {Gio.Cancellable} [cancellable] - optional cancellable object
 * @returns {Promise<boolean>} - The process success
 */
export async function execFailCheck(argv: string[], cancellable: Gio.Cancellable = null): Promise<boolean | undefined> {
    let cancelId = 0;
    let proc = new Gio.Subprocess({
        argv: argv,
        flags: Gio.SubprocessFlags.NONE
    });
    proc.init(cancellable);

    if (cancellable instanceof Gio.Cancellable) {
        cancelId = cancellable.connect("cancelled", () => proc.force_exit());
    }

    return new Promise((resolve, reject) => {
        proc.wait_check_async(null, (proc: Gio.Subprocess, res) => {
            try {
                if (!proc.wait_check_finish(res)) {
                    let status = proc.get_exit_status();

                    throw new Error(JSON.stringify({
                        code: Gio.io_error_from_errno(status),
                        message: GLib.strerror(status)
                    }, null, 2));
                }

                resolve(undefined);
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


/**
 * Execute a command asynchronously and return the output from `stdout` on
 * success or throw an error with output from `stderr` on failure.
 *
 * If given, @input will be passed to `stdin` and @cancellable can be used to
 * stop the process before it finishes.
 *
 * @param {string[]} argv - a list of string arguments
 * @param {string} [input] - Input to write to `stdin` or %null to ignore
 * @param {Gio.Cancellable} [cancellable] - optional cancellable object
 * @returns {Promise<string>} - The process output
 */
export async function execCommunicate(argv: string[], input: string | null, cancellable: Gio.Cancellable = null): Promise<string> {
    let cancelId = 0;
    let flags = (Gio.SubprocessFlags.STDOUT_PIPE |
        Gio.SubprocessFlags.STDERR_PIPE);

    if (input !== null)
        flags |= Gio.SubprocessFlags.STDIN_PIPE;

    let proc = new Gio.Subprocess({
        argv: argv,
        flags: flags
    });
    proc.init(cancellable);

    if (cancellable instanceof Gio.Cancellable) {
        cancelId = cancellable.connect("cancelled", () => proc.force_exit());
    }

    return new Promise((resolve, reject) => {
        proc.communicate_utf8_async(input, null, (proc:Gio.Subprocess, res) => {
            try {
                let [, stdout, stderr] = proc.communicate_utf8_finish(res);
                let status = proc.get_exit_status();

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

/**
 * Gio.SubprocessLauncheropen in new window is a re-usable object 
 * you can use to spawn processes. You can set the flags at construction, 
 * then just call Gio.SubprocessLauncher.spawnv() 
 * 
 * with your arguments any time you want to spawn a process.
It also allows you to designate files for input and output, change the
 working directory and set or modify environment variables, which is expecially 
 useful for spawning shell scripts.
 *
 * @param {string[]} argv - a list of string arguments
 * @param { {[key: string]:string}[]  } opts - environment variables  as an array of records  
* @return {Gio.Subprocess }
In every other way, the returned object is a regular Gio.Subprocess 
object and you can still call methods like communicate_utf8()open in
new window, wait_check()open in new window and force_exit()open in new window on it.
 */

export const launch = (argv: string | string[], opts?: { env: Array<Record<string, string>> }): Gio.Subprocess => {

    let launcher = new Gio.SubprocessLauncher({
        flags: (Gio.SubprocessFlags.STDIN_PIPE |
            Gio.SubprocessFlags.STDOUT_PIPE |
            Gio.SubprocessFlags.STDERR_PIPE)
    });
    opts?.env.forEach((variable) => {
        Object.entries(variable).forEach(([key, val]) => {
            launcher.setenv(key.toUpperCase(), val, false);
        })

    })
    typeof argv === 'string' ? argv = [argv] : argv = argv;
    // Log any errors to a file
    launcher.set_stderr_file_path(`/var/logs/${argv.reduce((p, c) => p + c).slice(0, 9).replace(" ", "_")}_error.log`);
    return launcher.spawnv(argv)
}