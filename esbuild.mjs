import { transformSync } from "esbuild";
import { $, argv, chalk,fs, glob } from "zx";
import {cwd} from "process";
import chokidar from "chokidar";
// --watch option
let watch = argv.watch !== undefined;
let entryPoints = await glob("src/**/*.{ts,tsx}");
if (watch) {
  let { red, green, blue, yellow } = chalk;
  /**
   * File watcher rebuilds after changes are made to the src directory.
   * */
  let scope = chokidar.watch(entryPoints, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });
  ["add", "change", "unlink"].forEach((e) => {
    scope.on(e, async (path) => {
      console.log(
        green(`Compiling ${blue(path)} after ${yellow(e.toUpperCase())} event`)
      );
      compile(path);
      $.verbose = false;
      await $`yarn prettier --write ${path}`;
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
  readable.on("data", (chunk) => {
    let ts_chunk = chunk;
    if(ext === "tsx"){
      
    }
    let transformedJs = transformSync(ts_chunk, {
      jsxFactory: "Gjsx.createWidget",
      loader: ext,
    }).code;
    transformedJs = transformedJs.split("\n").map((line) => {
      /**
       * Gi module paths
       */
      if (line.includes("* as")) {
        line = line.replace(/\* as/g, "") + " ";
      }
      return line;
    });
    let _compiled ;
      //if (ext === 'tsx' && !transformedJs.some((line)=> line.includes(`import Gjsx`))){

        //  _compiled = transformedJs.unshift(`import Gjsx from "./lib/gjsx.js"`)
      //}
          _compiled = transformedJs.join("\n");
      
    fs.writeFileSync(
      dirRoute.replace("src", "_compiled") +
        "." +
        ext.replace("ts", "js").replace("jsx", "js"),
      _compiled,
      "utf8"
    );
  });
}
