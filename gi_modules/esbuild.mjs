import { transform, buildSync } from "esbuild";
import { argv, chalk, fs, glob, $ } from "zx";
import chokidar from "chokidar";
import { format } from "prettier"
import Docker from "dockerode";
let { red, green, blue, yellow } = chalk;
const docker = new Docker({ port: 8000 })
// --watch option
let watch = argv.watch !== undefined, deploy = !!argv.deploy;

const updateService = (optionalServiceName) => {
  if (deploy)
    docker.listServices({}
      , (err, services) => {
        services.forEach(async service => {
          if (service.Spec.Name.includes("gjsx")) {
            let initSvc = service
            const { Spec, ID } = initSvc;
            const _service = docker.getService(ID);
            try {
              await _service.remove(ID)
              let success = await docker.createService({ ...Spec })
              console.log(green('successful redeployment of ' + Spec.Name), yellow(success.id))
            } catch (e) {
              console.log(red(e))
            }

          }
        })
      })
}
let entryPoints = await glob(["../src/**/*.{ts,tsx}", "gjsx/**/*.{ts,tsx}"]);


buildSync({
  entryPoints,
  format: "esm",
  jsxImportSource: "gjsx",
  outdir: "_precompiled",
  tsconfig:"../tsconfig.json"
})

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
//         line = line.replace(/(gjsx)/, dotsToLibFromSrc + "/lib/gjsx/index.js");
//       };
//       if (/(import)(.*)(from)(\s+)(("|')gjsx\/utils("|'))/g.test(line)) {
//         line = line.replace(/(gjsx\/utils)/, dotsToLibFromSrc + "/lib/gjsx/utils/index.js");
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



