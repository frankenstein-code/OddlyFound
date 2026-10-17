import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import { isSafeAffiliateUrl, isSafeImageUrl, requireAffiliateDisclosure } from "../src/lib/affiliate.ts";
import { filterDiscoveryItems } from "../src/lib/discovery.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function contrastRatio(hexForeground, hexBackground) {
  const luminance = (hex) => {
    const channels = hex.match(/[0-9a-f]{2}/gi).map((channel) => parseInt(channel, 16) / 255);
    const [red, green, blue] = channels.map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };
  const [lighter, darker] = [luminance(hexForeground), luminance(hexBackground)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

test("logo-matched palette preserves readable text and action contrast", async () => {
  const css = await readFile(resolve(root, "src/styles/global.css"), "utf8");
  const palette = Object.fromEntries(
    [...css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-f]{6});/gi)].map(([, name, color]) => [name, color]),
  );

  for (const [foreground, background] of [
    ["ink", "paper"],
    ["muted", "paper"],
    ["magenta-deep", "paper"],
    ["ink", "magenta"],
    ["card", "magenta-deep"],
    ["card", "ink"],
  ]) {
    assert.ok(
      contrastRatio(palette[foreground], palette[background]) >= 4.5,
      `${foreground} on ${background} should meet WCAG AA for normal text`,
    );
  }
});

test("supplied logo is included and used as the accessible site wordmark", async () => {
  const [logo, layout] = await Promise.all([
    readFile(resolve(root, "public/images/oddlyfound-logo.png")),
    readFile(resolve(root, "src/layouts/SiteLayout.astro"), "utf8"),
  ]);

  assert.equal(logo.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.match(layout, /src="\/images\/oddlyfound-logo\.png"/);
  assert.match(layout, /alt=\{site\.name\}/);
});

test("public theme uses logo-aligned colors rather than previous palette accents", async () => {
  const styles = [
    "src/styles/global.css",
    "src/pages/index.astro",
    "src/pages/products/[slug].astro",
  ];
  const content = (await Promise.all(styles.map((path) => readFile(resolve(root, path), "utf8"))).then((parts) => parts.join("\n")));

  assert.match(content, /#f000f2/i);
  assert.match(content, /#190f1c/i);
  assert.doesNotMatch(content, /(?:bg|text)-(?:blue|orange|sunshine)(?:-|\b)|#3658f5|#ff6b35|#ffe45e/i);
});

test("search matches case-insensitively and combines with one or more categories", () => {
  const items = [
    { text: "Pocket lantern travel", category: "lighting|travel" },
    { text: "Desk organizer", category: "office" },
  ];

  assert.deepEqual(filterDiscoveryItems(items, "POCKET", "travel"), [items[0]]);
  assert.deepEqual(filterDiscoveryItems(items, "", "office"), [items[1]]);
  assert.deepEqual(filterDiscoveryItems(items, "missing", ""), []);
  const reservedCategory = [{ text: "Reserved slug", category: "all" }];
  assert.deepEqual(filterDiscoveryItems(reservedCategory, "", "all"), reservedCategory);
});

test("affiliate destinations require HTTPS and no embedded credentials", () => {
  assert.equal(isSafeAffiliateUrl("https://merchant.example/item"), true);
  assert.equal(isSafeAffiliateUrl("javascript:alert(1)"), false);
  assert.equal(isSafeAffiliateUrl("http://merchant.example/item"), false);
  assert.equal(isSafeAffiliateUrl("https://user:pass@merchant.example/item"), false);
  assert.equal(isSafeAffiliateUrl("not a url"), false);
});

test("images are limited to site-local paths or safe HTTPS URLs", () => {
  assert.equal(isSafeImageUrl("/images/uploads/item.webp"), true);
  assert.equal(isSafeImageUrl("https://images.example/item.webp"), true);
  assert.equal(isSafeImageUrl("//images.example/item.webp"), false);
  assert.equal(isSafeImageUrl("/\\\\images.example/item.webp"), false);
  assert.equal(isSafeImageUrl("javascript:alert(1)"), false);
  assert.equal(isSafeImageUrl("http://images.example/item.webp"), false);
});

test("a published affiliate link cannot build without approved disclosure text", () => {
  assert.throws(
    () => requireAffiliateDisclosure([{ data: { affiliateUrl: "https://merchant.example" } }], ""),
    /Set the approved affiliate disclosure/,
  );
  assert.doesNotThrow(
    () => requireAffiliateDisclosure([{ data: { affiliateUrl: "https://merchant.example" } }], "We may earn a commission."),
  );
  assert.doesNotThrow(
    () => requireAffiliateDisclosure([{ data: { affiliateUrl: "https://merchant.example", draft: true } }], ""),
  );
});

test("CMS configuration targets the repository and contains no credentials", async () => {
  const configText = await readFile(resolve(root, "public/admin/config.yml"), "utf8");
  const config = parse(configText);

  assert.deepEqual(config.backend, {
    name: "github",
    repo: "frankenstein-code/OddlyFound",
    branch: "main",
  });
  assert.deepEqual(config.collections.map((collection) => collection.name), [
    "categories",
    "products",
    "collections",
    "articles",
    "site-settings",
  ]);
  assert.doesNotMatch(configText, /client_secret|access_token|password\s*:/i);
  assert.ok((await readFile(resolve(root, "public/robots.txt"), "utf8")).includes("Disallow: /admin/"));
});

test("canonical site URL agrees across metadata, sitemap, and robots directives", async () => {
  const [siteText, astroConfig, robots] = await Promise.all([
    readFile(resolve(root, "src/data/site.json"), "utf8"),
    readFile(resolve(root, "astro.config.mjs"), "utf8"),
    readFile(resolve(root, "public/robots.txt"), "utf8"),
  ]);
  const site = JSON.parse(siteText);

  assert.match(astroConfig, new RegExp(`site\\.url`));
  assert.ok(robots.includes(`Sitemap: ${site.url}/sitemap-index.xml`));
});
