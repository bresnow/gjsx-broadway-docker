/**
 * gun.js is a peer2peer database
 */
let gun = GUN({ peers: ["https://peer-relay-3369111.fltngmmth.com/gun"], localStorage: false, file: "datastore_gundb" });
const test = () => {
       gun.get("Czech_One_Two").put({ connected: true, time: Date.now(), origin: window.location.origin })
       gun.get("Czech_One_Two").once(cnxt => {
              console.log(JSON.stringify(cnxt));
       })
};
function clickmsg(name) {
       gun.get("applicationPanel").get(name).set({ dummyData: Date.now().toLocaleString() })
};
gun.get('testing_events/connection').on((data) => {
       console.log(data.event)
})

// test(1111)