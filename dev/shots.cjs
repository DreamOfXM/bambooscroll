const path = require("path");
const { chromium } = require("playwright");

const OUT = path.join(__dirname, "shots") + path.sep;
const BASE = "http://127.0.0.1:8901";

const PAGES = [
  { path: "/", name: "home" },
  { path: "/dynasty/three-kingdoms/", name: "dynasty" },
  { path: "/people/", name: "people" },
  { path: "/people/cao-cao/", name: "person-caocao" },
  { path: "/people/liu-bei/", name: "person-liubei" },
  { path: "/people/zhou-yu/", name: "person-zhouyu" },
  { path: "/people/zhuge-liang/", name: "person-zhugeliang" },
  { path: "/people/yuan-shao/", name: "person-yuanshao" },
  { path: "/people/guan-yu/", name: "person-guanyu" },
  { path: "/glossary/", name: "glossary" },
  { path: "/method/", name: "method" },
  { path: "/read/three-kingdoms/01/", name: "read", panels: 20 },
  { path: "/read/three-kingdoms/02/", name: "read02", panels: 16 }
];

const warm = async (p) => {
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(900);
};

const refs = (p) => p.evaluate(() => {
  const out = [];
  document.querySelectorAll("a[href]").forEach((a) => out.push({ kind: "link", url: a.href }));
  document.querySelectorAll("img").forEach((i) => out.push({ kind: "img", url: i.src }));
  return out;
});

(async () => {
  const browser = await chromium.launch();
  const desk = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const collected = new Map();
  let bad = 0;

  for (const pg of PAGES) {
    const p = await desk.newPage();
    const errs = [];
    p.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
    p.on("requestfailed", (r) => errs.push("REQFAIL " + r.url()));
    await p.goto(BASE + pg.path, { waitUntil: "networkidle" });
    await warm(p);

    (await refs(p)).forEach((r) => {
      if (!r.url.startsWith(BASE)) return;
      if (!collected.has(r.url)) collected.set(r.url, { kind: r.kind, from: pg.path });
    });

    const text = (await p.evaluate(() => document.body.innerText)).replace(/\s+/g, " ").trim();
    console.log(`\n== ${pg.name} (${pg.path}) chars=${text.length} consoleErrors=${errs.length}`);
    errs.slice(0, 4).forEach((e) => console.log("   ! " + e.slice(0, 160)));
    if (errs.length) bad++;

    if (pg.panels) {
      const ids = await p.evaluate(() => Array.from(document.querySelectorAll("[id^='panel-']")).map((e) => e.id));
      console.log("   panel anchors: " + ids.length + (ids.length === pg.panels ? " OK" : " EXPECTED " + pg.panels));
      if (ids.length !== pg.panels) bad++;
      for (const [sel, nm] of [["#hero", pg.name + "-hero"], [".panel-row:nth-child(8)", pg.name + "-row08"],
        [".panel-row:nth-child(18)", pg.name + "-row18"], ["#people", pg.name + "-cast"], [".myth", pg.name + "-myth"]]) {
        const el = await p.$(sel);
        if (!el) { console.log("   MISSING " + sel + " (optional for this episode)"); continue; }
        await el.scrollIntoViewIfNeeded();
        await p.waitForTimeout(250);
        await el.screenshot({ path: OUT + nm + ".png" });
      }
    } else {
      await p.screenshot({ path: OUT + pg.name + ".png", fullPage: true });
    }
    await p.close();
  }

  // link + asset integrity across every URL seen on any page
  const probe = await desk.newPage();
  await probe.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  const broken = [];
  for (const [url, meta] of collected) {
    const clean = url.split("#")[0];
    const st = await probe.evaluate(async (u) => {
      try { const r = await fetch(u, { method: "GET" }); return r.status; } catch (e) { return "ERR"; }
    }, clean);
    if (st !== 200) broken.push(`${st} ${clean} (${meta.kind} on ${meta.from})`);
  }
  console.log(`\n== integrity: ${collected.size} unique refs, ${broken.length} broken`);
  broken.forEach((b) => console.log("   ! " + b));
  if (broken.length) bad++;

  // anchor deep-link actually lands on the panel
  for (const [pth, anchor] of [["/read/three-kingdoms/01/", "panel-12"], ["/read/three-kingdoms/02/", "panel-5"]]) {
    const a = await desk.newPage();
    await a.goto(BASE + pth + "#" + anchor, { waitUntil: "networkidle" });
    await a.waitForTimeout(600);
    const landed = await a.evaluate((id) => {
      const el = document.getElementById(id);
      if (!el) return "no-element";
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0 ? "in-viewport" : "off-viewport:" + Math.round(r.top);
    }, anchor);
    console.log(`== deep link ${pth}#${anchor} -> ` + landed);
    if (landed !== "in-viewport") bad++;
    await a.screenshot({ path: OUT + "anchor-" + anchor + ".png" });
    await a.close();
  }

  const mob = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  for (const [path, nm, sel] of [["/", "m-home", null], ["/dynasty/three-kingdoms/", "m-dynasty", null],
    ["/people/cao-cao/", "m-person", null], ["/read/three-kingdoms/01/", "m-read-hero", "#hero"],
    ["/read/three-kingdoms/01/", "m-read-row08", ".panel-row:nth-child(8)"],
    ["/read/three-kingdoms/02/", "m-read02-hero", "#hero"],
    ["/read/three-kingdoms/02/", "m-read02-row11", ".panel-row:nth-child(11)"]]) {
    const m = await mob.newPage();
    await m.goto(BASE + path, { waitUntil: "networkidle" });
    await warm(m);
    if (sel) {
      const el = await m.$(sel);
      if (el) { await el.scrollIntoViewIfNeeded(); await m.waitForTimeout(250); await el.screenshot({ path: OUT + nm + ".png" }); }
      else { console.log("   MISSING(m) " + sel); bad++; }
    } else {
      await m.screenshot({ path: OUT + nm + ".png", fullPage: true });
    }
    const overflow = await m.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(`== mobile ${nm}: horizontal overflow = ${overflow}px`);
    if (overflow > 1) bad++;
    await m.close();
  }

  await browser.close();
  console.log(bad ? `\nDONE with ${bad} problem(s)` : "\nDONE clean");
})().catch((e) => { console.error(e); process.exit(1); });
