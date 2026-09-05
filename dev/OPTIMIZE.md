# Bamboo Scroll 优化清单

交接文档。按严重程度排序，每条含「现象+证据 / 为什么是问题 / 怎么改」。
核查时间：2026-09-05。项目规模：74 个文件，57 张 PNG，图片共 48.6MB。

## 项目现状（一句话）

架构按「秦→清十个朝代」设计（`content/site.js:2-13`），但内容 100% 落在三国：
1 集（`read/three-kingdoms/01/`，21 格）、4 个人物（全是三国）、1 个朝代页。
页脚当前声明的定位是 **无广告 / 无账号 / CC BY-NC-SA 4.0 / AI 辅助作画+人工考据**。
负责人已确认新方向：**保留将来商业变现的可能性，流量起来之前不立即收费**（内容先免费阅读）。
这个决定直接导致 P2-2（改许可证 + 撤回 no ads / stays free 承诺）成为必须最先做的一项，
且必须在公开发布之前完成——详见该条。

除 P2-2 外，本清单只谈「让人找得到、传得开」，不涉及具体变现方式。

---

## P0 — 不做的话，内容做再多也沉在水下

### P0-1 全站关键内容靠客户端渲染，HTML 是空壳

**现象**：7 个 `index.html` 里有 6 个的正文容器是空的，内容全在浏览器里拼：

- `index.html:12` `<main id="app"></main>`，由 `pages.js:227` 填：
  `document.getElementById("app").innerHTML = PAGES[document.body.dataset.page]()`
- 阅读页 `read/three-kingdoms/01/index.html` 稍好：导航、章节标题、导语、
  页脚是静态的；但**漫画本体**仍由 `reader.js:30` 注入：
  `reader.innerHTML = EP.panels.map(...)`，`people`/`myths`/`sources` 同理
  （`reader.js:58,68,74`）
- 直接抓 `method/index.html` 的纯文本，只有 `Method · Bamboo Scroll` 一行标题，正文为零

**为什么是问题**：Google 虽能执行 JS，但走的是渲染队列，收录延迟且不稳定；
脚本一挂就是白页。对靠搜索和分享获取读者的站，这是最大的单项技术风险。
`myth`/`truth` 考据对照和逐条史料出处是这个站的核心价值，现在全都搜不到。

**怎么改**：**不要引框架**。`pages.js` 里的 `PAGES[xxx]()` 和 `reader.js` 的渲染
逻辑都是纯字符串拼接，天然可预渲染。加一个构建脚本（Node，`dev/build.cjs`）：
读取 `content/site.js` + `content/ep01.js`，调用同一套渲染函数，把结果 HTML
**写回**每个 `index.html` 的对应容器里，构建产物直接是可部署的静态文件。
运行时 `pages.js`/`reader.js` 保留（交互仍需要），但要加保护：
若容器已有内容就跳过重渲染，避免闪烁和重复。

验收标准：`curl -s <url> | grep -c '曹操'` 非 0；`view-source:` 能看到漫画格和史料引文。

### P0-2 图片 48.6MB 全是 PNG，无一张 WebP/AVIF

**现象**：`panels/` 42MB + `assets/` 6.6MB。单集 21 格，尺寸 1376×768 和
928×1152，每张约 2MB。`find . -name '*.webp' -o -name '*.avif'` 结果为 0。

**为什么是问题**：一集加载 42MB。移动端 LCP 会到 10 秒以上，Core Web Vitals
直接不合格，Google 排名受影响；社交平台上用户点进来等不到图就走了。

**怎么改**：
1. 批量转 AVIF（首选）+ WebP（兜底），HTML 用 `<picture>` 双源。
   漫画线稿+平涂色块压缩率极高，预计单张 150–250KB，**整集 42MB → 4MB 左右**。
2. 保留 `panels/` 原始 PNG 作为母版（不进部署目录），构建时生成派生格式。
3. 封面 `00-cover.png` 单独出一份 1200×630 的 `og:image` 尺寸（见 P1-1）。

命令参考：`cwebp -q 80`、`avifenc -q 60 -s 8`，或用 `sharp`（Node）批处理。

### P0-3 没有版本控制

**现象**：`git rev-parse --is-inside-work-tree` → `fatal: 不是 git 仓库`。

**为什么是问题**：48MB 素材 + 逐格考据文本，一次误删或改坏无法回滚。
而且后面要部署到 GitHub Pages，没有仓库就没法上线。

**怎么改**：
1. `git init`，**先配仓库级身份**（全局 git config 是公司邮箱，绝不能带进副业项目）：
   ```
   git config user.name  "hnyxgxm"
   git config user.email "hnyxgxm2009@163.com"
   ```
   提交前用 `git log --format='%an <%ae>'` 复核一遍，确认没有公司邮箱。
2. `.gitignore` 排除 `dev/shots/`（截图产物）。原始 PNG 母版建议入库
   （48MB 可接受），或转 AVIF 后只入库派生图 + 母版走外部备份。
3. 推到 GitHub **个人账号 hnyxgxm** 的私有仓库，Pages 发布。

---

## P1 — 可发现性与可分享性

### P1-1 全站没有 og:* / canonical / JSON-LD，社交分享无预览图

**现象**：对全部 `index.html` grep `rel="canonical"`、`property="og:*"`、
`application/ld+json`，**结果为空**。只有 `<title>` 和 `meta description`。

**为什么是问题**：这条对漫画站的杀伤力比 SEO 更大。把链接发到 Reddit、
X、Pinterest、Discord 时，没有 `og:image` 就是**一条纯文字链接，没有缩略图**。
漫画的传播主力恰恰是视觉预览图——没有它，点击率会差一个数量级。
这个站的增长路径大概率在社交平台而不在 Google，所以这是 P1 里最该先做的。

**怎么改**：每页补齐
- `og:title` / `og:description` / `og:type`（阅读页用 `article`，其余 `website`）
- `og:image`：**1200×630**，每集单独做一张（封面格 + 标题字），别全站共用一张
- `og:url` + `rel="canonical"`（绝对 URL）
- `twitter:card` = `summary_large_image`
- JSON-LD：阅读页用 `ComicStory`（含 `author`/`datePublished`/`image`），
  人物页用 `Person`，全站加 `BreadcrumbList`

可以在 P0-1 的构建脚本里统一注入，避免手改 7 个文件。

### P1-2 没有 robots.txt 和 sitemap.xml

**现象**：两个文件都不存在。

**怎么改**：
- `robots.txt`：放行全站，指向 sitemap；`dev/` 目录 Disallow
- `sitemap.xml`：列出 7 个页面，带 `lastmod`。由构建脚本生成，别手写。
- 注意：**只把有内容的页面放进 sitemap**。标着 "in production" 的空朝代页不要进。

### P1-3 部署脚本里的硬编码路径会随时失效

**现象**：`dev/shots.cjs:1`
`require("/Users/hangzhou/.qoderwork/workspace/mqi8lvbmxytb8yf7/node_modules/playwright")`
——依赖某个临时 workspace 的 node_modules，那个目录一被清理脚本就跑不了。
`dev/shots.cjs:4` 还硬编码了 headless shell 的绝对路径。

**怎么改**：项目内建 `package.json`，把 `playwright` 装为 devDependency，
改成 `require("playwright")`；浏览器路径用 `chromium.executablePath()` 取，不要写死。
顺带在 `package.json` 里定义 `build`（P0-1 的静态化）、`images`（P0-2 转码）、
`shots`（截图）三个 script，交接时对方一眼能看到怎么跑。

---

## P2 — 内容与法务，需要人确认，不是改代码

### P2-1 史料英译的来源要确认

**现象**：`content/site.js` 里有多条英译引文并标注出处，例如
`sourceQuote: { text: "A man beyond the ordinary, a hero above his age.", source: "Chen Shou's appraisal, Sanguozhi, Wei shu 1" }`（`:19`），
以及程普评周瑜那条（`:43`）。

**为什么要确认**：文言文原文是公版，没问题；但**英译本有版权**。
Rafe de Crespigny 的《三国志》《后汉书》译本（Brill 出版）仍在版权期内。
如果这些英译是参考或抄录他的译本，需要改写；如果是自译，则完全干净，
而且自译本身就是差异化资产，建议在 `method/` 页明确写一句"译文均为本站自译"。

**怎么改**：逐条核对 4 个人物的 `sourceQuote`、`chronology` 十条、
以及 `ep01.js` 里的所有 caption/引文，确认是自译。`method/` 页补一句声明。

### P2-2 【时间敏感 · 必须最先做】许可证改为保留所有权利，并撤回 "no ads" / "stays free" 承诺

> **优先级说明**：本条虽然排在 P2 章节（因为不是代码 bug），但它是清单里**唯一不可逆**的一项。
> 其余各条任何时候做都行；这一条过了时间窗口就补不回来。必须在站点公开发布、内容开始扩散**之前**完成。

**先纠正一个常见误解**：CC 许可证是著作权人向公众发出的授权，**它约束下游使用者，不约束著作权人本人**。
所以 `CC BY-NC-SA` 的 NC 条款并**不**在法律上禁止站长在自己网站挂广告——你不需要向自己申请许可。
真正的问题不在这里，而在下面三条。

**负责人已确认的方向**：保留将来商业变现的可能性；流量起来之前不立即收费（内容先免费阅读）。
下面的改法就是为这个方向服务的。

#### 问题一：NC 授权不可逆，会永久压低存量内容的商业价值

CC BY-NC-SA 一旦公开发布，任何人都可以永久免费地非商业转载、翻译、重制这些漫画。
**换许可证不追溯**——已经以 NC 条款流通出去的副本，永远按 NC 条款存在。

后果：将来想授权出版社出书、做 Patreon 独家内容、卖周边、开发 App 时，
对方会发现整个存量目录已经免费散在外面且无法收回，商业价值和"独家性"卖点直接打折。
SA（相同方式共享）条款还会让商业合作方担心混合授权的复杂性。

**这是唯一的硬约束，也是为什么本条必须最先做。**

#### 问题二："no ads" 出现在导航栏，是口号级承诺

`pages.js:20` 导航栏右侧品牌位写着 `free · no ads · all sources cited`。
这不是页脚小字，是全站每页顶部的品牌口号。读者会因为"无广告"而收藏和分享，
将来上广告时的反弹远大于现在就说明白的成本（webcomic 圈这类反噬很常见）。

#### 问题三："stays free" 承诺了永久免费

`pages.js:102` 写着 `Free, and stays free.`。"stays free" 是比 "free" 强得多的承诺——
等于向读者保证永远不收费。将来任何付费动作（哪怕只是部分内容）都会变成打脸。

#### 怎么改

**去掉 CC 声明，改为「保留所有权利 + 一条窄的明示许可」。**
这样既不丢掉教育场景的善意与传播（那正是目标受众之一），又完整保留未来的授权自由，
而且"个案商业授权"本身可以成为一条收入来源。

页脚许可证段建议措辞（替换现有 CC 那一行）：

```
© 2026 Bamboo Scroll. All rights reserved.
Teachers and students may print, share and translate these comics for
non-commercial classroom use, with credit. For any other reuse —
including commercial — please ask; we almost always say yes.
```

其余措辞调整：

| 现在 | 改成 | 原因 |
| --- | --- | --- |
| `free · no ads · all sources cited` | `free to read · all sources cited` | 去掉"无广告"口号承诺，保留事实陈述 |
| `No ads. No accounts. No tracking beyond anonymous page counts.` | `Free to read. No accounts. No tracking beyond anonymous page counts.` | 现在确实免费，但不承诺永远不上广告；账号与隐私承诺照旧保留（这两条成本低且吸引人） |
| `Free, and stays free.` | `Free to read.` | 删掉 "stays free" 的永久性承诺 |
| `Text and art are CC BY-NC-SA 4.0.`（method 页） | `Text and art are original to this site. Classroom reuse is welcome — see the footer.` | 同上 |

**需要改的 6 个位置（已全量 grep 确认）：**

1. `pages.js:20` — 导航栏品牌位 `no ads`
2. `pages.js:28` — 全站页脚 CC BY-NC-SA 声明
3. `pages.js:29` — 全站页脚 `No ads.`
4. `pages.js:102` — `Free, and stays free.`
5. `pages.js:222` — method 页 `Text and art are CC BY-NC-SA 4.0.`
6. `read/three-kingdoms/01/index.html:56-57` — 阅读页硬编码的页脚，同上两条

（阅读页页脚是硬编码 HTML，不走 `pages.js`，容易漏改——两处都要改，否则同一站内两种口径。）

**如果 P0-1 的静态化先做了**，注意构建产物里的页脚是从 `pages.js` 生成的，
改完源文件要重新构建；阅读页那份硬编码的仍需单独改。

**不要改成 CC BY-SA**。它虽然允许你自己商用，但同时允许**任何人**逐字商业转载你的漫画
（别人可以拿去做广告站），对一个漫画 IP 来说通常不是想要的结果。

---

## 已经做对的（改的时候别动坏）

- **空朝代已妥善处理**：`pages.js:36-41` 给没内容的朝代加 `.soon` 类、
  显示 "in production"、设 `aria-disabled="true"`，链接指向 `method/` 而非死页面。
  不产生死链，也不需要为它单独做处理。**保持这个做法**，
  新增朝代时沿用；只需注意别把 "in production" 的页面放进 sitemap（见 P1-2）。
- **图片已有懒加载**：`loading="lazy"` 出现在 `pages.js` 2 处、`reader.js` 2 处。
- **阅读页有静态骨架**：章节标题、导语、"Next" 段落、页脚都是硬编码 HTML，
  P0-1 静态化时这部分不用重写，只需把注入的容器填上。
- **AI 辅助作画已披露**：页脚写明 "Art is AI-assisted from our own original
  character models. Research, script, sourcing and editing are human."
  透明度够，**保留这段声明**，别删。
- **`method/` 页有证据分级体系**（描述里提到 evidence tiers A…），
  这是全站可信度的锚点，P0-1 静态化时优先保证这页能被完整抓到。

---

## 策略层（非代码，供决策，不要直接执行）

这几条是内容方向问题，交给做优化的人没有意义，需要项目负责人拍板：

1. **纵深优先于广度**。十个朝代 × 每朝 5 集 = 50 集，按一集 1–2 天算是 2–4 个月
   全职投入才像个"库"。反过来，三国先做到 8–10 集就能成为一个 destination，
   单朝代页面之间互相导权重，2 个月内可验证有没有人看。
   阅读页 `:49` 已经预告了 3 集在产（官渡 200、夷陵 222、五丈原 234），
   **建议先把这 3 集做完再开第二个朝代**。第二顺位建议秦汉
   （兵马俑、丝路，视觉强且西方认知度高）。

2. **差异化引擎需要升级**。"官方史 vs 小说"这个钩子在三国极强，
   因为真有一部压倒性的小说在扭曲它；但秦、汉、唐、宋没有对应的国民级虚构作品，
   `myth`/`truth` 那层会失去燃料。对英文读者更有力的框架是
   **"西方以为的中国 vs 史料说的中国"**：长城太空可见、中国从来是一个国家、
   马可波罗到底来没来、缠足起源、朝贡体系的真相、武则天实际如何执政。
   好处是每个朝代都能用，且天然匹配英文搜索意图
   （"was X true" / "X myth" / "did X really happen"）——读者的错误认知就是入口。

3. **近代建议留白**。朝代表止于清 1912（`content/site.js:12`），未含民国及以后。
   建议就停在 1912：越靠近当代，广告/平台政策敏感度越高，
   且内容可归属性越强，与「副业资产不牵连个人身份」的原则相冲突。

4. **变现顺序：先攒受众资产，广告不是主路径**（承接 P2-2）。漫画 IP 的变现天花板
   在 Patreon、出版授权、周边、教育授权（P2-2 建议的"教师学生可署名非商业使用"
   正好把教育场景的入口留着，而"其他用途请来信询问"本身可以成为一条授权收入）。
   广告可以做，但对这种体量它是垫底的补充项。
   因此评估这个项目的指标应该是订阅数/关注数/回访率，不是 RPM——
   这也意味着 P0-1、P1-1 这类"让人找得到、传得开"的修复，优先级高于任何变现接入。

---

## 建议执行顺序

**P2-2（许可证 + 撤回 no ads / stays free 承诺）——必须最先做，且必须在公开发布之前**
→ P0-3（建仓库，保证后面的改动可回滚）
→ P0-2（图片转码，独立任务、收益立竿见影）
→ P0-1（静态化，工作量最大但最关键）
→ P1-1 + P1-2（可并入 P0-1 的构建脚本一起做）
→ P1-3（工程化收尾）
→ P2-1（史料英译来源核对，人工确认，可与上述并行）

P2-2 排在最前不是因为工作量（它只是 6 处文案替换，半小时的事），
而是因为它是唯一不可逆的一项：其余各条拖到任何时候做都还来得及，
这一条一旦内容以 CC BY-NC-SA 扩散出去就补不回来了。
