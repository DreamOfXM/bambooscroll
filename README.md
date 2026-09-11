# Bamboo Scroll

Free English webcomics of Chinese history, Qin to Qing, told only from the official
histories.

**Live site: <https://dreamofxm.github.io/bambooscroll/>**

Organised two ways — by [dynasty](https://dreamofxm.github.io/bambooscroll/dynasty/han/)
and by [person](https://dreamofxm.github.io/bambooscroll/people/) — with a
[glossary](https://dreamofxm.github.io/bambooscroll/glossary/) for the names that keep
changing spelling between books.

## The rule this site holds itself to

Every claim carries its book and chapter, so a mistake is checkable. The Ming romances of
the Han and of the Three Kingdoms, the anecdote collections, and the stage plays drawn from
them are used **nowhere as a source**; they appear only in Myth Checks, as a correction.
[The method page](https://dreamofxm.github.io/bambooscroll/method/) is the long version of
that sentence, including what gets rejected.

A date, a name, a place, a number or a translation that does not match the source: open an
issue, or use the address in the site footer. A good correction goes into the page.

## How it is built

No framework and no build-time dependency tree to serve. `content/*.js` holds the episodes
as data, `pages.js` and `reader.js` render them, and `dev/build.cjs` prerenders every page
to HTML so a crawler gets real content without running JavaScript.

```bash
npm run build           # prerenders 146 pages + robots.txt + sitemap.xml
npm run serve           # preview on 127.0.0.1:8901
npm run images          # regenerate avif/webp from the raster sources
```

Art is generated from original character models under our own art direction. Research,
script, sourcing and editing are human. No artwork is taken from any other creator.

## Licence

No licence file, which means **all rights reserved**, with one deliberate exception:
teachers and students may print, share and translate these comics for non-commercial
classroom use, with credit. Anything else — including commercial — ask through the contact
address printed in the site footer; the answer is almost always yes.
