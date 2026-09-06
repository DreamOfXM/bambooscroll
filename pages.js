(function () {
  const S = window.SITE;
  const pad = (n) => String(n).padStart(2, "0");
  // Episodes are never listed one by one. A line declares content/<dir>NN.js exposing
  // window.<key>NN, published at <path>/NN/; whatever is not loaded simply renders
  // nothing, so a half-finished dynasty cannot advertise itself as complete.
  const LINES = (S.lines || [])
    .map((L) => Object.assign({}, L, {
      eps: Array.from({ length: L.count }, (_, i) => i + 1)
        .map((n) => ({ num: n, key: L.key + pad(n), path: L.path + "/" + pad(n) + "/", line: L.dynasty }))
        .filter((e) => window[e.key])
    }))
    .filter((L) => L.eps.length);
  const EPS = LINES.reduce((acc, L) => acc.concat(L.eps), []);
  const lineOf = (id) => LINES.find((L) => L.dynasty === id);
  let ROOT = "./", PARAM = null;
  const u = (p) => ROOT + String(p == null ? "" : p).replace(/^\/+/, "");
  const pic = (p, alt, extra) => {
    const stem = u(p).replace(/\.png$/, "");
    return `<picture><source srcset="${stem}.avif" type="image/avif">` +
      `<source srcset="${stem}.webp" type="image/webp">` +
      `<img src="${stem}.webp" alt="${alt}"${extra ? " " + extra : ""}></picture>`;
  };
  // episode cards render at 250-380px, so they take the 720px derivative, not the reader-size art
  const card = (p) => String(p).replace(/\.png$/, "-card.png");
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const yrs = (d) => (d.from < 0 ? Math.abs(d.from) + " BCE" : d.from + " CE") + " – " + d.to + " CE";
  const dyn = (id) => S.dynasties.find((d) => d.id === id);
  const person = (id) => S.people.find((p) => p.id === id);

  function nav() {
    return `
    <div class="bar">
      <a class="brand" href="${u()}">Bamboo Scroll<span class="hanzi">竹簡</span></a>
      <nav class="links">
        <a href="${u()}#timeline">Dynasties</a>
        <a href="${u("people/")}">People</a>
        <a href="${u("glossary/")}">Glossary</a>
        <a href="${u("method/")}">Method</a>
      </nav>
      <span class="right">free to read · all sources cited</span>
    </div>`;
  }

  function foot() {
    return `
    <div class="inner">
      <b>Bamboo Scroll</b> — free English webcomics of Chinese history, organised by dynasty and by person.<br>
      Told only from the official histories. The novel <i>Romance of the Three Kingdoms</i> is used nowhere as a source; it appears only in Myth Checks, as a correction.<br>
      Art is generated from our own original character models under our own art direction. Research, script, sourcing and editing are human. No artwork is taken from any other creator.<br>
      © 2026 Bamboo Scroll. All rights reserved. Teachers and students may print, share and translate these comics for non-commercial classroom use, with credit. For any other reuse — including commercial — please ask; we almost always say yes.<br>
      Free to read. No accounts. We count page views and how far you read — anonymous traffic statistics, nothing personal.
    </div>`;
  }

  function timeline() {
    return `<div class="timeline" id="timeline">` + S.dynasties.map((d) => {
      const span = Math.max(1, d.to - d.from);
      const grow = Math.sqrt(span);
      const live = lineOf(d.id) ? lineOf(d.id).eps.length : 0;
      const href = live ? u("dynasty/" + d.id + "/") : u("method/");
      return `<a class="tl ${live ? "" : "soon"}" href="${href}" ${live ? "" : 'aria-disabled="true"'}
        style="flex-grow:${grow.toFixed(2)};background:${d.color}" title="${esc(d.name)}, ${yrs(d)}">
        <span class="tl-name">${esc(d.name)}</span>
        <span class="tl-years">${yrs(d)}</span>
        <span class="tl-state">${live ? live + (live === 1 ? " episode" : " episodes") : "in production"}</span>
      </a>`;
    }).join("") + `</div>`;
  }

  function epCard(ep, path) {
    return `<a class="epcard" href="${u(path)}">
      ${pic(card(ep.panels[0].art), "", `loading="lazy" style="aspect-ratio:${ep.panels[0].ratio}"`)}
      <div class="epbody">
        <div class="eptitle">${esc(ep.title)}</div>
        <div class="epsub">${esc(ep.subtitle)}</div>
        <div class="epmeta">${ep.panels.length} panels · ~${ep.readMinutes} min · every line sourced</div>
      </div>
    </a>`;
  }

  function personCard(p) {
    return `<article class="person">
      <a href="${u("people/" + p.id + "/")}">${pic(p.portrait, `Portrait of ${esc(p.name)}`, 'loading="lazy"')}</a>
      <div class="body">
        <div class="name"><a class="plainlink" href="${u("people/" + p.id + "/")}">${esc(p.name)}</a><span class="hanzi">${esc(p.hanzi)}</span></div>
        <div class="years">${esc(p.years)}</div>
        <div class="role">${esc(p.role)}</div>
      </div>
    </article>`;
  }

  const PAGES = {
    home() {
      const first = LINES[0];
      const newest = LINES[LINES.length - 1];
      const openWith = window[first.eps[0].key];
      const jumpTo = newest !== first && window[newest.eps[0].key];
      return `
      <div class="homehero">
        ${pic("panels/ep01/20-three-banners.png", "Three banners on three hills at dawn", 'fetchpriority="high" decoding="async"')}
        <div class="veil"></div>
        <div class="copy">
          <div class="kicker">Free English webcomics of Chinese history</div>
          <h1>Told from the sources.<br>Not from the novel.</h1>
          <p class="sub">Every panel traces to the official histories — the Shiji, the Hanshu, the Hou Han shu, the Sanguozhi and its fifth-century commentary, the Zizhi Tongjian. Where scholars disagree, the page says so. Free to read, no accounts.</p>
          <p class="cta"><a class="btn" href="${u(first.eps[0].path)}">Start at the beginning · ${esc(openWith.title)}</a>${jumpTo ? ` <a class="plainlink" style="margin-left:16px" href="${u(newest.eps[0].path)}">or the age you may already know: ${esc(newest.heading)}, ${esc(jumpTo.title)} →</a>` : ""}</p>
        </div>
      </div>
      <section class="block">
        <h2>The dynasties <span class="rule"></span></h2>
        <p class="lede">Drag sideways. Each block's width is the dynasty's length — the Qin is a breath, the Han four centuries. Lit blocks have episodes; dim ones are in production.</p>
        ${timeline()}
      </section>
      ${LINES.map((L) => `
      <section class="block">
        <h2>${esc(L.heading)} <span class="rule"></span></h2>
        <p class="lede">${esc(L.lede)}</p>
        <div class="epgrid">${L.eps.map((e) => epCard(window[e.key], e.path)).join("")}</div>
      </section>`).join("")}
      <section class="block">
        <h2>The cast so far <span class="rule"></span></h2>
        <p class="lede">Every person page leads into the exact panel they appear in.</p>
        <div class="people">${S.people.map((p) => personCard(p)).join("")}</div>
      </section>
      <section class="block trust">
        <h2>Why trust a comic? <span class="rule"></span></h2>
        <div class="trustgrid">
          <div><b>Sourced to the scroll.</b> Every caption and quotation carries its book and chapter. No "it is said".</div>
          <div><b>The novel stays out.</b> Romance of the Three Kingdoms is literature, not evidence. It appears only in Myth Checks.</div>
          <div><b>Disagreement shown.</b> Numbers, sites and motives the scholars argue about are tagged <i>Debated</i>, not smoothed over.</div>
          <div><b>Free to read.</b> Classrooms may print, translate and teach these comics — see the footer for the licence.</div>
        </div>
        <p class="lede" style="margin-top:18px"><a class="plainlink" href="${u("method/")}">Read the full method →</a></p>
      </section>`;
    },

    dynasty() {
      const d = dyn(PARAM);
      const L = lineOf(PARAM);
      const mine = S.people.filter((p) => p.dynasty === PARAM);
      return `
      <section class="block dynhead" style="--dync:${d.color}">
        <div class="kicker">Dynasty</div>
        <h1>${esc(d.name)} <span class="hanzi">${esc(d.hanzi)}</span></h1>
        <div class="dynyears">${yrs(d)}</div>
        <p class="lede">${esc(d.blurb)} ${esc(d.arc || "")}</p>
      </section>
      <section class="block">
        <h2>Episodes <span class="rule"></span></h2>
        <div class="epgrid">
          ${L.eps.map((e) => epCard(window[e.key], e.path)).join("")}
        </div>
      </section>
      <section class="block">
        <h2>People of this age <span class="rule"></span></h2>
        <div class="people">${mine.map((p) => personCard(p)).join("")}</div>
      </section>
      <section class="block">
        <h2>Chronology <span class="rule"></span></h2>
        <ul class="chrono">${L.chronology.map((c) => `
          <li><span class="y">${esc(c.year)}</span><span class="t">${esc(c.text)}</span><span class="s">${esc(c.source)}</span></li>`).join("")}
        </ul>
      </section>`;
    },

    people() {
      return `
      <section class="block">
        <h1 class="pageh1">People</h1>
        <p class="lede">Every person here is a person of the records: what the histories say they did, what they were called afterwards, and where the two part company.</p>
        <input id="psearch" class="psearch" type="search" placeholder="Search a name — Cao Cao, 周瑜, Zhou Yu…" aria-label="Search people">
        <div class="people" id="pgrid">${S.people.map((p) => personCard(p)).join("")}</div>
      </section>`;
    },

    person() {
      const p = person(PARAM);
      const d = dyn(p.dynasty);
      return `
      <section class="block persongrid">
        <div class="pleft">
          ${pic(p.portrait, `Portrait of ${esc(p.name)}`)}
          <div class="pname">${esc(p.name)} <span class="hanzi">${esc(p.hanzi)}</span></div>
          <div class="pyears">${esc(p.years)} · <a class="plainlink" href="${u("dynasty/" + d.id + "/")}">${esc(d.name)}</a></div>
        </div>
        <div class="pright">
          <p class="prole">${esc(p.role)}</p>
          <blockquote class="pquote">${esc(p.sourceQuote.text)}<cite>${esc(p.sourceQuote.source)}</cite></blockquote>
          <h2>Appears in <span class="rule"></span></h2>
          <div class="chips">${p.appearsIn.map((a) => a.panels.map((n) =>
            `<a class="chip" href="${u(a.ep)}#panel-${n}">${esc(dyn(a.ep.split("/")[1]).name)} ${a.num} · panel ${n}</a>`).join("")).join("")}</div>
          <h2>Relations <span class="rule"></span></h2>
          <ul class="rels">${p.relations.map((r) => {
            const o = person(r.to);
            return `<li><a class="plainlink" href="${u("people/" + r.to + "/")}">${esc(o.name)}</a> <span class="kind">${esc(r.kind)}</span> — ${esc(r.note)}</li>`;
          }).join("")}</ul>
          <h2>Myth vs record <span class="rule"></span></h2>
          <div class="myth"><div class="side m"><div class="label">The story you may know</div><p>${esc(p.myth.myth)}</p></div>
          <div class="side t"><div class="label">What the sources say</div><p>${esc(p.myth.truth)}</p></div></div>
        </div>
      </section>`;
    },

    glossary() {
      return `
      <section class="block">
        <h1 class="pageh1">Glossary</h1>
        <p class="lede">The words the sources actually use, in one line each. Pinyin and characters given so you can recognise them elsewhere.</p>
        <dl class="gloss">${S.glossary.map((g) => `
          <div class="gitem"><dt><span class="gz">${esc(g.hanzi)}</span> <span class="gp">${esc(g.pinyin)}</span> <span class="ge">${esc(g.en)}</span></dt>
          <dd>${esc(g.def)}</dd></div>`).join("")}
        </dl>
      </section>`;
    },

    method() {
      const srcs = [];
      for (const e of EPS) for (const s of window[e.key].sources) if (!srcs.some((x) => x.title === s.title)) srcs.push(s);
      return `
      <section class="block">
        <h1 class="pageh1">Method</h1>
        <p class="lede">How a comic earns the right to be believed.</p>
        <h2>Evidence tiers <span class="rule"></span></h2>
        <table class="tiers">
          <tr><td class="tag history">A</td><td>Archaeology, or a clear statement in the official histories.</td><td>Told plainly, source cited.</td></tr>
          <tr><td class="tag history">B</td><td>Scholarly consensus built on those sources.</td><td>Told plainly, marked as consensus.</td></tr>
          <tr><td class="tag debated">C</td><td>Genuinely disputed — numbers, sites, motives.</td><td>Tagged <i>Debated</i>; the disagreement is shown, not resolved for drama.</td></tr>
          <tr><td class="tag commentary">D</td><td>Novel, anecdote collections, folklore, film and game lore.</td><td>Never told as story. Appears only in Myth Checks, labelled.</td></tr>
        </table>
        <h2>Rules we hold <span class="rule"></span></h2>
        <ul class="rules">
          <li>No scene enters an episode unless it traces to a named source, book and chapter.</li>
          <li>Quotations are translations of recorded words; paraphrase is never dressed as quotation.</li>
          <li>Figures of men, money and dead are claims in the sources, and are labelled as claims.</li>
          <li>Where the source is literary reconstruction — speeches in the Sanguozhi, for instance — we say so.</li>
          <li>Nothing is invented to fill a gap. A gap stays a gap.</li>
        </ul>
        <h2>Standing sources <span class="rule"></span></h2>
        <ul class="sources">${srcs.map((s) => `
          <li><span class="t">${esc(s.title)} — <em>${esc(s.author)}</em></span><span class="when">${esc(s.date)}</span>
          <span class="d">${esc(s.detail)}</span></li>`).join("")}
        </ul>
        <h2>Art and licence <span class="rule"></span></h2>
        <p class="lede">All artwork is generated from our own original character models under our own art direction; no image is downloaded, traced or borrowed from any other creator. Research, script, sourcing and editing are human. Text and art are original to this site and all rights are reserved; teachers and students may reuse them for non-commercial classroom use with credit — see the footer.</p>
        <p class="lede">Translations from the classical Chinese are our own; no published translation is reused.</p>
      </section>`;
    }
  };

  const api = {
    PAGES, nav, foot,
    setContext(root, param) { ROOT = root || "./"; PARAM = param == null ? null : param; }
  };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  api.setContext(document.body.dataset.root, document.body.dataset.param);
  const put = (id, html) => {
    const el = document.getElementById(id);
    if (el && !el.hasChildNodes()) el.innerHTML = html;
  };
  put("nav", nav());
  put("foot", foot());
  put("app", PAGES[document.body.dataset.page]());

  const q = document.getElementById("psearch");
  if (q) q.addEventListener("input", () => {
    const v = q.value.trim().toLowerCase();
    document.querySelectorAll("#pgrid .person").forEach((el) => {
      el.style.display = el.textContent.toLowerCase().includes(v) ? "" : "none";
    });
  });
})();
