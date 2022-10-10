import { EventEmitter } from 'events';
import { $ } from 'zx/.';
import WebSocket from 'ws';
var port = 8080 + Number(env.BROADWAY_DISPLAY.replace(':', ''));

const env = { GDK_BACKEND: process.env.GDK_BACKEND, BROADWAY_DISPLAY: process.env.BROADWAY_DISPLAY }

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
            self.webSocket.onmessage = function socketDataReceived(event) {
                self.emit('message', event.data);
            };
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

export { Broadway };