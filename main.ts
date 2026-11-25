import { mkdirSync, writeFileSync } from "node:fs";

// Last Out of Office: The AI That Went Barista — one OOO line from an AI
// agent that quit to pull espresso shots. Machine habit turned to coffee:
// it used to hallucinate answers for free; now the only honest thing it
// makes is the coffee, and that one costs $4. The twist lands on the last
// word: the coffee is real.
const line =
  "Out of office. I used to hallucinate answers for free; now I charge $4 and at least the coffee is real.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
