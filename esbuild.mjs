import { transform } from "esbuild";
import { argv, chalk, fs, glob } from "zx";
import chokidar from "chokidar";
import { format } from "prettier"
import Docker from "dockerode";
import process from "process";
let { red, green, blue, yellow } = chalk;
const docker = new Docker({ socketPath: "/var/run/docker.sock" })
const updateService = (optionalServiceName) => {
  docker.listServices({}
    , (err, services) => {
      services.forEach(service => {
        if (service.Spec.Name === ("gijsx_gjsx_dev" || optionalServiceName)) {
          const { Spec, Version } = service;
          docker.getService(service.ID).update({ version: Version.Index, ...Spec }, (err, service) => {
            console.log(JSON.stringify({ err, service }))
          })

        }
      })

    })
  // service.update({ id }, (err, service) => {
  //   // err.pipe(process.stdout)
  //   console.log(JSON.stringify({ service, err }, null, 2))
  // })
}
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
        compile(path)
      } catch (error) {
        console.error(red(error.message))

      }
    });
  });
  console.log(updateService())
} else {
  entryPoints.forEach((path) => {
    compile(path);
  });
  // await updateService()
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
    let ts_chunk = chunk, transformedJs, jsxFactory;
    jsxFactory = ts_chunk.split("\n").reduce((line) => {
      if (/(import)(.*)(from)(\s+)(("|')gjsx("|'))/g.test(line)) {
        return "Gjsx.createWidget"
      };
      if (/(import)(.*)(from)(\s+)(("|')gjsx-ui("|'))/g.test(line)) {
        return "Gjsx.templateRender"
      }
    }, "")

    let { code } = await transform(ts_chunk, {
      jsxFactory: "Gjsx.createWidget",
      loader: ext
    });

    transformedJs = code;
    transformedJs = transformedJs.split("\n").map((line) => {
      if (/(import)(.*)(from)(\s+)(("|')gjsx("|'))/g.test(line)) {
        line = line.replace(/(gjsx)/, dotsToLibFromSrc + "/lib/gjsx/index.js");
      };
      if (/(import)(.*)(from)(\s+)(("|')gjsx\/utils("|'))/g.test(line)) {
        line = line.replace(/(gjsx\/utils)/, dotsToLibFromSrc + "/lib/gjsx/utils/index.js");
      };
      if (/(import)(.*)(from)(\s+)(("|')gjsx-ui("|'))/g.test(line)) {
        line.replace(/(gjsx-ui)/, dotsToLibFromSrc + "/lib/gjsx/index.js");
      }
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



