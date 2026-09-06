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

global.window = {};
require(path.join(ROOT, "content/site.js"));
require(path.join(ROOT, "content/ep01.js"));
require(path.join(ROOT, "content/ep02.js"));
require(path.join(ROOT, "content/ep03.js"));
require(path.join(ROOT, "content/ep04.js"));
require(path.join(ROOT, "content/ep05.js"));
require(path.join(ROOT, "content/ep06.js"));
require(path.join(ROOT, "content/ep07.js"));
require(path.join(ROOT, "content/ep08.js"));
require(path.join(ROOT, "content/ep09.js"));
require(path.join(ROOT, "content/ep10.js"));
require(path.join(ROOT, "content/ep11.js"));
require(path.join(ROOT, "content/ep12.js"));
const pages = require(path.join(ROOT, "pages.js"));
const reader = require(path.join(ROOT, "reader.js"));
const S = global.window.SITE, EP = global.window.EP01, E2 = global.window.EP02;
const E3 = global.window.EP03, E4 = global.window.EP04, E5 = global.window.EP05;
const E6 = global.window.EP06, E7 = global.window.EP07, E8 = global.window.EP08;
const E9 = global.window.EP09, E10 = global.window.EP10, E11 = global.window.EP11, E12 = global.window.EP12;

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

const personNode = (p, bare) => {
  const n = { "@type": "Person", name: p.name, alternateName: p.hanzi, url: url("people/" + p.id + "/") };
  if (!bare) {
    n.description = p.role;
    n.image = url(p.portrait.replace(/\.png$/, ".webp"));
    const yrs = /^(\d+)–(\d+)$/.exec(p.years);
    if (yrs) { n.birthDate = yrs[1]; n.deathDate = yrs[2]; }
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
  {
    path: "/dynasty/three-kingdoms/", file: "dynasty/three-kingdoms/index.html",
    og: "assets/og-three-kingdoms.jpg", ogAlt: "Two armies on two banks of the Yangtze",
    ld: () => [{
      "@type": "CollectionPage", name: "Three Kingdoms 三國 · Bamboo Scroll", url: url("dynasty/three-kingdoms/"),
      about: { "@type": "Thing", name: "Three Kingdoms", alternateName: "三國" },
      hasPart: [
        { "@type": "ComicStory", name: EP.title, url: url("read/three-kingdoms/01/") },
        { "@type": "ComicStory", name: E2.title, url: url("read/three-kingdoms/02/") },
        { "@type": "ComicStory", name: E3.title, url: url("read/three-kingdoms/03/") },
        { "@type": "ComicStory", name: E4.title, url: url("read/three-kingdoms/04/") },
        { "@type": "ComicStory", name: E5.title, url: url("read/three-kingdoms/05/") },
        { "@type": "ComicStory", name: E6.title, url: url("read/three-kingdoms/06/") },
        { "@type": "ComicStory", name: E7.title, url: url("read/three-kingdoms/07/") },
        { "@type": "ComicStory", name: E8.title, url: url("read/three-kingdoms/08/") },
        { "@type": "ComicStory", name: E9.title, url: url("read/three-kingdoms/09/") },
        { "@type": "ComicStory", name: E10.title, url: url("read/three-kingdoms/10/") },
        { "@type": "ComicStory", name: E11.title, url: url("read/three-kingdoms/11/") },
        { "@type": "ComicStory", name: E12.title, url: url("read/three-kingdoms/12/") }
      ]
    }, crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"]])]
  },
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
  {
    path: "/read/three-kingdoms/01/", file: "read/three-kingdoms/01/index.html",
    og: "assets/og-fire-on-the-yangtze.jpg", ogAlt: "Warships in winter mist on the Yangtze, 208 CE",
    ld: (pg) => [comicStory(EP, "read/three-kingdoms/01/", "assets/og-fire-on-the-yangtze.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 1 · " + EP.title, "read/three-kingdoms/01/"]])]
  },
  {
    path: "/read/three-kingdoms/02/", file: "read/three-kingdoms/02/index.html",
    og: "assets/og-road-to-guandu.jpg", ogAlt: "Banners and camps of two armies facing each other across the plain at Guandu, 200 CE",
    ld: (pg) => [comicStory(E2, "read/three-kingdoms/02/", "assets/og-road-to-guandu.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 2 · " + E2.title, "read/three-kingdoms/02/"]])]
  },
  {
    path: "/read/three-kingdoms/03/", file: "read/three-kingdoms/03/index.html",
    og: "assets/og-fire-at-yiling.jpg", ogAlt: "Stockades burning along the wooded hills above the Yangtze gorges at Yiling, 222 CE",
    ld: (pg) => [comicStory(E3, "read/three-kingdoms/03/", "assets/og-fire-at-yiling.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 3 · " + E3.title, "read/three-kingdoms/03/"]])]
  },
  {
    path: "/read/three-kingdoms/04/", file: "read/three-kingdoms/04/index.html",
    og: "assets/og-the-last-campaign.jpg", ogAlt: "Two armies camped on the terraces above the Wei river at the Wuzhang Plains, autumn 234 CE",
    ld: (pg) => [comicStory(E4, "read/three-kingdoms/04/", "assets/og-the-last-campaign.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 4 · " + E4.title, "read/three-kingdoms/04/"]])]
  },
  {
    path: "/read/three-kingdoms/05/", file: "read/three-kingdoms/05/index.html",
    og: "assets/og-the-pass-and-the-river.jpg", ogAlt: "The great rammed-earth gate of Tong Pass between the Yellow River and the mountains, banners of the Guanzhong coalition before it, 211 CE",
    ld: (pg) => [comicStory(E5, "read/three-kingdoms/05/", "assets/og-the-pass-and-the-river.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 5 · " + E5.title, "read/three-kingdoms/05/"]])]
  },
  {
    path: "/read/three-kingdoms/06/", file: "read/three-kingdoms/06/index.html",
    og: "assets/og-the-city-and-the-ford.jpg", ogAlt: "At first light an armoured general with a halberd leads a wedge of riders out of the gate of Hefei against a vast encamped army under banners, 215 CE",
    ld: (pg) => [comicStory(E6, "read/three-kingdoms/06/", "assets/og-the-city-and-the-ford.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 6 · " + E6.title, "read/three-kingdoms/06/"]])]
  },
  {
    path: "/read/three-kingdoms/07/", file: "read/three-kingdoms/07/index.html",
    og: "assets/og-the-heights-above-the-river.jpg", ogAlt: "Banners of Liu Bei's army on the heights of Mount Dingjun above the Mian River, Xiahou Yuan's camp among sharpened stakes below, 219 CE",
    ld: (pg) => [comicStory(E7, "read/three-kingdoms/07/", "assets/og-the-heights-above-the-river.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 7 · " + E7.title, "read/three-kingdoms/07/"]])]
  },
  {
    path: "/read/three-kingdoms/08/", file: "read/three-kingdoms/08/index.html",
    og: "assets/og-high-water.jpg", ogAlt: "Guan Yu's tower warships bearing down on the flooded walls of Fancheng as the Han River overflows, autumn 219 CE",
    ld: (pg) => [comicStory(E8, "read/three-kingdoms/08/", "assets/og-high-water.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 8 · " + E8.title, "read/three-kingdoms/08/"]])]
  },
  {
    path: "/read/three-kingdoms/09/", file: "read/three-kingdoms/09/index.html",
    og: "assets/og-the-bait-at-shiting.jpg", ogAlt: "In misted hills above a winding mountain road, a commander in Wu armour looks down on a long column of Wei carts and banners strung out through a narrow pass, Shiting 228 CE",
    ld: (pg) => [comicStory(E9, "read/three-kingdoms/09/", "assets/og-the-bait-at-shiting.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 9 · " + E9.title, "read/three-kingdoms/09/"]])]
  },
  {
    path: "/read/three-kingdoms/10/", file: "read/three-kingdoms/10/index.html",
    og: "assets/og-the-gates-at-dawn.jpg", ogAlt: "At dawn armoured soldiers haul the great gates of Luoyang shut while in the distance an imperial procession with banners moves away toward the mound tombs on the plain, 249 CE",
    ld: (pg) => [comicStory(E10, "read/three-kingdoms/10/", "assets/og-the-gates-at-dawn.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 10 · " + E10.title, "read/three-kingdoms/10/"]])]
  },
  {
    path: "/read/three-kingdoms/11/", file: "read/three-kingdoms/11/index.html",
    og: "assets/og-the-gate-and-the-trackless-road.jpg", ogAlt: "At dawn three columns of tiny Wei soldiers with banners descend separate winding mountain roads toward the mist-filled valleys of Shu, 263 CE",
    ld: (pg) => [comicStory(E11, "read/three-kingdoms/11/", "assets/og-the-gate-and-the-trackless-road.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 11 · " + E11.title, "read/three-kingdoms/11/"]])]
  },
  {
    path: "/read/three-kingdoms/12/", file: "read/three-kingdoms/12/index.html",
    og: "assets/og-the-fall-of-wu.jpg", ogAlt: "At dawn a vast fleet of tower ships comes down the Yangtze out of a gorge under streaming banners, one vermilion flagship in the centre, 280 CE",
    ld: (pg) => [comicStory(E12, "read/three-kingdoms/12/", "assets/og-the-fall-of-wu.jpg", pg.lastmod),
      crumb([HOME, ["Three Kingdoms", "dynasty/three-kingdoms/"], ["Episode 12 · " + E12.title, "read/three-kingdoms/12/"]])]
  }
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
const DATA = ["content/site.js", "content/ep01.js", "content/ep02.js", "content/ep03.js", "content/ep04.js", "content/ep05.js", "content/ep06.js", "content/ep07.js", "content/ep08.js", "content/ep09.js", "content/ep10.js", "content/ep11.js", "content/ep12.js"].map((f) => path.join(ROOT, f));
const iso = (ms) => new Date(ms).toISOString().slice(0, 10);
// Loaded by every page in the browser, but not content: kept out of lastmod (which feeds
// sitemap.xml) and folded into the cache-buster instead, so a script-only edit still busts.
const RUNTIME = iso(Math.max(...["pages.js", "reader.js"].map((f) => fs.statSync(path.join(ROOT, f)).mtimeMs)));

for (const pg of PAGES) {
  const file = path.join(ROOT, pg.file);
  const before = fs.readFileSync(file, "utf8");
  // newest mtime of what actually feeds the page, taken before we rewrite it
  pg.lastmod = iso(Math.max(...DATA.concat(file).map((f) => fs.statSync(f).mtimeMs)));
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
    const epKey = (html.match(/data-ep="([^"]*)"/) || [])[1];
    const out = reader.render(root, epKey);
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
        <li><a href="${BASE}/read/three-kingdoms/12/">Episode 12 · ${esc(E12.title)}</a><span class="when">280 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/11/">Episode 11 · ${esc(E11.title)}</a><span class="when">263 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/10/">Episode 10 · ${esc(E10.title)}</a><span class="when">249 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/09/">Episode 9 · ${esc(E9.title)}</a><span class="when">228 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/08/">Episode 8 · ${esc(E8.title)}</a><span class="when">219 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/07/">Episode 7 · ${esc(E7.title)}</a><span class="when">217–219 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/06/">Episode 6 · ${esc(E6.title)}</a><span class="when">215 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/05/">Episode 5 · ${esc(E5.title)}</a><span class="when">211 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/04/">Episode 4 · ${esc(E4.title)}</a><span class="when">234 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/03/">Episode 3 · ${esc(E3.title)}</a><span class="when">222 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/02/">Episode 2 · ${esc(E2.title)}</a><span class="when">200 CE</span></li>
        <li><a href="${BASE}/read/three-kingdoms/01/">Episode 1 · ${esc(EP.title)}</a><span class="when">208 CE</span></li>
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
