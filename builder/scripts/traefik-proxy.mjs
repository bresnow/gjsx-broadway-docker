import Dockerode from 'dockerode';
import DockerodeCompose from 'dockerode-compose';
import { fs } from 'zx';
import yaml from 'js-yaml'

var config = loadConfig().scripts["traefik-proxy"];

var { compose_file, name } = config;
console.log(JSON.stringify(config, null, 2));
var docker = new Dockerode();
var compose = new DockerodeCompose(docker, compose_file, name);

try{
    await compose.pull();
    var state = await compose.up();
    console.log(state);
}catch(err){
await compose.down();
    console.error(err);
    console.log("Composed down")
}




function loadConfig() {
    return yaml.load(fs.readFileSync('system/scripts/config.yml'))
}