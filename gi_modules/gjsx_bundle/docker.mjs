import Docker from "dockerode";
const docker = new Docker({ port: 8000 })
export const updateService = (optionalServiceName) => {
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