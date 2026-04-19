This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## CV PDF And AI Portrait Pipeline

The repository includes a print-first CV route and local scripts for generating a final PDF.

Generate the PDF from the existing portrait:

```bash
npm run cv:pdf
```

Retouch the portrait through an external image model and then regenerate the PDF:

```bash
cp .env.openai.example .env.local
# or .env.azure-openai.example / .env.replicate.example
# fill provider credentials first
npm run cv:pdf:ai
```

Only retouch the portrait used by the CV:

```bash
npm run cv:portrait:ai
```

Notes:

- The AI portrait pipeline reads `public/foto.jpeg` by default.
- The retouched result overwrites `public/foto-cv.jpg`, which is the portrait used by the print CV.
- Before overwriting, the previous portrait is backed up to `public/portrait-backups/`.
- You can override the default prompt with `CV_PORTRAIT_PROMPT`.
- You can select a provider with `CV_IMAGE_PROVIDER`.
- Supported providers are `openai`, `azure-openai`, and `replicate`.
- `openai` supports OpenAI-compatible endpoints through `OPENAI_BASE_URL`.
- The combined wrapper forwards extra CLI flags to the portrait tool, for example:

```bash
npm run cv:pdf:ai -- ./public/custom.pdf --provider replicate
```

Provider-specific config templates:

```bash
cp .env.openai.example .env.local
cp .env.azure-openai.example .env.local
cp .env.replicate.example .env.local
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
