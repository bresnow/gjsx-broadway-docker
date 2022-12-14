import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export default function () {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-slate-500">
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


