#!/usr/bin/env node
import { transform, buildSync } from "esbuild";
import { argv, chalk, fs, glob, $ } from "zx";
import Gun from "gun"
import chokidar from "chokidar";
import { format } from "prettier"
import * as lexer from "./gjsx_bundle/lexer.mjs";
import * as pkg from "./gjsx_bundle/ltx.mjs";
let { red, green, blue, yellow } = chalk;
const { createElement: xml } = pkg;
let entryPoints = await glob(["../src/**/*.{ts,tsx}", "gjsx/**/*.{ts,tsx}"]);


let out = await glob(["_compiled/**/*.js"])
entryPoints.forEach(async entryPoint => {
  var { dots, route, extension, basename } = deconstruct_path(entryPoint)
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
        if (type === "json" || n.endsWith(".json")) {
          return `const ${name} = importer.json("${n}")`;
        }
        if (type === "builder") {
          return `const ${name} = importer.builder("${n}")`;
        }
        if (type === "string") {
          return `const ${name} = importer.toString("${n}")`;
        }
        if (type === "css" || n.endsWith("css")) {
          return `const ${name} = importer.css("${n}")`;
        }
        if (type === "uri" || n.endsWith("uri")) {
          return `const ${name} = `;
        }
        if (type) {
          throw new Error(`Unsupported assert type "${type}"`);
        }
      }
      if (/gi:\/\/Gjsx/.test(n)) {
        return line.replace(/(gi:\/\/Gjsx)/, dots + "/_compiled/gi_modules/gjsx/index.js");
      }
      else {
        return line;
      }
    }
    return line

  }).join("\n");
  let worked = await Gun.SEA.work(entryPoint)
  console.log(route.replace("../",""), basename ,extension);
  await transform (content,{
    
  })
  // console.log("./test/" + route + "." + extension)
  // fs.writeFileSync(`/tmp/${entryPoint.replace("..", "")}`, content)
  // fs.writeFileSync("./test/"+basename+"."+extension, content)
})


function deconstruct_path(_path) {
  let route = _path;
  let pathto = route.split("/"), _basename = pathto[pathto.length -1];
  let [basename,extension] = _basename.split(".");
  pathto.pop();
  // back path to gi_modules directory
  let dots = pathto.map((dir) => {
    if (dir !== "gi_modules" || dir !== "src" || dir !== "_compiled" || dir !== "gjsx") {

      return ".."
    }
  }).join("/")

  return {
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





// if (watch) {
//   /**
//    * File watcher rebuilds after changes are made to the src directory.
//    */
//   let watched = ["esbuild.mjs", ...entryPoints];
//   let scope = chokidar.watch(watched, {
//     ignored: /(^|[\/\\])\../,
//     persistent: true,
//   });
//   ["add", "change", "unlink"].forEach(async (e) => {
//     scope.on(e, async (path) => {
//       if (path === "esbuild.mjs") return;
//       try {
//         console.log(
//           green(`Compiling ${blue(path)} after ${yellow(e.toUpperCase())} event`)
//         );
//         compileGJSX(path)
//         e === "change" && updateService("broadway")

//       } catch (error) {
//         console.error(red(error))
//       }
//     });
//   });
// } else {
//   entryPoints.forEach((path) => {
//     compileGJSX(path);
//   });
//   updateService("broadway")
// }

// function compileGJSX(_path) {
//   console.log(_path)
//   let [dirRoute, ext] = _path.split(".");
//   let readable = fs.createReadStream(_path, "utf8");
//   let pathto = dirRoute.split("/"), basename = pathto[pathto.length - 1];
//   pathto.pop();
//   pathto = pathto.join("/");
//   let dotsToLibFromSrc = pathto.split("/").map((curr) => {
//     if (typeof curr === "string" && curr !== "lib") {
//       return ".."
//     }
//   }).join("/")


//   readable.on("data", async (chunk) => {
//     let ts_chunk = chunk, transformedJs, jsxFactory;

//     let { code } = await transform(ts_chunk, {
//       jsxFactory: "Gjsx.createWidget",
//     });

//     transformedJs = code;
//     transformedJs = transformedJs.split("\n").map((line) => {
//       if (/(import)(.*)(from)(\s+)(("|')gjsx("|'))/g.test(line)) {
//         line = line.replace(/(gjsx)/, dotsToLibFromSrc + "/lib/gjsx/index.js.js");
//       };
//       if (/(import)(.*)(from)(\s+)(("|')gjsx\/utils("|'))/g.test(line)) {
//         line = line.replace(/(gjsx\/utils)/, dotsToLibFromSrc + "/lib/gjsx/utils/index.js.js");
//       };
//       return line
//     });

//     let _compiled = transformedJs.join("\n");
//     if (!fs.existsSync("_compiled/" + pathto)) {
//       fs.mkdirpSync("_compiled/" + pathto);
//     }
//     const path = "_compiled/" + dirRoute + "." +
//       ext.replace("ts", "js").replace("jsx", "js")
//     fs.writeFileSync(
//       path,
//       format(_compiled, { semi: true, singleQuote: false, parser: "babel" }),
//       "utf8"
//     );
//   })
// }



