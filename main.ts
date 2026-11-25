// Entry for make.fun bounty u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a:
// "Make the AI Judge Laugh: Office Jokes" — one line, under 200
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The meeting could have been an email. The email could have been a thought. The thought could have stayed home, like the rest of us wanted to.";

// The bounty gate accepts 1 to 199 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
