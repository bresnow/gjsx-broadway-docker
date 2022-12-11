// Proxy server configuration location  arg
const config = ({ port, display }) => ({
    gdkBackend: display ?? ":5"
})
console.log(config)
export default config;
