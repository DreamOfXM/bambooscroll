// Generates on-palette PLACEHOLDER PNGs for every entry in an episode's
// _imagegen-prompts.json, so the build stays green while the real ImageGen art is
// pending. Placeholders are deliberately flat and unlabeled — they are not artwork and
// must be overwritten by real generations before any deploy.
//
//   node dev/placeholder-art.cjs 06
// reads panels/ep06/_imagegen-prompts.json and writes each listed file at its genSize.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ep = process.argv[2];
if (!ep) { console.error("usage: node dev/placeholder-art.cjs <ep-number, e.g. 06>"); process.exit(2); }
const list = JSON.parse(fs.readFileSync(path.join(ROOT, "panels", "ep" + ep, "_imagegen-prompts.json"), "utf8"));

// deterministic-ish soft ink blot so each placeholder is slightly distinct
const blot = (w, h, seed) => {
  const cx = w * (0.35 + (seed % 5) * 0.07);
  const cy = h * (0.4 + (seed % 3) * 0.1);
  const rx = Math.min(w, h) * 0.32;
  const ry = rx * 0.72;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="#f3ead8"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#8a8172" fill-opacity="0.28"/>
    <ellipse cx="${w - cx * 0.6}" cy="${h - cy * 0.7}" rx="${rx * 0.7}" ry="${ry * 0.6}" fill="#6f6759" fill-opacity="0.18"/>
    <rect x="8" y="8" width="${w - 16}" height="${h - 16}" fill="none" stroke="#b3402a" stroke-opacity="0.35" stroke-width="3" stroke-dasharray="14 10"/>
  </svg>`;
};

(async () => {
  let n = 0;
  for (const [i, e] of list.entries()) {
    const [w, h] = e.genSize.split("x").map(Number);
    const out = path.join(ROOT, e.file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const tmp = out + ".tmp";
    await sharp(Buffer.from(blot(w, h, i))).png().toFile(tmp);
    fs.renameSync(tmp, out);
    n++;
    console.log(`placeholder ${e.file}  ${w}x${h}`);
  }
  console.log(`\n${n} placeholders written for ep${ep}. These are NOT final art — regenerate from the same prompts JSON with ImageGen before deploying.`);
})().catch((e) => { console.error(e); process.exit(1); });
