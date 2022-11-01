import { transformSync } from "esbuild";
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
  let pathto = dirRoute.split("/");
  pathto.pop();
  pathto = pathto.join("/");


  readable.on("data", (chunk) => {
    let ts_chunk = chunk;

    ts_chunk = ts_chunk.split("\n").reduce((acc, curr) => {
      if (curr.includes("<template class=\"")) {
        curr = '`\n<?xml version="1.0" encoding="UTF-8"?>\n<interface>\n' + curr
      }
      if (curr.includes("</template>")) {
        curr = curr + "\n</interface>`\n"
      }
      return `${acc}
              ${curr}`
    }, "");

    let transformedJs = transformSync(ts_chunk, {
      jsxFactory: "Gjsx.createWidget",
      loader: ext,
    }).code;

    let dotsToLibFromSrc = pathto.split("/").map((curr) => {
      if (typeof curr === "string" && curr !== "lib") {
        console.log(curr)
        return ".."
      }
    }).join("/")
    console.log(dotsToLibFromSrc, pathto)
    transformedJs = transformedJs.split("\n").map((line) => {
      if (/(import)(.*)(from)\s("gjsx")/g.test(line)) {
        console.log(line);
        line = line.replace(/(gjsx)/, dotsToLibFromSrc + "/lib/gjsx.js");
        console.log(line);
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
