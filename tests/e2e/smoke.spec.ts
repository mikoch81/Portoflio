import { expect, test, type Page } from "@playwright/test";
import { en } from "../../src/content/en";
import { pl } from "../../src/content/pl";

const slugs = Object.keys(en.caseStudies);

function collectConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    // Vercel Analytics only exists on Vercel deployments.
    if (r.status() >= 400 && !r.url().includes("/_vercel/")) errors.push(`${r.status()} ${r.url()}`);
  });
  return errors;
}

test.describe("home", () => {
  test("renders English at the root", async ({ page }) => {
    const errors = collectConsoleErrors(page);
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(en.hero.headline);
    await expect(page.getByRole("img", { name: en.hero.portraitAlt })).toBeVisible();
    for (const id of ["work", "how", "ai", "stack", "proof", "contact"]) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
    expect(errors).toEqual([]);
  });

  test("renders Polish under /pl", async ({ page }) => {
    await page.goto("/pl");
    await expect(page.locator("html")).toHaveAttribute("lang", "pl");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(pl.hero.headline);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", /michalkochaniak\.dev\/?$/);
  });

  test("redirects the explicit default-locale prefix", async ({ request }) => {
    const res = await request.get("/en/cv", { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers().location).toMatch(/\/cv$/);
  });

  test("theme toggle switches the html class and persists", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    const toggle = page.getByRole("button", { name: /theme/i }).first();
    const before = (await html.getAttribute("class")) ?? "";
    await toggle.click();
    const after = (await html.getAttribute("class")) ?? "";
    expect(after.includes("dark")).not.toBe(before.includes("dark"));
    await page.reload();
    expect(((await html.getAttribute("class")) ?? "").includes("dark")).toBe(after.includes("dark"));
  });

  test("language switch keeps the current path", async ({ page }) => {
    await page.goto(`/projects/${slugs[0]}`);
    await page.getByRole("link", { name: en.ui.switchLanguage }).click();
    await expect(page).toHaveURL(new RegExp(`/pl/projects/${slugs[0]}$`));
    await expect(page.locator("html")).toHaveAttribute("lang", "pl");
  });
});

test.describe("case studies", () => {
  for (const slug of slugs) {
    test(`${slug} renders in both locales`, async ({ request }) => {
      for (const prefix of ["", "/pl"]) {
        const res = await request.get(`${prefix}/projects/${slug}`);
        expect(res.status(), `${prefix}/projects/${slug}`).toBe(200);
        expect(await res.text()).toContain("<h1");
      }
    });
  }

  test("unknown slug returns 404", async ({ request }) => {
    expect((await request.get("/projects/does-not-exist")).status()).toBe(404);
    expect((await request.get("/pl/projects/does-not-exist")).status()).toBe(404);
  });
});

test.describe("assets", () => {
  test("CV page and PDF are reachable", async ({ page, request }) => {
    await page.goto("/cv");
    await expect(page.getByRole("link", { name: /download pdf/i })).toBeVisible();
    expect((await request.head("/Michal_Kochaniak_CV.pdf")).status()).toBe(200);
  });

  test("OG image renders for the home page and a case study", async ({ request }) => {
    for (const url of ["/api/og", `/api/og?title=${encodeURIComponent(en.caseStudies[slugs[0]].title)}`]) {
      const res = await request.get(url);
      expect(res.status()).toBe(200);
      expect(res.headers()["content-type"]).toContain("image/png");
    }
  });
});
