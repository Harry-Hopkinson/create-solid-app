const { fs } = require("fs");
import { copyDir } from "../src/index";

export function copy(src: any, dest: any) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}
