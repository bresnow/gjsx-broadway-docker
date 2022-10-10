import { EventEmitter } from 'events';
import WebSocket from 'ws';

const env = { GDK_BACKEND: process.env.GDK_BACKEND, BROADWAY_DISPLAY: process.env.BROADWAY_DISPLAY }
var port = 8080 + Number(env.BROADWAY_DISPLAY.replace(':', ''));

class Broadway extends EventEmitter {
    constructor(options) {
        super()
        EventEmitter.call(this);
    }
    /*
     * Methods
     */
    connect() {
        var that = this, processStartDelay = 1000;
        setTimeout(function () {
            var self = that;
            console.log(port + 'CONNECTED');
            self.webSocket = new WebSocket('ws://0.0.0.0:' + port + '/socket', "broadway");
            self.webSocket.on('message', function (event) {
                self.emit('message', event);
            });
        }, processStartDelay);
    }
    disconnect() {
        if (this.webSocket) {
            this.webSocket.close();
        }
        if (this.process && this.process.killed === false) {
            this.process.kill('SIGTERM');
        }
        this.emit('disconnect');
    }
    send(msg) {
        if (this.webSocket) {
            this.webSocket.send(msg);
        }
    }
};







/*
 * Exports
 */

export { Broadway, env  };