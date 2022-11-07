import Gio from "gi://Gio";
import GLib from "gi://GLib";
const File = Gio.File;
const FileType = Gio.FileType;
const FileQueryInfoFlags = Gio.FileQueryInfoFlags;
const isPath = /^[./\\]/;
const cache = /* @__PURE__ */ Object.create(null);
const fileType = (file) => file.query_file_type(FileQueryInfoFlags.NONE, null);
const createRequire = (base, parent) => {
  require.cache = cache;
  require.resolve = resolve.bind(null, base);
  function require(module) {
    const path = require.resolve(module);
    if (path in cache) return cache[path];
    const content = File.new_for_path(path).load_contents(null)[1];
    if (path.slice(-5) === ".json" && typeof content === "string") {
      cache[path] = JSON.parse(content);
    } else {
      const cjs = {
        exports: {},
        filename: path,
        loaded: false,
        parent,
      };
      const dirname = GLib.path_get_dirname(path);
      cache[path] = cjs.exports;
      Function(
        "exports",
        "module",
        "require",
        "__dirname",
        "__filename",
        content.toString().replace(/^#!.+[\r\n]+/, "") +
          "\n//# sourceURL=" +
          path
      ).call(
        cjs.exports,
        cjs.exports,
        cjs,
        createRequire(dirname, cjs),
        dirname,
        path
      );
      cache[path] = cjs.exports;
      cjs.loaded = true;
    }
    return cache[path];
  }
  return require;
};
function resolve(base, module) {
  const dir = File.new_for_path(base);
  const resolver = isPath.test(module) ? loadAsFile : loadNodeModules;
  let resolved = resolver(dir, module);
  if (!resolved) throw new Error(`${module} not found`);
  return resolved;
}
function loadAsFile(dir, file) {
  let fd;
  if (
    ["", ".js", ".json", ".node"].some((ext) =>
      (fd = dir.resolve_relative_path(`${file}${ext}`)).query_exists(null)
    )
  ) {
    switch (fileType(fd)) {
      case FileType.REGULAR:
        return fd.get_path();
      case FileType.DIRECTORY:
        return loadAsDirectory(dir.resolve_relative_path(file));
    }
  }
}
function loadAsDirectory(dir) {
  const pkg = dir.resolve_relative_path("package.json");
  if (pkg.query_exists(null) && fileType(pkg) === FileType.REGULAR) {
    const info = JSON.parse(pkg.load_contents(null)[1]);
    return info.main ? loadAsFile(dir, info.main) : loadIndex(dir);
  }
  return loadIndex(dir);
}
function loadIndex(dir) {
  let fd;
  if (
    ["index.js", "index.json", "index.node"].some((file) =>
      (fd = dir.resolve_relative_path(`${file}`)).query_exists(null)
    ) &&
    fileType(fd) === FileType.REGULAR
  )
    return fd.get_path();
}
function loadNodeModules(dir, module) {
  let path;
  do {
    const modules = dir.resolve_relative_path("node_modules");
    if (modules.query_exists(null)) {
      path = loadAsFile(modules, module) || loadAsDirectory(modules);
      if (path) return path;
    }
  } while (dir.has_parent(null) && (dir = dir.get_parent()));
  GLib.getenv("NODE_PATH")
    .split(":")
    .some((folder) => {
      if (folder.length) {
        dir = File.new_for_path(folder);
        path = loadAsFile(dir, module) || loadAsDirectory(dir);
        return true;
      }
    });
  return path;
}
