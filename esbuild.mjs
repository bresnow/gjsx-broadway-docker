import { transformSync } from "esbuild";
import { argv, chalk, fs, glob } from "zx";
import chokidar from "chokidar";
import { format } from "prettier"
let { red, green, blue, yellow } = chalk;
// --watch option
let watch = argv.watch !== undefined;
let entryPoints = await glob("{src,lib}/**/*.{ts,tsx}");
if (watch) {
  /**
   * File watcher rebuilds after changes are made to the src directory.
   */
  let scope = chokidar.watch(entryPoints, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });
  ["add", "change", "unlink"].forEach((e) => {
    scope.on(e, async (path) => {
      try {
        console.log(
          green(`Compiling ${blue(path)} after ${yellow(e.toUpperCase())} event`)
        );
        compile(path);
      } catch (error) {
        console.error(red(error.message))

      }
    });
  });
} else {
  entryPoints.forEach((path) => {
    compile(path);
  });
}

function compile(path) {
  let [dirRoute, ext] = path.split(".");
  let readable = fs.createReadStream(path, "utf8");
  let pathto = dirRoute.split("/"), basename = pathto[pathto.length - 1];
  pathto.pop();
  pathto = pathto.join("/");
  let dotsToLibFromSrc = pathto.split("/").map((curr) => {
    if (typeof curr === "string" && curr !== "lib") {
      return ".."
    }
  }).join("/")

  readable.on("data", async (chunk) => {
    let ts_chunk = format(chunk, { semi: true, singleQuote: false, parser: "typescript" }), transformedJs, transformedUi;

    transformedUi = ts_chunk.split("\n").map((line) => {
      let uiregex = /<(\/?)(interface|requires|object|template|property|signal|child|menu|item|attribute|link|submenu|section)(.*?)>/g
      if (uiregex.test(line));
        return line;
    }).join("\n").trim();
    ts_chunk = ts_chunk.split("\n").map((line) => line).join("\n");
    transformedUi = transformSync(transformedUi, { jsx: "preserve", loader: "jsx" });
    if (transformedUi.code && transformedUi.warnings.length === 0) {
      try {
        if (!fs.existsSync("_compiled/ui")) {
          fs.mkdirSync("_compiled/ui");
        } else {
          transformedUi = `<?xml version="1.0" encoding="UTF-8"?>\n` + transformedUi.code;
        }
        let uiPath = "_compiled/ui/" + basename + ext.replace("ts", "js").replace("jsx", ".ui"), uiData = format(transformedUi.trim(), { semi: false, bracketSpacing: false, singleQuote: false, parser: "mdx" });
        fs.writeFileSync(
          uiPath,
          uiData,
          "utf8"
        );
      } catch (error) {
        console.error(red("UI BUILDER ERROR:-" + error.message))
      }
    };
    try {
      transformedJs = transformSync(ts_chunk, {
        jsxFactory: "Gjsx.createWidget",
        loader: ext,
      }).code;
      transformedJs = transformedJs.split("\n").map((line) => {
        if (/(import)(.*)(from)\s("gjsx")/g.test(line)) {
          line = line.replace(/(gjsx)/, dotsToLibFromSrc + "/lib/gjsx.js");
        };
        return line
      });

      let _compiled = transformedJs.join("\n");
      if (!fs.existsSync("_compiled/" + pathto)) {
        fs.mkdirSync("_compiled/" + pathto);
      }
      const path = "_compiled/" + dirRoute + "." +
        ext.replace("ts", "js").replace("jsx", "js")
      fs.writeFileSync(
        path,
        format(_compiled, { semi: true, singleQuote: false, parser: "babel" }),
        "utf8"
      );
    } catch (error) {
      console.error(red("JSX => JS BUILDER ERROR:-" + error.message))
    }
  });
}

