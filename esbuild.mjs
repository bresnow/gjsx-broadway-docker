import { transform } from "esbuild";
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
  let watched = ["esbuild.mjs", ...entryPoints];
  let scope = chokidar.watch(watched, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });
  ["add", "change", "unlink"].forEach((e) => {
    scope.on(e, async (path) => {
      if (path === "esbuild.mjs") return;
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

function compile(_path) {

  let [dirRoute, ext] = _path.split(".");
  let readable = fs.createReadStream(_path, "utf8");
  let pathto = dirRoute.split("/"), basename = pathto[pathto.length - 1];
  pathto.pop();
  pathto = pathto.join("/");
  let dotsToLibFromSrc = pathto.split("/").map((curr) => {
    if (typeof curr === "string" && curr !== "lib") {
      return ".."
    }
  }).join("/")


  readable.on("data", async (chunk) => {
    let ts_chunk = chunk, transformedJs, transformedUi;


    let _preserve = ts_chunk.split("\n")[0].trim().includes("@gjsx-resource")

    if (ext === "tsx") {
      // build ui resource
      if (argv["build-ui"] || argv.ui) {
        transformedUi = ts_chunk.split("\n").map(line => {
          let uiregex = /<(\/?)(interface|requires|object|template|property|signal|child|menu|item|attribute|link|submenu|section)(.*?)>/g
          if (uiregex.test(line)) {
            return line.replace(/[});]+/g, "")
          };
        }).join("\n").trim();
        if (transformedUi.length > 0) {
          if (!fs.existsSync("_compiled/ui/" + pathto)) {
            fs.mkdirSync("_compiled/ui/" + pathto);
          }
          transformedUi = `<?xml version="1.0" encoding="UTF-8"?>` + transformedUi;
          let uiPath = `_compiled/ui/${pathto}/${basename}.${ext.replace(/tsx/g, "ui")}`, uiData = format(transformedUi.trim(), { semi: false, bracketSpacing: false, singleQuote: false, parser: "mdx" }).replace(";", "");
          fs.writeFileSync(
            uiPath,
            uiData,
            "utf8"
          );
        }
      }
    }
    let { code } = await transform(ts_chunk, {
      // jsx: _preserve ? "preserve" : "",
      jsxFactory: "Gjsx.createWidget",
      loader: ext
    });

    transformedJs = code;
    transformedJs = transformedJs.split("\n").map((line) => {
      if (/(import)(.*)(from)(\s+)(("|')gjsx("|'))/g.test(line)) {
        console.log(line)
        line = line.replace(/(gjsx)/, dotsToLibFromSrc + "/lib/gjsx/index.js");
      };
      if (/(import)(.*)(from)(\s+)(("|')gjsx\/utils("|'))/g.test(line)) {
        console.log(line)
        line = line.replace(/(gjsx\/utils)/, dotsToLibFromSrc + "/lib/gjsx/utils/index.js");
      };
      if (/(import)(.*)(from)(\s+)(("|')markdown-convert("|'))/g.test(line)) {
        line = line.replace(/(markdown-convert)/, dotsToLibFromSrc + "/lib/markdown-convert/index.js");
      };
      return line
    });

    let _compiled = transformedJs.join("\n");
    if (!fs.existsSync("_compiled/" + pathto)) {
      fs.mkdirpSync("_compiled/" + pathto);
    }
    const path = "_compiled/" + dirRoute + "." +
      ext.replace("ts", "js").replace("jsx", "js")
    fs.writeFileSync(
      path,
      format(_compiled, { semi: true, singleQuote: false, parser: "babel" }),
      "utf8"
    );
  })
}



