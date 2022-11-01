import { transform, transformSync } from "esbuild";
import { $, argv, chalk, fs, glob } from "zx";
import chokidar from "chokidar";
// --watch option
let watch = argv.watch !== undefined;
let entryPoints = await glob("{src,lib}/**/*.{ts,tsx}");
if (watch) {
  let { green, blue, yellow } = chalk;
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
        $.verbose = false;
        await $`yarn prettier --write ${path}`;
      } catch (error) {
        console.error(error)

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
  let pathto = dirRoute.split("/"), basename = pathto.lastIndexOf();
  console.log(pathto, basename);
  pathto.pop();
  pathto = pathto.join("/");
  let dotsToLibFromSrc = pathto.split("/").map((curr) => {
    if (typeof curr === "string" && curr !== "lib") {
      console.log(curr)
      return ".."
    }
  }).join("/")

  readable.on("data", (chunk) => {
    let ts_chunk = chunk, transformedJs, transformedUi;
    
    transformedUi = ts_chunk.split("\n").map((line) => {
      if(/<(\/?)(interface|requires|object|template|property|signal|child|menu|item|attribute|link|submenu|section)(.*?)>/ig.test(line))
      return line;
    }).join("\n").trim()
    console.log(transformedUi)
    ts_chunk = ts_chunk.split("\n").map((line) => line).join("\n")
    try {
      transformedUi = transformSync(transformedUi, {jsx:"preserve"})
      if (!fs.existsSync("_compiled/ui")) {
        fs.mkdirSync("_compiled/ui");
      }
      // fs.writeFileSync(
      //   "_compiled/" + dirRoute +
      //   "." +
      //   ext.replace("ts", "js").replace("jsx", "ui"),
      //   _compiled,
      //   "utf8"
      // );
      transformedJs = transformSync(ts_chunk, {
        jsxFactory: "Gjsx.createWidget",
        loader: ext,
      }).code;
    } catch (error) { }
    
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
    fs.writeFileSync(
      "_compiled/" + dirRoute +
      "." +
      ext.replace("ts", "js").replace("jsx", "js"),
      _compiled,
      "utf8"
    );
  });
}
