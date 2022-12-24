import GLib from "gi://GLib";
import Gio from "gi://Gio";
/*! ISC License
 *
 * Copyright (c) 2017-2018, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
const File = Gio.File;
const CURRENT_DIR = GLib.get_current_dir();
const PROGRAM_EXE = File.new_for_path(CURRENT_DIR).resolve_relative_path(
  imports.system.programInvocationName
);
const PROGRAM_DIR = getProgramDir(PROGRAM_EXE).get_path();
let constants = {};
Object.defineProperties(constants, {
  CORE_MODULES: { value: /* @__PURE__ */ Object.create(null) },
  DEBUG: { value: ARGV.some((arg) => arg === "--debug") },
  PATH_SEPARATOR: { value: /^\//.test(CURRENT_DIR) ? "/" : "\\" },
  IDLE: {
    value: ARGV.some((arg) => /^--idle=(\d+)/.test(arg)) ? +RegExp.$1 || 1 : 33,
  },
  GTK_MODULES: {
    value:
      imports.gi.GIRepository.Repository.get_default().get_loaded_namespaces(),
  },
  PROGRAM_DIR: { value: PROGRAM_DIR },
  PROGRAM_EXE: { value: PROGRAM_EXE.get_path() },
});
function getProgramDir(programFile) {
  const info = programFile.query_info(
    "standard::",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null
  );
  if (info.get_is_symlink()) {
    const symlinkFile = programFile
      .get_parent()
      .resolve_relative_path(info.get_symlink_target());
    return symlinkFile.get_parent();
  } else {
    return programFile.get_parent();
  }
}
export default constants;
