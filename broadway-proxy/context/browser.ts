import axios, { RequestHeaders } from 'redaxios';
import { includes } from './useFetcherAsync';
import type { IGun, IGunMeta } from 'gun';
import 'gun/lib/path';
import 'gun/sea';
import 'gun/lib/webrtc';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import 'gun/lib/rindexed';
import 'gun/lib/then';
import 'gun/lib/load';
import 'gun/lib/open';
import 'gun/lib/not';
import 'gun/lib/axe';
const errorCheck = (promise: any) => {
  let prop = 'err' || 'ERR' || 'error' || 'ERROR';
  if (Object.getOwnPropertyNames(promise).includes(prop)) {
    return true;
  }
  return false;
};

export type GunNodeData = IGunMeta<Record<string, any>>;

export function createBrowserLoader() {
  return {
    async load(routePath: string, options?: Options) {
      let Gun = (window as any).Gun as IGun;
      let { body, params, method, ...opts } = options ?? {};
      let { routeData } = __remixContext;
      let { gunOpts } = routeData.root;
      const cacheRef = Gun(gunOpts);
      if (params) {
        if (!routePath.endsWith('/')) {
          routePath += '/';
        }
        // TODO: search param stuff goes here
      }
      let postfix = 'post' || 'POST';
      let { data } =
        body || method === postfix
          ? await axios.post(routePath, body, { params, method, ...opts })
          : await axios.get(routePath, options);
      let cache;
      if (data && includes(params, 'path') && !errorCheck(data)) {
        let { path } = params ?? {};
        cacheRef.path(path).put(data);
        cache = await new Promise((res, rej) =>
          cacheRef.path((path as string).replace('/', '.')).load((data) => {
            data && res(data);
          })
        );
      }
      return { data, cache };
    },
  };
}

export type Options = {
  url?: string;
  method?:
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete'
    | 'options'
    | 'head'
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'DELETE'
    | 'OPTIONS'
    | 'HEAD';
  headers?: RequestHeaders;
  body?: FormData | object;
  responseType?:
    | 'text'
    | 'json'
    | 'stream'
    | 'blob'
    | 'arrayBuffer'
    | 'formData'
    | 'stream';
  params?: Record<string, any> | URLSearchParams;
  paramsSerializer?: (params: Options['params']) => string;
  withCredentials?: boolean;
  auth?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  validateStatus?: (status: number) => boolean;
  transformRequest?: ((body: any, headers?: RequestHeaders) => any | null)[];
  baseURL?: string;
  fetch?: typeof window.fetch;
  data?: any;
};

// if (reslv) {
//      // }
