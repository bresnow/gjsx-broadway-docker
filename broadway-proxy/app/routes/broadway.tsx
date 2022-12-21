import { LoaderFunction } from "@remix-run/node";
import {join, resolve} from "path"
import fs from "fs";
import _js from "jsesc";
export let loader:LoaderFunction= async({request, params})=> {

let _html = `
<!DOCTYPE html>
<html>

    <body>
     
        <script>
         window.location.replace("https://interface.cnxt.app")
        </script>
    </body>

</html>`
return html(_html, 200)
}

export function html(
    content: string,
    init: number | ResponseInit = {}
): Response {
    let responseInit = typeof init === "number" ? { status: init } : init;

    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "text/html; charset=utf-8");
    }

    return new Response(content, {
        ...responseInit,
        headers,
    });
}

export function javascript(
    content: string,
    init: number | ResponseInit = {}
): Response {
    let responseInit = typeof init === "number" ? { status: init } : init;

    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/javascript; charset=utf-8");
    }

    return new Response(content, {
        ...responseInit,
        headers,
    });
}