import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useMatches } from '@remix-run/react';
import React, { useEffect } from "react";
import { useId } from 'react';
import { EnhancedScripts } from "./enhanced-scripts";
import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }, { rel: "preload", href:"/build/external/broadway.js"}];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export let handle = {
  scripts: () => [
    { src: "/broadway" },
  ]
}

declare const cnxt: ()=>void
export default function () {
 useEffect(()=>{
  cnxt()
 })
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts  />
        <LiveReload />
        <script type="text/javascript" src="/broadway"/>
        {/* <EnhancedScripts/> */}
      </body>
    </html>
  );
}


