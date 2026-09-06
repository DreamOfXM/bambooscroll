// Prerenders the runtime markup into the static shells, so the HTML we ship —
// and the HTML a crawler or a no-JS reader sees — already contains the page.
// pages.js / reader.js stay in the document; their put() guard skips any
// container that already has child nodes, so the prerender costs one repaint.
//
// Everything this script writes is wrapped in ssr markers, which makes the
// build idempotent: re-running replaces the marked region instead of appending.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BASE = (process.env.BASE || "https://dreamofxm.github.io/bambooscroll").replace(/\/+$/, "");
const PREFIX = new URL(BASE).pathname.replace(/\/$/, ""); // "" on a user/org root, "/bambooscroll" on a project page

const loadLines = require(path.join(__dirname, "lines.cjs"));
const REG = loadLines(ROOT);
const S = REG.SITE;

// ---- the episode registry ---------------------------------------------------
// One manifest entry per published line, declared in content/site.js. Every episode
// page, og card, breadcrumb, sitemap row and 404 link below is generated from this
// list, so a new dynasty means content files plus a line entry — never an edit here.
const DATA = REG.data;
const LINES = REG.published;

const pages = require(path.join(ROOT, "pages.js"));
const reader = require(path.join(ROOT, "reader.js"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const url = (p) => BASE + "/" + String(p).replace(/^\/+/, "");

// Verification and analytics are properties of the site, not of a page, so they are
// configured once in dev/tracking.json and injected everywhere. An empty ID emits no
// tag at all: the build must stay green while those accounts are still unopened.
const TRACK = JSON.parse(fs.readFileSync(path.join(__dirname, "tracking.json"), "utf8"));
const trackTags = [
  TRACK.googleSiteVerification && `<meta name="google-site-verification" content="${esc(TRACK.googleSiteVerification)}">`,
  TRACK.bingSiteVerification && `<meta name="msvalidate.01" content="${esc(TRACK.bingSiteVerification)}">`,
  TRACK.ga4 && `<script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TRACK.ga4)}"></script>`,
  TRACK.ga4 && `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(TRACK.ga4)}');</script>`
].filter(Boolean);
const trackHead = trackTags.map((t) => "\n  " + t).join("");

// ---- marker-wrapped regions -------------------------------------------------

const START = (id) => `<!--ssr:${id}-->`;
const END = (id) => `<!--/ssr:${id}-->`;

function fill(html, id, content) {
  const s = START(id), e = END(id);
  const si = html.indexOf(s), ei = html.indexOf(e);
  if (si !== -1 && ei !== -1) return html.slice(0, si + s.length) + content + html.slice(ei);

  const open = html.match(new RegExp(`<([a-zA-Z0-9]+)([^>]*\\bid="${id}"[^>]*)>`));
  if (!open) throw new Error(`build: no container #${id}`);
  const at = open.index + open[0].length;
  const closed = new RegExp(`^\\s*</${open[1]}>`).test(html.slice(at));
  if (!closed) throw new Error(`build: #${id} has content but no ssr markers — refusing to duplicate it`);
  return html.slice(0, at) + s + content + e + html.slice(at);
}

// ---- structured data --------------------------------------------------------

const crumb = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, href], i) => {
    const item = { "@type": "ListItem", position: i + 1, name };
    if (href != null) item.item = url(href);
    return item;
  })
});

const isoYear = (y) => (y < 0 ? "-" : "") + String(Math.abs(y)).padStart(4, "0");

const personNode = (p, bare) => {
  const n = { "@type": "Person", name: p.name, alternateName: p.hanzi, url: url("people/" + p.id + "/") };
  if (!bare) {
    n.description = p.role;
    n.image = url(p.portrait.replace(/\.png$/, ".webp"));
    // Only a clean range gets dates: "d. 202 CE" or "c. 180–215 CE" is not a birth year.
    const yrs = /^(\d+)–(\d+)( CE| BCE)$/.exec(p.years);
    if (yrs) {
      const sign = yrs[3] === " BCE" ? -1 : 1;
      n.birthDate = isoYear(sign * +yrs[1]);
      n.deathDate = isoYear(sign * +yrs[2]);
    }
  }
  return n;
};

const LAUNCH = "2026-09-05"; // first public deployment on GitHub Pages

const comicStory = (E, pth, og, modified) => ({
  "@type": "ComicStory", name: E.title, alternateName: E.subtitle, url: url(pth),
  inLanguage: "en", genre: "History", image: url(og),
  abstract: E.hook,
  datePublished: LAUNCH,
  dateModified: modified || LAUNCH,
  author: { "@type": "Organization", name: "Bamboo Scroll", url: url("") },
  character: E.people.map((q) => {
    const p = S.people.find((s) => s.name === q.name);
    return p ? personNode(p, true) : { "@type": "Person", name: q.name, alternateName: q.hanzi };
  }),
  isPartOf: { "@type": "WebSite", name: "Bamboo Scroll", url: url("") }
});

const HOME = ["Bamboo Scroll", "/"];

const PAGES = [
  {
    path: "/", file: "index.html",
    og: "assets/og-bamboo-scroll.jpg", ogAlt: "Three banners on three hills at dawn",
    ld: () => [{
      "@type": "WebSite", name: "Bamboo Scroll", alternateName: "竹簡", url: url(""),
      description: "Free English webcomics of Chinese history, told only from the official histories.",
      inLanguage: "en", image: url("assets/og-bamboo-scroll.jpg"),
      publisher: { "@type": "Organization", name: "Bamboo Scroll", url: url(""), logo: url("assets/icon-512.png") }
    }]
  },
  ...LINES.map((L) => ({
    path: "/dynasty/" + L.dynasty + "/", file: "dynasty/" + L.dynasty + "/index.html",
    og: L.ogFile, ogAlt: L.ogAlt,
    ld: () => [{
      "@type": "CollectionPage", name: L.name + " " + L.hanzi + " · Bamboo Scroll", url: url("dynasty/" + L.dynasty + "/"),
      about: { "@type": "Thing", name: L.name, alternateName: L.hanzi },
      hasPart: L.eps.map((e) => ({ "@type": "ComicStory", name: e.E.title, url: url(e.path) }))
    }, crumb([HOME, [L.name, "dynasty/" + L.dynasty + "/"]])]
  })),
  {
    path: "/people/", file: "people/index.html",
    og: "assets/og-bamboo-scroll.jpg", ogAlt: "Three banners on three hills at dawn",
    ld: () => [{
      "@type": "CollectionPage", name: "People · Bamboo Scroll", url: url("people/"),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: S.people.map((p, i) => ({
          "@type": "ListItem", position: i + 1, name: p.name, url: url("people/" + p.id + "/")
        }))
      }
    }, crumb([HOME, ["People", "people/"]])]
  },
  ...S.people.map((p) => ({
    path: "/people/" + p.id + "/", file: "people/" + p.id + "/index.html",
    og: "assets/og-person-" + p.id.replace(/-/g, "") + ".jpg", ogAlt: "Portrait of " + p.name,
    ld: () => [personNode(p), crumb([HOME, ["People", "people/"], [p.name, "people/" + p.id + "/"]])]
  })),
  {
    path: "/glossary/", file: "glossary/index.html",
    og: "assets/og-bamboo-scroll.jpg", ogAlt: "Three banners on three hills at dawn",
    ld: () => [{ "@type": "WebPage", name: "Glossary · Bamboo Scroll", url: url("glossary/") },
      crumb([HOME, ["Glossary", "glossary/"]])]
  },
  {
    path: "/method/", file: "method/index.html",
    og: "assets/og-bamboo-scroll.jpg", ogAlt: "Three banners on three hills at dawn",
    ld: () => [{ "@type": "AboutPage", name: "Method · Bamboo Scroll", url: url("method/") },
      crumb([HOME, ["Method", "method/"]])]
  },
  // One entry per loaded episode: the og card is named after the title, its alt text is
  // the cover line the episode already carries, and the breadcrumb hangs off the dynasty.
  ...LINES.flatMap((L) => L.eps.map((e) => {
    const E = e.E;
    return {
      path: "/" + e.path, file: e.path + "index.html", epKey: e.key,
      og: e.og, ogAlt: E.heroAlt || E.panels[0].caption,
      ld: (pg) => [comicStory(E, e.path, e.og, pg.lastmod),
        crumb([HOME, [L.name, "dynasty/" + L.dynasty + "/"], ["Episode " + e.num + " · " + E.title, e.path]])]
    };
  }))
];

function seoBlock(html, pg) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1].trim();
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const canonical = url(pg.path.replace(/^\//, ""));
  const image = url(pg.og);
  const graph = pg.ld(pg).map((n) => Object.assign({ "@context": "https://schema.org" }, n));

  const tags = trackTags.concat([
    `<link rel="icon" type="image/png" sizes="512x512" href="${url("assets/icon-512.png")}">`,
    `<link rel="apple-touch-icon" href="${url("assets/icon-180.png")}">`,
    `<meta name="theme-color" content="#f4f0e6">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:site_name" content="Bamboo Scroll">`,
    `<meta property="og:type" content="${pg.path.startsWith("/read/") ? "article" : "website"}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(pg.ogAlt)}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${image}">`,
    `<script type="application/ld+json">${JSON.stringify(graph)}</script>`
  ]);
  return "  " + START("seo") + "\n  " + tags.join("\n  ") + "\n  " + END("seo") + "\n";
}

function injectSeo(html, block) {
  const s = START("seo"), e = END("seo");
  const si = html.indexOf(s), ei = html.indexOf(e);
  if (si !== -1 && ei !== -1) return html.slice(0, si) + block.trimStart() + html.slice(ei + e.length + 1);
  return html.replace("</head>", block + "</head>");
}

// ---- build ------------------------------------------------------------------

let written = 0;
const DATAABS = DATA.map((f) => path.join(ROOT, f));
const iso = (ms) => new Date(ms).toISOString().slice(0, 10);
// Loaded by every page in the browser, but not content: kept out of lastmod (which feeds
// sitemap.xml) and folded into the cache-buster instead, so a script-only edit still busts.
const RUNTIME = iso(Math.max(...["pages.js", "reader.js"].map((f) => fs.statSync(path.join(ROOT, f)).mtimeMs)));

for (const pg of PAGES) {
  const file = path.join(ROOT, pg.file);
  const before = fs.readFileSync(file, "utf8");
  // newest mtime of what actually feeds the page, taken before we rewrite it
  pg.lastmod = iso(Math.max(...DATAABS.concat(file).map((f) => fs.statSync(f).mtimeMs)));
  let html = before;

  const root = (html.match(/data-root="([^"]*)"/) || [])[1] || "./";
  const param = (html.match(/data-param="([^"]*)"/) || [])[1] || null;
  const page = (html.match(/data-page="([^"]*)"/) || [])[1];

  const filled = [];
  if (html.includes('id="app"')) {
    pages.setContext(root, param);
    for (const [id, markup] of [["nav", pages.nav()], ["app", pages.PAGES[page]()], ["foot", pages.foot()]]) {
      html = fill(html, id, markup);
      filled.push(id);
    }
  } else {
    if (!pg.epKey) throw new Error(`build: ${pg.file} is a reader page with no registry episode behind it`);
    // The registry decides what a page shows. Reading the key off the shell instead let a
    // shell that forgot data-ep fall through to reader.js's default and quietly prerender
    // another episode, so the stamp below is what keeps the shipped body tag honest.
    html = html.replace(/<body\b[^>]*>/, (tag) =>
      /data-ep="[^"]*"/.test(tag) ? tag.replace(/data-ep="[^"]*"/, `data-ep="${pg.epKey}"`)
        : tag.replace(/>$/, ` data-ep="${pg.epKey}">`));
    const out = reader.render(root, pg.epKey);
    for (const id of ["hero", "reader", "people", "myths", "sources"]) {
      html = fill(html, id, out[id]);
      filled.push(id);
    }
  }

  html = injectSeo(html, seoBlock(html, pg));

  // Hosts that send no cache-control let browsers heuristic-cache the JS; stamping the
  // newer of the page's content date and the shared scripts' mtime into each local script
  // URL makes any change — content or runtime — bust that cache.
  const v = (pg.lastmod > RUNTIME ? pg.lastmod : RUNTIME).replace(/-/g, "");
  html = html.replace(/<script src="([^"?]+\.js)(?:\?v=\d+)?"/g, `<script src="$1?v=${v}"`);

  if (!fs.existsSync(path.join(ROOT, pg.og))) throw new Error(`build: missing og image ${pg.og} — run npm run images`);
  fs.writeFileSync(file, html);
  written++;
  console.log(`${pg.path}  ${(before.length / 1024).toFixed(1)}KB -> ${(html.length / 1024).toFixed(1)}KB  [${filled.join(",")}] +seo`);
}

// PNG masters stay local and are not published, so a .png reference — or a missing
// derivative — is a broken image on the live site. Fail here rather than in the browser.
const bad = [];
for (const pg of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, pg.file), "utf8");
  for (const m of html.matchAll(/(?:src|srcset)="([^"]+\.(?:png|avif|webp|jpg))"/g)) {
    if (/\.png$/.test(m[1])) bad.push(`${pg.path} asks for a png master: ${m[1]}`);
    else if (!fs.existsSync(path.join(ROOT, path.dirname(pg.file), m[1]))) bad.push(`${pg.path} missing image: ${m[1]}`);
  }
}
for (const p of S.people) {
  const w = p.portrait.replace(/\.png$/, ".webp");
  if (!fs.existsSync(path.join(ROOT, w))) bad.push(`JSON-LD for ${p.id} missing portrait derivative: ${w}`);
}
for (const f of ["assets/icon-512.png", "assets/icon-180.png"]) {
  if (!fs.existsSync(path.join(ROOT, f))) bad.push(`missing site icon ${f}`);
}
if (bad.length) throw new Error("build: image audit failed\n  " + bad.join("\n  ") + "\n  run npm run images");
console.log("image audit: no png masters referenced, every derivative present");

// robots.txt is only honoured from the domain root; on a project page it is a
// statement of intent for whoever mirrors the site, and the Disallow path has
// to be written from the domain root, hence PREFIX.
const robots = `User-agent: *\nDisallow: ${PREFIX}/dev/\n\nSitemap: ${BASE}/sitemap.xml\n`;
fs.writeFileSync(path.join(ROOT, "robots.txt"), robots);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  PAGES.map((pg) => `  <url>\n    <loc>${url(pg.path.replace(/^\//, ""))}</loc>\n    <lastmod>${pg.lastmod}</lastmod>\n  </url>`).join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

// GitHub Pages serves 404.html for any unknown path; without it a mistyped or
// delisted URL lands on GitHub's own error page with no way back into the site.
// Links are absolute because a 404 can occur at any depth.
const notFound = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <meta name="theme-color" content="#f4f0e6">${trackHead}
  <link rel="icon" type="image/png" sizes="512x512" href="${BASE}/assets/icon-512.png">
  <title>Not found · Bamboo Scroll</title>
  <link rel="stylesheet" href="${PREFIX}/style.css">
</head>
<body>
  <header class="site"><div class="bar">
    <a class="brand" href="${BASE}/">Bamboo Scroll<span class="hanzi">竹簡</span></a>
    <nav class="links">
      <a href="${BASE}/people/">People</a>
      <a href="${BASE}/glossary/">Glossary</a>
      <a href="${BASE}/method/">Method</a>
    </nav>
  </div></header>
  <main>
    <section class="block">
      <h2>This scroll is missing</h2>
      <p class="lede">Nothing lives at this address. What is live so far:</p>
      <ul class="sources">
        <li><a href="${BASE}/">Home</a><span class="when">dynasties · people · method</span></li>
${LINES.slice().reverse().flatMap((L) => L.eps.slice().reverse().map((ep) => `        <li><a href="${BASE}/${ep.path}">${esc(L.name)} ${ep.num} · ${esc(ep.E.title)}</a><span class="when">${esc(ep.E.subtitle)}</span></li>`)).join("\n")}
      </ul>
    </section>
  </main>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, "404.html"), notFound);

console.log(`\n${written} pages prerendered, robots.txt + sitemap.xml + 404.html written`);
console.log(`base ${BASE}`);
console.log(`tracking: ga4 ${TRACK.ga4 || "NOT SET"} · google-verification ${TRACK.googleSiteVerification ? "set" : "NOT SET"} · bing ${TRACK.bingSiteVerification ? "set" : "NOT SET"}   (fill in dev/tracking.json)`);
