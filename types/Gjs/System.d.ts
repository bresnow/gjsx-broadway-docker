import GObject from "gi://GObject"
export namespace System {
    export const programInvocationName: string
    export const version: number
    export const programPath: string | null
    /** Equal to ARGV */
    export const programArgs: string[]
    export function exit(code: number): void
    export function addressOfGObject(o: GObject.Object): object
    export function addressOf(o: any): object
    /** Runs the garbage collector */
    export function gc(): void
    export function refcount(o: GObject.Object): number
    export function dumpHeap(path: string): void
    export function dumpMemoryInfo(path: string): void
}
export default System