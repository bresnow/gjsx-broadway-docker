import GLib from 'gi://GLib'
import Gio from 'gi://Gio'
import Gjsx from 'gjsx';


const SETTINGS_PORTAL_INTERFACE =
    <node>
        <interface name="org.freedesktop.portal.Settings">
            <method name="Read">
                <arg direction="in" type="s" name="namespace" />
                <arg direction="in" type="s" name="key" />
                <arg direction="out" type="v" name="value" />
            </method>
            <signal name="SettingChanged">
                <arg type="s" name="namespace" />
                <arg type="s" name="key" />
                <arg type="v" name="value" />
            </signal>
            <property name="version" access="read" type="u" />
        </interface>
    </node>
export default function DbusProxyWrap() {
    let proxy ;
    const TestProxy = Gio.DBusProxy.makeProxyWrapper(SETTINGS_PORTAL_INTERFACE)
    try {
//@ts-ignore
        proxy = new TestProxy(Gio.DBus.SESSION, 'guide.gjs.Test', '/guide/gjs/Test');
    } catch (e) {
        log(e+'Constructing proxy');
    }
    // Gio.DBusProxy.makeProxyWrapper() function. It will create for us a Gio.DBusProxy class with convenience methods and properties to the interface’s ones.


    // Properties work just like regular JavaScript properties:
    log(`ReadOnlyProperty: ${proxy.ReadOnlyProperty}`);
    log(`ReadWriteProperty: ${proxy.ReadWriteProperty}`);

    proxy.ReadWriteProperty = true;
    log(`ReadWriteProperty: ${proxy.ReadWriteProperty}`);

    // However, you will still have to watch Gio.DBusProxy::g-properties-changed to
    // be notified of changes
    proxy.connect('g-properties-changed', (proxy, changed, invalidated) => {
    });


    // The wrapper function will assign both synchronous and asynchronous variants
    // of methods on the object
    proxy.SimpleMethodSync();

    proxy.ComplexMethodRemote('input string', (returnValue, errorObj, fdList) => {

        // If @errorObj is `null`, then the method call succeeded and the variant
        // will already be unpacked with `GLib.Variant.prototype.deepUnpack()`
        if (errorObj === null) {
            log(`ComplexMethod('input string'): ${returnValue}`);

            // Methods that return file descriptors are fairly rare, so you will
            // know if you should expect one or not. Consult the API documentation
            // for `Gio.UnixFDList` for more information.
            if (fdList !== null) {
            }

            // If you were wrapping this function call in a Promise, this is where
            // you would call `resolve()`

            // If there was an error, then @returnValue will be an empty list and
            // @errorObj will be an Error object
        } else {
            log(errorObj);

            // If you were wrapping this function call in a Promise, this is where
            // you would call `reject()`
        }
    });


    // Signals are connected and disconnected with the functions `connectSignal()`
    // and `disconnectSignal()`, so they don't conflict with the GObject methods.
    const handlerId = proxy.connectSignal('TestSignal', (proxy, nameOwner, args) => {
        log(`TestSignal: ${args[0]}, ${args[1]}`);

        proxy.disconnectSignal(handlerId);
    })
}
