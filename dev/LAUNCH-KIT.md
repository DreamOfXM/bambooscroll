# Bamboo Scroll 30 天冷启动作战包

> 诊断结论：站内 SEO 已是 90 分（结构化数据、OG、sitemap、GA4、SC 验证全部就位），
> 唯一短板是**零外链、零分发**。本包里的所有文案都写好了，照抄照贴即可。

---

## 〇、总节奏

| 时间 | 动作 | 目的 |
| --- | --- | --- |
| Day 1（今天） | TikTok 发曹操视频 + r/threekingdoms 发帖 + SC 手动请求索引 + 四大名著站挂互链 | 第一波真实流量 + 外链 |
| Day 2–7 | Show HN + r/chinesehistory + X 长推 + 目录提交 + Bing 站长导入 | 把首波流量摊开，多平台占位 |
| Day 8–14 | r/webcomics 或 r/comics 图片帖 + 第二条 TikTok（诸葛亮或赤壁火攻） | 短视频二次触达 |
| Day 15–30 | 每周固定更新 1 集新内容 + Pinterest 建账号钉人物肖像/剧集封面 | 给搜索引擎"活跃站点"信号，吃长尾 |
| 每周日 | GA4 看 `episode_finish`，SC 看 impressions/clicks 周环比 | 只看这两个数 |

**第 30 天的现实目标**：Search Console 周曝光破 1,000；日 UV 稳定 30–80；
至少 8 条真实外链（Reddit/HN/目录都算）。Show HN 或 Reddit 如果有一条爆了，
单日冲到 1,000+ UV 是正常现象，别被峰值误导，看周均值。

**发帖纪律（很重要）**：
- 每个社区发之前先看版规（Rules/Wiki），r/comics 要求图片帖带 [OC] 标签。
- 同一内容在不同 sub 要改写角度，不要复制粘贴同一篇——社区闻得出广告味。
- 帖子发了要回评论。冷启动期评论区的每一次回复都是二次曝光。
- 任何渠道都不要刷量、不要买粉——新站最值钱的是真实停留时长（episode_finish 事件就是为此埋的）。

---

## 一、Day 1 清单（约 45 分钟，视频已移出关键路径）

### 1. r/threekingdoms 图片帖（最重要的一帖，用卡片发）

图片帖到达率远高于链接帖。**直接上传 `chuangye/bambooscroll_cards/` 里的卡片**
（推荐先用 card-eastwind 或 card-plague，争议性最强）：
- 标题：`The east wind at Red Cliff — what the records actually say (from my free webcomic, every panel cited)`
- 第一条评论放链接：`https://dreamofxm.github.io/bambooscroll/` + 一句"corrections welcome"
- 同帖可再贴 1–2 张卡片（arrows / chains）
- 发帖时间：美国东部早 8–10 点（北京时间晚 8–10 点）

### 2. 确认互链已上线（代码已改好，待你 push）

两边源文件都改好了（2026-10-06）：
- `chinese-literature/index.html`：首页 CTA 区 + footer 各一条 → bambooscroll
- `chinese-literature/three-kingdoms/index.html`：正文底部一条定向链接 → 三国季
- `bambooscroll/pages.js` footer：回链 → 四大名著站（已重新 build）
把两个仓库 push 上去就生效。**这是零成本、最确定的一条流量渠道。**

### 3. Search Console 手动请求索引（10 分钟）

sc → 网址检查，逐个"请求编入索引"：
首页 / dynasty/three-kingdoms / read/three-kingdoms/01 / people/cao-cao / people/zhuge-liang

### 4. TikTok 视频（可选，不阻塞）

v3 已渲染好（`chuangye/bambooscroll_redcliff_tiktok_v3.mp4`），发不发、什么时候发都不影响
上面的动作。不想发就先放着。

---
## 二、Day 2–7

### 5. Show HN（ Hacker News ）

- **标题**：`Show HN: Bamboo Scroll – Three Kingdoms history in comics, every panel cited to the records`
- **正文**：

```
I made a free webcomic telling Chinese history from the official records instead
of the novels. The first complete season covers the Three Kingdoms (184–280 CE),
12 episodes from Guandu to the fall of Wu.

The differentiator: every panel footnotes its source (Sanguozhi, Pei Songzhi's
commentary, Hou Hanshu, Zizhi Tongjian), famous scenes the Romance invented get
separate "Myth Check" boxes, and disputed dates/numbers are marked as debated
rather than smoothed over.

Built as a static site — plain HTML/CSS/JS, prerendered, no framework, WebP/AVIF
artwork, generated sitemap. Free to read, no account, and teachers may reuse it
for non-commercial classroom use.

Happy to talk about the sourcing workflow or the static-site setup.
```

- 发帖时间：周二至周四，美国东部上午 8–10 点。HN 首页前 30 分钟很关键，发完盯评论。
- HN 用户爱抠技术细节和史学细节，任何评论都认真回。

### 6. r/chinesehistory（换个角度：方法论）

- **标题**：`A comic of Red Cliff that cites Pei Songzhi's commentary on every page — because the novel keeps swallowing the history`
- 正文可沿用 r/threekingdoms 那篇但**改写**（强调 how we know what happened：
  瘟疫说、风向争议、数字存疑的处理方式）。

### 7. X / Twitter 长推（Red Cliff 史实 vs 演艺，10 连图）

逐条文案（每条配一张画格）：

```
1/ The Battle of Red Cliff didn't happen the way you think.
   The famous version — borrowed arrows, the east-wind ritual — comes from a
   14th-century novel. I made a comic of the real one, cited to the records. 🧵

2/ 208 CE. Cao Cao controls the north with (records say) a huge army — though
   the number itself is debated, and the comic says so.

3/ The novel gives Zhuge Liang the fire plan. The records put it with Huang Gai
   and Zhou Yu's staff.

4/ The "east wind ritual" never happened. The wind was seasonal — the sources
   describe weather, not magic.

5/ What may have actually broken Cao Cao's fleet: disease. Several sources
   finger a plague in his camp. It rarely makes it into adaptations.

6/ "Borrowing arrows with straw boats" — a novel invention. Fun, but not history.

7/ The chain-link ships? The records say Cao Cao lashed boats to calm seasick
   northern troops. The fire turned it into a trap.

8/ After the fire: Cao Cao's retreat through Huarong — the novel's Guan Yu
   mercy scene has no basis in the records.

9/ Every page of the comic footnotes its source: Sanguozhi, Pei Songzhi,
   Zizhi Tongjian. Disputed points are marked as disputed.

10/ The full Red Cliff episode + 24 more (Three Kingdoms season complete):
    free, no account → https://dreamofxm.github.io/bambooscroll/
```

发完把整条 thread 的链接也放进 TikTok 简介轮流挂。

### 8. 漫画目录提交（每个 5 分钟）

| 目录 | 地址 | 备注 |
| --- | --- | --- |
| TopWebComics | topwebcomics.com | 老牌，有投票位机制，准备一张 468×60 banner |
| The Webcomic List | thewebcomiclist.com | 提交即收 |
| Piperka | piperka.net | 追更型目录，读者粘性高 |
| WebcomicZ | webcomicz.net | 备选 |

提交信息统一用：
`Bamboo Scroll — free webcomics of Chinese history, told only from the official records. Every panel sourced; the novel is never used as evidence.`

### 9. Bing Webmasters（5 分钟）

bing.com/webmasters → Import from Google Search Console（tracking.json 里
bingSiteVerification 留空就是为这条准备的，导入即可，不用贴验证码）。
Bing 还喂 DuckDuckGo 和 Yahoo 的索引，白捡的曝光。

---

## 三、Day 8–30

### 10. r/comics 或 r/webcomics 图片帖（纯艺术向）

r/comics 规则：只能发原创图片帖（不能发链接），标题带 [OC]。
- 发一张**不带文字或少字**、视觉冲击最强的画格（火攻那张）
- 标题：`[OC] From my webcomic about the real Three Kingdoms — the fire at Red Cliff, 208 CE`
- 把网址做进图片角落水印，链接放第一条评论。
- r/webcomics 则有每周自助推广贴（Self-Promo），在楼里发。

### 11. 第二条 TikTok（第一条已是 Red Cliff，换角度）

用 `dev/make-promo-video.sh` 改画格和文案即可重出片，二选一：
- 诸葛亮 Myth Check："The real Zhuge Liang never borrowed any arrows"（ep04 五丈原素材）
- 关羽："Your favorite Guan Yu moments are from the novel"（ep02 官渡 + Myth Check 素材）

### 12. Pinterest（长尾流量，别忽略）

建 Bamboo Scroll 账号，把**人物肖像 + 剧集封面**逐张钉（Pin），
描述用搜索词句式：`Cao Cao — historical biography comic`、
`Battle of Red Cliff 208 CE illustration`。
Pinterest 的历史/教育图流量衰减极慢，半年后还在来人。

### 13. 每周更新 1 集

Google 对持续更新的站爬取得更勤（sitemap lastmod 由文件改动时间自动生成，
有新内容就会自动 bump，不用手工改）。哪怕Han 季补集数、人物页补传记，
保持每周至少一个页面有实质更新。

---

## 四、不用再做的事（避免浪费精力）

- 站内 SEO 全部就位：JSON-LD（Person + 章节）、OG、canonical、sitemap 146 条、
  GA4（G-ZCHGJ1MF99）、SC 验证 + sitemap 已提交。**不要重复折腾这些。**
- 不建议现在买域名换独立域——等有真实流量再换，301 迁移反而伤新站。
- 不要投付费广告：内容站的冷启动靠社区，广告买了也留不住人。

## 五、只看两个数

1. **Search Console → 效果 → 曝光次数**（周环比）——衡量收录和排名启动
2. **GA4 → `episode_finish` 事件**——衡量内容真实吸引力（比 UV 诚实得多）

## 六、无视频推广渠道（2026-10-06 补充，文案全部现成）

> 弹药：5 张 Myth Check 卡片在 `chuangye/bambooscroll_cards/`
> （eastwind 借东风 / arrows 草船借箭 / chains 连环船 / zhouyu 周瑜 / plague 瘟疫），
> 1080×1350 通吃 Reddit / X / Facebook / Pinterest。文案全部取自站内 ep01 的 Myth Check 原文，
> 每张带出处。用 `dev/make-promo-cards.sh` 可换画格再做。

### A. Quora 回答（长尾流量，回答存活期以年计）

找这类问题：*"Did the Battle of Red Cliff really happen?"*、*"Is Romance of the Three Kingdoms historically accurate?"*、*"Was Zhuge Liang real?"*、*"What did Cao Cao actually do?"*

回答模板（按问题改写首句，中间三段照用）：

```
It happened — but almost nothing you've seen in games, TV or the novel is what the
records describe.

Three quick examples from the actual sources (Sanguozhi + Pei Songzhi's commentary):

1. The east wind. No altar, no ritual. The sources say "the wind was fierce" —
   winter southeasterlies are a known local pattern on that reach of the Yangtze.
2. Borrowing arrows with straw boats. No such event at Red Cliff in any source.
   A similar trick is attributed to Sun Quan — five years later, different river.
3. Cao Cao's fleet. The histories never place Pang Tong there. What they record
   is Huang Gai noticing the enemy ships lay head to tail.

I make a free webcomic that tells it this way — every panel footnoted to the records,
disputed points marked as disputed: https://dreamofxm.github.io/bambooscroll/
```

规则：一次只答一个问题，答完别连发；个人资料页放站点链接。

### B. Facebook 群组（三国/Dynasty Warriors 粉丝群流量比想象中大）

搜 "Three Kingdoms"、"Dynasty Warriors"、"Chinese History" 相关 group（多个 1 万人以上的群）。
发卡片图 + 短文案：

```
The east wind at Red Cliff — the novel gives Zhuge Liang an altar ritual. The records
give the wind to weather. I made a free comic of the real campaign, every panel cited
to Sanguozhi and Pei Songzhi: https://dreamofxm.github.io/bambooscroll/
```

先在群里混几天（评论别人帖子），再发自荐帖，存活率高很多。

### C. 游戏社区角度（r/totalwar 等 Total War: Three Kingdoms 玩家）

```
The history behind your favorite Three Kingdoms characters — I drew it as a comic,
cited only to the official records. Guan Yu, Zhuge Liang, Cao Cao: what the histories
actually say vs what the novel invented (each myth gets its own correction box).
Free, no account: https://dreamofxm.github.io/bambooscroll/
```

### D. 历史播客 / newsletter pitch 邮件（一次群发 15 分钟）

对象：The China History Podcast、History of China Podcast、各大学中国史 newsletter。
邮件模板：

```
Subject: A free, sourced comic of the Three Kingdoms — for your listeners?

Hi [name],

I make Bamboo Scroll, a free English webcomic of Chinese history told strictly from
the official records — Sanguozhi, Pei Songzhi, Zizhi Tongjian. The first complete
season covers the Three Kingdoms in 12 episodes, from Guandu to the fall of Wu.

The angle your listeners might enjoy: every famous scene the Romance invented gets
a "Myth Check" box with the actual source, and disputed numbers are marked as
disputed. It's free, no account, and classroom reuse is explicitly permitted.

If it's useful as a listener resource, I'd be glad to share episode art or a
guest segment: https://dreamofxm.github.io/bambooscroll/

— [your name]
```

### E. Pinterest（最慢但最持久，卡片直接当 Pin）

建 Bamboo Scroll 账号，5 张卡片逐张钉，描述用搜索句式：
- `Was the east wind at Red Cliff real? What Sanguozhi actually says`
- `Zhuge Liang borrowing arrows — the history behind the myth`
- `Battle of Red Cliff 208 CE — what really happened`
- `The real Zhou Yu — history vs the novel`
板名："Chinese history myths vs records"。Pinterest 的历史类流量衰减极慢，半年后还在来人。

### F. X/Twitter 卡片串（代替视频节奏）

每天发 1 张卡片 + 一句话，连发 5 天（比一次性发完触达高）：
D1 eastwind / D2 arrows / D3 chains / D4 zhouyu / D5 plague，
最后一条带完整链接和 "full comic, free, no account"。
