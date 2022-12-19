#!/usr/bin/env node
import { transform, buildSync } from "esbuild";
import { argv, chalk, fs, glob, $ } from "zx";
import Gun from "gun";
import { join, dirname } from "path";
import { promisify } from "util";
import chokidar from "chokidar";
import { format } from "prettier"
import * as lexer from "./gjsx_bundle/lexer.mjs";
import * as pkg from "./gjsx_bundle/ltx.mjs";
import tsconf from "./tsconfig.json" assert {type: "json"}
import { updateService } from "./gjsx_bundle/docker.mjs";
const { compilerOptions } = tsconf;

const _curdir_ = dirname("./package.json");
let { red, green, blue, yellow } = chalk;
const { createElement: xml } = pkg;
let watch = argv.watch !== undefined, deploy = argv.deploy !== undefined;
let entryPoints = await glob(["../src/**/*.{ts,tsx}", "gjsx/**/*.{ts,tsx}"]);

let scope = chokidar.watch(entryPoints, {
  persistent: true,
});
if (watch) {
  ["add", "change", "unlink"].forEach(async (e) => {
    scope.on(e, async (path) => {
        console.log(
          green(`Compiling ${blue(path)} after ${yellow(e.toUpperCase())} event`)
        );
        await compile(path)
    }
    )
  });
  scope.on("change", ()=> {
   deploy && updateService("broadway") 
  })
}else{
  entryPoints.forEach(async (path)=> {
  await compile(path)
  })
  deploy &&  updateService("broadway") 
    process.exit(0);
}
async function compile(path) {
  var entryPoint = path;
  var { dots, path, extension, basename } = deconstruct_path(entryPoint)
  let content = fs.readFileSync(entryPoint, { encoding: "utf8" }).split("\n").map(line => {
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
      let imports = _parsed[0], { ss, se, s, e, a, n, d } = imports;
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
copyAsset(n)
        if (type === "json" || n.endsWith(".json")) {
  
          return `const ${name} = importer.json("${n}")`;
        }
        if (type === "builder") {
          return `const ${name} = importer.builder("${n}")`;
        }
        if (type === "string") {
          return `const ${name} = importer.toString("${n}")`;
        }
        if (type === "css" || n.endsWith(".css")) {
          return `const ${name} = importer.css("${n}")`;
        }
        if (type === "file") {
          return `const ${name} = importer.file("${n}")`;
        }
        if (type) {
          throw new Error(`Unsupported assert type "${type}"`);
        }
      }
      if (/gi:\/\/Gjsx/.test(n)) {
        return line.replace(/(gi:\/\/Gjsx)/, dots + "gjsx/index.js");
      }
      else {
        return line;
      }
    }
    return line

  }).join("\n");
  let worked = await Gun.SEA.work(entryPoint)
  try {

    let { code } = await transform(content, {
      jsxFactory: "Gjsx.createWidget",
      loader: extension,
      tsconfigRaw: JSON.stringify({ compilerOptions })
    })
    var compiled_path = join("_compiled", path.replace("../", ""));
    var output = join(compiled_path, basename + ".js");
    if (!fs.existsSync(compiled_path)) {
      fs.mkdirpSync(compiled_path)
    }
    // fs.mkdirSync(path.resolve(path.dirname("./"), "_compiled"), route.replace("../", "").replace(".tsx", ".js").replace(".ts", ".js").replace("gjsx", "lib/gjsx") );
    fs.writeFileSync(output, format(code, { semi: true, singleQuote: false, parser: "babel" }), { encoding: "utf8" })
  }
  catch (err){
    console.error(red(err))
  }
   
}


function copyAsset(source){
  let n = source;
 if (!n.endsWith(".js") && !fs.existsSync(join("_compiled", n.replace("../","")))){
  fs.mkdirpSync(dirname(join("_compiled", n.replace("../",""))));
fs.copyFileSync(n, join("_compiled", n.replace("../","")))
          }
}

function deconstruct_path(_path) {
  let route = _path;
  let pathto = route.split("/"), _basename = pathto[pathto.length - 1];
  let [basename, extension] = _basename.split(".");
  pathto.pop();
  console.log(pathto.join("/"))
  // back path to gi_modules directory
  let dots = pathto.map((dir) => {
    if (dir !== ("src" || "_compiled" || "gjsx" || "gi_modules")) {
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

