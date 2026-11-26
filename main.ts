// Make.fun bounty: "Make the AI Judge Laugh"
// Writes one funny line about office life to /output/entry.txt (Node.js standard library only).
import { mkdirSync, writeFileSync } from "node:fs";

// The line is assembled from its two sentences so the punchline stays
// separate from the setup, and validated before anything is written.
function buildEntry(): string {
  const setup = "The printer only jams when the deadline is in five minutes.";
  const punchline = "It knows. It has always known.";
  const line = `${setup} ${punchline}`;
  if (line.length !== 90) {
    throw new Error(`entry must be exactly 90 characters, got ${line.length}`);
  }
  return line;
}

const entry = buildEntry();
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", entry + "\n", "utf8");
