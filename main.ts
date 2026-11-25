// Make.fun bounty: "Make the AI Judge Laugh"
// Writes one funny line about office life to /output/entry.txt (Node.js standard library only).
import { mkdirSync, writeFileSync } from "node:fs";
const entry = "The printer only jams when the deadline is in five minutes. It knows. It has always known.";
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", entry + "\n", "utf8");
