import { json } from '@remix-run/node';
import type { AppLoadContext, EntryContext } from '@remix-run/server-runtime';
import { isResponse } from '@remix-run/server-runtime/dist/responses';
import { ServerRouteModule } from '@remix-run/server-runtime/dist/routeModules';
import { Options } from './browser';
import invariant from '@remix-run/react/dist/invariant';
import Gun from 'gun';

export function createServerDataloader<LoadContext extends AppLoadContext>(
  build: EntryContext,
  request: Request,
  params: any,
  context: LoadContext
) {
  return {
    async load(id: string, options?: Options) {
      let route: ServerRouteModule = build.routeModules['routes/' + id];
      if (!route) {
        throw new Error(`Route ${id} not found`);
      }
      let loader = route.loader;

      if (!loader) {
        throw new Error(`Route ${id} has no loader`);
      }
      let result = await loader({ request, params, context });
      return isResponse(result) ? result : json(result);
    },
  };
}
