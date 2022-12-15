const NEW_LISTENER = "newListener";
const REMOVE_LISTENER = "removeListener";
let MAX_LISTENERS = 10;
let WARN_LEAK = true;
class EventEmitter {
_events;
_maxListeners;
static EventEmitter;
static get defaultMaxListeners() {
return MAX_LISTENERS;
}
static set defaultMaxListeners(value) {
WARN_LEAK = true;
MAX_LISTENERS = value;
}
constructor() {
this._events = /* @__PURE__ */ Object.create(null);
this._maxListeners = void 0;
}
addListener(...args) {
let [name, ...argv] = args;
return this.on(name, argv);
}
emit(name, ...args) {
const list = this.listeners(name);
const emitted = list.length;
list.forEach((fn) => fn.apply(this, args));
if (!emitted && args[0] instanceof Error)
throw args[0];
return emitted;
}
eventNames() {
return Reflect.ownKeys(this._events);
}
getMaxListeners() {
return this._maxListeners == null ? MAX_LISTENERS : this._maxListeners;
}
listenerCount(name) {
return this.listeners(name).length;
}
listeners(name) {
return this._events[name] || [];
}
on(name, fn) {
return onListener.call(this, "push", name, fn);
}
once(name, fn) {
return this.on(name, new Once(name, fn));
}
prependListener(name, fn) {
return onListener.call(this, "unshift", name, fn);
}
prependOnceListener(name, fn) {
return this.prependListener(name, new Once(name, fn));
}
removeAllListeners(name = "") {
if (name)
delete this._events[name];
else
this._events = /* @__PURE__ */ Object.create(null);
return this;
}
removeListener(name, fn) {
const listeners = this._events[name];
if (listeners) {
const listener = listeners.find(
(listener2) => asListener(listener2) === fn
);
if (listener) {
listeners.splice(listeners.lastIndexOf(listener));
if (name !== REMOVE_LISTENER)
this.emit(REMOVE_LISTENER, name, fn);
}
if (listeners.length < 1)
delete this._events[name];
}
return this;
}
setMaxListeners(n) {
this._maxListeners = n;
return this;
}
}
class Once {
name;
listener;
constructor(name, listener) {
this.name = name;
this.listener = listener;
}
apply(self, args) {
self.removeListener(this.name, this.listener);
this.listener.apply(self, args);
}
}
function asListener(fn) {
return fn instanceof Once ? fn.listener : fn;
}
function onListener(method, name, listener) {
const list = this._events[name] || (this._events[name] = []);
if (name !== NEW_LISTENER)
this.emit(NEW_LISTENER, name, asListener(listener));
if (list[method](listener) > this.getMaxListeners() && WARN_LEAK) {
WARN_LEAK = false;
log(
`MaxListenersExceededWarning: Possible EventEmitter memory leak detected. ${list.length} asd listeners added. Use emitter.setMaxListeners() to increase limit`
);
}
return this;
}
EventEmitter.EventEmitter = EventEmitter;
var events_default = EventEmitter;
export {
events_default as default
};
