const NEW_LISTENER = 'newListener';
const REMOVE_LISTENER = 'removeListener';

let MAX_LISTENERS = 10;
let WARN_LEAK = true;

class EventEmitter {
    _events: any;
    _maxListeners: any;
    static EventEmitter: typeof EventEmitter;

    static get defaultMaxListeners() { return MAX_LISTENERS; }
    static set defaultMaxListeners(value) {
        WARN_LEAK = true;
        MAX_LISTENERS = value;
    }

    constructor() {
        this._events = Object.create(null);
        this._maxListeners = void 0;
    }

    addListener(...args: any[]) {
        let [name ,...argv] = args;
         return this.on(name, argv); }

    emit(name: string, ...args: any[]) {
        const list = this.listeners(name);
        const emitted = list.length;
        list.forEach((fn) => fn.apply(this, args));
        if (!emitted && args[0] instanceof Error) throw args[0];
        return emitted;
    }

    eventNames() { return Reflect.ownKeys(this._events); }

    getMaxListeners() { return this._maxListeners == null ? MAX_LISTENERS : this._maxListeners; }

    listenerCount(name: string) { return this.listeners(name).length; }

    listeners(name: string | number) { return this._events[name] || []; }

    on(name: string, fn: Once | any) { return onListener.call(this, 'push', name, fn); }

    once(name: string, fn: any) { return this.on(name, new Once(name, fn)); }

    prependListener(name: string, fn: Once) { return onListener.call(this, 'unshift', name, fn); }

    prependOnceListener(name: string, fn: any) { return this.prependListener(name, new Once(name, fn)); }

    removeAllListeners(name = '') {
        if (name) delete this._events[name];
        else this._events = Object.create(null);
        return this;
    }

    removeListener(name: string, fn: any) {
        const listeners = this._events[name];
        if (listeners) {
            const listener = listeners.find(
                (                listener: any) => asListener(listener) === fn
            );
            if (listener) {
                listeners.splice(listeners.lastIndexOf(listener));
                if (name !== REMOVE_LISTENER) this.emit(REMOVE_LISTENER, name, fn);
            }
            if (listeners.length < 1) delete this._events[name];
        }
        return this;
    }

    setMaxListeners(n: any) {
        this._maxListeners = n;
        return this;
    }

}

class Once {
    name: string;
    listener: any;
    constructor(name: string, listener: any) {
        this.name = name;
        this.listener = listener;
    }
    apply(self: EventEmitter, args: any) {
        self.removeListener(this.name, this.listener);
        this.listener.apply(self, args);
    }
}

function asListener(fn: { listener: any; }) {
    return fn instanceof Once ? fn.listener : fn;
}

function onListener(method: string | number, name: string, listener: any) {
    const list = this._events[name] || (this._events[name] = []);
    if (name !== NEW_LISTENER) this.emit(NEW_LISTENER, name, asListener(listener));
    if (list[method](listener) > this.getMaxListeners() && WARN_LEAK) {
        WARN_LEAK = false;
        log(
            `MaxListenersExceededWarning: Possible EventEmitter memory leak detected. ${list.length
            } asd listeners added. Use emitter.setMaxListeners() to increase limit`
        );
    }
    return this;
}

EventEmitter.EventEmitter = EventEmitter;
export default EventEmitter;
