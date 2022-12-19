const BROADWAY_DISPLAY = process.env.BROADWAY_DISPLAY ?? ":5"
const PROXY_PORT = process.env.PORT ? parseInt(process.env.PORT) : displayport() + 1;
const NODE_ENV = process.env.NODE_ENV || "development";
function displayport() {
    return parseInt(BROADWAY_DISPLAY.replace(':', '')) + 8080
}

export default { BROADWAY_DISPLAY, PROXY_PORT, REMIX_PORT: displayport() + 2, NODE_ENV, BROADWAY_PORT: displayport() }