import { buildSync } from "esbuild";
import { argv, chalk, fs, glob, $ } from "zx";
import * as lexer from "./lexer.mjs";
import * as pkg from "./ltx.mjs";
let { red, green, blue, yellow } = chalk;
const { createElement: xml } = pkg;
// --watch option
let watch = argv.watch !== undefined, deploy = !!argv.deploy;


  
  let entryPoints = await glob(["../../src/**/*.{ts,tsx}", "../gjsx/**/*.{ts,tsx}"]);
  buildSync({
    entryPoints,
    format: "esm",
    jsxImportSource: "gjsx",
    outdir: "../_compiled",
    tsconfig: "../../tsconfig.json"
  })
  let out = await glob(["../_compiled/**/*.js"])
  out.forEach(entryPoint => {
    var { dots } = deconstruct_path(entryPoint)
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
          if (a === -1) {

          }
          if (type === "json") {
            substitute = `importer.json("${import_location}")`;
          } else if (type === "builder") {
            substitute = `importer.builder("${import_location}")`;
          } else if (type === "string") {
            substitute = `importer.toString("${import_location}")`;
          } else if (type === "css") {
            substitute = `importer.css("${import_location}")`;
          } else if (type === "uri") {
            substitute = ``;
          } else if (type) {
            throw new Error(`Unsupported assert type "${type}"`);
          }
console.log(substitute);
        }
      return line}
    }).join("\n");
    fs.writeFileSync(entryPoint, content)
  })


  function deconstruct_path(_path) {
    let [route, extension] = _path.split(".");
    let pathto = route.split("/"), basename = pathto[pathto.length];
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




