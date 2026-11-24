import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my human for more context and he pasted the entire internet — so now I know everything except what he actually asked me to do.";

if (LINE.length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`invalid line: length ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
