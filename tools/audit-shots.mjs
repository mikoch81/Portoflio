import { chromium } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const base = process.argv[2] ?? "https://michalkochaniak.dev";
const label = process.argv[3] ?? "before";
const outRoot = process.argv[4] ?? path.resolve(process.cwd(), ".audit");
const outDir = path.join(outRoot, label);
mkdirSync(outDir, { recursive: true });

const pages = [
  { name: "home", url: "/" },
  { name: "case", url: "/projects/ai-performance-reporting" },
];
const widths = [390, 768, 1440];

const browser = await chromium.launch();
const report = {};

for (const p of pages) {
  report[p.name] = {};
  for (const w of widths) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await ctx.newPage();
    await page.goto(base + p.url, { waitUntil: "networkidle" });
    // force framer-motion whileInView elements visible for full-page capture
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);
    const file = path.join(outDir, `${p.name}-${w}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const height = await page.evaluate(() => document.body.scrollHeight);
    report[p.name][w] = { file, pageHeight: height };
    if (w === 1440) {
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      report[p.name].axe = axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.length,
        help: v.help,
        sample: v.nodes.slice(0, 3).map((n) => n.target.join(" ")),
      }));
    }
    await ctx.close();
  }
}

await browser.close();
writeFileSync(path.join(outDir, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
