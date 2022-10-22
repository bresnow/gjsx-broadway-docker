import { transformSync } from "esbuild"
import { $,argv,fs,glob } from "zx"
import chokidar from 'chokidar'
let watch = argv.watch !== undefined
let entryPoints = await glob("src/**/*.{ts,tsx}")
if(watch){
let scope = chokidar.watch(entrypoints,{ignored:/(^|[\/\\])\../,persistent:true})}
['add', 'change', 'unlink'].forEach(e => {
    scope.on(e, async path ={
        compile(path)
        $.verbose = false
        await $`yarn prettier ${path}`
    })
})
else{
 entryPoints.forEach(path=>{
compile(path)
 }

console.log("dunn");

    function compile(path){
    let [dirRoute, ext] = path.split(".")
    console.log(dirRoute)
    let readable = fs.createReadStream(
        path,
        "utf8"
    )
    readable.on("data", (chunk) => {
        let ts_chunk = chunk
        let transformedJs = transformSync(ts_chunk, { jsxFactory: "Gjsx.createWidget", loader: ext }).code;
        transformedJs = transformedJs.split('\n').map(line => {
            /**
             * Gi module paths
             */
            if (line.includes('* as')) {
                line = line.replace(/\* as/g, '') + '  '
                ;
            }
            return line
        })
        let _compiled = transformedJs.join('\n')
        fs.writeFileSync('_compiled' + dirRoute.replace('src', "") + "." + ext.replace('ts', "js").replace("jsx","js"), _compiled, "utf8")
    })
    }
