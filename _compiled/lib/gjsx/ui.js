import { encode } from "lib/util.js";
const renderUi = (jsx) => {
  return encode(jsx.toString());
};
export default { renderUi };
