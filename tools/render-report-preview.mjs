// Renders the first page of a PDF to WEBP: node tools/render-report-preview.mjs [input.pdf] [output.webp]
import { createCanvas, DOMMatrix, ImageData, Path2D } from "@napi-rs/canvas";
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// pdf.js expects browser canvas globals; napi-rs/canvas provides compatible classes.
Object.assign(globalThis, { DOMMatrix, ImageData, Path2D });
const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");

const input = process.argv[2] ?? "public/reports/sample-report.pdf";
const output = process.argv[3] ?? "public/reports/sample-report-p1.webp";
const targetWidth = 1240;

const data = new Uint8Array(await readFile(input));
const doc = await getDocument({ data, disableFontFace: true, verbosity: 0 }).promise;
const page = await doc.getPage(1);
const base = page.getViewport({ scale: 1 });
const viewport = page.getViewport({ scale: targetWidth / base.width });
const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
await page.render({ canvasContext: ctx, viewport, canvas }).promise;
await sharp(canvas.toBuffer("image/png")).webp({ quality: 82 }).toFile(output);
console.log(`${path.relative(process.cwd(), output)} ${canvas.width}x${canvas.height}`);
