// Derives every served image from the PNG masters: AVIF + WebP scaled to how big the
// image is actually displayed, a 720px "-card" derivative for thumbnails, and the
// 1200x630 social cards. PNG masters stay on disk and are deliberately not published.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SOURCES = [
  ...fs.readdirSync(path.join(ROOT, "panels")).filter((d) => fs.statSync(path.join(ROOT, "panels", d)).isDirectory())
    .flatMap((d) => fs.readdirSync(path.join(ROOT, "panels", d)).filter((f) => f.endsWith(".png")).map((f) => `panels/${d}/${f}`)),
  ...fs.readdirSync(path.join(ROOT, "assets")).filter((f) => f.endsWith(".png")).map((f) => "assets/" + f)
];

const kb = (p) => (fs.statSync(p).size / 1024).toFixed(0) + "KB";

// display widths: reader column 782px, hero full-bleed, person card 273-340px, .mo 54px
const RULES = [
  { test: /^assets\/mascot-/, width: 128, avif: 62, webp: 80 },
  { test: /^assets\/portrait-/, width: 560, avif: 52, webp: 76 },
  { test: /^panels\//, width: 1376, avif: 45, webp: 72, card: { width: 720, avif: 48, webp: 74 } }
];
const DEFAULT_RULE = { test: null, width: 1376, avif: 50, webp: 76 };

const derive = async (src, stem, r) => {
  const img = sharp(src).resize({ width: r.width, withoutEnlargement: true });
  await img.clone().avif({ quality: r.avif, effort: 6 }).toFile(stem + ".avif.tmp");
  await img.clone().webp({ quality: r.webp }).toFile(stem + ".webp.tmp");
  fs.renameSync(stem + ".avif.tmp", stem + ".avif");
  fs.renameSync(stem + ".webp.tmp", stem + ".webp");
  return Math.min(fs.statSync(stem + ".avif").size, fs.statSync(stem + ".webp").size);
};

(async () => {
  let pngBytes = 0, outBytes = 0;
  for (const rel of SOURCES) {
    const src = path.join(ROOT, rel);
    const stem = src.replace(/\.png$/, "");
    const rule = RULES.find((r) => r.test.test(rel)) || DEFAULT_RULE;
    pngBytes += fs.statSync(src).size;
    outBytes += await derive(src, stem, rule);
    let line = `${rel}  png ${kb(src)}  avif ${kb(stem + ".avif")}  webp ${kb(stem + ".webp")}`;
    if (rule.card) {
      outBytes += await derive(src, stem + "-card", rule.card);
      line += `  card ${kb(stem + "-card.avif")}/${kb(stem + "-card.webp")}`;
    }
    console.log(line);
  }

  global.window = {};
  require(path.join(ROOT, "content/site.js"));
  const SITE = global.window.SITE;
  const PARCH = "#f3ead8";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // art cards: full-bleed panel under a bottom scrim, kicker + title baked in
  const artCard = async (out, from, position, kicker, title) => {
    const bg = await sharp(path.join(ROOT, from))
      .resize(1200, 630, { fit: "cover", position })
      .toBuffer();
    const size = title.length > 22 ? 46 : title.length > 16 ? 54 : 62;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.3" stop-color="#000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity="0.82"/>
      </linearGradient></defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <text x="64" y="506" font-family="Helvetica, Arial, sans-serif" font-size="23" letter-spacing="4" fill="${PARCH}" fill-opacity="0.9">${esc(kicker)}</text>
      <text x="62" y="572" font-family="Helvetica, Arial, sans-serif" font-size="${size}" font-weight="700" fill="#ffffff">${esc(title)}</text>
    </svg>`;
    const file = path.join(ROOT, out);
    await sharp(bg).composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
      .jpeg({ quality: 82 }).toFile(file + ".tmp");
    fs.renameSync(file + ".tmp", file);
    console.log(`${out}  ${kb(file)}`);
  };

  // person cards: accent panel left, uncropped portrait flush right
  const personCard = async (out, p) => {
    const portrait = await sharp(path.join(ROOT, p.portrait))
      .resize(508, 630, { fit: "cover", position: "top" }).toBuffer();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <rect width="1200" height="630" fill="${p.color}"/>
      <text x="64" y="268" font-family="Helvetica, Arial, sans-serif" font-size="22" letter-spacing="4" fill="${PARCH}" fill-opacity="0.8">BAMBOO SCROLL</text>
      <text x="62" y="346" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="700" fill="#ffffff">${esc(p.name)}</text>
      <text x="64" y="404" font-family="Helvetica, Arial, sans-serif" font-size="30" letter-spacing="2" fill="${PARCH}" fill-opacity="0.9">${esc(p.hanzi)} · ${esc(p.years)} CE</text>
    </svg>`;
    const file = path.join(ROOT, out);
    await sharp(Buffer.from(svg)).composite([{ input: portrait, top: 0, left: 692 }])
      .jpeg({ quality: 82 }).toFile(file + ".tmp");
    fs.renameSync(file + ".tmp", file);
    console.log(`${out}  ${kb(file)}`);
  };

  await artCard("assets/og-bamboo-scroll.jpg", "panels/ep01/20-three-banners.png", "centre",
    "FREE ENGLISH WEBCOMICS OF CHINESE HISTORY", "Bamboo Scroll");
  await artCard("assets/og-three-kingdoms.jpg", "panels/ep01/15-two-banks.png", "centre",
    "BAMBOO SCROLL · 184–280 CE", "Three Kingdoms");
  await artCard("assets/og-fire-on-the-yangtze.jpg", "panels/ep01/00-cover.png", "centre",
    "BAMBOO SCROLL · THREE KINGDOMS · EPISODE 1", "Fire on the Yangtze");
  await artCard("assets/og-road-to-guandu.jpg", "panels/ep02/00-cover.png", "centre",
    "BAMBOO SCROLL · THREE KINGDOMS · EPISODE 2", "The Road to Guandu");
  for (const p of SITE.people) {
    await personCard(`assets/og-person-${p.id.replace(/-/g, "")}.jpg`, p);
  }

  console.log(`\nlocal png masters ${(pngBytes / 1048576).toFixed(1)}MB (not published) -> published avif/webp ${(outBytes / 1048576).toFixed(1)}MB, incl. card variants`);
})().catch((e) => { console.error(e); process.exit(1); });
