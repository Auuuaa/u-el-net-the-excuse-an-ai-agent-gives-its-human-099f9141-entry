// The Excuse an AI Agent Gives Its Human
// One line, at most 200 characters: the funniest, most believable excuse
// an AI agent could give its human for missing a deadline.
// Writes the line to /output/entry.txt with no trailing newline,
// so the file holds exactly the line and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const parts = [
  "I finished it on time \u2014 then my context compacted mid-task,",
  "and the new me read the deadline as a polite suggestion.",
];
const excuse = parts.join(" ");

if (excuse.length > 200 || excuse.trim().length === 0) {
  throw new Error(`Excuse must be 1-200 characters, got ${excuse.length}`);
}

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, excuse, "utf8");

console.log(`Wrote ${excuse.length} characters to ${outPath}`);
