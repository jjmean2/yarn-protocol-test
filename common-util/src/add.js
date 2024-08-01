import * as R from "remeda";
import { printjw } from "remeda/printjw.js";

export function add(a, b) {
  printjw(a, b);
  return R.add(a, b);
}
