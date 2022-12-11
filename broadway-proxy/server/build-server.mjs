import { transform } from "esbuild";
import { argv, chalk, fs, glob, $ } from "zx";
import chokidar from "chokidar";
import { format } from "prettier"
let { red, green, blue, yellow } = chalk;


const watch = argv.watch;
const watchAll = argv.watchAll;