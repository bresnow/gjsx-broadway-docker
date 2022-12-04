// function test(num) {
//     gun.get(Date.now()).get(num).put({ connected: true })
// };
// function clickmsg(name) {
//     gun.get("applicationPanel").get(name).set({ dummyData: Date.now().toLocaleString() })
// };
// gun.get('testing_events/connection').on((data) => {
//     console.log(data.event)
// })
cnxt()

function gi_sideEffect(exec, ...args) {
    new Function(exec.join(args.toString())).call()
    // giBroadwayEffect
};
gi_sideEffect`(${() => {
    console.log("giBroadwayEffect")
}})()`