import { createContext, useContext } from 'react';
import { createBrowserLoader, Options } from './browser';
import { EntryContext} from '@remix-run/server-runtime';
import {RemixBrowser, RemixServer } from "@remix-run/react"
import { createServerDataloader } from './server';
import { AppLoadContext } from '@remix-run/node';
import React from 'react';

export type ClientContext = {
  load: Load;
};
interface Load {
  (route: string, options?: Options): Promise<Response & any>;
}

let context = createContext<ClientContext | undefined>(undefined);
export let DataloaderProvider = ({
  children,
  dataloader,
}: {
  children: React.PropsWithChildren<any>;
  dataloader: ClientContext;
}) => {
  return <context.Provider value={dataloader}>{children}</context.Provider>;
};

export let useDataLoader = () => useContext(context);

export function EntryFactory() {
  return {
    Server<LoadContext extends AppLoadContext>({
      request,
      remixContext,
      context,
    }: {
      request: Request;
      remixContext: EntryContext;
        context: LoadContext;
    }) {
      let dataloader = createServerDataloader(
        remixContext,
        request,
        {},
        context
      );
      return (
        <DataloaderProvider dataloader={dataloader}>
          <RemixServer context={remixContext} url={request.url} />
        </DataloaderProvider>
      );
    },
    Client() {
      let dataloader = createBrowserLoader();
      return (
        <DataloaderProvider dataloader={dataloader}>
          <RemixBrowser />
        </DataloaderProvider>
      );
    },
  };
}
