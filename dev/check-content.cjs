global.window = {};
require("../content/site.js");
require("../content/ep01.js");
require("../content/ep02.js");
require("../content/ep03.js");
require("../content/ep04.js");
require("../content/ep05.js");
require("../content/ep06.js");
require("../content/ep07.js");
require("../content/ep08.js");
require("../content/ep09.js");
require("../content/ep10.js");
require("../content/ep11.js");
require("../content/ep12.js");
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const S = window.SITE;
const EPKEY = {
  "read/three-kingdoms/01/": "EP01", "read/three-kingdoms/02/": "EP02",
  "read/three-kingdoms/03/": "EP03", "read/three-kingdoms/04/": "EP04",
  "read/three-kingdoms/05/": "EP05", "read/three-kingdoms/06/": "EP06",
  "read/three-kingdoms/07/": "EP07", "read/three-kingdoms/08/": "EP08",
  "read/three-kingdoms/09/": "EP09", "read/three-kingdoms/10/": "EP10",
  "read/three-kingdoms/11/": "EP11", "read/three-kingdoms/12/": "EP12"
};
let bad = 0;
const fail = (m) => { console.log("  ! " + m); bad++; };

// WHO_COLOR is private to reader.js's closure; scrape its keys from the source.
const rsrc = fs.readFileSync(path.join(ROOT, "reader.js"), "utf8");
const whoBlock = /WHO_COLOR\s*=\s*\{([\s\S]*?)\n\s*\}/.exec(rsrc);
if (!whoBlock) { console.log("  ! could not find WHO_COLOR in reader.js"); process.exit(1); }
const WHO_COLOR = {};
for (const m of whoBlock[1].matchAll(/([a-z]+)\s*:/g)) WHO_COLOR[m[1]] = true;
console.log("WHO_COLOR keys:", Object.keys(WHO_COLOR).join(" "));

for (const k of ["EP01", "EP02", "EP03", "EP04", "EP05", "EP06", "EP07", "EP08", "EP09", "EP10", "EP11", "EP12"]) {
  const E = window[k];
  console.log(k, E.id, E.title, "panels=" + E.panels.length, "myths=" + E.myths.length, "sources=" + E.sources.length);
  E.panels.forEach((p, i) => {
    if (!fs.existsSync(path.join(ROOT, p.art))) fail("missing master " + p.art);
    if (!p.caption) fail(k + " panel " + (i + 1) + " has no caption");
    if (!p.sima || !p.sima.text || !p.sima.source || !p.sima.tag) fail(k + " panel " + (i + 1) + " has an incomplete note");
    for (const b of (p.bubbles || [])) {
      if (!b.who || !b.name || !b.text) fail(k + " panel " + (i + 1) + " has an incomplete bubble");
      if (!WHO_COLOR[b.who]) fail(k + " panel " + (i + 1) + " bubble who='" + b.who + "' has no WHO_COLOR");
    }
  });
  E.people.forEach((q) => {
    if (!S.people.find((s) => s.name === q.name)) fail("episode person not in site.js: " + q.name);
    if (!fs.existsSync(path.join(ROOT, q.portrait))) fail("missing episode portrait " + q.portrait);
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
