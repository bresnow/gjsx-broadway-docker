import GLib from './GLib-2.0';

export namespace byteArray {
    export function fromString(input: string): Uint8Array
    export function fromGBytes(input: GLib.Bytes): Uint8Array
    export function toString(x: Uint8Array): string
    export function toGBytes(x: Uint8Array): GLib.Bytes
}