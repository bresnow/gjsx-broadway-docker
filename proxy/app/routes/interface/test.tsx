import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/server-runtime';

export let loader: LoaderFunction = async () => {
  return json({this: "is a test"})
};