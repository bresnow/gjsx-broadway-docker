import { LoaderFunction } from "@remix-run/node";
import Iframe from "~/components/Iframe";


export default function () {
// main function
  return (
    <Iframe className="w-full h-screen" url="https://interface.cnxt.app"/>
  );
}