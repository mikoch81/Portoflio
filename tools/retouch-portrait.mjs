#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, "utf8");

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (!key || process.env[key]) {
      continue;
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

loadEnvFile(path.join(rootDir, ".env.local"));
loadEnvFile(path.join(rootDir, ".env"));

const defaults = {
  input: path.join(rootDir, "public", "foto.jpeg"),
  output: path.join(rootDir, "public", "foto-cv.jpg"),
  backupDir: path.join(rootDir, "public", "portrait-backups"),
  provider: process.env.CV_IMAGE_PROVIDER || "openai",
  model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-1",
  baseUrl: process.env.OPENAI_BASE_URL || "https://api.openai.com/v1",
  prompt:
    process.env.CV_PORTRAIT_PROMPT ||
    [
      "Create a realistic, high-quality business headshot from the provided portrait.",
      "Keep the same person, identity, bone structure, expression, and overall likeness.",
      "Replace the distracting outdoor background with a clean, neutral, studio-style backdrop in muted light grey or warm off-white.",
      "Crop and compose the image as a polished head-and-shoulders portrait suitable for a premium CV or executive resume.",
      "Age the subject subtly by around seven years in a believable, understated way.",
      "Add a small amount of natural grey in the beard, especially around the chin, while keeping it realistic and restrained.",
      "Preserve natural skin texture, realistic pores, and authentic lighting; avoid beauty retouching, plastic skin, or glamour styling.",
      "Do not stylize the image, do not exaggerate age, do not change hairstyle drastically, and do not make the result look AI-generated.",
      "The final result should feel like a trustworthy, professional corporate portrait taken by a good photographer.",
    ].join(" "),
};

const supportedProviders = ["openai", "azure-openai", "replicate"];

function getArg(flag) {
  const index = process.argv.indexOf(flag);
  if (index === -1) {
    return undefined;
  }

  return process.argv[index + 1];
}

function printUsage() {
  console.log(`Usage: node ./tools/retouch-portrait.mjs [options]\n\nOptions:\n  --input <path>       Source portrait file\n  --output <path>      Output file used by the CV\n  --prompt <text>      Override the retouch prompt\n  --model <name>       Override model name for the selected provider\n  --provider <name>    Provider: ${supportedProviders.join(" | ")}\n  --backup-dir <path>  Directory for automatic backups of the previous portrait\n  --help               Show this message\n\nEnvironment:\n  CV_IMAGE_PROVIDER            Default provider name\n  CV_PORTRAIT_PROMPT           Optional default prompt override\n  OPENAI_API_KEY               Required for openai\n  OPENAI_BASE_URL              Optional, defaults to https://api.openai.com/v1\n  OPENAI_IMAGE_MODEL           Optional, defaults to gpt-image-1\n  AZURE_OPENAI_API_KEY         Required for azure-openai\n  AZURE_OPENAI_ENDPOINT        Required for azure-openai\n  AZURE_OPENAI_IMAGE_DEPLOYMENT Required for azure-openai\n  AZURE_OPENAI_API_VERSION     Optional, defaults to 2025-04-01-preview\n  REPLICATE_API_TOKEN          Required for replicate\n  REPLICATE_MODEL_PATH         Optional, defaults to black-forest-labs/flux-kontext-pro\n  REPLICATE_PROMPT_FIELD       Optional, defaults to prompt\n  REPLICATE_IMAGE_FIELD        Optional, defaults to input_image\n  REPLICATE_EXTRA_INPUT_JSON   Optional JSON merged into replicate input payload`);
}

if (process.argv.includes("--help")) {
  printUsage();
  process.exit(0);
}

const inputPath = path.resolve(getArg("--input") || defaults.input);
const outputPath = path.resolve(getArg("--output") || defaults.output);
const backupDir = path.resolve(getArg("--backup-dir") || defaults.backupDir);
const provider = getArg("--provider") || defaults.provider;
const model = getArg("--model") || defaults.model;
const prompt = getArg("--prompt") || defaults.prompt;

if (!supportedProviders.includes(provider)) {
  console.error(`Unsupported provider: ${provider}`);
  console.error(`Supported providers: ${supportedProviders.join(", ")}`);
  process.exit(1);
}

function getMimeType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".jpg":
    case ".jpeg":
    default:
      return "image/jpeg";
  }
}

function getTimestamp() {
  return new Date().toISOString().replace(/[.:]/g, "-");
}

async function backupExistingPortrait(targetPath) {
  if (!existsSync(targetPath)) {
    return null;
  }

  await mkdir(backupDir, { recursive: true });

  const extension = path.extname(targetPath) || ".jpg";
  const baseName = path.basename(targetPath, extension);
  const backupPath = path.join(backupDir, `${baseName}-${getTimestamp()}${extension}`);

  await copyFile(targetPath, backupPath);
  return backupPath;
}

function bufferToDataUrl(buffer, mimeType) {
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

async function fetchJson(url, init) {
  const response = await fetch(url, init);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Request failed with ${response.status}: ${errorText}`);
  }

  return response.json();
}

async function downloadToBuffer(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to download image with ${response.status}: ${errorText}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function runOpenAIEdit({ sourceBuffer, mimeType }) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required for provider=openai.");
  }

  const endpoint = `${defaults.baseUrl.replace(/\/$/, "")}/images/edits`;
  const formData = new FormData();

  formData.append("model", model);
  formData.append("prompt", prompt);
  formData.append("size", "1024x1024");
  formData.append("image", new Blob([sourceBuffer], { type: mimeType }), path.basename(inputPath));

  console.log(`Sending portrait to ${endpoint} using provider=openai, model=${model}...`);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Image edit request failed with ${response.status}: ${errorText}`);
  }

  const payload = await response.json();
  const imageData = payload?.data?.[0]?.b64_json;

  if (!imageData) {
    throw new Error(`Image API response did not contain data[0].b64_json. Payload: ${JSON.stringify(payload, null, 2)}`);
  }

  return Buffer.from(imageData, "base64");
}

async function runAzureOpenAIEdit({ sourceBuffer, mimeType }) {
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const endpointBase = process.env.AZURE_OPENAI_ENDPOINT;
  const deployment = process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT;
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || "2025-04-01-preview";

  if (!apiKey || !endpointBase || !deployment) {
    throw new Error(
      "AZURE_OPENAI_API_KEY, AZURE_OPENAI_ENDPOINT, and AZURE_OPENAI_IMAGE_DEPLOYMENT are required for provider=azure-openai."
    );
  }

  const endpoint = `${endpointBase.replace(/\/$/, "")}/openai/deployments/${deployment}/images/edits?api-version=${apiVersion}`;
  const formData = new FormData();

  formData.append("prompt", prompt);
  formData.append("size", "1024x1024");
  formData.append("image", new Blob([sourceBuffer], { type: mimeType }), path.basename(inputPath));

  console.log(`Sending portrait to ${endpoint} using provider=azure-openai, deployment=${deployment}...`);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "api-key": apiKey,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Azure image edit request failed with ${response.status}: ${errorText}`);
  }

  const payload = await response.json();
  const imageData = payload?.data?.[0]?.b64_json;

  if (!imageData) {
    throw new Error(`Azure image response did not contain data[0].b64_json. Payload: ${JSON.stringify(payload, null, 2)}`);
  }

  return Buffer.from(imageData, "base64");
}

function parseJsonEnv(name) {
  if (!process.env[name]) {
    return {};
  }

  try {
    return JSON.parse(process.env[name]);
  } catch (error) {
    throw new Error(`${name} must contain valid JSON. ${error instanceof Error ? error.message : String(error)}`);
  }
}

function normalizeReplicateOutput(output) {
  if (typeof output === "string") {
    return output;
  }

  if (Array.isArray(output)) {
    return output.find((item) => typeof item === "string") || null;
  }

  if (output && typeof output === "object") {
    if (typeof output.url === "string") {
      return output.url;
    }

    if (Array.isArray(output.images)) {
      return output.images.find((item) => typeof item === "string") || null;
    }
  }

  return null;
}

async function runReplicateEdit({ sourceBuffer, mimeType }) {
  const apiToken = process.env.REPLICATE_API_TOKEN;
  const baseUrl = process.env.REPLICATE_BASE_URL || "https://api.replicate.com/v1";
  const modelPath = process.env.REPLICATE_MODEL_PATH || "black-forest-labs/flux-kontext-pro";
  const promptField = process.env.REPLICATE_PROMPT_FIELD || "prompt";
  const imageField = process.env.REPLICATE_IMAGE_FIELD || "input_image";
  const extraInput = parseJsonEnv("REPLICATE_EXTRA_INPUT_JSON");

  if (!apiToken) {
    throw new Error("REPLICATE_API_TOKEN is required for provider=replicate.");
  }

  const endpoint = `${baseUrl.replace(/\/$/, "")}/models/${modelPath}/predictions`;
  const input = {
    ...extraInput,
    [promptField]: prompt,
    [imageField]: bufferToDataUrl(sourceBuffer, mimeType),
  };

  console.log(`Sending portrait to ${endpoint} using provider=replicate, model=${modelPath}...`);

  let payload = await fetchJson(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      Prefer: "wait=300",
    },
    body: JSON.stringify({ input }),
  });

  while (payload.status === "starting" || payload.status === "processing") {
    if (!payload.urls?.get) {
      throw new Error(`Replicate prediction is still ${payload.status} but did not return urls.get.`);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    payload = await fetchJson(payload.urls.get, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
  }

  if (payload.status !== "succeeded") {
    throw new Error(`Replicate prediction ended with status=${payload.status}. Payload: ${JSON.stringify(payload, null, 2)}`);
  }

  const outputUrl = normalizeReplicateOutput(payload.output);

  if (!outputUrl) {
    throw new Error(`Replicate prediction did not return a downloadable output. Payload: ${JSON.stringify(payload, null, 2)}`);
  }

  return downloadToBuffer(outputUrl);
}

const sourceBuffer = await readFile(inputPath).catch((error) => {
  console.error(`Failed to read input image: ${inputPath}`);
  console.error(error.message);
  process.exit(1);
});
const mimeType = getMimeType(inputPath);
const backupPath = await backupExistingPortrait(outputPath);

if (backupPath) {
  console.log(`Backed up previous portrait to ${backupPath}`);
}

let resultBuffer;

try {
  if (provider === "openai") {
    resultBuffer = await runOpenAIEdit({ sourceBuffer, mimeType });
  } else if (provider === "azure-openai") {
    resultBuffer = await runAzureOpenAIEdit({ sourceBuffer, mimeType });
  } else {
    resultBuffer = await runReplicateEdit({ sourceBuffer, mimeType });
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, resultBuffer);

console.log(`Retouched portrait saved to ${outputPath}`);