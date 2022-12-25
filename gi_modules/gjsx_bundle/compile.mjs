#!/usr/bin/env node
import { transformSync, buildSync } from "esbuild";
import { argv, chalk, fs, glob, cd, $ } from "zx";
import Gun from "gun";
import { join, dirname } from "path";
import chokidar from "chokidar";
import { format } from "prettier"
import * as lexer from "./lexer.mjs";
import * as pkg from "./ltx.mjs";
import tsconf from "../tsconfig.json" assert {type: "json"}
import { updateService } from "./docker.mjs";
const { compilerOptions } = tsconf;

const _curdir_ = dirname("./package.json");
let { red, green, blue, yellow } = chalk;
const { createElement: xml } = pkg;
let watch = argv.watch !== undefined, deploy = argv.deploy !== undefined;
let entryPoints = await glob([`${_curdir_}/**/*.{ts,tsx}`],{
  ignore: [`${_curdir_}/types/**/*`, `${_curdir_}/node_modules/**/*`]
});
// console.log(entryPoints)
let scope = chokidar.watch(entryPoints, {
  persistent: true,
});
if (watch) {
  ["add", "change", "unlink"].forEach( (e) => {
    scope.on(e, async (path) => {
      console.log(
        green(`Compiling ${blue(path)} after ${yellow(e)} event`)
      );
       compile(path)
    }
    )
  });
  scope.on("change", () => {
    deploy && updateService()
  })
}
else {
for (let i = 0; i < entryPoints.length; i++) {
let entryPoint = entryPoints[i];
try {
  compile(entryPoint)
 } catch (error) {
  console.error(red(error))
 }
}

}
 function compile(_path) {
  var entryPoint = _path,{ dots, path, extension, basename } = deconstruct_path(entryPoint)
    let content = get_content(entryPoint, dots)
    let { code } = transformSync(content, {
      loader: extension,
      tsconfigRaw: JSON.stringify({ compilerOptions })
    })
    var compiled_path = ["_compiled", path].join("/");
    var output = join(compiled_path, basename + ".js");
    if (!fs.existsSync(compiled_path)) {
      fs.mkdirpSync(compiled_path)
    }
  //  !watch && console.log(output, "Output")
    fs.writeFileSync(output, format(code, { semi: true, singleQuote: false, parser: "babel" }), { encoding: "utf8" })


}

function get_content(entryPoint, dots) {
  return fs.readFileSync(entryPoint, { encoding: "utf8" }).split("\n").map(line => {
    line = line.trim();
    const match = line.match(/^import (\w+) from/);
    if (match) {
      let [_parsed] = lexer.parse(line)
      // ss === statement start
      // se === statement end
      // s is start of module path
      // e is end of module path
      // n is location
      // d > -1 means dynamic import
      // a is for assert
      let imports = _parsed[0], { ss, se, s, e, a, n: _imported, d } = imports;
      if (/gi:\/\/Gjsx/.test(_imported)) {
        return line.replace(/(gi:\/\/Gjsx)/, dots + "gjsx/index.js");
      }
      if (isBundableImport(imports)) {
        let type, statement = line.slice(ss, se);
        const name = getImportName(statement);

        if (a > -1) {
          const assert = line.slice(a, se);
          type = getAssertType(assert);
          if (!type) {
            throw new Error(`Invalid assert syntax "${assert}"`);
          }
        }
        copyAsset(_imported)
        if (type === "json" || _imported.endsWith(".json")) {
          return `const ${name} = JSON.parse(new TextDecoder().decode(imports.gi.Gio.File.new_for_uri(import.meta.url).get_parent().resolve_relative_path("${_imported}").load_contents(null)[1]))`;
        }
        if (type === "string") {
          return `const ${name} = new TextDecoder().decode(imports.gi.Gio.File.new_for_uri(import.meta.url).get_parent().resolve_relative_path("${_imported}").load_contents(null)[1]) `;
        }
        if (type === "css" || _imported.endsWith(".css")) {
          return `const ${name} = new imports.gi.Gtk.CssProvider().load_from_file(imports.gi.Gio.File.new_for_uri(import.meta.url).get_parent().resolve_relative_path("${_imported}"))`;
        }
        if (type === "file") {
          return `const ${name} = imports.gi.Gio.File.new_for_uri(import.meta.url).get_parent().resolve_relative_path("${_imported}")`;
        }
        if (!type){
          return `const ${name} = imports.gi.Gio.File.new_for_uri(import.meta.url).get_parent().resolve_relative_path("${_imported}").get_uri().replace("file://","")`;
        }
        if (type) {
          throw new Error(`Unsupported assert type "${type}"`);
        }
      }

      else {
        return line;
      }
    }
    return line

  }).join("\n");
}

function copyAsset(source) {
  let src_path = source;
  var {path, extension, basename } = deconstruct_path(src_path)
  path = src_path.replace('../', "").replace(`/${basename}.${extension}`, "")
  var compiled_path = ["_compiled", path].join("/")
  if (!fs.existsSync(compiled_path)) {
    fs.mkdirpSync(compiled_path);
  }
  console.log("Assets Copied", yellow(compiled_path + `/${basename}.${extension}`))
  fs.copyFileSync(path + `/${basename}.${extension}`, compiled_path + `/${basename}.${extension}`)
}

function deconstruct_path(_path) {
  let route = _path;
  let pathto = route.split("/"), _basename = pathto[pathto.length - 1];
  let [basename, extension] = _basename.split(".");
  pathto.pop();
  // back path to gi_modules directory
  let dots = pathto.map((dir) => {
    if (dir !== ("gjsx" || "app" || "assets")) {
      return "../"
    }

  }).join("")

  return {
    path: pathto.join("/"),
    route,
    extension,
    basename,
    dots
  };

}

function isBundableImport(imported) {
  const location = imported.n ?? null;
  if (!location) return false;
  if (location.startsWith("gi:")) return false;
  if (location.startsWith("resource:")) return false;
  if (location.endsWith(".js")) return false;
  if (!location.startsWith(".") && !location.startsWith("/")) return false;
  return true;
}

function getAssertType(assert) {
  const normalized = assert
    .replace(/\s/g, "")
    .replace(/"/g, "")
    .replace(/'/g, "")
    .replace(/,/g, "");
  return normalized.match(/^{type:(.+)}$/)?.[1] || null;
}

function getImportName(statement) {
  const match = statement.match(/^import (\w+) from/);
  return match?.[1];
}


function isImage(location) {
  return /\.(png|jpg|jpeg|gif|svg|webp|bmp|avif)$/.test(location);
}

