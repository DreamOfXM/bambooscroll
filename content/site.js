window.SITE = {
  dynasties: [
    { id: "qin", name: "Qin", hanzi: "秦", from: -221, to: -206, color: "#3d3a35", blurb: "The first empire, and the shortest." },
    { id: "han", name: "Han", hanzi: "漢", from: -206, to: 220, color: "#7a2f22", blurb: "Four centuries that gave China its name." },
    { id: "three-kingdoms", name: "Three Kingdoms", hanzi: "三國", from: 184, to: 280, color: "#b3402a", blurb: "The empire breaks in three; the stories never stopped.", episodes: 2 },
    { id: "jin", name: "Jin", hanzi: "晉", from: 265, to: 420, color: "#5c6b33", blurb: "Reunified, then broken again from within." },
    { id: "sui", name: "Sui", hanzi: "隋", from: 581, to: 618, color: "#33415c", blurb: "A canal, a wall, and a dynasty that burned out fast." },
    { id: "tang", name: "Tang", hanzi: "唐", from: 618, to: 907, color: "#a8823f", blurb: "The cosmopolitan high point." },
    { id: "song", name: "Song", hanzi: "宋", from: 960, to: 1279, color: "#4a6670", blurb: "Poor at war, unmatched at everything else." },
    { id: "yuan", name: "Yuan", hanzi: "元", from: 1271, to: 1368, color: "#6b4a2f", blurb: "The empire inside a larger one." },
    { id: "ming", name: "Ming", hanzi: "明", from: 1368, to: 1644, color: "#8a3b2e", blurb: "Han rule restored; the walls rebuilt in brick." },
    { id: "qing", name: "Qing", hanzi: "清", from: 1644, to: 1912, color: "#3f4a5a", blurb: "The last dynasty, and the end of the old order." }
  ],
  people: [
    {
      id: "cao-cao", name: "Cao Cao", hanzi: "曹操", years: "155–220", dynasty: "three-kingdoms", color: "#7a2f22",
      role: "Chancellor of Han and master of the north. Poet, administrator, and the man the novel made its villain.",
      portrait: "assets/portrait-caocao.png",
      sourceQuote: { text: "A man beyond the ordinary, a hero above his age.", source: "Chen Shou's appraisal, Sanguozhi, Wei shu 1" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [2, 3, 4, 6, 11, 15, 19, 20] },
        { ep: "read/three-kingdoms/02/", num: 2, panels: [1, 4, 6, 7, 8, 9, 10, 11, 15, 16] }
      ],
      relations: [
        { to: "liu-bei", kind: "rivals", note: "Once hosted him, twice fought him, never finished him." },
        { to: "zhou-yu", kind: "opponents", note: "Red Cliff, 208 CE." },
        { to: "yuan-shao", kind: "rivals", note: "Friends in their youth at Luoyang; Guandu decided which of them the north would keep." },
        { to: "guan-yu", kind: "brief master", note: "Held him in 200, honoured him, and let him go." }
      ],
      myth: { myth: "The white-faced villain of opera and novel, cruel and treacherous by nature.", truth: "The official history appraises him as the ablest man of his age; his own annals record the Red Cliff defeat in one flat sentence, without blaming anyone." }
    },
    {
      id: "liu-bei", name: "Liu Bei", hanzi: "劉備", years: "161–223", dynasty: "three-kingdoms", color: "#5c6b33",
      role: "A claimant with a famous name and almost nothing else. Began 208 in flight; ended it holding the south of Jing.",
      portrait: "assets/portrait-liubei.png",
      sourceQuote: { text: "Resolute and generous, wide in heart and courteous to men — he had the wind of the First Emperor of Han, and the make of a hero.", source: "Chen Shou's appraisal, Sanguozhi, Shu shu 2" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [3, 5, 6, 7, 8, 9, 10, 20] },
        { ep: "read/three-kingdoms/02/", num: 2, panels: [8] }
      ],
      relations: [
        { to: "zhuge-liang", kind: "lord & strategist", note: "Three visits to a thatched cottage — the visits are in the sources; the number three is in the memorial." },
        { to: "cao-cao", kind: "rivals", note: "The two halves of the age." },
        { to: "guan-yu", kind: "lord & general", note: "From the first raising of troops to the last. The histories say they shared a bed and a table, as brothers." }
      ],
      myth: { myth: "A weeping weakling who won by kindness alone and let others fight for him.", truth: "The histories record a frontline commander from 184 to 223 who led his own campaigns; at Changban he chose to lose his army's speed rather than abandon the people following him." }
    },
    {
      id: "zhou-yu", name: "Zhou Yu", hanzi: "周瑜", years: "175–210", dynasty: "three-kingdoms", color: "#33415c",
      role: "Chief commander of Wu. Read Cao Cao's army correctly and burned it. Died of illness in 210, aged 36.",
      portrait: "assets/portrait-zhouyu.png",
      sourceQuote: { text: "Being with Zhou Yu is like drinking fine wine — you are drunk before you know it.", source: "Cheng Pu, quoted in the Jiangbiao zhuan, in Pei Songzhi's commentary" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [9, 11, 12, 13, 14, 16, 18] }
      ],
      relations: [
        { to: "cao-cao", kind: "opponents", note: "Red Cliff, 208 CE." },
        { to: "zhuge-liang", kind: "allies", note: "Colleagues of one alliance in 208. The jealousy is the novel's invention." }
      ],
      myth: { myth: "A jealous rival of Zhuge Liang, outwitted three times and dead of rage.", truth: "He died of illness in 210, two years before the events the novel stages between them. His own colleagues described a man of such warmth that men forgot themselves in his company." }
    },
    {
      id: "zhuge-liang", name: "Zhuge Liang", hanzi: "諸葛亮", years: "181–234", dynasty: "three-kingdoms", color: "#5f6a6a",
      role: "Liu Bei's strategist, 27 years old in 208. Negotiated the alliance; later governed Shu-Han.",
      portrait: "assets/portrait-zhugeliang.png",
      sourceQuote: { text: "A fine talent who understood governance, the equal of Guan Zhong and Xiao He.", source: "Chen Shou's appraisal, Sanguozhi, Shu shu 5" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [9, 10] }
      ],
      relations: [
        { to: "liu-bei", kind: "strategist & lord", note: "From 207 until Liu Bei's death in 223." },
        { to: "zhou-yu", kind: "allies", note: "The alliance of 208 was their joint work." }
      ],
      myth: { myth: "A sorcerer-strategian who summons winds, empties cities, and knows everything before it happens.", truth: "Chen Shou's appraisal praises him as an administrator and lawgiver, and notes plainly that his military successes fell short of his planning. The wind at Red Cliff belongs to Huang Gai in the sources." }
    },
    {
      id: "yuan-shao", name: "Yuan Shao", hanzi: "袁紹", years: "d. 202", dynasty: "three-kingdoms", color: "#5b4a68",
      role: "Heir of the Yuan clan of Runan, four generations of senior ministers. Master of four provinces north of the Yellow River — until Guandu.",
      portrait: "assets/portrait-yuanshao.png",
      sourceQuote: { text: "I will hold the north of the Yellow River, keep the Rong and Di of Dai, and turn south to contend for the empire — that should see it through.", source: "Yuan Shao to Cao Cao before the war; Sanguozhi, Wei shu 1, Pei Songzhi commentary quoting the Fu Zi" },
      appearsIn: [
        { ep: "read/three-kingdoms/02/", num: 2, panels: [1, 2, 7, 12, 13, 14, 16] }
      ],
      relations: [
        { to: "cao-cao", kind: "rivals", note: "Friends in their youth at Luoyang; then the two strongest men in the north, and room for only one." }
      ],
      myth: { myth: "A vacillating aristocrat who lost because he could never make up his mind — the novel's foil for Cao Cao's decisiveness.", truth: "The sources show a magnate whose four provinces made him the favourite to win. At Guandu he refused Xu You's plan to strike Xu and overruled Zhang He's warning about Wuchao: two recorded decisions, not a temperament. He died in 202 still holding his provinces; it was his sons' feud that finished the house of Yuan." }
    },
    {
      id: "guan-yu", name: "Guan Yu", hanzi: "關羽", years: "d. 220", dynasty: "three-kingdoms", color: "#3d5a45",
      role: "A general of Liu Bei from the first raising of troops. In 200, briefly in Cao Cao's camp, he ended Yan Liang at Boma — then went back.",
      portrait: "assets/portrait-guanyu.png",
      sourceQuote: { text: "Yu saw Liang's canopy and banner, spurred his horse into the midst of the ten thousand, beheaded Liang and returned; among the generals there was none who could stand against him.", source: "Sanguozhi, Shu shu 6, Biography of Guan Yu" },
      appearsIn: [
        { ep: "read/three-kingdoms/02/", num: 2, panels: [5] }
      ],
      relations: [
        { to: "liu-bei", kind: "lord & brother in all but name", note: "The histories say they slept in the same bed and shared as brothers; the oath in the peach garden is the novel's." },
        { to: "cao-cao", kind: "brief master", note: "Captured in 200, honoured, and gone within the year. His men wanted to pursue; Cao Cao said each serves his lord, and let him go." }
      ],
      myth: { myth: "The red-faced god of war with the Green Dragon Crescent Blade, sworn in a peach garden, deified in every temple.", truth: "The sources give a bearded general — Zhuge Liang's letter calls him the beautiful-bearded — with a plain soldier's blade, no oath scene and no divinity; the deifications begin centuries later, under Song and Ming emperors. What the record gives him is the one sentence at Boma, which needed no legend." }
    }
  ],
  chronology: [
    { year: "184", text: "The Yellow Turban uprising. The empire's glue fails.", source: "Hou Han shu; Sanguozhi" },
    { year: "200", text: "Guandu: Cao Cao breaks Yuan Shao and takes the north.", source: "Sanguozhi, Wei shu 1" },
    { year: "208", text: "Red Cliff: the fire that makes three states possible.", source: "This episode" },
    { year: "220", text: "Cao Pi takes the throne from Han. Wei begins; Han ends.", source: "Sanguozhi, Wei shu 2" },
    { year: "221", text: "Liu Bei proclaims the continuation of Han at Chengdu.", source: "Sanguozhi, Shu shu 2" },
    { year: "222", text: "Yiling: Lu Xun burns Liu Bei's linked camps.", source: "Sanguozhi, Wu shu 7" },
    { year: "229", text: "Sun Quan declares himself emperor. The third state is formal.", source: "Sanguozhi, Wu shu 2" },
    { year: "234", text: "Zhuge Liang dies at the Wuzhang Plains, still campaigning.", source: "Sanguozhi, Shu shu 5" },
    { year: "263", text: "Shu-Han surrenders to Wei.", source: "Sanguozhi, Shu shu 3" },
    { year: "280", text: "Jin takes Wu. The river is one again.", source: "Jin shu; Sanguozhi, Wu shu 2" }
  ],
  glossary: [
    { hanzi: "皇帝", pinyin: "huángdì", en: "emperor", def: "The title created in 221 BCE; the son of heaven, sole legitimate ruler of all under it." },
    { hanzi: "丞相", pinyin: "chéngxiàng", en: "chancellor", def: "The head of civil government under the emperor. Cao Cao held it; that was the point." },
    { hanzi: "州", pinyin: "zhōu", en: "province", def: "The largest administrative division. Jing Province, the prize of 208, covered the middle Yangtze." },
    { hanzi: "郡", pinyin: "jùn", en: "commandery", def: "The division below a province, run by a governor. Four southern commanderies went over to Liu Bei after Red Cliff." },
    { hanzi: "太守", pinyin: "tàishǒu", en: "commandery governor", def: "The official in charge of a commandery: tax, justice, and levies." },
    { hanzi: "刺史", pinyin: "cìshǐ", en: "regional inspector", def: "Originally an inspector over several commanderies; by the late Han, effectively a provincial warlord's title." },
    { hanzi: "屯田", pinyin: "túntián", en: "military agricultural colonies", def: "Soldiers farming state land to feed the army. Cao Cao's system of it is why his north outlasted everyone." },
    { hanzi: "部曲", pinyin: "bùqǔ", en: "private retainers", def: "Troops bound to a family rather than to the state. The atom of warlord power." },
    { hanzi: "禪讓", pinyin: "shànràng", en: "abdication ritual", def: "The ceremony by which a dynasty 'yields' the throne to the next. Always voluntary on paper, never in fact." },
    { hanzi: "士人", pinyin: "shìrén", en: "scholar-gentry", def: "The literate elite whose service made any regime governable. Courts competed for them." }
  ]
};
