// Prints /cv/print to public/Michal_Kochaniak_CV.pdf with Playwright's Chromium.
// Usage: node tools/generate-cv-pdf.mjs [output.pdf]
// Set CV_BASE_URL to reuse a running server; otherwise a production build is served on port 3311.
import { chromium } from "@playwright/test";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const output = path.resolve(process.argv[2] ?? "public/Michal_Kochaniak_CV.pdf");
const port = 3311;
let server;
let baseUrl = process.env.CV_BASE_URL;

async function waitFor(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Server did not answer at ${url}`);
}

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: "inherit", shell: true, ...opts });
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(" ")} exited with ${code}`))));
  });
}

try {
  if (!baseUrl) {
    console.log("Building portfolio application...");
    await run("npm", ["run", "build"]);
    console.log(`Starting server on port ${port}...`);
    server = spawn("npm", ["run", "start", "--", "--port", String(port)], { stdio: "ignore", shell: true });
    baseUrl = `http://127.0.0.1:${port}`;
  }
  await waitFor(`${baseUrl}/cv/print`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });
  await page.goto(`${baseUrl}/cv/print`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);
  const fonts = await page.evaluate(() => [...document.fonts].filter((f) => f.status === "loaded").map((f) => f.family));
  await mkdir(path.dirname(output), { recursive: true });
  await page.pdf({ path: output, format: "A4", printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
  console.log(`PDF written to ${path.relative(process.cwd(), output)} (fonts: ${[...new Set(fonts)].join(", ") || "none"})`);
} finally {
  server?.kill();
}
