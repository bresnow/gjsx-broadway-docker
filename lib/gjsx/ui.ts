import { encode } from "lib/util.js";

const renderUi = (jsx: JSX.IntrinsicElements) => {
    return encode(jsx.toString()) as any
}
export default { renderUi }