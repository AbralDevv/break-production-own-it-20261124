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
