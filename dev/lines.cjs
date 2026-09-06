// The one place that turns SITE.lines into loaded episodes. The build, the image
// pipeline and the content checker all need the same view of what is published, so
// none of them lists episodes by hand — adding a dynasty means a manifest entry in
// content/site.js plus content/<dir>NN.js files, never an edit under dev/.
const fs = require("fs");
const path = require("path");

const pad = (n) => String(n).padStart(2, "0");
// og cards are named after the episode title, which is how the existing set of files
// was originally named; keep one definition so a rebuild does not invent new URLs.
const slug = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// "184–280 CE" for a common-era dynasty, "206 BCE–220 CE" for one that opens BCE.
const span = (d) => (d.from < 0 ? Math.abs(d.from) + " BCE–" : d.from + "–") + d.to + " CE";

module.exports = function loadLines(root) {
  global.window = {};
  require(path.join(root, "content/site.js"));
  const SITE = global.window.SITE;
  const dynOf = (id) => SITE.dynasties.find((d) => d.id === id);

  // Every file whose content ends up in a page; the build takes lastmod and the
  // cache-buster from this list.
  const data = ["content/site.js"];

  const lines = (SITE.lines || []).map((L) => {
    const d = dynOf(L.dynasty);
    const missing = [];
    for (let n = 1; n <= L.count; n++) {
      const f = `content/${L.dir}${pad(n)}.js`;
      if (!fs.existsSync(path.join(root, f))) { missing.push(f); continue; }
      require(path.join(root, f));
      data.push(f);
    }
    const eps = Array.from({ length: L.count }, (_, i) => i + 1)
      .map((n) => ({ num: n, key: L.key + pad(n), path: L.path + "/" + pad(n) + "/" }))
      .filter((e) => global.window[e.key])
      .map((e) => {
        const E = global.window[e.key];
        return Object.assign(e, {
          E, title: E.title,
          og: "assets/og-" + slug(E.title) + ".jpg",
          cover: E.panels[0].art,
          kicker: "BAMBOO SCROLL · " + (d ? d.name.toUpperCase() : L.dynasty.toUpperCase()) + " · EPISODE " + e.num
        });
      });
    return Object.assign({}, L, {
      d, name: d && d.name, hanzi: d && d.hanzi, color: d && d.color,
      span: d ? span(d) : "", ogFile: "assets/og-" + L.dynasty + ".jpg",
      eps, missing
    });
  });

  const published = lines.filter((L) => L.eps.length);
  const epOf = (key) => published.reduce((a, L) => a.concat(L.eps), []).find((e) => e.key === key);
  return { SITE, window: global.window, lines, published, data, dynOf, epOf, pad, slug, span };
};
