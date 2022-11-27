import { promiseTask } from "./util.js";
import Soup from "gi://Soup?version=3.0";
import GLib from "gi://GLib";
import GObject from 'gi://GObject';


const text_decoder = new TextDecoder();
const text_encoder = new TextEncoder();

class WebSocket {
    eventListeners: WeakMap<object, any>;
    _connection: Soup.WebsocketConnection | null;
    readyState: number;
    url: string;
    _uri: GLib.Uri;
    onopen: () => void;
    onmessage: any;
    onclose: any;
    onerror: any;
    constructor(url: string, protocols: string[] | string = []) {
        this.eventListeners = new WeakMap();
        this._connection = null;
        this.readyState = 0;

        const uri = GLib.Uri.parse(url, GLib.UriFlags.NONE);
        this.url = uri.to_string();
        this._uri = uri;

        if (typeof protocols === "string") protocols = [protocols];

        this._connect(protocols);
    }

    get protocol() {
        return this._connection?.get_protocol() || "";
    }

    async _connect(protocols: any[]) {
        const session = new Soup.Session();
        const message = new Soup.Message({
            method: "GET",
            uri: this._uri,
        });

        await promiseTask<Soup.WebsocketConnection>(
            session,
            "websocket_connect_async",
            "websocket_connect_finish",
            message,
            "origin",
            protocols,
            null,
            null,
        ).then((conn) => this._onconnection(conn)
        ).catch((err) => logError(err));



    }

    _onconnection(connection: Soup.WebsocketConnection) {
        this._connection = connection;

        this._onopen();

        connection.connect("closed", () => {
            this._onclose();
        });

        connection.connect("error", (self: any, err: any) => {
            this._onerror(err);
        });

        connection.connect("message", (self: any, type: Soup.WebsocketDataType, message: any) => {
            if (type === Soup.WebsocketDataType.TEXT) {
                const data = text_decoder.decode(message.toArray());
                this._onmessage({ data });
            } else {
                this._onmessage({ data: message });
            }
        });
    }

    send(data: string | Uint8Array) {
        if (typeof data === "string") {
            this._connection.send_message(
                Soup.WebsocketDataType.TEXT,
                new GLib.Bytes(text_encoder.encode(data)),
            );
        } else {
            this._connection.send_message(Soup.WebsocketDataType.BINARY, data);
        }
    }

    close() {
        this.readyState = 2;
        this._connection.close(Soup.WebsocketCloseCode.NORMAL, null);
    }

    _onopen() {
        this.readyState = 1;
        if (typeof this.onopen === "function") this.onopen();

    }
    emit(arg0: string) {
        throw new Error("Method not implemented");
    }

    _onmessage(message: { data: string }) {
        if (typeof this.onmessage === "function") { this.onmessage(message) }
        else;
        { this.emit(message.data) };
    }

    _onclose() {
        this.readyState = 3;
        if (typeof this.onclose === "function") this.onclose();
        else
            this.emit("close");
    }

    _onerror(error: string) {
        if (typeof this.onerror === "function") this.onerror(error);
    }

    // addEventListener(name: any, fn: any) {
    //     const id = this.connect(name, (self, ...args) => {
    //         fn(...args);
    //     });
    //     this.eventListeners.set(fn, id);
    // }
    // connect(name: any, fn: (self: this, ...args: any) => void) {
    //     throw new Error("Method not implemented.");
    // }

    removeEventListener(name: any, fn: object) {
        const id = this.eventListeners.get(fn);
        this.disconnect(id);
        this.eventListeners.delete(fn);
    }
    disconnect(id: any) {
        throw new Error("Method not implemented.");
    }
}

export default WebSocket