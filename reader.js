(function () {
  let EP = null;
  let ROOT = "./";
  // The manifest owns a person's identity (hanzi, years, portrait, colour); an episode
  // names them and may add a role line of its own.
  const S = window.SITE || { people: [] };
  // A bubble's `who` is a cast id without hyphens, so the manifest's own colour wins;
  // EXTRA is only for speakers named in a panel who are deliberately not in the cast.
  const EXTRA = {
    denggong: "#6a6152", guji: "#4f6356", zhuyun: "#7a5f3a", liuxiang: "#4a5b6b", yizhizi: "#6b4a4a",
    chanyu: "#6d7d8a", zhaoxin: "#5c6b33", dinggong: "#37414f", gengchun: "#5b4a68", oldclerk: "#6d5a2f",
    gateofficer: "#6a5a4a", shizhe: "#705a3f", lingdi: "#54386b", zuofeng: "#7d5426",
    zhangfei: "#2e2e2e", huanggai: "#7a4a3a", xunyou: "#3a5560", xuyou: "#6d5a2f", zhanghe: "#4f6356"
  };
  const WHO_COLOR = Object.assign({}, EXTRA);
  for (const p of S.people) if (p.color) WHO_COLOR[p.id.replace(/-/g, "")] = p.color;
  const TAG_LABEL = { history: "In the sources", debated: "Debated", commentary: "Commentary", note: "Note" };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const u = (p) => ROOT + String(p == null ? "" : p).replace(/^\/+/, "");
  const pic = (p, alt, extra) => {
    const stem = u(p).replace(/\.png$/, "");
    return `<picture><source srcset="${stem}.avif" type="image/avif">` +
      `<source srcset="${stem}.webp" type="image/webp">` +
      `<img src="${stem}.webp" alt="${alt}"${extra ? " " + extra : ""}></picture>`;
  };

  function hero() {
    return `
    ${pic(EP.panels[0].art, EP.heroAlt || EP.panels[0].caption, 'fetchpriority="high" decoding="async"')}
    <div class="veil"></div>
    <div class="copy">
      <div class="kicker">Bamboo Scroll · ${esc(EP.dynasty)} · Episode ${EP.order}</div>
      <h1>${esc(EP.title)}</h1>
      <div class="sub">${esc(EP.subtitle)} — ${esc(EP.hook)}</div>
      <div class="meta">
        <span>${EP.panels.length} panels</span><span>~${EP.readMinutes} min read</span>
        <span>free to read</span><span>every line sourced</span>
      </div>
    </div>`;
  }

  function reader() {
    return EP.panels.map((p, i) => {
      const n = String(i + 1).padStart(2, "0");
      const bubbles = (p.bubbles || []).map((b) => `
      <div class="bubble ${b.side}">
        <span class="who" style="color:${WHO_COLOR[b.who] || "#1c1a17"}">${esc(b.name)}</span>
        ${esc(b.text)}
      </div>`).join("");
      return `
    <div class="panel-row" id="panel-${i + 1}">
      <figure class="panel-art">
        <div class="art-frame">
          ${pic(p.art, `Panel ${n}: ${esc(p.caption)}`, `loading="lazy" style="aspect-ratio:${p.ratio}"`)}
          ${bubbles}
        </div>
        <figcaption>${esc(p.caption)}</figcaption>
      </figure>
      <aside class="note">
        <div class="top">
          <span class="num">${n} / ${EP.panels.length}</span>
          <span class="tag ${p.sima.tag}">${TAG_LABEL[p.sima.tag] || p.sima.tag}</span>
        </div>
        ${pic("assets/mascot-mo.png", "", 'class="mo"')}
        ${esc(p.sima.text)}
        <div class="src">${esc(p.sima.source)}</div>
      </aside>
    </div>`;
    }).join("");
  }

  function people() {
    // The site record owns a person's identity; an episode may only add its own role line.
    const rec = (q) => (S.people || []).find((p) => p.name === q.name) || q;
    return EP.people.map((q) => {
      const p = rec(q);
      return `
    <article class="person">
      <a href="${u("people/" + p.name.toLowerCase().replace(/\s+/g, "-") + "/")}">${pic(p.portrait, `Portrait of ${esc(p.name)}`, 'loading="lazy"')}</a>
      <div class="body">
        <div class="name"><a class="plainlink" href="${u("people/" + p.name.toLowerCase().replace(/\s+/g, "-") + "/")}">${esc(p.name)}</a><span class="hanzi">${esc(p.hanzi)}</span></div>
        <div class="years">${esc(p.years)}</div>
        <div class="role">${esc(q.role || p.role)}</div>
      </div>
    </article>`;
    }).join("");
  }

  function myths() {
    return EP.myths.map((m) => `
    <div class="myth">
      <div class="side m"><div class="label">The story you may know</div><p>${esc(m.myth)}</p></div>
      <div class="side t"><div class="label">What the sources say</div><p>${esc(m.truth)}</p><div class="src">${esc(m.source)}</div></div>
    </div>`).join("");
  }

  function sources() {
    return EP.sources.map((s) => `
    <li>
      <span class="t">${esc(s.title)} — <em>${esc(s.author)}</em></span>
      <span class="when">${esc(s.date)}</span>
      <span class="d">${esc(s.detail)}</span>
    </li>`).join("");
  }

  const api = {
    render(root, epKey) {
      ROOT = root || "./";
      EP = window[epKey || "EP01"] || window.EP01;
      return { hero: hero(), reader: reader(), people: people(), myths: myths(), sources: sources() };
    }
  };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  const out = api.render(document.body.dataset.root, document.body.dataset.ep);
  document.title = EP.title + " · Bamboo Scroll";
  const put = (id, html) => {
    const el = document.getElementById(id);
    if (el && !el.hasChildNodes()) el.innerHTML = html;
  };
  put("hero", out.hero);
  put("reader", out.reader);
  put("people", out.people);
  put("myths", out.myths);
  put("sources", out.sources);

  const bar = document.getElementById("progress");
  const tick = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  };
  document.addEventListener("scroll", tick, { passive: true });
  tick();

  // panels may arrive from the prerendered HTML or from the injection above;
  // either way the browser has already tried to honour the fragment before they existed
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));

  const rows = document.querySelectorAll(".panel-row");
  const last = rows[rows.length - 1];
  if (last && "IntersectionObserver" in window) {
    let done = false;
    const io = new IntersectionObserver((entries) => {
      if (done || !entries.some((e) => e.isIntersecting)) return;
      done = true;
      io.disconnect();
      if (typeof window.gtag === "function") {
        window.gtag("event", "episode_finish", { episode: EP.order, panels: EP.panels.length });
      }
    }, { threshold: 0.5 });
    io.observe(last);
  }
})();
