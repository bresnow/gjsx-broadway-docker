const BROADWAY_DISPLAY = process.env.BROADWAY_DISPLAY ?? ":5"
const PROXY_PORT = process.env.PORT ? parseInt(process.env.PORT) : displayport() + 1;
const NODE_ENV = process.env.NODE_ENV || "development";
const REMIX_PORT = process.env.REMIX_PORT ? parseInt(process.env.REMIX_PORT) : displayport() + 2
function displayport() {
    return parseInt(BROADWAY_DISPLAY.replace(':', '')) + 8080
}

module.exports =  { BROADWAY_DISPLAY, PROXY_PORT, REMIX_PORT , NODE_ENV, BROADWAY_PORT: displayport() }