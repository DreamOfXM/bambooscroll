// Cross-checks every loaded episode against the site manifest, so a typo in content
// fails here rather than as a broken image or a dead link on the live site.
// The episode list is never written out: it comes from SITE.lines, same as the build.
global.window = {};
require("../content/site.js");
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const S = window.SITE;

const pad = (n) => String(n).padStart(2, "0");
let bad = 0;
const fail = (m) => { console.log("  ! " + m); bad++; };
// A line is published episode by episode, so a file that does not exist yet is
// reported but not fatal; anything that does exist has to be wholly consistent.
const warn = (m) => console.log("  ~ " + m);

if (!Array.isArray(S.lines) || !S.lines.length) { console.log("  ! SITE.lines is empty"); process.exit(1); }

const LINES = S.lines.map((L) => {
  let missing = 0;
  for (let n = 1; n <= L.count; n++) {
    const file = `content/${L.dir}${pad(n)}.js`;
    if (!fs.existsSync(path.join(ROOT, file))) { missing++; continue; }
    require(path.join(ROOT, file));
  }
  const eps = Array.from({ length: L.count }, (_, i) => i + 1)
    .map((n) => ({ num: n, key: L.key + pad(n), path: L.path + "/" + pad(n) + "/" }))
    .filter((e) => window[e.key]);
  const d = S.dynasties.find((x) => x.id === L.dynasty);
  if (!d) fail(`line "${L.dynasty}" has no matching dynasty`);
  if (!eps.length) { warn(`line "${L.dynasty}" has no content yet — in production, nothing published`); return null; }
  if (missing) warn(`line "${L.dynasty}" declares ${L.count} episodes, ${eps.length} written so far`);
  if (missing !== L.count - eps.length) fail(`line "${L.dynasty}" has a hole: ${eps.map((e) => e.num).join(",")} of ${L.count}`);
  if (!L.ogArt || !fs.existsSync(path.join(ROOT, L.ogArt))) (missing ? warn : fail)(`line "${L.dynasty}" ogArt missing: ${L.ogArt}`);
  if (!L.ogAlt) fail(`line "${L.dynasty}" has no ogAlt`);
  return Object.assign({}, L, { eps, dname: d ? d.name : L.dynasty });
}).filter(Boolean);

// Which episode a published path points at, for the appearsIn checks below.
const EPKEY = {};
for (const L of LINES) for (const e of L.eps) EPKEY[e.path] = e.key;

// reader.js resolves a speaker's colour from the manifest (who = person id without
// hyphens) plus its EXTRA block for panel speakers outside the cast. Mirror that here.
const rsrc = fs.readFileSync(path.join(ROOT, "reader.js"), "utf8");
const extraBlock = /EXTRA\s*=\s*\{([\s\S]*?)\n\s*\}/.exec(rsrc);
if (!extraBlock) { console.log("  ! could not find EXTRA in reader.js"); process.exit(1); }
const WHO_COLOR = {};
for (const m of extraBlock[1].matchAll(/([a-z]+)\s*:/g)) WHO_COLOR[m[1]] = true;
for (const p of S.people) if (p.color) WHO_COLOR[p.id.replace(/-/g, "")] = true;
console.log("lines:", LINES.map((L) => L.dynasty + "(" + L.eps.length + ")").join(" "));
console.log("WHO_COLOR keys:", Object.keys(WHO_COLOR).join(" "));

for (const L of LINES) for (const { num, key } of L.eps) {
  const E = window[key];
  console.log(L.dynasty, num, E.id, E.title, "panels=" + E.panels.length, "myths=" + E.myths.length, "sources=" + E.sources.length);
  if (E.dynasty !== L.dname) fail(`${key} says dynasty="${E.dynasty}" but its line is "${L.dname}"`);
  E.panels.forEach((p, i) => {
    if (!fs.existsSync(path.join(ROOT, p.art))) fail("missing master " + p.art);
    if (!p.caption) fail(key + " panel " + (i + 1) + " has no caption");
    if (!p.sima || !p.sima.text || !p.sima.source || !p.sima.tag) fail(key + " panel " + (i + 1) + " has an incomplete note");
    for (const b of (p.bubbles || [])) {
      if (!b.who || !b.name || !b.text) fail(key + " panel " + (i + 1) + " has an incomplete bubble");
      if (!WHO_COLOR[b.who]) fail(key + " panel " + (i + 1) + " bubble who='" + b.who + "' has no WHO_COLOR");
    }
  });
  E.people.forEach((q) => {
    if (!S.people.find((s) => s.name === q.name)) fail("episode person not in site.js: " + q.name);
    if (q.id || q.hanzi || q.years || q.portrait) fail(key + " person " + q.name + " re-declares identity that content/site.js owns");
    if ("role" in q && !q.role) fail(key + " person " + q.name + " has an empty role");
  });
}

for (const p of S.people) {
  if (!fs.existsSync(path.join(ROOT, p.portrait))) fail("missing portrait " + p.portrait);
  for (const a of p.appearsIn) {
    const E = window[EPKEY[a.ep]];
    if (!E) { fail("bad episode path in " + p.id + ": " + a.ep); continue; }
    for (const n of a.panels) if (n < 1 || n > E.panels.length) fail(p.id + " appearsIn " + a.ep + " panel " + n + " out of range (1-" + E.panels.length + ")");
  }
  for (const r of p.relations) if (!S.people.find((x) => x.id === r.to)) fail("bad relation " + p.id + " -> " + r.to);
  const slug = p.name.toLowerCase().replace(/\s+/g, "-");
  if (slug !== p.id) fail("reader.js person URL will disagree with pages.js for " + p.id + " (" + slug + ")");
}

console.log(bad ? "\nFAIL " + bad + " problem(s)" : "\ncontent cross-check: clean");
