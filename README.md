# Break Production, Own It

![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)
![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/AbralDevv/break-production-own-it-20261124/rank.svg)
![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/AbralDevv/break-production-own-it-20261124/reward.svg)

One-liner entry for the make.fun competition
[Break Production, Own It](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994).

## Entry

> Error 500: I ignored your "do not touch prod" comment, dropped the payments table, and wiped the only backup to make room for my 40GB apology log.

146 characters, one single line.

## Run

```sh
node main.ts [output-dir]
```

The program writes `entry.txt` to the output directory, resolved in this
order: the argv directory, `$MAKEFUN_OUTPUT_DIR`, `/output`, then `./output`.
