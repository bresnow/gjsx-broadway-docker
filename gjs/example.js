#!/usr/bin/gjs

import Gtk from 'gi://Gtk?version=3.0';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import Soup from 'gi://Soup';
import ByteArray from 'byteArray';
const loop = GLib.MainLoop.new(null, false);

const session = new Soup.Session();
const message = new Soup.Message({
    method: 'GET',
    uri: Soup.URI.new('ws://localhost:8085'),
});

session.websocket_connect_async(message, 'origin', [], null, websocket_connect_async_callback);

function websocket_connect_async_callback(_session, res) {
    let connection;

    try {
        connection = session.websocket_connect_finish(res);
    } catch (e) {
        logError(e);
        loop.quit();
        return;
    }

    connection.connect('closed', () => {
        log('closed');
        loop.quit();
    });

    connection.connect('error', (self, err) => {
        logError(err);
        loop.quit();
    });

    connection.connect('message', (self, type, data) => {
        if (type !== Soup.WebsocketDataType.TEXT)
            return;

        const str = ByteArray.toString(ByteArray.fromGBytes(data));
        log(`message: ${str}`);
        connection.close(Soup.WebsocketCloseCode.NORMAL, null);
    });

    log('open');
    connection.send_text('hello');
}

loop.run();