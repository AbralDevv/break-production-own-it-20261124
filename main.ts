// Break Production, Own It — one-liner competition entry.
// Competition: https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994
// Deadline: Thu 26 Nov 2026 10:25 WIB. Top 10 paid ($2 pool).
//
// The entry is a single line of exactly 146 characters, written verbatim to
// entry.txt with NO trailing newline (the competition expects one line).
// It is kept as one string literal so the text cannot drift across edits;
// verify the length with `wc -c entry.txt` (must read 146) after any change.
//
// Output-dir resolution order (first hit wins):
//   1. argv[2]            — explicit directory passed on the command line
//   2. $MAKEFUN_OUTPUT_DIR — directory supplied by the make.fun harness
//   3. /output             — container default (created if missing)
//   4. ./output           — fallback when /output cannot be created
// The try/catch around step 3 is load-bearing: in sandboxes where /output is
// not writable the entry must still land in ./output instead of crashing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Break Production, Own It — one-liner entry (146 chars, single line).
const ENTRY =
  'Error 500: I ignored your "do not touch prod" comment, dropped the payments table, and wiped the only backup to make room for my 40GB apology log.';

// Output-dir resolution: argv -> $MAKEFUN_OUTPUT_DIR -> /output -> ./output
function resolveOutputDir(): string {
  const argvDir = process.argv[2];
  if (argvDir) return argvDir;
  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir) return envDir;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
