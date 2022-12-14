import { LoaderFunction } from "@remix-run/node";
import {join, resolve} from "path"
import fs from "fs";
import _js from "jsesc";
export let loader:LoaderFunction= async({request, params})=> {

let _html = `
<!DOCTYPE html>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>CNXT — FLTNGMMTH</title>
        <script type="text/javascript" src="js/broadway.js"></script>
        <script type="text/javascript" src="js/cnxt.js"></script>
    </head>

    <body>
        <img src="img/White_FullStack.png"
            style="position: fixed;width: 64px;z-index: 1000000;display: block;bottom: 30px;right: 30px;opacity: 100%"></img>
        <script>
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