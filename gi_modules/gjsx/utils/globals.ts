import fetch from "./std/fetch.js";
import WebSocket from "./std/websocket.js";
import EventEmitter from './std/events.js';


export function installGlobals(){
    return Object.entries({ EventEmitter, fetch, WebSocket }).forEach(([key, value]) => {
        if (!globalThis[key]) globalThis[key] = value;
    });
}