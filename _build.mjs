import * as esbuild from "esbuild";
import { readdirSync, existsSync } from "fs";

const watch = process.argv.includes("--watch");

const entryPoints = Object.fromEntries(
  readdirSync("_javascript", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => existsSync(`_javascript/${d.name}/index.ts`))
    .map((d) => [d.name, `_javascript/${d.name}/index.ts`])
);

const ctx = await esbuild.context({
  entryPoints,
  bundle: true,
  outdir: "assets/js",
  format: "iife",
  sourcemap: true,
});

if (watch) {
  await ctx.watch();
  console.log("watching for changes...");
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
