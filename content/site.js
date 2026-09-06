window.SITE = {
  dynasties: [
    { id: "qin", name: "Qin", hanzi: "秦", from: -221, to: -206, color: "#3d3a35", blurb: "The first empire, and the shortest." },
    { id: "han", name: "Han", hanzi: "漢", from: -206, to: 220, color: "#7a2f22", blurb: "Four centuries that gave China its name.", arc: "Our episodes begin with the rebel army that took the Qin capital in 206 BCE and end in 184 CE, the year the empire's provinces stopped obeying it — the year the Three Kingdoms block below opens." },
    { id: "three-kingdoms", name: "Three Kingdoms", hanzi: "三國", from: 184, to: 280, color: "#b3402a", blurb: "The empire breaks in three; the stories never stopped.", arc: "The states were proclaimed from 220; the war that made them began in the last years of Han, and that is where our episodes start." },
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
      id: "cao-cao", name: "Cao Cao", hanzi: "曹操", years: "155–220 CE", dynasty: "three-kingdoms", color: "#7a2f22",
      role: "Chancellor of Han and master of the north. Poet, administrator, and the man the novel made its villain.",
      portrait: "assets/portrait-caocao.png",
      sourceQuote: { text: "A man beyond the ordinary, a hero above his age.", source: "Chen Shou's appraisal, Sanguozhi, Wei shu 1" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [2, 3, 4, 6, 11, 15, 19, 20] },
        { ep: "read/three-kingdoms/02/", num: 2, panels: [1, 4, 6, 7, 8, 9, 10, 11, 15, 16] },
        { ep: "read/three-kingdoms/05/", num: 5, panels: [2, 4, 5, 7, 10, 11, 12, 13, 14] },
        { ep: "read/three-kingdoms/06/", num: 6, panels: [2, 16] },
        { ep: "read/three-kingdoms/07/", num: 7, panels: [2, 9, 10, 11, 12, 14] },
        { ep: "read/three-kingdoms/08/", num: 8, panels: [3, 7, 10, 17] }
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
      id: "liu-bei", name: "Liu Bei", hanzi: "劉備", years: "161–223 CE", dynasty: "three-kingdoms", color: "#5c6b33",
      role: "A claimant with a famous name and almost nothing else. Began 208 in flight; ended it holding the south of Jing.",
      portrait: "assets/portrait-liubei.png",
      sourceQuote: { text: "Resolute and generous, wide in heart and courteous to men — he had the wind of the First Emperor of Han, and the make of a hero.", source: "Chen Shou's appraisal, Sanguozhi, Shu shu 2" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [3, 5, 6, 7, 8, 9, 10, 20] },
        { ep: "read/three-kingdoms/02/", num: 2, panels: [8] },
        { ep: "read/three-kingdoms/03/", num: 3, panels: [4, 5, 13, 14, 16] },
        { ep: "read/three-kingdoms/07/", num: 7, panels: [2, 5, 6, 7, 11, 12, 14, 15, 16] },
        { ep: "read/three-kingdoms/08/", num: 8, panels: [2, 17] },
        { ep: "read/three-kingdoms/11/", num: 11, panels: [1] }
      ],
      relations: [
        { to: "zhuge-liang", kind: "lord & strategist", note: "Three visits to a thatched cottage — the visits are in the sources; the number three is in the memorial." },
        { to: "cao-cao", kind: "rivals", note: "The two halves of the age." },
        { to: "guan-yu", kind: "lord & general", note: "From the first raising of troops to the last. The histories say they shared a bed and a table, as brothers." },
        { to: "lu-xun", kind: "opponents", note: "Yiling, 222 CE. He came for Jing province and for his brother; a scholar of thirty-nine burned him out of the gorges." },
        { to: "huang-quan", kind: "counsellor & lord", note: "Overruled him before the war, and took the blame for it after: 'I let Huang Quan down.'" }
      ],
      myth: { myth: "A weeping weakling who won by kindness alone and let others fight for him.", truth: "The histories record a frontline commander from 184 to 223 who led his own campaigns; at Changban he chose to lose his army's speed rather than abandon the people following him." }
    },
    {
      id: "zhou-yu", name: "Zhou Yu", hanzi: "周瑜", years: "175–210 CE", dynasty: "three-kingdoms", color: "#33415c",
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
      id: "zhuge-liang", name: "Zhuge Liang", hanzi: "諸葛亮", years: "181–234 CE", dynasty: "three-kingdoms", color: "#5f6a6a",
      role: "Liu Bei's strategist, 27 years old in 208. Negotiated the alliance; later governed Shu-Han.",
      portrait: "assets/portrait-zhugeliang.png",
      sourceQuote: { text: "A fine talent who understood governance, the equal of Guan Zhong and Xiao He.", source: "Chen Shou's appraisal, Sanguozhi, Shu shu 5" },
      appearsIn: [
        { ep: "read/three-kingdoms/01/", num: 1, panels: [9, 10] },
        { ep: "read/three-kingdoms/03/", num: 3, panels: [16] },
        { ep: "read/three-kingdoms/04/", num: 4, panels: [9, 11, 12, 13, 14, 15] }
      ],
      relations: [
        { to: "liu-bei", kind: "strategist & lord", note: "From 207 until Liu Bei's death in 223. At Baidicheng the dying emperor gave him the heir and the state." },
        { to: "zhou-yu", kind: "allies", note: "The alliance of 208 was their joint work." },
        { to: "sima-yi", kind: "opponents", note: "Four years on the Wei river, 231–234. One would not fight; the other could not afford to wait." }
      ],
      myth: { myth: "A sorcerer-strategian who summons winds, empties cities, and knows everything before it happens.", truth: "Chen Shou's appraisal praises him as an administrator and lawgiver, and notes plainly that his military successes fell short of his planning. The wind at Red Cliff belongs to Huang Gai in the sources." }
    },
    {
      id: "yuan-shao", name: "Yuan Shao", hanzi: "袁紹", years: "d. 202 CE", dynasty: "three-kingdoms", color: "#5b4a68",
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
      id: "guan-yu", name: "Guan Yu", hanzi: "關羽", years: "d. 220 CE", dynasty: "three-kingdoms", color: "#3d5a45",
      role: "A general of Liu Bei from the first raising of troops. In 200, briefly in Cao Cao's camp, he ended Yan Liang at Boma — then went back.",
      portrait: "assets/portrait-guanyu.png",
      sourceQuote: { text: "Yu saw Liang's canopy and banner, spurred his horse into the midst of the ten thousand, beheaded Liang and returned; among the generals there was none who could stand against him.", source: "Sanguozhi, Shu shu 6, Biography of Guan Yu" },
      appearsIn: [
        { ep: "read/three-kingdoms/02/", num: 2, panels: [5] },
        { ep: "read/three-kingdoms/03/", num: 3, panels: [2] },
        { ep: "read/three-kingdoms/08/", num: 8, panels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16] }
      ],
      relations: [
        { to: "liu-bei", kind: "lord & brother in all but name", note: "The histories say they slept in the same bed and shared as brothers; the oath in the peach garden is the novel's." },
        { to: "cao-cao", kind: "brief master", note: "Captured in 200, honoured, and gone within the year. His men wanted to pursue; Cao Cao said each serves his lord, and let him go." }
      ],
      myth: { myth: "The red-faced god of war with the Green Dragon Crescent Blade, sworn in a peach garden, deified in every temple.", truth: "The sources give a bearded general — Zhuge Liang's letter calls him the beautiful-bearded — with a plain soldier's blade, no oath scene and no divinity; the deifications begin centuries later, under Song and Ming emperors. What the record gives him is the one sentence at Boma, which needed no legend." }
    },
    {
      id: "lu-xun", name: "Lu Xun", hanzi: "陸遜", years: "183–245 CE", dynasty: "three-kingdoms", color: "#40655a",
      role: "Grand commander of Wu at thirty-nine. Waited six months against his own generals' contempt, then burned four hundred li of stockades in a night.",
      portrait: "assets/portrait-luxun.png",
      sourceQuote: { text: "I am only a scholar, and I hold my charge from the lord. The reason the state has bent you all to look to me is that I have an inch of worth: I can bear humiliation and carry weight.", source: "Lu Xun to his resentful generals, 222; Sanguozhi, Wu shu 13" },
      appearsIn: [
        { ep: "read/three-kingdoms/03/", num: 3, panels: [7, 8, 10, 11, 15] },
        { ep: "read/three-kingdoms/08/", num: 8, panels: [11, 12] },
        { ep: "read/three-kingdoms/09/", num: 9, panels: [5, 9] }
      ],
      relations: [
        { to: "sun-quan", kind: "commander & king", note: "Sun Quan's trust made him grand commander at 39; Sun Quan's anger over the succession broke him in 245." },
        { to: "liu-bei", kind: "opponents", note: "Yiling, 222 CE. He burned the line, then refused pursuit — Wei was the real enemy." }
      ],
      myth: { myth: "The young scholar who pursued too far, lost his way in Zhuge Liang's stone maze of the Eight Trigrams, and was led out by a father-in-law.", truth: "No history knows the maze. The sources give a commander who refused battle for six months, burned the line in a night, and then stopped at the border on purpose because Wei's armies were massing behind him." }
    },
    {
      id: "sun-quan", name: "Sun Quan", hanzi: "孫權", years: "182–252 CE", dynasty: "three-kingdoms", color: "#54386b",
      role: "King of Wu, emperor from 229. Bought the north's neutrality on paper to take Jing province in fact, then held the river for half a century.",
      portrait: "assets/portrait-sunquan.png",
      sourceQuote: { text: "Your talent and measure now — you are no longer the A-Meng of Wu.", source: "Sun Quan to Lü Meng; Jiangbiao zhuan, in Pei Songzhi's commentary" },
      appearsIn: [
        { ep: "read/three-kingdoms/03/", num: 3, panels: [7] },
        { ep: "read/three-kingdoms/04/", num: 4, panels: [10] },
        { ep: "read/three-kingdoms/06/", num: 6, panels: [1, 3, 8, 9, 10, 12, 13, 14, 15] },
        { ep: "read/three-kingdoms/08/", num: 8, panels: [10, 16, 17] },
        { ep: "read/three-kingdoms/09/", num: 9, panels: [5, 13] }
      ],
      relations: [
        { to: "zhou-yu", kind: "lord & commander", note: "Zhou Yu gave him the river in 208; he gave Zhou Yu's family his care." },
        { to: "lu-xun", kind: "king & commander", note: "Chose a scholar of 39 over his oldest generals — then broke him over the succession in 245." },
        { to: "cao-cao", kind: "vassal in name", note: "Took a king's seal from Wei in 221 to keep the north quiet while he fought west." }
      ],
      myth: { myth: "The purple-bearded hero of the novel, a foil for Liu Bei's virtue and Cao Cao's genius.", truth: "The histories give the steadiest politician of the age: he submitted to Wei on paper to take Jing province in fact, trusted a scholar over his veterans at Yiling, and held three provinces for fifty years." }
    },
    {
      id: "huang-quan", name: "Huang Quan", hanzi: "黃權", years: "d. 240 CE", dynasty: "three-kingdoms", color: "#6d5a2f",
      role: "Counsellor of Shu who argued against the eastern war, commanded its northern bank, was cut off by the fire, and ended a honoured general of Wei.",
      portrait: "assets/portrait-huangquan.png",
      sourceQuote: { text: "The Wu are fierce and swift, and the current runs with them downhill. Let me be the vanguard to face them; Your Majesty should be the rear anchor.", source: "Huang Quan to Liu Bei, 221; Sanguozhi, Shu shu 13" },
      appearsIn: [
        { ep: "read/three-kingdoms/03/", num: 3, panels: [6, 14] }
      ],
      relations: [
        { to: "liu-bei", kind: "counsellor & lord", note: "Argued against the war, was overruled, was cut off — and was forgiven: 'I let Huang Quan down.'" }
      ],
      myth: { myth: "A traitor who went over to Wei when the battle turned.", truth: "His road home was burned by the Wu advance, not his loyalty. Wei made him a general and a marquis; Liu Bei kept his family and their stipend, saying he, not Huang Quan, was at fault." }
    },
    {
      id: "sima-yi", name: "Sima Yi", hanzi: "司馬懿", years: "179–251 CE", dynasty: "three-kingdoms", color: "#37414f",
      role: "Wei's commander in the west from 231. Refused battle at the Wuzhang Plains, outlived Zhuge Liang, and left his house the empire.",
      portrait: "assets/portrait-simayi.png",
      sourceQuote: { text: "I can judge the living. I cannot judge the dead.", source: "On the saying that the dead Zhuge Liang routed him; Han Jin Chunqiu, in Pei Songzhi's commentary" },
      appearsIn: [
        { ep: "read/three-kingdoms/04/", num: 4, panels: [6, 11, 12, 15] },
        { ep: "read/three-kingdoms/08/", num: 8, panels: [9] },
        { ep: "read/three-kingdoms/10/", num: 10, panels: [2, 4, 6, 7, 8, 9, 14, 15, 16] }
      ],
      relations: [
        { to: "zhuge-liang", kind: "opponents", note: "Four years of refused battle on the Wei river. He outlived him, and that decided it." },
        { to: "cao-cao", kind: "reluctant servant", note: "Cao Cao distrusted him and kept him anyway; he outlived the whole house and took what it held." }
      ],
      myth: { myth: "The white-faced villain of opera, outwitted at every turn and frightened off by an empty city.", truth: "The histories give the colder read: he refused battle because refusing was correct, asked the court for a permission he knew would be denied, and measured his enemy by his appetite. The empty city is a story Pei Songzhi quotes in order to disprove." }
    },
    {
      id: "ma-chao", name: "Ma Chao", hanzi: "馬超", years: "176–222 CE", dynasty: "three-kingdoms", color: "#7d5426",
      role: "Frontier warlord of Liang Province, head of the coalition at thirty-five. Rose while his father sat hostage at Ye, broke at Tong Pass, and died in Shu.",
      portrait: "assets/portrait-machao.png",
      sourceQuote: { text: "Ma Chao has the courage of Xin Qingji and Meng Ben, and he holds the hearts of the Qiang and the Hu.", source: "Yang Fu's warning to Cao Cao, 211; Sanguozhi, Wei shu 25, Biography of Yang Fu" },
      appearsIn: [
        { ep: "read/three-kingdoms/05/", num: 5, panels: [3, 7, 9, 12, 14] }
      ],
      relations: [
        { to: "cao-cao", kind: "opponents", note: "Tong Pass, 211 CE. He rose while his father sat hostage at Ye; the family was executed the following year." },
        { to: "han-sui", kind: "uneasy allies", note: "Co-heads of the Guanzhong coalition. One parley and one doctored letter ended the partnership." },
        { to: "liu-bei", kind: "late lord", note: "After defeat he went south; in Shu he held high titles and died there in 222, far from Liang Province." }
      ],
      myth: { myth: "He rebelled to avenge his father, whom Cao Cao lured to the capital and murdered.", truth: "The order in the sources is the reverse: Ma Teng had lived at Ye since 208 as a court officer and hostage; it was Ma Chao's rising that forfeited his family, and Ma Teng was executed in 212, the year after the rebellion began. Later historians blamed Ma Chao for staking his father on a war." }
    },
    {
      id: "han-sui", name: "Han Sui", hanzi: "韓遂", years: "d. 215 CE", dynasty: "three-kingdoms", color: "#4a6670",
      role: "Old fox of the western frontier, thirty years in arms. His long acquaintance with Cao Cao became the wedge that split the coalition.",
      portrait: "assets/portrait-hansui.png",
      sourceQuote: { text: "They spoke only of old times in the capital, clapped their hands and laughed. No word of war.", source: "On the parley between Han Sui and Cao Cao, 211; Sanguozhi, Wei shu 1, Annals of Emperor Wu" },
      appearsIn: [
        { ep: "read/three-kingdoms/05/", num: 5, panels: [3, 11, 12] }
      ],
      relations: [
        { to: "cao-cao", kind: "old acquaintance turned enemy", note: "Their fathers were recommended in the same year; their youth was spent in the same streets of Luoyang. At Tong Pass the old times were the weapon." },
        { to: "ma-chao", kind: "uneasy allies", note: "Two heads of one coalition — and the suspicion between them was the war's real prize." }
      ],
      myth: { myth: "He turned traitor at Tong Pass and surrendered to Cao Cao.", truth: "No defection is recorded at the battle: the coalition quarrelled, broke, and its two heads fled together. Han Sui fought on as a freebooter of the west for three more years and was killed by his own generals in 215; what reached Cao Cao's court was his head, not his submission." }
    },
    {
      id: "jia-xu", name: "Jia Xu", hanzi: "賈詡", years: "147–223 CE", dynasty: "three-kingdoms", color: "#3f4a5a",
      role: "The coldest counsellor of the age. Answered a request for a battle plan with two words — part them — and won the war with a doctored letter.",
      portrait: "assets/portrait-jiaxu.png",
      sourceQuote: { text: "Part them, nothing more.", source: "Jia Xu to Cao Cao, 211; Sanguozhi, Wei shu 10, Biography of Jia Xu" },
      appearsIn: [
        { ep: "read/three-kingdoms/05/", num: 5, panels: [10] }
      ],
      relations: [
        { to: "cao-cao", kind: "counsellor", note: "The plan that broke the Guanzhong coalition cost two words and one sheet of paper; Cao Cao's answer was a single one — understood." }
      ],
      myth: { myth: "A schemer of constant intrigue, spinning plots at every turn.", truth: "The histories give the opposite: a man who chose few words and survived every master he served. When Cao Cao asked how to take the coalition, the recorded answer is two words; he lived to seventy-seven and died a grand minister of Wei." }
    },
    {
      id: "xu-chu", name: "Xu Chu", hanzi: "許褚", years: "d. c. 230 CE", dynasty: "three-kingdoms", color: "#6b4a2f",
      role: "Cao Cao's bodyguard, a man strong enough to drag an ox by the tail. At the river crossing he held up a saddle against the arrows and cut the clinging men from the boat.",
      portrait: "assets/portrait-xuchu.png",
      sourceQuote: { text: "The boatman was killed at his oar; Chu raised the saddle to shield the chancellor, and with his other hand cut the clinging men from the hull.", source: "Sanguozhi, Wei shu 18, Biography of Xu Chu" },
      appearsIn: [
        { ep: "read/three-kingdoms/05/", num: 5, panels: [7] }
      ],
      relations: [
        { to: "cao-cao", kind: "bodyguard", note: "Carried his lord across under arrows at the Yellow River, 211. Later Cao Cao said of the crossing, 'Today I nearly fell into the hands of a little bandit.'" },
        { to: "ma-chao", kind: "opponents", note: "Ma Chao's cavalry brought the arrows at the river; no history records a duel between them." }
      ],
      myth: { myth: "He stripped off his armour and fought Ma Chao in single combat before Tong Pass.", truth: "The duel of chapter 59 of the novel is invention. Xu Chu's recorded part at Tong Pass was defensive — carrying his lord across under arrows, saddle raised as a shield — and no single combat between the two appears in any history." }
    },
    {
      id: "zhang-liao", name: "Zhang Liao", hanzi: "張遼", years: "169–222 CE", dynasty: "three-kingdoms", color: "#8a6a2f",
      role: "Defender of Hefei. Read the sealed letter, picked eight hundred men who dared to die, and rode at their head to the king's banner. In Wu, his name quieted crying children.",
      portrait: "assets/portrait-zhangliao.png",
      sourceQuote: { text: "In Wu, when children would not stop crying, their parents had only to frighten them with Zhang Liao's name — and they were quiet.", source: "Sanguozhi, Wei shu 17, Biography of Zhang Liao" },
      appearsIn: [
        { ep: "read/three-kingdoms/06/", num: 6, panels: [4, 5, 7, 8, 9, 10, 13, 16] }
      ],
      relations: [
        { to: "cao-cao", kind: "general", note: "The sealed letter at Hefei was Cao Cao's; the dawn sortie that justified it was Zhang Liao's. In 216 Cao Cao walked the battlefield and stood sighing a long while." },
        { to: "li-dian", kind: "feuding colleagues", note: "Blood stood between them; on the morning that mattered, Li Dian set it down and rode out with him." },
        { to: "sun-quan", kind: "opponents", note: "Hefei and Xiaoyao Ford, 215 CE. He rode to the foot of the king's banner; the king of Wu did not dare come down from the mound." }
      ],
      myth: { myth: "The children-of-Wu story is a folk invention of later ages.", truth: "It is in the official history itself: Chen Shou closes the account of the battle by noting that in Wu, when children would not stop crying, their parents frightened them with Zhang Liao's name, and they were quiet." }
    },
    {
      id: "li-dian", name: "Li Dian", hanzi: "李典", years: "c. 180–215 CE", dynasty: "three-kingdoms", color: "#3d5a45",
      role: "A scholarly general with a blood feud against Zhang Liao. On the morning that mattered he set it aside: public duty first, private wrong second.",
      portrait: "assets/portrait-lidian.png",
      sourceQuote: { text: "This is the state's business. May I forget the public duty for a private wrong?", source: "Li Dian before the Hefei sortie, 215; Sanguozhi, Wei shu 18, Biography of Li Dian" },
      appearsIn: [
        { ep: "read/three-kingdoms/06/", num: 6, panels: [4, 5, 6] }
      ],
      relations: [
        { to: "zhang-liao", kind: "feuding colleagues", note: "An old killing stood between them; the sealed letter made them one body, and he refused to weigh private wrong against public duty." },
        { to: "cao-cao", kind: "general", note: "The sealed letter named him for the sortie — Generals Zhang and Li go out and fight — and he justified it." }
      ],
      myth: { myth: "He went out only because Zhang Liao shamed him into it.", truth: "The biography gives the initiative to Li Dian himself: it was he who stood up and settled the hesitating council — this is the state's business; may private wrong outweigh public duty? He died the same year, aged in his thirties." }
    },
    {
      id: "yue-jin", name: "Yue Jin", hanzi: "樂進", years: "d. 218 CE", dynasty: "three-kingdoms", color: "#40655a",
      role: "Third general of the garrison, small of build and first over every wall. The sealed letter gave him the quieter half of the plan: hold the city.",
      portrait: "assets/portrait-yuejin.png",
      sourceQuote: { text: "If Sun Quan arrives, Generals Zhang and Li sally out and fight; General Yue defends, and the protector does not join the battle.", source: "Cao Cao's sealed letter, 215; Sanguozhi, Wei shu 17, Biography of Zhang Liao" },
      appearsIn: [
        { ep: "read/three-kingdoms/06/", num: 6, panels: [4, 5] }
      ],
      relations: [
        { to: "cao-cao", kind: "general", note: "From the first raising of troops; his biography is a list of walls taken first. At Hefei his charge was to hold one." },
        { to: "zhang-liao", kind: "colleagues", note: "The sortie was Zhang Liao's and Li Dian's; Yue Jin's battle was the wall." }
      ],
      myth: { myth: "Hefei's three defenders all charged out of the gate together.", truth: "Cao Cao's sealed letter divided them: Generals Zhang and Li go out and fight, General Yue holds the city, and the protector takes no part in the battle. The wall that outlasted ten days of siege was Yue Jin's share." }
    },
    {
      id: "ling-tong", name: "Ling Tong", hanzi: "凌統", years: "189–217 CE", dynasty: "three-kingdoms", color: "#5b4a68",
      role: "At the ford he spent his last hundred men to buy Sun Quan one leap of a horse, and swam back alone in full armour. Died two years later, aged twenty-nine.",
      portrait: "assets/portrait-lingtong.png",
      sourceQuote: { text: "His close troops died to the last man around him; himself he brought back by swimming the ford in full armour.", source: "Sanguozhi, Wu shu 10, Biography of Ling Tong" },
      appearsIn: [
        { ep: "read/three-kingdoms/06/", num: 6, panels: [13, 15] }
      ],
      relations: [
        { to: "sun-quan", kind: "general & king", note: "Bought the leap at Xiaoyao Ford with his hundred closest men; Sun Quan wept when he came aboard." },
        { to: "zhang-liao", kind: "opponents", note: "The pursuit that fell on the ford's rearguard was Zhang Liao's; Ling Tong held the north bank so the king could cross." }
      ],
      myth: { myth: "The novel gives the ford's fight to individual duels — one general slain by Ling Tong, another by Gan Ning.", truth: "The sources give something plainer and dearer: his close troops to the last man, the king's escape one horse-length long, and one man swimming back in armour. He was dead of sickness within two years, aged twenty-nine." }
    },
    {
      id: "fa-zheng", name: "Fa Zheng", hanzi: "法正", years: "176–220 CE", dynasty: "three-kingdoms", color: "#55603f",
      role: "Chief strategist of the campaign. Argued for the march on Hanzhong, planned the stroke at Dingjun, and became Prefect of the Masters of Writing in the new kingdom; died the year after the victory.",
      portrait: "assets/portrait-fazheng.png",
      sourceQuote: { text: "If Fa Xiaozhi were still alive, he could have restrained his lord from marching east.", source: "Zhuge Liang's sigh after the Yiling defeat; Sanguozhi, Shu shu 7, Biography of Fa Zheng" },
      appearsIn: [
        { ep: "read/three-kingdoms/07/", num: 7, panels: [3, 8, 16] }
      ],
      relations: [
        { to: "liu-bei", kind: "strategist & lord", note: "Argued for the march on Hanzhong and went with the army; the design at Dingjun was counted his. Liu Bei wept many days at his death in 220." },
        { to: "zhuge-liang", kind: "colleagues", note: "Zhuge Liang held Chengdu and fed the army while Fa Zheng planned at the front; the histories keep each his office." },
        { to: "huang-zhong", kind: "strategist & general", note: "Fa Zheng saw the Wei line grown thin on the slope and gave the word; Huang Zhong came down from the heights." }
      ],
      myth: { myth: "The Hanzhong campaign was masterminded by Zhuge Liang, directing the war by letter from Chengdu.", truth: "The histories name Fa Zheng: the persuasion to march, the three-course plan, and the design at Dingjun were his, and he went with the army. In the new kingdom he became Prefect of the Masters of Writing — without he commanded the capital district, within he was chief of counsel. No history puts Zhuge Liang at the front; his recorded office was holding Chengdu." }
    },
    {
      id: "huang-zhong", name: "Huang Zhong", hanzi: "黃忠", years: "d. 220 CE", dynasty: "three-kingdoms", color: "#8a5a2e",
      role: "Liu Bei's veteran general. Charged down Mount Dingjun with the drums rolling in 219, broke Xiahou Yuan's army, and slew him.",
      portrait: "assets/portrait-huangzhong.png",
      sourceQuote: { text: "He pushed his vanguard forward with the drums rolling; Yuan's army was badly defeated, and Yuan was beheaded.", source: "Sanguozhi, Shu shu 6, Biography of Huang Zhong" },
      appearsIn: [
        { ep: "read/three-kingdoms/07/", num: 7, panels: [9] }
      ],
      relations: [
        { to: "liu-bei", kind: "lord & general", note: "For that one day at Dingjun he was raised to General Who Attacks the West." },
        { to: "xiahou-yuan", kind: "opponents", note: "Charged down from the heights of Mount Dingjun in 219 and slew him in the rout." }
      ],
      myth: { myth: "He slew Xiahou Yuan in single combat, as in the opera Dingjun Mountain.", truth: "No duel is recorded. The histories give an assault: he charged down from the heights with the drums rolling, Yuan's army broke on the slope, and Yuan died in the rout together with Zhao Yong. For that one day he was raised to General Who Attacks the West." }
    },
    {
      id: "xiahou-yuan", name: "Xiahou Yuan", hanzi: "夏侯淵", years: "d. 219 CE", dynasty: "three-kingdoms", color: "#5a3f63",
      role: "Cao Cao's general in the west, of whom his soldiers said five hundred li in three days. Held Hanzhong for four years; died beneath the heights of Dingjun.",
      portrait: "assets/portrait-xiahouyuan.png",
      sourceQuote: { text: "Five hundred li in three days.", source: "The army's saying of Xiahou Yuan's speed; Wei Lüe, in Pei Songzhi's commentary to Sanguozhi, Wei shu 9" },
      appearsIn: [
        { ep: "read/three-kingdoms/07/", num: 7, panels: [5, 7, 8, 9] }
      ],
      relations: [
        { to: "cao-cao", kind: "kinsman & commander", note: "Cao Cao's western commander, holding Hanzhong since 215; his reward for the western wars was the title General Who Attacks the West." },
        { to: "huang-zhong", kind: "opponents", note: "Divided his troops to mend the broken stakes; the descent from Dingjun fell where he was thin, and killed him." }
      ],
      myth: { myth: "He fell in a duel with Huang Zhong — month after month of single combat deciding Hanzhong.", truth: "The histories give an assault, not a duel: his soldiers were divided to help Zhang He and to hold the south of the camp, the attack fell where the line was thin, and he died beneath the heights with the inspector Zhao Yong. No single combat is recorded anywhere in the campaign; it was decided by who held the heights." }
    },
    {
      id: "lu-meng", name: "Lu Meng", hanzi: "呂蒙", years: "178–220 CE", dynasty: "three-kingdoms", color: "#3a5a6b",
      role: "Sun Quan's commander on the Yangtze. Feigned illness, crossed in merchant dress, and took a province without a pitched battle. Died weeks after the victory.",
      portrait: "assets/portrait-lumeng.png",
      sourceQuote: { text: "When you parted from a scholar three days ago, you should now rub your eyes and look again.", source: "Lu Meng to Lu Su; Jiangbiao zhuan, in Pei Songzhi's commentary to Sanguozhi, Wu shu 9" },
      appearsIn: [
        { ep: "read/three-kingdoms/08/", num: 8, panels: [11, 13, 14, 17] }
      ],
      relations: [
        { to: "sun-quan", kind: "commander & king", note: "Sun Quan had told him to study, and afterwards said of his talent and measure that he was no longer the A-Meng of Wu." },
        { to: "guan-yu", kind: "opponents", note: "Feigned illness to draw off the river defences, crossed in white clothes, and took his province and his life without a pitched battle." },
        { to: "lu-xun", kind: "commander & successor", note: "It was Lu Meng who named Lu Xun as his successor at Lukou: his thoughts run deep, and his plans are equal to the weight." }
      ],
      myth: { myth: "The crossing in white was a mourning ruse, and the victor died of Guan Yu's avenging ghost at the feast of victory.", truth: "White was the plain dress of commoners, worn by his rowers in the guise of merchants so the fleet drifted past the watch-posts unseen. And he died of illness weeks after the victory, aged forty-two; the ghost scene is the novel's." }
    },
    {
      id: "cao-ren", name: "Cao Ren", hanzi: "曹仁", years: "168–223 CE", dynasty: "three-kingdoms", color: "#6b3a3a",
      role: "Cao Cao's cousin, holding Fancheng against the flood. Bailed the walls and would not go; the siege broke around him, not through him.",
      portrait: "assets/portrait-caoren.png",
      sourceQuote: { text: "The flood is swift and will not last; but to quit Fancheng would be to quit everything south of the Yellow River.", source: "The counsel that steadied Cao Ren's defence of Fancheng; Man Chong's words, Sanguozhi, Wei shu 26" },
      appearsIn: [
        { ep: "read/three-kingdoms/08/", num: 8, panels: [2, 8] }
      ],
      relations: [
        { to: "cao-cao", kind: "cousin & general", note: "Held the north bank of the Han at Fancheng while the flood rose inside the walls; Cao Cao bailed him with Yu Jin's seven armies and Xu Huang's relief." },
        { to: "guan-yu", kind: "opponents", note: "Besieged by him through the autumn of 219; bailed the walls by hand and refused the counsel to leave the city to the river." },
        { to: "yu-jin", kind: "allies", note: "Yu Jin's seven armies came south to raise his siege; the rains drowned them before they reached the walls." }
      ],
      myth: { myth: "Fancheng was saved by Xu Huang's relief army — Cao Ren was only the man being besieged.", truth: "The water rose inside the walls and there was counsel to abandon the city; Cao Ren bailed the walls by hand and would not go. Xu Huang broke the siege from without and desertion broke it from within, but the city stood because he held." }
    },
    {
      id: "yu-jin", name: "Yu Jin", hanzi: "于禁", years: "d. 221 CE", dynasty: "three-kingdoms", color: "#4a4a5e",
      role: "The senior veteran of Cao Cao's frontier wars. The rains drowned the seven armies he brought to Fancheng; he surrendered, and lived to be ashamed of it.",
      portrait: "assets/portrait-yujin.png",
      sourceQuote: { text: "Of the generals who held the frontier in those years, Yu Jin was reckoned the most resolute.", source: "Chen Shou's appraisal, Sanguozhi, Wei shu 17" },
      appearsIn: [
        { ep: "read/three-kingdoms/08/", num: 8, panels: [3, 6, 7, 9, 17] }
      ],
      relations: [
        { to: "cao-cao", kind: "general & lord", note: "The senior veteran of thirty years of frontier wars; sent south to raise the siege of Fancheng, he surrendered when the rains drowned his camp, and lived to be ashamed of it." },
        { to: "guan-yu", kind: "opponents", note: "Ringed on high ground with what was left of the seven armies, he gave himself up and was held under arrest at Jiangling." }
      ],
      myth: { myth: "Guan Yu loosed the waters himself and drowned the seven armies by design.", truth: "The flood is in the record as weather: autumn rains, the Han River over its banks, fathoms of water on the level ground — and Yu Jin's biography says not a word of dams or diversions. His camps were set low and without ships. He surrendered on the embankment; a year later, when Cao Pi had the surrender painted on the walls of the audience hall, he died of shame." }
    },
    {
      id: "cao-xiu", name: "Cao Xiu", hanzi: "曹休", years: "d. 228 CE", dynasty: "three-kingdoms", color: "#8a4b3a",
      role: "Cousin of the Wei house and commander of the eastern front. Believed the defector, marched deepest of the three Wei armies, and died within the year.",
      portrait: "assets/portrait-caoxiu.png",
      sourceQuote: { text: "The largest of the three armies was given to a cousin of the house of Cao; he believed the defector, marched deepest, and was routed at Shiting.", source: "Sanguozhi, Wei shu 9, Biography of Cao Xiu; Zizhi Tongjian, scroll 71" },
      appearsIn: [
        { ep: "read/three-kingdoms/09/", num: 9, panels: [2, 3, 4, 6, 7, 11, 14] }
      ],
      relations: [
        { to: "cao-cao", kind: "kin of the house", note: "A cousin of the Wei clan, trusted with the eastern front above all others." },
        { to: "sima-yi", kind: "co-commanders", note: "In 228 led the largest of the three roads while Sima Yi led one toward Jiangling." },
        { to: "zhou-fang", kind: "the bait & the taken", note: "Believed seven articles of false intelligence and a cut of hair, and marched into the trap." }
      ],
      myth: { myth: "Killed in the battle of Shiting, or died of his wounds on the field.", truth: "He escaped the rout, was recalled, and died of an ailment of the back later the same year; the Wei records connect the death to the shame of the defeat, but they do not say the battle killed him." }
    },
    {
      id: "zhou-fang", name: "Zhou Fang", hanzi: "周魴", years: "d. c. 228 CE", dynasty: "three-kingdoms", color: "#4a6b5a",
      role: "Grand Administrator of Poyang. Sent seven articles of false intelligence, cut his hair before his own king, and pulled a hundred thousand men into an ambush.",
      portrait: "assets/portrait-zhoufang.png",
      sourceQuote: { text: "He sent false intelligence to the north in seven articles and cut his hair before his own king's court; it is one of the few stratagems of the age whose price is recorded with the trick.", source: "Sanguozhi, Wu shu 12, Biography of Zhou Fang; Zizhi Tongjian, scroll 71" },
      appearsIn: [
        { ep: "read/three-kingdoms/09/", num: 9, panels: [3, 4, 6, 7, 8, 13] }
      ],
      relations: [
        { to: "sun-quan", kind: "subject & king", note: "Sent his letters with the king's knowledge and cut his hair before the king's own court." },
        { to: "cao-xiu", kind: "deceiver & deceived", note: "Fed him seven articles of false intelligence and drew a hundred thousand men into the hills." },
        { to: "lu-xun", kind: "co-authors of the trap", note: "His years of letters made the ambush Lu Xun sprang at Shiting possible." }
      ],
      myth: { myth: "He cut his hair to Cao Xiu himself, in the Wei camp, as a defector's oath.", truth: "The sources put the haircut at home, before his own king's court, as the token the northern spies demanded — and they mark it as grave self-mutilation, since the hair is received from one's parents. It was a price paid inside Wu, not an oath sworn inside Wei." }
    },
    {
      id: "jia-kui", name: "Jia Kui", hanzi: "賈逵", years: "d. 228 CE", dynasty: "three-kingdoms", color: "#6b5a4a",
      role: "Governor of Yuzhou on Wei's eastern flank. Warned, marched anyway, arrived too late for the battle — and just in time to save Cao Xiu.",
      portrait: "assets/portrait-jiakui.png",
      sourceQuote: { text: "He had warned against trusting the defector and against the deep advance; he marched anyway, and his fresh column at Jiakou saved the remnant of Cao Xiu's army.", source: "Sanguozhi, Wei shu 15, Biography of Jia Kui; Zizhi Tongjian, scroll 71" },
      appearsIn: [
        { ep: "read/three-kingdoms/09/", num: 9, panels: [12, 15] }
      ],
      relations: [
        { to: "cao-xiu", kind: "colleague & rescuer", note: "Warned against the deep advance, marched anyway, and came up at Jiakou just in time to save the remnant." },
        { to: "sima-yi", kind: "co-commanders", note: "Both led columns in the three-road offensive of 228." }
      ],
      myth: { myth: "A willing architect of Wei's deep advance into Wu.", truth: "The Wei records keep his warning — that the deep advance was dangerous and that Zhou Fang's defection should not be trusted — and his final counsel on his deathbed that the east be held by steady defence rather than great offensives." }
    },
    {
      id: "cao-shuang", name: "Cao Shuang", hanzi: "曹爽", years: "d. 249 CE", dynasty: "three-kingdoms", color: "#7a3b4f",
      role: "Co-regent and kinsman of the imperial house. Held the court through his brothers and favourites, pushed Sima Yi aside, and rode out of the city on the morning that mattered. Surrendered on a promise of safety; executed with his faction ten days later.",
      portrait: "assets/portrait-caoshuang.png",
      sourceQuote: { text: "Even so, I can still be a wealthy marquis.", source: "Cao Shuang before surrendering, 249; Wei shu, in Pei Songzhi's commentary to Sanguozhi, Wei shu 9" },
      appearsIn: [
        { ep: "read/three-kingdoms/10/", num: 10, panels: [2, 3, 5, 7, 9, 10, 11, 12, 13] }
      ],
      relations: [
        { to: "sima-yi", kind: "co-regents, then rivals", note: "Pushed Sima Yi aside to the empty seat of Grand Tutor; in 249 Sima Yi rose and broke him." },
        { to: "cao-fang", kind: "regent & boy emperor", note: "Held the court in the boy emperor's name from 239." },
        { to: "jiang-ji", kind: "the promise & the broken", note: "Jiang Ji's oath secured his surrender; ten days later he was executed." }
      ],
      myth: { myth: "He kept his life as a wealthy marquis after surrendering, as Sima Yi's oath had promised.", truth: "The oath was the instrument of the surrender, not its terms: within ten days Cao Shuang and his faction were charged with great treason and executed, with all three branches of their kin." }
    },
    {
      id: "cao-fang", name: "Cao Fang", hanzi: "曹芳", years: "c. 231–274 CE", dynasty: "three-kingdoms", color: "#4a5a7a",
      role: "Emperor of Wei from the age of eight. Rode out to the Gaoping Tombs and rode back a guest in his own palace; deposed by the Sima house in 254, he died in retirement in 274.",
      portrait: "assets/portrait-caofang.png",
      sourceQuote: { text: "He came to the throne an eight-year-old and rode out to the Gaoping Tombs on the morning that mattered; he rode back a guest in his own palace.", source: "Sanguozhi, Wei shu 4, Annals of the Three Young Emperors; Zizhi Tongjian, scroll 75" },
      appearsIn: [
        { ep: "read/three-kingdoms/10/", num: 10, panels: [2, 5, 16] }
      ],
      relations: [
        { to: "cao-shuang", kind: "boy emperor & regent", note: "Cao Shuang held the court in his name from 239." },
        { to: "sima-yi", kind: "emperor & the power behind", note: "Rode out to the tombs and rode back a guest; the real authority passed to the Sima house." },
        { to: "sima-shi", kind: "emperor & the hand that deposed him", note: "Deposed in 254 under the Sima brothers." }
      ],
      myth: { myth: "Wei ended with the coup at the Gaoping Tombs in 249.", truth: "Cao Fang remained emperor five more years and was deposed in 254; his successors reigned until 265, when the throne passed to Jin. The coup did not end Wei; it made the ending certain." }
    },
    {
      id: "jiang-ji", name: "Jiang Ji", hanzi: "蔣濟", years: "d. 249 CE", dynasty: "three-kingdoms", color: "#8a7a4a",
      role: "Veteran minister whose name gave weight to an oath. His letter to the camp promised Cao Shuang no more than the loss of office; he watched the promise break, and died of remorse within months.",
      portrait: "assets/portrait-jiangji.png",
      sourceQuote: { text: "His letter went into the camp promising the regent no more than the loss of office; when the promise was broken, he died of remorse within months.", source: "Sanguozhi, Wei shu 15, Biography of Jiang Ji; Zizhi Tongjian, scroll 75" },
      appearsIn: [
        { ep: "read/three-kingdoms/10/", num: 10, panels: [14] }
      ],
      relations: [
        { to: "sima-yi", kind: "minister & the oath he could not hold", note: "His letter secured the surrender; he asked Sima Yi to keep faith, could not prevail, and died of remorse." },
        { to: "cao-shuang", kind: "the promise that betrayed him", note: "Promised the regent no more than loss of office; ten days later Cao Shuang was executed." }
      ],
      myth: { myth: "A willing architect of Sima Yi's coup who profited from the broken oath.", truth: "He and Chen Tai carried the promise of safety to the camp; after the executions he asked Sima Yi to keep faith, could not prevail, and died of remorse within months — the coup's quietest casualty." }
    },
    {
      id: "sima-shi", name: "Sima Shi", hanzi: "司馬師", years: "208–255 CE", dynasty: "three-kingdoms", color: "#3f5a5c",
      role: "Sima Yi's elder son. Quietly gathered three thousand sworn retainers who answered when the gates closed; after his father's death he ruled Wei in all but name.",
      portrait: "assets/portrait-simashi.png",
      sourceQuote: { text: "He had secretly gathered three thousand bold retainers willing to die for him, and on the morning of the coup he led them to join his father.", source: "Jin shu, Annals of Emperor Jing; Zizhi Tongjian, scroll 75" },
      appearsIn: [
        { ep: "read/three-kingdoms/10/", num: 10, panels: [6, 16] }
      ],
      relations: [
        { to: "sima-yi", kind: "son & heir in the work", note: "Quietly gathered three thousand sworn retainers who made the coup possible." },
        { to: "cao-fang", kind: "the power & the throne it deposed", note: "Ruled Wei in all but name and deposed Cao Fang in 254." }
      ],
      myth: { myth: "The coup at the Gaoping Tombs was one old man's solo stroke.", truth: "It was a family conspiracy: the Jin shu annals record Sima Shi's three thousand secretly gathered retainers, whose existence the court had never suspected, answering on the morning the gates closed." }
    },
    {
      id: "deng-ai", name: "Deng Ai", hanzi: "鄧艾", years: "d. 264 CE", dynasty: "three-kingdoms", color: "#6b5b3a",
      role: "Frontier general who rose out of poverty. Held the western border against Jiang Wei for a decade, then took some thirty thousand men over seven hundred li of trackless mountains, broke Zhuge Zhan at Mianzhu, and received Chengdu's surrender. He was dead within months, killed in the aftermath of his own victory.",
      portrait: "assets/portrait-dengai.png",
      sourceQuote: { text: "Attack where there is no preparation, emerge where there is no expectation.", source: "Deng Ai's memorial on the Yinping road, 263; Sanguozhi, Wei shu 28, Biography of Deng Ai" },
      appearsIn: [
        { ep: "read/three-kingdoms/11/", num: 11, panels: [3, 7, 8, 10, 11, 13, 16] }
      ],
      relations: [
        { to: "zhong-hui", kind: "co-conquerors", note: "Zhong Hui's hundred thousand stood stopped at Jiange while Deng Ai's remnant came down out of Yinping and took the kingdom; months later the victor had the victor arrested." },
        { to: "jiang-wei", kind: "opponents", note: "A decade on the western border, from Didao to Tazhong; in 263 Deng Ai's columns were sent to pin him fast, and could not." },
        { to: "zhuge-zhan", kind: "opponents", note: "Offered him the kingship of Langye; Zhuge Zhan killed the messenger, and Mianzhu answered it." }
      ],
      myth: { myth: "A reckless gambler whose plunge down Yinping was an act of luck and the novel's favourite set-piece.", truth: "The biography records a frontier administrator who spent years writing memorials on agriculture and defence before the war. The Yinping march nearly destroyed him — grain spent, the army on the edge of ruin — and he received Chengdu's surrender with a remnant, not a great army. His reward was arrest by his own colleagues and death on the road to Luoyang." }
    },
    {
      id: "zhong-hui", name: "Zhong Hui", hanzi: "鍾會", years: "225–264 CE", dynasty: "three-kingdoms", color: "#7a4a3d",
      role: "Son of the calligrapher Zhong You, and the man who planned the conquest of Shu. Led more than a hundred thousand to Jiange and could not pass it; watched Deng Ai win the war; then raised rebellion at Chengdu and died in the mutiny, aged forty.",
      portrait: "assets/portrait-zhonghui.png",
      sourceQuote: { text: "He wished to take Shu and urged it on Sima Zhao, and warships were built first on the eastern rivers, openly as if against Wu, so that no one would be ready when the real edict came.", source: "Sanguozhi, Wei shu 28, Biography of Zhong Hui" },
      appearsIn: [
        { ep: "read/three-kingdoms/11/", num: 11, panels: [2, 3, 5, 6, 14, 16] }
      ],
      relations: [
        { to: "deng-ai", kind: "co-conquerors", note: "Planned the war, commanded the main blade, and could not pass the gate; Deng Ai's remnant did what a hundred thousand could not — and Zhong Hui helped arrest him for it." },
        { to: "jiang-wei", kind: "captor & co-conspirator", note: "Held the gate against him, then handed back his seals and gave him a seat in his own carriage; the two plotted rebellion together at Chengdu and died in the same mutiny." }
      ],
      myth: { myth: "A treacherous schemer who stole a conquest only to lose it in a day of madness.", truth: "The sources give a deliberate planner: the whole war was his design, right down to the sham shipbuilding against Wu. He took nothing at Jiange, honoured Zhuge Liang's tomb on the way, and when he raised his rebellion he was killed in the streets by his own soldiers in the first month of 264." }
    },
    {
      id: "jiang-wei", name: "Jiang Wei", hanzi: "姜維", years: "202–264 CE", dynasty: "three-kingdoms", color: "#3d5a5f",
      role: "Shu-Han's last great general, twenty-five years at war with the north. Held Zhong Hui's main army at Jiange, took his own emperor's order to surrender, and then tried to turn the conquerors against each other; died in the mutiny at Chengdu in 264.",
      portrait: "assets/portrait-jiangwei.png",
      sourceQuote: { text: "Bear, Your Majesty, the humiliation of a few days; I am attempting to turn peril into safety.", source: "Jiang Wei's secret memorial to Liu Shan before the mutiny, 264; Sanguozhi, Shu shu 14, Biography of Jiang Wei" },
      appearsIn: [
        { ep: "read/three-kingdoms/11/", num: 11, panels: [3, 4, 5, 6, 14, 16] }
      ],
      relations: [
        { to: "zhuge-liang", kind: "heir at war", note: "Inherited his northward purpose and spent twenty-five years on it, mostly aimed at Longyou rather than the Central Plains itself." },
        { to: "deng-ai", kind: "opponents", note: "A decade on the western border, ending at Tazhong in 262 with the defeat that sent him to farm where the war of 263 found him." },
        { to: "zhong-hui", kind: "enemy turned co-conspirator", note: "Held him at Jiange undefeated, then surrendered on his emperor's order; they plotted the rebellion together and died in the same streets." }
      ],
      myth: { myth: "He launched nine campaigns into the Central Plains — the novel's famous number.", truth: "The number nine belongs to the Romance. The record gives the campaigns one by one, about eleven over twenty-five years (238–262), almost all small affairs aimed at Longyou, Wei's western frontier, with one great victory at Taoxi in 255. Whether his last plot truly meant to restore Shu, or only to survive, the sources do not settle." }
    },
    {
      id: "liu-shan", name: "Liu Shan", hanzi: "劉禪", years: "207–271 CE", dynasty: "three-kingdoms", color: "#8a7a4f",
      role: "Liu Bei's son, forty-one years emperor of Shu-Han. Surrendered Chengdu in 263 to spare it a sack; at Luoyang told Sima Zhao he was content and did not miss Shu. The record keeps his words and leaves the judgment to the reader.",
      portrait: "assets/portrait-liushan.png",
      sourceQuote: { text: "I am happy here; I do not miss Shu.", source: "Liu Shan at Sima Zhao's feast in Luoyang; Han Jin Chunqiu, in Pei Songzhi's commentary to Sanguozhi, Shu shu 3" },
      appearsIn: [
        { ep: "read/three-kingdoms/11/", num: 11, panels: [13, 15] }
      ],
      relations: [
        { to: "liu-bei", kind: "son & heir", note: "Inherited his kingdom at seventeen and ruled it forty-one years; it ended at an open gate, forty years after his father's death." },
        { to: "zhuge-liang", kind: "emperor & chancellor", note: "Chen Shou's appraisal says that with a worthy chancellor he was a reasonable ruler." },
        { to: "jiang-wei", kind: "emperor & general", note: "Ordered him at Jiange, unbowed and undefeated, to lay down his arms; later received Jiang Wei's last memorial promising to turn peril into safety." }
      ],
      myth: { myth: "A pure imbecile — the proverbial A-Dou who could not be set upright.", truth: "He reigned forty-one years, and his surrender was a reasoned decision taken on Qiao Zhou's recorded argument that it would spare Chengdu a sack. At Luoyang his words about being happy may be read as the caution of a captive whose life depended on missing nothing — the sources keep both readings open." }
    },
    {
      id: "zhuge-zhan", name: "Zhuge Zhan", hanzi: "諸葛瞻", years: "227–263 CE", dynasty: "three-kingdoms", color: "#5f6a54",
      role: "Zhuge Liang's son and Shu's last field commander. Refused Deng Ai's offer of a kingship and killed the messenger, then died with his son at Mianzhu in 263, aged thirty-seven.",
      portrait: "assets/portrait-zhugezhan.png",
      sourceQuote: { text: "Deng Ai first sent a letter tempting him — surrender, and he would be recommended as King of Langye — and Zhan, in anger, killed the envoy.", source: "Sanguozhi, Shu shu 5, Biography of Zhuge Zhan" },
      appearsIn: [
        { ep: "read/three-kingdoms/11/", num: 11, panels: [10, 11, 12] }
      ],
      relations: [
        { to: "zhuge-liang", kind: "son", note: "His death at Mianzhu in 263 closed the account his father had opened with Liu Bei at Baidicheng." },
        { to: "deng-ai", kind: "opponents", note: "Refused the kingship of Langye and killed the messenger; the remnant army that came down out of Yinping broke his line at Mianzhu." }
      ],
      myth: { myth: "A commander undone by over-caution, who let the defiles go and waited behind walls for his own defeat.", truth: "The sources do record the hesitation — Huang Chong urged him again and again to seize the defiles at speed, and he did not advance. What followed was not flight: he killed the surrender envoy, stood and fought at Mianzhu, and died on the field with his son, while a grandson of Zhang Fei and a son of Huang Quan fell in the same battle." }
    },
    {
      id: "wang-jun", name: "Wang Jun", hanzi: "王濬", years: "206–285 CE", dynasty: "three-kingdoms", color: "#456b52",
      role: "Governor of Yi Province who spent seven years building the great fleet, melted the river's iron chains with torches of sesame oil, and sailed into Shitou to receive the last emperor's surrender.",
      portrait: "assets/portrait-wangjun.png",
      sourceQuote: { text: "Wang Jun's towered ships go down from Yizhou.", source: "The opening line of Liu Yuxi's Tang poem on the fall of Wu, quoted at the head of the episode" },
      appearsIn: [
        { ep: "read/three-kingdoms/12/", num: 12, panels: [1, 2, 3, 4, 7, 8, 9, 13, 14] }
      ],
      relations: [
        { to: "du-yu", kind: "co-commanders", note: "One war in two arms: Du Yu took Jiangling and broke the middle reach by land while Wang Jun's fleet came down the river above it." },
        { to: "sun-hao", kind: "conqueror & captive", note: "At Shitou in the third month of 280, Sun Hao came to the army's gate with his hands bound and a coffin behind him; Wang Jun loosed the bonds and burned the coffin." }
      ],
      myth: { myth: "His fleet fought its way down the whole river and won the war alone.", truth: "The invasion was six columns of over two hundred thousand: Du Yu took Jiangling, Wang Hun destroyed the last Wu field army at Banqiao, and the fleet reached Shitou after the defending army had ceased to exist. The victory was a system, not a flotilla — and the victors then quarrelled over the credit for years." }
    },
    {
      id: "sima-yan", name: "Sima Yan", hanzi: "司馬炎", years: "236–290 CE", dynasty: "three-kingdoms", color: "#6b4a5f",
      role: "Grandson of Sima Yi. Took the throne from Wei in 265 as first emperor of Jin, decided on Wu at the go board, and received Sun Hao's surrender at Luoyang.",
      portrait: "assets/portrait-simayan.png",
      sourceQuote: { text: "I have kept this seat for you a long time.", source: "Sima Yan to Sun Hao at the surrender banquet in Luoyang, 280; Zizhi Tongjian, scroll 81" },
      appearsIn: [
        { ep: "read/three-kingdoms/12/", num: 12, panels: [6, 7, 15] }
      ],
      relations: [
        { to: "sima-yi", kind: "grandson & heir", note: "His grandfather's house took the empire of Wei in three careful steps; he sat on the throne that the third step made." },
        { to: "sun-hao", kind: "conqueror & captive", note: "Received his surrender at Luoyang in 280 and made him Marquis of Guiming; the exchange of seats at the banquet is in the record." }
      ],
      myth: { myth: "The conqueror whose final stroke closed the age of division, as destiny's tidy moral arc.", truth: "He decided on Wu against a divided court, at the go board, on Zhang Hua's urging. The peace he made did not last a generation: within a decade the house of Jin was at war with itself, and the Jin shu itself records the cracking." }
    },
    {
      id: "sun-hao", name: "Sun Hao", hanzi: "孫皓", years: "242–284 CE", dynasty: "three-kingdoms", color: "#8a3b2e",
      role: "Grandson of Sun Quan and last emperor of Wu. Ruled with flayed faces and gouged eyes; met the invasion with a surrender, and died the Marquis of Guiming at Luoyang.",
      portrait: "assets/portrait-sunhao.png",
      sourceQuote: { text: "Your servant too set up a seat in the south to await Your Majesty.", source: "Sun Hao to Sima Yan at the surrender banquet, 280; Zizhi Tongjian, scroll 81" },
      appearsIn: [
        { ep: "read/three-kingdoms/12/", num: 12, panels: [4, 5, 12, 13, 15] }
      ],
      relations: [
        { to: "sun-quan", kind: "grandson", note: "The grandson who ended the house his grandfather founded; the state that met Jin in 280 had rotted from within before it was conquered from outside." }
      ],
      myth: { myth: "The defiant last emperor who died fighting on the river, closing Wu's story with a last stand.", truth: "He surrendered at the army's gate with his hands bound and a coffin borne behind him, was enfeoffed Marquis of Guiming, and died at Luoyang in 284. When Jia Chong taunted him at the banquet with the flayings and the gouged eyes, his answer was that such is the penalty for subjects who murder their lord — and Jia Chong had no answer." }
    },
    {
      id: "du-yu", name: "Du Yu", hanzi: "杜預", years: "222–285 CE", dynasty: "three-kingdoms", color: "#4a5a3f",
      role: "Grand general of the south who took Jiangling and said the war would open like split bamboo. A soldier with a scholar's library — the age called him the Armory.",
      portrait: "assets/portrait-duyu.png",
      sourceQuote: { text: "Our momentum is like splitting bamboo — after a few joints, the rest parts to the blade, and there is nothing left to resist.", source: "Du Yu to his generals who counselled waiting, 280; Jin shu, ch. 34, Biography of Du Yu" },
      appearsIn: [
        { ep: "read/three-kingdoms/12/", num: 12, panels: [6, 7, 10] }
      ],
      relations: [
        { to: "sima-yan", kind: "commander & emperor", note: "His memorial, arriving at the go board, ended the long debate; the war of 280 was launched against much of the court's counsel." },
        { to: "wang-jun", kind: "co-commanders", note: "Two arms of one war: Jiangling taken by assault on land, the chains melted on the river, and nothing left standing on either bank between them and Jianye." }
      ],
      myth: { myth: "A plain battlefield commander remembered only for one proverb.", truth: "The age called him the Armory — a soldier with a scholar's library. He succeeded Yang Hu as the southern commander and kept the upstream plan alive at Xiangyang; the split-bamboo image was his own argument to impatient generals, spoken before Jiangling fell, and it became the proverb of the campaign." }
    },
    {
      id: "ai-zhang", name: "Ai Zhang", hanzi: "哀章", years: "fl. 8–9 CE", dynasty: "han", color: "#8a6a2f",
      role: "A man of Zitong studying in the capital, recorded as fond of large talk. He cast the bronze casket, wrote the eleven names inside it, added his own, and became a duke.",
      myth: { myth: "Heaven's mandate arrived for the New dynasty in a bronze casket, with the names of its future ministers written inside.", truth: "It did, in the literal sense the record gives: a student in the capital cast the casket, wrote the list, put his own name on it, and was enfeoffed. The eleven names were real appointments, and the composition is in the book — eight were Wang Mang's actual ministers, two were men looked up in the registers because their surnames sounded auspicious, and the eleventh was the maker. Of the rest, one had kept a city gate and one had sold cakes in the market. Ban Gu's summary of this literature is the flattest sentence in the biography: its wording was elegant and borrowed from the classics, all of it manufactured argument, and its drift was that Mang should replace the Han and hold the empire." },
      portrait: "assets/portrait-aizhang.png",
      sourceQuote: { text: "The Red Emperor's travelling seal, handed over to the Yellow Emperor's metal book of mandate.", source: "The second of the two sealed labels on the bronze casket he cast and presented; the Red Emperor is the Han's founding lord, named in the text by his given name — Hanshu, juan 99 upper and middle" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [5] }
      ],
      relations: [
        { to: "wang-mang", kind: "patron", note: "He was a man of Zitong studying in the capital, recorded as fond of large talk. He cast the casket, wrote the eleven names of the new emperor's assistants inside it, added his own, and was made a duke." }
      ]
    },
    {
      id: "ban-chao", name: "Ban Chao", hanzi: "班超", years: "32–102 CE", dynasty: "han", color: "#7d5426",
      role: "The clerk who took the road west. Thirty-six men at Shanshan, thirty years in the Western Regions, and the title Marquis Who Settles the Far.",
      myth: { myth: "On his deathbed Ban Chao made a farewell about the wife who had followed him beyond the passes, and told his son not to bury him with honours.", truth: "The words everyone knows are not deathbed words but a written request sent in 102 CE, and in the biography's version they name no wife at all — only the Jade Gate. It was his sister Ban Zhao's letter, not a family scene, that the memoir says shamed the court into bringing him back; he died within the year of getting home. The other polished saying put in his mouth, that he would rather have his own country's foxes and rabbits than foreign gold and jade, stands nowhere in his Hou Han shu biography." },
      portrait: "assets/portrait-banchao.png",
      sourceQuote: { text: "I do not ask to live to see Jiuquan Commandery. I only ask to be carried out alive through the Jade Gate.", source: "Ban Chao's request to be sent home from the west, 102 CE; Hou Han shu, juan 47, Hereditary Biographies of Ban Chao and Ban Liang" },
      appearsIn: [
        { ep: "read/han/11/", num: 11, panels: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18] }
      ],
      relations: [
        { to: "ban-gu", kind: "brother", note: "The elder brother wrote the dynasty's history at Luoyang while the younger wrote it in the Tarim with a sword, and neither lived long past the house they served." },
        { to: "ban-yong", kind: "father", note: "His son and heir in the western business, who took the road back up with five hundred men where his father had started with thirty-six." },
        { to: "gan-ying", kind: "commander", note: "He sent Gan Ying west in 97 with the order to reach Da Qin in person; the turning-back at the sea was Ying's own decision." }
      ]
    },
    {
      id: "ban-gu", name: "Ban Gu", hanzi: "班固", years: "d. 92 CE", dynasty: "han", color: "#5f6a6a",
      role: "The historian of Han who traded his pen for a sword-stroke at the Yanran Mountain; author of the stele's inscription, dead in the Luoyang gaol the year after it was raised.",
      myth: { myth: "Ban Gu is the sober author of the Han Annals, a scholar who stayed out of politics and died of old age at his desk.", truth: "He traded the pen for a campaign: he went north on Dou Xian's staff and cut the Yanran Mountain inscription in 89 CE, the one thing of his that the frontier made famous. When the emperor moved against Xian in 92, Ban Gu was examined on a charge of concealment and died in the imperial jail. The history he left was unfinished — the tables and treatises were completed by Ban Zhao and by Ma Xu — and the parts he did write were copied into the Wenxuan and read for fifteen hundred years." },
      portrait: "assets/portrait-bangu.png",
      sourceQuote: { text: "In his array of the wandering knights he set the withdrawn aside and advanced the slippery; in his account of wealth he honoured power and profit and was ashamed of the poor. His reading was wide, and it was not disciplined.", source: "Ban Gu's judgment on Sima Qian, his own predecessor as historian; Hanshu, juan 62, Biography of Sima Qian" },
      appearsIn: [
        { ep: "read/han/11/", num: 11, panels: [13, 18] }
      ],
      relations: [
        { to: "ban-chao", kind: "brother", note: "Younger brother of the two: he kept the pen at the capital while Chao carried the staff west, and their sister Ban Zhao finished what he left." },
        { to: "dou-xian", kind: "client", note: "He sat on Dou Xian's staff, wrote the victory in stone, and died in the Luoyang gaol the same year as his patron's fall." },
        { to: "ban-yong", kind: "uncle", note: "His brother Chao's son; the western record the family made passed to the nephew who went out and held it." }
      ]
    },
    {
      id: "ban-yong", name: "Ban Yong", hanzi: "班勇", years: "fl. 102–127 CE", dynasty: "han", color: "#6a5a4a",
      role: "Ban Chao's son, who inherited the western business, argued the court back into the Western Regions and recovered it with a staff of five hundred.",
      myth: { myth: "When Ban Chao came home his son carried on where his father had left off, and the Silk Road stayed open.", truth: "The road was lost first. The court gave up the Protectorship in 107 and left the garrison men to come back on their own; Ban Yong's recovery of the lanes, with a staff of five hundred, belongs to the 120s, not to his father's evening. The record also has him punished — under examination for a lost engagement and deprived of the western command he had rebuilt. Han's western dominion was never a thing inherited; it was re-won or abandoned, and after Yong it was abandoned." },
      portrait: "assets/portrait-banyong.png",
      sourceQuote: { text: "Let a Protector-General be appointed, and a Resident Colonel at his side, and five hundred garrison men led out to settle the states' hearts. If their hearts are settled, the Xiongnu's hope is cut off.", source: "Ban Yong's proposal for holding the Western Regions; Hou Han shu, juan 47, Hereditary Biographies of Ban Chao and Ban Liang — the plan as the memoir gives it, in compressed wording" },
      appearsIn: [
        { ep: "read/han/11/", num: 11, panels: [18] }
      ],
      relations: [
        { to: "ban-chao", kind: "father", note: "He inherited the western business and did it smaller: five hundred men where his father had worked with dozens and borrowed cavalry." },
        { to: "ban-gu", kind: "uncle", note: "His uncle wrote the history his father's campaigns supplied; the west stayed a family office." }
      ]
    },
    {
      id: "bing-ji", name: "Bing Ji", hanzi: "丙吉", years: "d. 55 BCE", dynasty: "han", color: "#40655a",
      role: "An officer of the Commandant of Justice set to work the witchcraft cases in the prison of the commandery residences. He kept the emperor's great-grandson alive on his own money and never spoke of it.",
      myth: { myth: "Bing Ji discovered the hidden imperial great-grandson by reading the air over the prison and was honoured for it from the start.", truth: "The spirit-observer who reported the emperor's air above the Chang'an prison is what brought the killing order, not any discovery by Bing Ji, and juan 74 gives him no part in finding the child. His deed was to shut the gate at midnight and say the emperor's great-grandson was inside, and then, once the boy was on the throne, to keep his mouth shut about it: the record says he never boasted of a good turn and the court could not know his merit until long after (Hanshu, juan 74; juan 8)." },
      portrait: "assets/portrait-bingji.png",
      sourceQuote: { text: "The emperor's own great-grandson is in this building. Men of other families who have not deserved death must not be killed; how much less a king's own great-grandson!", source: "Bing Ji refusing the gate to the palace officer come at midnight to kill every prisoner of the capital, 87 BCE; Hanshu, juan 74, Biography of Bing Ji" },
      appearsIn: [
        { ep: "read/han/07/", num: 7, panels: [14] }
      ],
      relations: [
        { to: "jiang-chong", kind: "enemies", note: "He was the officer set to work the witchcraft cases in the prison of the commandery residences, and he knew in his heart that the prince's business had nothing in it." },
        { to: "emperor-wu", kind: "commander", note: "He held the gate from midnight to sunrise against this emperor's order to kill the prisoners, was impeached for it, and was saved when the emperor came to himself and amnestied the empire." }
      ]
    },
    {
      id: "chao-cuo", name: "Chao Cuo", hanzi: "晁錯", years: "d. 154 BCE", dynasty: "han", color: "#6a5a4a",
      role: "Imperial adviser turned Censor-in-chief, called the bag of wit of the eastern palace while he served the crown prince. He wrote the plan to cut the fiefs back and was delivered to the block in his court robes to buy the rebels' withdrawal.",
      myth: { myth: "A cold Legalist technician who picked a war he need not have picked, and the histories record him as a man who got what his own scheming deserved.", truth: "The execution is as flat as it is famous: the Commandant of the Capital sent for the Censor-in-chief with a carriage on the pretext of a meeting, the chancellor and the Commandant of Justice filed an indictment charging him with urging the emperor to lead out in person while he kept the capital and with offering Wu towns it had not even taken — sentence, waist-cutting, and his household killed in the market — and the emperor's reply is one word, approved (Shiji, juan 101; Hanshu, juan 49). His own father saw the price before anyone: he came on from Yingchuan to ask why, said the house of Liu was safe but the house of Chao was in danger, and poisoned himself a little over ten days before the seven kingdoms rose. The record does not call the plan wrong. An officer home from the front told the emperor that Cuo's scheme was the ten-thousand-generation benefit of the capital's supremacy, that its author had been destroyed while it was only just beginning to be carried out, and that inside, the loyal had been silenced and outside, the lords avenged; the emperor answered that his words were right and that he regretted it too (juan 101)." },
      portrait: "assets/portrait-chaocuo.png",
      sourceQuote: { text: "Cut him and he rises at once, and the wound is small. Do not cut him and he rises later, and the harm is greater.", source: "Chao Cuo's argument on Wu to the new emperor; Shiji, juan 106, Memoir of the King of Wu (Hanshu, juan 49, Memoir of Yuan Ang and Chao Cuo)" },
      appearsIn: [
        { ep: "read/han/03/", num: 3, panels: [1, 5, 6, 9, 10, 18] }
      ],
      relations: [
        { to: "emperor-jing", kind: "commander", note: "He had been the crown prince's household officer, so persuasive that the eastern palace called him the bag of wit, and as Censor-in-chief he wrote the plan the emperor then signed." },
        { to: "yuan-ang", kind: "rivals", note: "They would not look straight at each other in court, and it was Ang who proposed his head in a room cleared for the purpose, with Cuo still standing outside the partition." }
      ]
    },
    {
      id: "chen-fan", name: "Chen Fan", hanzi: "陳蕃", years: "d. 168 CE", dynasty: "han", color: "#54386b",
      role: "Grand Tutor, eighty-ish and unbought; in 168 he tried to wipe the inner court out in one morning and died with his cap-strings undone.",
      myth: { myth: "An old man killed in a palace squabble he could not have won, for the sake of eunuchs he merely disliked.", truth: "He was Grand Tutor and had been refusing the inner court since before the prohibitions: the record keeps his memorials on the eunuchs' grants and their kin, and his refusal to serve through a resignation letter is the rule he died on. The coup of the eighth month of 168 was lost to delay, not to innocence — the plan leaked, the eunuchs swore the guard to the emperor instead of the regent, and bought the officers at the gates with titles the regent could not give. Chen Fan led men at a gate with a sword he had never used." },
      portrait: "assets/portrait-chenfan.png",
      sourceQuote: { text: "When gentlemen meet they talk of filial duty and brotherly care and the service of a ruler — and you set me to sweeping a room? A man who will not sweep his own room has no business asking after all under Heaven.", source: "Chen Fan in youth, answering a father's friend who found his lodging untidy; Hou Han shu, Hereditary Biography of Chen Fan" },
      appearsIn: [
        { ep: "read/han/12/", num: 12, panels: [8, 9, 10] }
      ],
      relations: [
        { to: "dou-wu", kind: "colleagues", note: "The two old men picked a boy emperor in 168 so that they could govern him, and died within a day of one another over a plan they took too long to run." },
        { to: "zhang-rang", kind: "enemies", note: "His scheme for the autumn of 168 was to clear the inner court in a morning; the ring he failed to destroy held the throne for twenty years after him." },
        { to: "li-ying", kind: "colleagues", note: "He would not leave the empire by a letter of resignation, and the men he was trying to save had already been broken by the prohibitions twice over." }
      ]
    },
    {
      id: "chen-ping", name: "Chen Ping", hanzi: "陳平", years: "d. 178 BCE", dynasty: "han", color: "#6b5b73",
      role: "The emperor's planter of stratagems, ennobled six times for counsels the record says were kept too secret to be heard. At Baideng what it will let him say is an order of march: crossbows strung, two arrows nocked to the outside, and walk.",
      myth: { myth: "He broke the encirclement with a marvel: a painter's picture of the beauties of Han, sent through the lines to make the Chanyu's wife jealous so that she would beg her husband to loosen the ring.", truth: "The Shiji credits him with a marvellous device, says the Chanyu's wife was reached with it and the ring opened by it — and then states plainly that his devices were largely secret, so that nobody in the age ever heard them; the Hanshu annal is content with one clause, that he got out by Chen Ping's secret plan (Shiji, juan 56; Hanshu, juan 1). The jealous-beauty version is a guess made four centuries later by Huan Tan, preserved only because commentators quoted a lost essay. What the records will actually show is a bribe carried through the lines, a rendezvous the Han defectors failed to keep, a heavy fog coming up, and the march-order on this card. Late in life, holding the chancellorship under the new emperor, he said of himself that he had taken too many dark counsels, and that this is what the teachers of the Yin and Yang forbid (juan 56)." },
      portrait: "assets/portrait-chenping.png",
      sourceQuote: { text: "The Hu are armed to a man. Let every strong crossbow carry two arrows to the outside, and we walk out slowly.", source: "Chen Ping's order of march out of the ring at Baideng, 200 BCE, recorded in the memoir where he held the post of Protector of the Army; Shiji, juan 93, Memoir of Han Xin and Lu Wan (the same walk in juan 110)" },
      appearsIn: [
        { ep: "read/han/02/", num: 2, panels: [1, 7, 9, 17] }
      ],
      relations: [
        { to: "liu-bang", kind: "commander", note: "The emperor's planter of stratagems, ennobled six times for counsels the record says were kept too secret to be heard by anyone in the age." },
        { to: "modu", kind: "enemies", note: "Against the ring what the record will let him say is a march-order; the part of the escape it credits to him it then refuses to describe." }
      ]
    },
    {
      id: "chen-tang", name: "Chen Tang", hanzi: "陳湯", years: "fl. 47–36 BCE", dynasty: "han", color: "#7a2f22",
      role: "Deputy commander: poor, always borrowing, disliked in his home district, twice in gaol. He forged the edict, the garrison colonies marched on his signature, and he spent the rest of his life defending it.",
      myth: { myth: "The boast that whoever offends the strong Han, though far away, will be punished was hurled at the enemy across the battlefield.", truth: "It is no battle-cry but the closing clause of a written memorial sent back to the throne with the head, asking that it be hung in the barbarian hostel street to show it ten thousand li (Hanshu, juan 70). The raid behind it was a capital crime, the forging of an imperial edict, and the reward sat unresolved for months while Kuang Heng and Shi Xian argued one bounty buys a war on every frontier; Liu Xiang and Gu Yong had to plead the men through. Poor, always borrowing, twice in gaol over the spoils, Chen Tang spent the rest of his life defending what he had done, and Ban Gu's own judgment is that he was reckless and did not keep himself in hand." },
      portrait: "assets/portrait-chentang.png",
      sourceQuote: { text: "Hang his head in the Haojie street among the barbarian hostels, to show it ten thousand li, and make plain that whoever dares offend our strong Han, though far away, will surely be punished.", source: "Chen Tang's memorial to the throne sent back with the taking of Zhizhi's city, 36 BCE; Hanshu, juan 70, Biography of Chen Tang" },
      appearsIn: [
        { ep: "read/han/08/", num: 8, panels: [1, 9, 10, 11, 13, 14, 15, 16] }
      ],
      relations: [
        { to: "gan-yanshou", kind: "colleagues", note: "The deputy who forged the edict and pressed the sword on his sick superior, then shared with him the city, the head, the marquisate and the indictment." },
        { to: "zhizhi-chanyu", kind: "enemies", note: "He argued the raid before it was lawful and led the columns that took the city, and asked that its chanyu's skull be hung in the foreign quarter to be read at a distance." }
      ]
    },
    {
      id: "deng-yu", name: "Deng Yu", hanzi: "鄧禹", years: "d. 58 CE", dynasty: "han", color: "#5c6b33",
      role: "The boy who attached himself to Liu Xiu in the capital's college, rode north to tell him an empire was there for the taking, and was made Grand Minister over the Masses in the field at twenty-four with a fief of ten thousand households. His house was still choosing emperors in 106 CE.",
      myth: { myth: "The restored Han was governed by the veteran generals who won it.", truth: "Its first cabinet is the opposite of that, and the record dates it to a single month: a twenty-four-year-old as Grand Minister over the Masses with a fief of ten thousand households, a horse-dealer as Marshal-in-Chief, a district official of Yewang as Grand Minister of Works, and the old man made Senior Grand Tutor had once been a county clerk. What the book credits the emperor with is not fighting but placement — he ran every general he employed past Deng Yu, and the picks fitted. Deng Yu's own house was still choosing emperors in 106 CE." },
      portrait: "assets/portrait-dengyu.png",
      sourceQuote: { text: "He consulted Deng Yu about every general he employed, and Deng Yu's picks all fitted the post, so the emperor was known for knowing men.", source: "His colleagues' verdict on the emperor's judgment, which is also a verdict on him — Hou Han shu, juan 16, Biography of Deng Yu; juan 1 lower" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [1, 10] }
      ],
      relations: [
        { to: "emperor-guangwu", kind: "commander", note: "He attached himself to Liu Xiu in the capital's college, rode north to tell him an empire was there for the taking, and was made Grand Minister over the Masses in the field at twenty-four with a fief of ten thousand households." },
        { to: "feng-yi", kind: "colleagues", note: "The two men stand in the same month of the record: the twenty-four-year-old as Grand Minister over the Masses, and the surrendered prefect of five walled counties as the army's model of good order — while the eleven former emperors' spirit tablets had to be carried east by Deng Yu's staff." }
      ]
    },
    {
      id: "dou-wu", name: "Dou Wu", hanzi: "竇武", years: "d. 168 CE", dynasty: "han", color: "#6b4a4a",
      role: "Regent and general-in-chief for one season, empress-dowager's kinsman; betrayed by the officers he trusted, he died outside the capital rather than be taken.",
      myth: { myth: "Dou Wu fell in 168 as Dou Xian fell in 92: a kinsman of the empress, raised by the court and destroyed by it, father and son on the same bloody wheel.", truth: "Same house, not same household, and three-quarters of a century apart: both men were of the Dou of Pingling raised on Dou Rong's service, and each fell to an emperor's coup, one in 92 and one in 168 — the interval is exactly what makes the pair worth reading together. What the two disasters share is the shape: imperial in-laws who hold the throne's minority, hesitate, and are taken alive at the gates. Dou Wu's end was not battle glory either — he was cut down outside the northern gate, his body exposed in the market, his house sent to the northern garrisons." },
      portrait: "assets/portrait-douwu.png",
      sourceQuote: { text: "The eunuchs of the inner palace and their kin in the provinces have filled the offices and sold the law. If these are not swept away the Han cannot be set right, and I will not rest while they are standing.", source: "the substance of Dou Wu's memorials against the eunuch ring during his regency, 168 CE; Hou Han shu, Hereditary Biography of Dou Wu — the memoir's charge rendered in his person, not its sentence" },
      appearsIn: [
        { ep: "read/han/12/", num: 12, panels: [8, 9, 10] }
      ],
      relations: [
        { to: "chen-fan", kind: "colleagues", note: "Regent and Grand Tutor for one season, chosen together, delayed together, exposed in the market together." },
        { to: "dou-xian", kind: "successor", note: "The house of Dou made an emperor's in-law twice and was cut down twice, in 92 and again in 168, both by the throne's own coup." },
        { to: "zhang-rang", kind: "enemies", note: "He began the work the ring survived; after his death its men wrote their own enemies into his case." }
      ]
    },
    {
      id: "dou-xian", name: "Dou Xian", hanzi: "竇憲", years: "d. 92 CE", dynasty: "han", color: "#7a2f22",
      role: "Grand general of the imperial in-laws. Rode five thousand li past the Altai to the Yanran Mountain and cut his victory in stone — and fell three years later, with the man who wrote that inscription, Ban Gu, dead in gaol.",
      myth: { myth: "Dou Xian was a noble conqueror struck down by a suspicious young emperor, and the man who sealed Mount Yanran died in the field.", truth: "He came home alive and died disgraced. The campaign of 89 was the deepest reach any Han army is recorded making north of the desert — five thousand li beyond the wall, five columns out of the border passes — and the victory won him a marquisate; but he had a murdered envoy in his household, would not give up his seat at court, and in 92 the boy emperor Zhang shut the gates and stripped him. His stele outlasted him by nineteen centuries: the stone was found again in Mongolia only in 1990." },
      portrait: "assets/portrait-douxian.png",
      sourceQuote: { text: "Send me out against the Xiongnu to ransom what I have done. Let me die on the steppe rather than be examined for it in the capital.", source: "Dou Xian's petition, made after his retainers had killed Liang Hou, a marquis of the imperial household, and repeated in 92 CE when he asked to be sent north against the Xiongnu to redeem his guilt; Hou Han shu, juan 23, Hereditary Biography of Dou Rong — rendered in compressed form, the memoir's substance and not its sentence" },
      appearsIn: [
        { ep: "read/han/11/", num: 11, panels: [10, 13, 18] }
      ],
      relations: [
        { to: "ban-gu", kind: "patron", note: "He gave Ban Gu his staff and his subject: the words cut at the Yanran Mountain are Gu's, and the gaol that killed Gu followed Xian's fall within the year." },
        { to: "ban-chao", kind: "colleagues", note: "The two arms of the same settlement: Xian broke the Northern Court's chanyu on the steppe in 89 while Chao took back the lanes, and Chao outlived him by ten years." },
        { to: "dou-wu", kind: "successor", note: "The same house of imperial in-laws was regent twice and destroyed twice, by the throne's own coup in 92 and again in 168." }
      ]
    },
    {
      id: "du-mi", name: "Du Mi", hanzi: "杜密", years: "d. 169 CE", dynasty: "han", color: "#45503f",
      role: "The governor who would not run: the order to arrest him reached his own commandery while he sat at his office, and he went to the prison-wagon of his own will.",
      myth: { myth: "He went to his death because he had no way out.", truth: "He went because he had one. Zhang Jian's road was open to him and the men at his office came to urge him onto it; the record makes his self-arming a choice and puts it beside the fugitive as the other half of one code. What the histories are exact about is the price of that code: the release of 167 had already left him under a lifelong bar from office, and the case of 169 was manufactured to reach him anyway." },
      portrait: "assets/portrait-dumi.png",
      sourceQuote: { text: "I will not run. My guilt is that I held office and could not save the proscribed; if I make a flight of it too, that is a second crime, and it is mine.", source: "Du Mi's answer to those who urged him to flee, 169 CE; Hou Han shu, juan 67, Memoir of the Partisan Prohibitions — the memoir's moral arithmetic, put into his mouth in compressed form" },
      appearsIn: [
        { ep: "read/han/12/", num: 12, panels: [5, 11, 14] }
      ],
      relations: [
        { to: "li-ying", kind: "colleagues", note: "Named with Ying at the head of the second list and dead with him in 169; the memoir keeps the two fates as one argument." },
        { to: "fan-pang", kind: "colleagues", note: "The age's paired lesson: the man carried from door to door at his hosts' risk, and the man at his desk who refused to put anyone to that risk." },
        { to: "zhang-rang", kind: "enemies", note: "The inner court invented the second prohibition, and his name and Li Ying's stood first on it." }
      ]
    },
    {
      id: "emperor-guangwu", name: "Emperor Guangwu", hanzi: "劉秀", years: "d. 57 CE", dynasty: "han", color: "#4a4a6a",
      role: "Liu Xiu of Nanyang, a distant grandson of the first Han emperor who took the throne in 25 CE at thirty-one and died in 57 CE at sixty-two. He spent the thirty-two years between on taking the empire's size down.",
      myth: { myth: "Guangwu took Kunyang with ten thousand and smashed a million by a genius's surprise attack, with heaven visibly on his side.", truth: "The odds are the historians' own and they do not match. The Book of the Han calls the mobilisation a million and reports four hundred and twenty thousand mustered at Luoyang; the Book of the Later Han keeps both, gives eight or nine thousand in the city, a thousand and odd in the relieving column and three thousand at the water — and then adds the meteorite in the camp, the cloud that fell and scattered a foot above the ground, and the tens of thousands driven into the Zhui river until the water would not run. No early text has ten thousand against a million, and the romances of the restoration, which supply the chivalric pursuit and flight everybody remembers, are Ming and Qing books and not evidence. What the records credit is a strike on a stationary ring in the rain." },
      portrait: "assets/portrait-emperorguangwu.png",
      sourceQuote: { text: "When I set the empire in order, I too mean to go about it by the soft way.", source: "His answer to the aunts of his own village in the spring of 41 CE; the phrase ruo dao is his own — Hou Han shu, juan 1 lower" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [2, 14, 16] }
      ],
      relations: [
        { to: "liu-yan", kind: "brother", note: "His elder brother Bo Sheng raised the rising; the emperor they had served had him killed within three months, and Liu Xiu rode straight to the capital to apologize for it, never boasting of Kunyang, never mourning, eating and drinking and talking as always. In 39 CE he named the brothers after death." },
        { to: "lady-yin-lihua", kind: "wife", note: "The beauty of Nanyang he admitted wanting as a poor young man; he made her empress in the spring of 41 CE, in the same season as the village visit and the shrine for four generations of the Chongling line." },
        { to: "deng-yu", kind: "colleagues", note: "The boy who attached himself to him in the capital's college and rode north to tell him an empire was there for the taking; he consulted Deng Yu about every general he employed, and the picks all fitted the post." }
      ]
    },
    {
      id: "emperor-jing", name: "Emperor Jing", hanzi: "劉啟", years: "188–141 BCE", dynasty: "han", color: "#3f4a5a",
      role: "Liu Qi, second emperor of Han, the prince who had killed the heir of Wu with a gaming board. He approved the strategy that won, gave way to the one that did not, and said afterwards that he regretted it.",
      myth: { myth: "The mild second half of a golden age: a gentle, cautious emperor who inherited a settled realm, and whose one ugly act — hauling a minister out in his court robes to the East Market — was forced on him by men stronger than himself.", truth: "The mildness is in the record and the historians measure it in stores: the Shiji's treatise on the balanced standard, which Sima Guang copies into his closing survey of the reign, has cash piled in the capital's treasury with the strings rotting, and the old grain of the Great Granary overflowing outside and going bad (Shiji, juan 30; Zizhi Tongjian, scroll 16). But this is the man who, as crown prince, picked up a gaming board and killed the heir of Wu with it (juan 106); who approved Chao Cuo's cutting plan, and answered the demand for Cuo's head with one word; and who was told to his face by an officer home from the front that the killing had closed the loyal men's mouths inside and avenged the lords outside, and replied that the man's words were right and that he regretted it too (juan 101). What he did not do was turn: he let the war run on the plan he had signed, refused to move Zhou Yafu off his ramparts while his own brother's city was beaten to pieces, and after the surrender redrew the map, kingdom exchanged for commandery and prince moved from one fief to another (Hanshu, juan 5)." },
      portrait: "assets/portrait-emperorjing.png",
      sourceQuote: { text: "Let me see how far this can go. I am not so attached to one man that I will refuse the realm an apology.", source: "Emperor Jing's answer to Yuan Ang, after a long silence, 154 BCE; Shiji, juan 101, Memoir of Yuan Ang and Chao Cuo (Hanshu, juan 49)" },
      appearsIn: [
        { ep: "read/han/03/", num: 3, panels: [1, 3, 7, 9, 10] }
      ],
      relations: [
        { to: "liu-wu", kind: "brother", note: "His full brother, whose capital he would not send relief to while the siege went on, and who spent the following decade working to destroy the commander that had let it happen." },
        { to: "liu-pi", kind: "rivals", note: "The king of Wu had not attended court for a generation, and the quarrel between their houses began with a gaming board thrown by an imperial crown prince." }
      ]
    },
    {
      id: "emperor-wu", name: "Emperor Wu", hanzi: "劉徹", years: "156–87 BCE", dynasty: "han", color: "#33415c",
      role: "Wanted a diversion for his wife's brother's army, took a boast for a promise, then suspected the man who made it. He wished the defeated general dead on the steppe, killed his mother and wife on a misreport, and admitted later that he had been wrong about the relief.",
      myth: { myth: "Emperor Wu is the throne at the top of Han strength: he broke the Xiongnu, opened the west, and made the empire what it was.", truth: "His own books set the bill beside the triumph. Of a hundred and forty thousand horse counted out at the passes in 119 BCE, fewer than thirty thousand came back; the year after the great strike, rewards and gifts came to five hundred thousand jin of gold, and the treatise says the treasury was empty and the fighting men rather went without their pay (Hanshu, juan 24). The chapter that describes the Mobei states that no further strikes were made because Han's horses were few. Late in the reign he admitted he had been wrong about the Li Ling relief — that he should never have written Lu Bode into the edict at all — and sent an envoy to reward the survivors of a broken army, which is the only public reversal the histories record for him in this affair." },
      portrait: "assets/portrait-emperorwu.png",
      sourceQuote: { text: "Zhao Xin has always taught the Chanyu that our troops cannot cross the desert and hold there. Now we send out massed infantry — the shape of it is that we get what we want.", source: "Emperor Wu in council before the desert campaign of 119 BCE, reading his old enemy's adviser; Shiji, juan 111, Biographies of the General and the Brilliant Rider" },
      appearsIn: [
        { ep: "read/han/05/", num: 5, panels: [2, 17] },
        { ep: "read/han/06/", num: 6, panels: [3, 15, 16] },
        { ep: "read/han/07/", num: 7, panels: [2, 3, 18] }
      ],
      relations: [
        { to: "zhang-qian", kind: "patron", note: "He asked the questions Zhang Qian answered from thirteen years of absence, believed the answers, and paid for the western road out of the empire's own census." },
        { to: "wei-qing", kind: "commander", note: "He raised a household rider to General-in-Chief, gave him half the empire's hammer in 119 BCE, and then let him go on without a single increase of fief." },
        { to: "sima-qian", kind: "enemies", note: "He asked one clerk what he thought of a defeated army, heard a slur on his wife's brother in the answer, and the sentence that followed was paid in currency." }
      ]
    },
    {
      id: "empress-lu", name: "Empress Lu", hanzi: "呂后", years: "d. 180 BCE", dynasty: "han", color: "#8a6a2f",
      role: "Wife of the founder, mother of the heir and of one daughter, and the power in the court after 195 BCE. The bargain on the table needed that daughter. She wept day and night, and the girl who went north was somebody else.",
      myth: { myth: "A monster of the inner chambers: the woman who made her rival a human swine, poisoned her own son, and ruled a terror-state that the histories exist to denounce.", truth: "The swine is in the official history, not the playhouse: Shiji, juan 9 — the annals of the years she ruled — records Lady Qi's hands and feet cut off, her eyes put out, her ears burnt through and medicine forced on her to take her speech, and then the dump into the latrine. The murder of Emperor Hui is not in it: the book has him break at the sight of her, drink every day, stop attending to government and die in his seventh year at twenty-three. And Sima Qian's arrangement is structural rather than moral — he set a woman's regency in the Basic Annals and closed it saying that in those years the government did not issue from the bedchamber doors, punishments were seldom used, and the people got on with their farming. On the marriage she won the argument she is quoted with here: the Eldest Princess did not go (juan 99; Hanshu, juan 94a)." },
      portrait: "assets/portrait-empresslu.png",
      sourceQuote: { text: "I have the heir and one daughter. Why must she be thrown away among the Xiongnu?", source: "Empress Lu when the marriage-tribute bargain was put to the court after Baideng; Shiji, juan 99, Memoir of Liu Jing and Shusun Tong (Hanshu, juan 94a)" },
      appearsIn: [
        { ep: "read/han/02/", num: 2, panels: [12] }
      ],
      relations: [
        { to: "liu-bang", kind: "husband", note: "She was his wife and the mother of his heir and of the family's one girl; the record has her weep at him once over the marriage and he did not press the matter." },
        { to: "modu", kind: "enemies", note: "He was offered a princess of the blood as the price of the frontier; the girl who went north was somebody else, and two decades later his letter to her was thought an insult." },
        { to: "liu-jing", kind: "colleagues", note: "The settlement he drafted needed her only daughter to work, and he had warned in advance that a substitute would be found out and not honoured." }
      ]
    },
    {
      id: "fan-kuai", name: "Fan Kuai", hanzi: "樊噲", years: "d. 189 BCE", dynasty: "han", color: "#7d5426",
      role: "A dog butcher of Pei by trade, brother-in-law to Liu Bang. Remonstrated with his lord at the palace and carried a shield through the gate at Hong Gate.",
      myth: { myth: "The shield, the bristling hair, the raw pork eaten standing: Fan Kuai is the sworn brute of the stage, loyal muscle with no judgement of his own.", truth: "The entrance is in the annals exactly as the operas stage it, and the histories keep his trade with it — dog butcher of Pei, given the sister of Liu Bang's wife in marriage (Shiji, juan 7). What sits beside that in the same pages is a man who twice overruled his emperor in public and was right both times: back out of the palace, and do not listen to a petty man's slander at the feast. His own biography (juan 95) is a service record of towns taken and grain roads cut; he held Wuyang as a marquis and died in 189 BCE still employed by the house he married into." },
      portrait: "assets/portrait-fankuai.png",
      sourceQuote: { text: "A man who cannot refuse death would not haggle over a bowl of wine. The King of Chu bound every general by oath, and the Lord of Pei took Xianyang first, sealed the treasuries, drew back and waited. This is Qin's downfall continued.", source: "Fan Kuai standing facing east in Xiang Yu's tent at Hong Gate, 206 BCE; Shiji, juan 7, Basic Annals of Xiang Yu (his campaigns are listed in juan 95)" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [6, 14, 15, 16] }
      ],
      relations: [
        { to: "liu-bang", kind: "brother", note: "His lord and his sister's husband: at the Qin palace he told him to go back out to the open camp, and Liu Bang would not listen until Zhang Liang said the same thing." },
        { to: "zhang-liang", kind: "colleagues", note: "Zhang Liang fetched him in at the gate when the sword-dance began, and reported him to Xiang Yu by name: the chariot-partner of Liu Bang, called Fan Kuai." },
        { to: "xiang-yu", kind: "enemies", note: "He walked in on an ordered killing with a shield on his shoulder, ate a raw shoulder standing, and answered the overlord's question with the one argument that stopped the day." }
      ]
    },
    {
      id: "fan-pang", name: "Fan Pang", hanzi: "范滂", years: "137–169 CE", dynasty: "han", color: "#40655a",
      role: "The inspector who took up his reins with the resolve to make the whole empire clear. When the second list came for him he refused to run, and went into the prison-wagon himself.",
      myth: { myth: "A virtuous martyr of the scholars' cause, killed for recommending the wrong men.", truth: "He was an inspector who came into a province with the resolve to clear it and struck at once at the families behind the orders — which is precisely why the orders came for him. The record is not soft about what that cost others: when the second prohibition came for him he was told to go and refused, and the memoir keeps the son, the mother and the prison-wagon in the same scene. His death-year is given as thirty-three, which is why his dates are a subtraction and not a birth record." },
      portrait: "assets/portrait-fanpang.png",
      sourceQuote: { text: "I would have you learn to be bad — but bad is not to be learned. I would have you learn to be good — and I, who was not bad, am undone by it.", source: "Fan Pang's words to his son as he was led out to execution, 169 CE; Hou Han shu, juan 67, Memoir of the Partisan Prohibitions" },
      appearsIn: [
        { ep: "read/han/12/", num: 12, panels: [7, 11] }
      ],
      relations: [
        { to: "li-ying", kind: "colleagues", note: "His mother's measure of a good death: she told him he might now die beside Li Ying and owe no shame to Heaven and Earth." },
        { to: "du-mi", kind: "colleagues", note: "Both of the second list's first ranks, both warned to run, both in the prison-wagon by their own decision." },
        { to: "zhang-rang", kind: "enemies", note: "He took up his reins meaning to make the whole empire clean, and the cleanest thing the inner court ever did to him was to write his name on a roll." }
      ]
    },
    {
      id: "fan-zeng", name: "Fan Zeng", hanzi: "范增", years: "d. 204 BCE", dynasty: "han", color: "#6a6152",
      role: "An old man of Juchao, the strategist behind Xiang Yu's throne. Read Liu Bang's abstinence as ambition, and cursed the feast afterwards.",
      myth: { myth: "Fan Zeng stormed out on the night of the banquet, and from Hong Gate onward Xiang Yu was a general without a plan.", truth: "He stayed seven years longer and was still in the camp when Xiang Yu closed on Xingyang; his exit is the record's own, but it comes late and it is Xiang Yu's doing. Gold and a counterfeit embassy — Chen Ping's counter-intelligence, told in Chen Ping's hereditary house, Shiji, juan 56 — made the overlord suspect the elder and slowly take his authority away; Fan Zeng then asked to be sent home as a common soldier, saying the empire's business was settled and his lord might run it by himself, and before he reached Juchao a carbuncle broke on his back and he died, in 204 BCE (juan 7). Liu Bang's own summing-up, in the annals of Gaozu, is one sentence long: Xiang Yu had one Fan Zeng and could not use him, and that is why he was caught (juan 8)." },
      portrait: "assets/portrait-fanzeng.png",
      sourceQuote: { text: "You cannot make plans with that boy. The one who takes the lord of Xiang's realm will be Liu Bang, and we shall all be taken by him.", source: "Fan Zeng of Juchao after Liu Bang had slipped out of the banquet at Hong Gate, 206 BCE; Shiji, juan 7, Basic Annals of Xiang Yu" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [10, 13, 18] }
      ],
      relations: [
        { to: "xiang-yu", kind: "commander", note: "He was the planner beside Xiang Yu's chair, raised to the place of Second Father, and he read Liu Bang's new abstinence as appetite with a lid on it and told him to strike without delay." },
        { to: "liu-bang", kind: "enemies", note: "He broke his own jade cup on the ground over the escape and named the man who would take the realm; Liu Bang's later account of winning it has one clause about him." }
      ]
    },
    {
      id: "feng-yi", name: "Feng Yi", hanzi: "馮異", years: "d. 34 CE", dynasty: "han", color: "#7d5426",
      role: "A surrendered prefect of five walled counties who became the army's model of good order, brought a bowl of hot bean porridge at Raoyang, and was nicknamed the Tree General because he stood aside under a tree while the other officers sat and argued about their credits.",
      myth: { myth: "The great generals of the restoration were the men who shouted loudest over their credits, and the historian's nickname for the quiet one is a polite way of calling him weak.", truth: "The nickname is the army's own and it is the opposite of an insult. When the officers sat together arguing their credits, he stood aside under a tree, and they called him the Tree General; the same book has to record that he was the model of good order in an army of wanderers, and that the emperor was still reciting the porridge and the wheat twenty years later. It is the minor officers of Xinhe and Shanggu and Yuyang who saved the flight across Hebei, and the record does not hide the fact that the man who fed him was a prefect who had surrendered five walled counties." },
      portrait: "assets/portrait-fengyi.png",
      sourceQuote: { text: "Twenty years later the emperor was still reciting the debt: the porridge of the urgent days at Wulou and the wheat at the Hutuo had gone long unrepaid.", source: "The emperor's own words about him, preserved in his biography; the meal itself is the memoir's — Hou Han shu, juan 17, Biography of Feng Yi" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [1, 7] }
      ],
      relations: [
        { to: "emperor-guangwu", kind: "commander", note: "He was a surrendered prefect of five walled counties who became the army's model of good order, and the man who put a bowl of hot bean porridge into the hands of a fugible prince of the blood at the Raoyang post-house in the cold." },
        { to: "wu-han", kind: "colleagues", note: "The two northern commanderies are where the flight across Hebei ended: the cavalry that arrived in the winter of 24 CE came under Wu Han and Kou Xun, and Feng Yi's memoir keeps the meals that got him there." }
      ]
    },
    {
      id: "gan-yanshou", name: "Gan Yanshou", hanzi: "甘延壽", years: "fl. 36–33 BCE", dynasty: "han", color: "#7a5f3a",
      role: "Protector General in the Western Regions, a frontiersman picked for his strength at throwing stones. He was ill in bed when his deputy raised an army in the emperor's name, and ended up riding at the head of it.",
      myth: { myth: "Gan Yanshou, the Protector General, planned and led the raid on Zhizhi Chanyu.", truth: "The record makes him the reluctant head of another man's scheme. He thought the blow was right but wanted to memorialise for it first; Chen Tang would not wait, said the court and the grandees would never see so far, and raised the troops while Gan lay long ill. Gan started out to stop a force already marching, was shouted down by his own deputy with a hand on his sword, and joined it, adding the picked horse and the agricultural officers. The marquisate he received was wrung out of a months-long deadlock over whether the two men were criminals or conquerors (Hanshu, juan 70)." },
      portrait: "assets/portrait-ganyanshou.png",
      sourceQuote: { text: "The Protector General lay long ill; his deputy forged the edict and marched the garrison colonies, and Gan Yanshou rose to stop an army already assembled and was pressed by his own second-in-command to ride at its head.", source: "The record of the forged edict of 36 BCE; Gan Yanshou is given no speech of his own here; Hanshu, juan 70, Biographies of Gan Yanshou and Chen Tang" },
      appearsIn: [
        { ep: "read/han/08/", num: 8, panels: [1, 9, 10, 11, 13, 14, 15, 16] }
      ],
      relations: [
        { to: "chen-tang", kind: "colleagues", note: "Protector General and deputy: Tang raised the columns over Gan's sickbed, and the two then accused themselves in writing and were ennobled together." },
        { to: "zhizhi-chanyu", kind: "enemies", note: "He commanded the six divisions that came to the water three li from the wall and took the city on the Talas." }
      ]
    },
    {
      id: "gan-ying", name: "Gan Ying", hanzi: "甘英", years: "fl. 97 CE", dynasty: "han", color: "#3a5560",
      role: "Ban Chao's envoy, the farthest-reaching messenger of Han: he came to the Western Sea and looked at Rome — and was talked out of the crossing.",
      myth: { myth: "Gan Ying got to the Roman empire and stood in a provincial city of Syria; the two great empires were one day's march apart.", truth: "The record says only that he came to the shore of the Western Sea and did not cross. Most readings put that shore on the Persian Gulf, with Parthian sailors — who had the silk trade between the two empires and wanted it kept that way — telling him the crossing takes three months with a fair wind and two years without one, which is why men grow old on it. Some scholars still place him on the Mediterranean. The first attested contact from Da Qin's side is a group reaching the Han court in 166, not a Han embassy reaching Rome." },
      portrait: "assets/portrait-ganying.png",
      sourceQuote: { text: "He reached Tiaozhi on the shore of the Western Sea and was about to embark; the sailors told him how vast the water is, and he turned back, and brought home an account of the kingdoms of the west.", source: "the Hou Han shu's narrative of Gan Ying's mission of 97 CE, the memoir's words about him rather than his own; Hou Han shu, juan 88, Memoir on the Western Regions" },
      appearsIn: [
        { ep: "read/han/11/", num: 11, panels: [15] }
      ],
      relations: [
        { to: "ban-chao", kind: "commander", note: "He was Chao's subordinate and went west on Chao's commission, into the settlement Chao had made possible." }
      ]
    },
    {
      id: "grand-empress-dowager-wang", name: "Grand Empress Dowager Wang", hanzi: "王政君", years: "d. 13 CE", dynasty: "han", color: "#7a2f22",
      role: "The Han's great-grandmother and the Wang family's own root. She held the transmission seal, threw it down at her nephew's man, and told his brothers they would be clan-exterminated.",
      myth: { myth: "The Empress Dowager Wang was a passive old woman who happened to be the aunt of the man who took the empire, and history blames her for nothing.", truth: "She is the one person in the record who said no to him and was never overruled by argument. She had already out-vetoed him twice while he was regent; she refused the seal on the ground that a new dynasty should cut its own and hand it down for ten thousand generations, and that she would not use an unlucky seal from a state that had lost the mandate; and the book keeps the room — the women of the bedchamber all crying — and her nephew's brother's weary answer that finished it. Ban Gu, who is not sympathetic to her family, explains Wang Mang's rise as her inherited position plus the Han's middling fortune, three breaks in the succession, and an empress-dowager who lived long enough to be her own family's head. She was buried alongside Emperor Yuan with a ditch cut between their graves: joined and separated at once." },
      portrait: "assets/portrait-grandempressdowagerwang.png",
      sourceQuote: { text: "I am the Han's old widow, and I die this morning or tonight. I mean to be buried with this seal. You will not get it.", source: "Her answer when her nephew's brother came to ask for the Han's transmission seal — Hanshu, juan 98, Biography of the Empress Dowager Yuan" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [6] }
      ],
      relations: [
        { to: "wang-mang", kind: "rivals", note: "She was his aunt and the root of his house's power, and she out-vetoed him twice; the accession he made from her family's standing needed her seal and could not get it, until she threw it on the floor. She died in 13 CE and he wore three years of mourning for her." },
        { to: "liu-xin", kind: "colleagues", note: "The scholars of her court wrote the ceremony that put her nephew on the throne, and the mandate text a subordinate produced asked that she be styled the Ritual Mother of the New House; the characters, the examination reported, were neither carved nor painted but had grown so by their own nature." }
      ]
    },
    {
      id: "han-xin", name: "Han Xin", hanzi: "韓信", years: "d. 196 BCE", dynasty: "han", color: "#6b4a4a",
      role: "King of Han on the frontier, and not the marquis with the same name. Besieged at Mayi, scolded by his own court for treating for peace, he handed the town to the Xiongnu and gave the emperor the war he was caught in. He died leading Xiongnu cavalry five years later.",
      myth: { myth: "This is the Han Xin of the famous triumphs — the plank road mended in the open and crossed in secret, the battle drawn up with the river at his back, the songs of Chu all around the enemy camp.", truth: "All three belong to another man of the same name: Han Xin, Marquis of Huaiyin, whose memoir is Shiji, juan 92, and who was killed in 196 BCE in a palace bell chamber. This Han Xin was an illegitimate grandson of the old royal house of Han, stood — the record gives the number — eight chi five cun, was made king of Han and then transplanted to Taiyuan in 201 because the land he held lay against the empire's toughest recruiting districts (juan 93). Besieged at Mayi he sent intermediaries to the Xiongnu more than once; the Han court read that as two hearts and blamed him, and fearing execution he made a pact with Modu, gave the town up and fell on Taiyuan. He drew up his own ledger in the letter the same book keeps: three crimes he could not be forgiven — not dying at Xingyang, not holding Mayi, and now leading the Hu's cavalry against Han." },
      portrait: "assets/portrait-hanxin.png",
      sourceQuote: { text: "A withered man does not stop meaning to stand; a blind man does not stop wanting to see. But it cannot be done.", source: "Han Xin, King of Han, in the letter he sent back to the Han general who offered him his pardon and his old rank; Shiji, juan 93, Memoir of Han Xin and Lu Wan" },
      appearsIn: [
        { ep: "read/han/02/", num: 2, panels: [1, 3, 5, 9, 14, 18] }
      ],
      relations: [
        { to: "liu-bang", kind: "enemies", note: "Moved north onto a frontier he could not hold and then reproached for treating for peace, he gave Mayi to the steppe and handed the emperor the worst week of his reign." },
        { to: "modu", kind: "allies", note: "He made his pact with the Chanyu out of fear of execution at his own court, rode at the head of Xiongnu horse on the frontier for five years, and died at Canhe against a Han army." }
      ]
    },
    {
      id: "huangfu-song", name: "Huangfu Song", hanzi: "皇甫嵩", years: "d. 195 CE", dynasty: "han", color: "#3d5a45",
      role: "Left Commandant of the Guards, sent west into Yingchuan with Zhu Jun. He won that war in one night's fire and the north in a dawn assault, and in the year after, an accusation from two Regular Attendants he had offended took his general's seal and six thousand of his households.",
      myth: { myth: "The generals who crushed the Yellow Turbans were rewarded, and the dynasty was saved in 184 by its officers' victory.", truth: "He won the war and was punished for it. Held at Changshe while outnumbered, he read that the enemy's works were brush and that the wind stood at their back, sent bands of five hundred out in the dark with fire, threw flame on the wall to make the place look betrayed, and broke the host in the morning — then was fined and stripped of his marquisate on an accusation from the inner court, and had to be called back to finish the fighting. His memorial put the cause where the court would not look: men buy their governorships and must make the money back out of their provinces." },
      portrait: "assets/portrait-huangfusong.png",
      sourceQuote: { text: "Not yet. In such a thing there is a change that cannot be seen before it comes. Let us hold our walls and give him nothing to fight.", source: "Huangfu Song to his officers at Changshe before the night attack, sixth month 184 CE; Hou Han shu, juan 66, Memoir of Huangfu Song — the memoir's speech, compressed" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18] }
      ],
      relations: [
        { to: "zhu-jun", kind: "colleagues", note: "The two central-intelligence generals sent west into Yingchuan in 184; one won the war with a night's fire, the other with an opened ring." },
        { to: "lu-zhi", kind: "allies", note: "Each saved the other from the court they were serving: the general who had been accused testified for him, and came for him in chains' way." },
        { to: "zhang-rang", kind: "enemies", note: "The inner court stripped him of his marquisate on a charge his own memoir calls invented, after he had taken the movement's head in the field." }
      ]
    },
    {
      id: "huhanye-chanyu", name: "Huhanye Chanyu", hanzi: "呼韓邪單于", years: "d. 31 BCE", dynasty: "han", color: "#4a6670",
      role: "Claimant in a five-cornered civil war who took his adviser's advice and gave the Han his name. Ended with a title above every vassal king, a Han bride, and a Han guard left at his camp.",
      myth: { myth: "Huhanye's submission made the Xiongnu a Han province.", truth: "It made him a client in an unusually expensive class. He was set above every vassal king and not administered as a subject; the edict's stated reason was that the rites of the five thearchs and three kings did not reach his people and the emperor's virtue could not cover them. The Han sent grain, gold, silk and sixteen thousand horse to guard his camp, and asked for the words of his address, not for the government of his people. When he offered to take over the frontier wall himself the court refused after one clerk listed the ten reasons the border would empty through the gap (Hanshu, juan 94 lower; juan 78)." },
      portrait: "assets/portrait-huhanyechanyu.png",
      sourceQuote: { text: "Let the border garrisons be withdrawn and the Son of Heaven's people rest. I will hold the wall for you from Shanggu west to Dunhuang, and pass it down to my sons without end.", source: "Huhanye Chanyu's memorial of 33 BCE, answered by Hou Ying's ten reasons and refused in one clause; Hanshu, juan 94 lower, Biography of the Xiongnu (relayed in Zizhi Tongjian)" },
      appearsIn: [
        { ep: "read/han/08/", num: 8, panels: [18] }
      ],
      relations: [
        { to: "zhizhi-chanyu", kind: "brother", note: "Claimant against claimant in a civil war of five chanyus; he took his adviser's counsel and rode south, and his elder brother rode ten thousand li west rather than kneel." },
        { to: "xiao-wangzhi", kind: "patron", note: "The Han grandee who argued he be ranked above every vassal king and received as a guest, and so set the terms on which his submission was made." },
        { to: "wang-zhaojun", kind: "wife", note: "The palace woman given him as consort when the northern war was over, styled Queen Who Sets the Barbarians at Peace." }
      ]
    },
    {
      id: "huo-qubing", name: "Huo Qubing", hanzi: "霍去病", years: "d. 117 BCE", dynasty: "han", color: "#8a6a2f",
      role: "Son of the empress's elder sister and nephew of his own commander, a palace attendant at eighteen. Given the picked men and no subordinate generals; buried with a tomb shaped like the mountains he took.",
      myth: { myth: "Huo Qubing rode light with a handful of picked horse, lived off the land, and needed no supply train — and the line about the Xiongnu not being destroyed proves how unselfish he was.", truth: "The record gives him fifty thousand cavalry in 119 BCE with transferring infantry numbering several hundred thousand at the army's heels, and a baggage equal to the General-in-Chief's; the emperor's own citation of merits says he travelled light and provisioned thin, which means there was a line behind him that he chose not to wait on. Sima Qian keeps the counterweight in the same paragraph as the famous answer: the imperial kitchen's cartloads of provisions thrown away half-eaten on the homeward march while soldiers went hungry, and the cuju ground he marked out and played on when his men lacked food and could not stand. He died in 117 BCE; his son held the marquisate six years and died in 110 with no heir, and the fief was struck out." },
      portrait: "assets/portrait-huoqubing.png",
      sourceQuote: { text: "What matters is a general's own methods; there is no need to learn the old manuals of war. The Xiongnu are not destroyed: there is no room for a household yet.", source: "Huo Qubing declining the emperor's offer of the Sunzi and the Wuqi, and answering the house that was built and shown to him; Shiji, juan 111, Biographies of the General and the Brilliant Rider; Hanshu, juan 55" },
      appearsIn: [
        { ep: "read/han/05/", num: 5, panels: [2, 9, 10, 11, 13, 14, 15] }
      ],
      relations: [
        { to: "wei-qing", kind: "uncle", note: "His mother was Wei Qing's elder sister, and his uncle was the commander whose division he was given, with the men who dared to go deep all attached to him." },
        { to: "emperor-wu", kind: "patron", note: "A palace attendant at eighteen, he was given the picked troops, no subordinate generals, an edict citing his own merits, and a tomb shaped like the mountains he took." }
      ]
    },
    {
      id: "jiang-chong", name: "Jiang Chong", hanzi: "江充", years: "d. 91 BCE", dynasty: "han", color: "#55483a",
      role: "An informer out of Handan who destroyed a crown prince to save himself and was trusted for it. He rode with a shaman to read the ground and heated iron to make men confess.",
      myth: { myth: "Jiang Chong was a conjurer working real sorcery, undone only when the prince saw through the magic.", truth: "Ban Gu records procedure and no magic at all. He was an informer of legal training who had already destroyed a king of Zhao, was admired for his looks and given a staff against the extravagance of the imperial kin, and rode through the palaces with a shaman of the northern peoples reading the ground and heated iron clamps laid on men until they confessed. The searching ran in a stated order set by rank, hope first and the empress next, and the record says he faked the curse because he feared the prince. He was roasted alive in the imperial park after his death, and the emperor later learned he had been lying and wiped out three kin-groups of his (Hanshu, juan 45)." },
      portrait: "assets/portrait-jiangchong.png",
      sourceQuote: { text: "There is the breath of the poison-wood in the palaces. Your Majesty's illness is a curse laid with carved figures; let them be sought and dug out of the ground.", source: "Jiang Chong's report to Emperor Wu on the cause of his sickness, made after Ban Gu notes that Chong saw the emperor old and feared the prince after him; Hanshu, juan 45, Biography of Jiang Chong" },
      appearsIn: [
        { ep: "read/han/07/", num: 7, panels: [2, 4, 5, 9, 11, 16] }
      ],
      relations: [
        { to: "liu-ju", kind: "enemies", note: "He dug in the prince's own courtyard and drove him to the killing that finished the house of Wei and the heir together." },
        { to: "emperor-wu", kind: "commander", note: "The emperor called him loyal, upright, law-bound and unafraid, and made him commissioner of the witchcraft cases with nothing behind him but the emperor's own fear." }
      ]
    },
    {
      id: "junchen", name: "Junchen", hanzi: "軍臣單于", years: "d. 126 BCE", dynasty: "han", color: "#6a6152",
      role: "Chanyu of the Xiongnu, who caught the envoy at the frontier and saw no reason at all to let him through — and who kept him for over a decade, gave him a wife, and never got the Han staff out of the envoy's own hand.",
      myth: { myth: "Zhang Qian's captors were a wandering horde without politics, and the man who held him is a nameless barbarian obstacle.", truth: "The histories give him a settled court with a named order of succession and a western administration that taxed the walled city-states through a Commandant of Bond Servants (Hanshu, juan 96a). The single clearest sentence about the geography of the age is spoken by him in both books, and it is argument rather than threat: an envoy cannot be walked through somebody else's country. He held the envoy for over a decade without confining him, and when he died in 126 BCE his own succession went to pieces — the Worthy King of the Left making war on the heir — which is the disorder Zhang Qian used to get home." },
      portrait: "assets/portrait-junchen.png",
      sourceQuote: { text: "The Yuezhi lie to my north. How is Han to send an envoy through my land? If I sent one to the Yue in the south, would Han let him pass?", source: "The Chanyu's retort on taking the Han envoy, c. 138–137 BCE, in both histories; Shiji, juan 123, Memoir of the Peoples of the West; Hanshu, juan 61, Memoir of Zhang Qian and Li Guangli" },
      appearsIn: [
        { ep: "read/han/04/", num: 4, panels: [3] }
      ],
      relations: [
        { to: "zhang-qian", kind: "enemies", note: "He took the envoy at the frontier, kept him ten-odd years with a wife and a son, and never got the Han credential out of his hand." },
        { to: "kunmo", kind: "client", note: "The Wusun had lived under the Xiongnu and their ministers feared them, and that fear is what answered the Han's gold when Zhang Qian came to the Ili valley." }
      ]
    },
    {
      id: "kunmo", name: "Kunmo", hanzi: "昆莫", years: "fl. 119–105 BCE", dynasty: "han", color: "#4f6356",
      role: "Kunmi of the Wusun, the horse-lords of the Ili valley whom the second mission was sent to move east. He was old, his kingdom was split three ways, and his ministers were afraid of the Xiongnu; he took the gifts and did not move.",
      myth: { myth: "Zhang Qian's second mission won the Wusun and cut off the Xiongnu's right arm.", truth: "On the ground it failed: both histories say the old Kunmi was aged, his country was divided among himself, a rival prince with ten thousand horse and a grandson with another ten thousand, and his ministers would not move, so Zhang Qian got no decision at all (Shiji, juan 123; Hanshu, juan 61). The arm was cut off in fact by the wars of 121 and 119 BCE, which put the Hexi corridor under Han commanderies and beacon towers. What the mission did buy was the marriage: a thousand horses as bride-price, a daughter of the king of Jiangdu sent out in 105 BCE as the Wusun ruler's Right Lady with a Xiongnu woman as his Left, and her song about felt walls and mare's milk, which the treatise keeps and the emperor pitied." },
      portrait: "assets/portrait-kunmo.png",
      sourceQuote: { text: "The kingdom was split three ways and the ministers had lived under the Xiongnu and feared them, so they would not hear of moving; he took the gifts and gave no decision.", source: "The historians' narrative of the second Han mission to the Wusun, 119 BCE — the record puts no words in the Kunmi's mouth; Shiji, juan 123; Hanshu, juan 61 and juan 96b" },
      appearsIn: [

      ],
      relations: [
        { to: "zhang-qian", kind: "allies", note: "Zhang Qian came with three hundred men, two horses apiece and goods worth tens of millions to move his people east; he received him on the model of the Chanyu's court and decided nothing." },
        { to: "junchen", kind: "patron", note: "His court had lived under the Xiongnu, and the fear of them, not any love of Han, is what his ministers answered the Han gifts with." }
      ]
    },
    {
      id: "lady-yin-lihua", name: "Lady Yin Lihua", hanzi: "陰麗華", years: "fl. 24–41 CE", dynasty: "han", color: "#7a5f3a",
      role: "The beauty of Nanyang he admitted wanting as a poor young man, who refused the empresshood because her rival had the elder son, and whose son became the next emperor. Her own record is the Book of the Later Han's memoir of the empresses.",
      myth: { myth: "He got the empire for the girl he had wanted when he was nobody, and the empresshood was the romantic settlement of it.", truth: "The wanting is in the record; the empresshood is a piece of succession politics handled in public. She refused it because her rival had the elder son, and she was only made empress in the spring of 41 CE, in the same season as the deposition of Empress Guo to be queen dowager of Zhongshan. The historian notices that this, too, was done so that later ages could see no gap between the thick and the thin of his treatment — which is a comment on the arithmetic of the favour, not on the love story." },
      portrait: "assets/portrait-ladyyinlihua.png",
      sourceQuote: { text: "She refused the empresshood because her rival had the elder son; the emperor deposed Empress Guo to be the queen dowager of Zhongshan and made her empress in the spring of 41 CE.", source: "The historian's clause, not a quotation — Hou Han shu, juan 10 upper, Annals of the Empresses; juan 1 lower" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [14, 18] }
      ],
      relations: [
        { to: "emperor-guangwu", kind: "husband", note: "He admitted wanting her as a poor young man in Nanyang; she was made empress in the same spring as his return to the village, the repair of the garden and the old house, and the shrine for four generations of the Chongling line. Her son was the next emperor." }
      ]
    },
    {
      id: "li-guang", name: "Li Guang", hanzi: "李廣", years: "d. 119 BCE", dynasty: "han", color: "#7a4a3a",
      role: "The old frontier shot, past sixty and with the luck against him, given the long road east instead of the Chanyu. He lost the way, and refused to be written up by a clerk.",
      myth: { myth: "The Flying General: whose name alone kept the Xiongnu horses from the passes, a wall of one man, unlucky and therefore heroic.", truth: "That is a Tang poem eight centuries away. The biography gives an excellent shot and a generous officer whom the frontier peoples liked, and a career that the audits keep: small columns, missed trysting days, capture by the enemy and escape, defeats bought off as a commoner by paying the fine, and never a marquisate for him though his kin and his men got them. In 119 BCE the emperor's secret order took the Chanyu out of his reach and Wei Qing wanted Gongsun Ao at that meeting; he lost the road, refused the clerk's board, and killed himself in front of his army. Sima Qian says the man himself was diffident as a countryman and unable to put a sentence together, and writes the death as humiliation, not as guilt." },
      portrait: "assets/portrait-liguang.png",
      sourceQuote: { text: "Since I tied up my hair I have fought the Xiongnu in seventy-odd engagements. The General-in-Chief has put me on a circuitous road; I have lost the way — is it not heaven? I am past sixty and cannot answer a clerk with his brush.", source: "Li Guang to his own colonels before drawing his sword, 119 BCE; Shiji, juan 109, Biographies of General Li of Longxi; juan 111" },
      appearsIn: [
        { ep: "read/han/05/", num: 5, panels: [4, 8, 9, 11, 14] }
      ],
      relations: [
        { to: "wei-qing", kind: "commander", note: "The General-in-Chief moved him onto the poor eastern road to make room for Gongsun Ao at the meeting with the Chanyu, and it was at his marquee that Li Guang was summoned to be written up." },
        { to: "emperor-wu", kind: "commander", note: "He had begged for this one battle at the Chanyu, and the emperor had given secret instruction beforehand that Li Guang was old and had the luck against him and must not be allowed to face him." },
        { to: "li-ling", kind: "successor", note: "His grandson inherited the house's name for the frontier and the same command that had to be proved in the steppe, and lost both in 99 BCE." }
      ]
    },
    {
      id: "li-guangli", name: "Li Guangli", hanzi: "李廣利", years: "d. 88 BCE", dynasty: "han", color: "#6b5b73",
      role: "General of Ershi, named for the Dayuan town his army had been sent to take, and brother of a consort the emperor was burying honours under. Thirty thousand horse out of Jiuquan, and out again with a hundred-odd men after an encirclement.",
      myth: { myth: "The horse wars won the heavenly horses and brought the western states in, and Li Guangli was the emperor's capable general out there.", truth: "The record keeps the arithmetic and the motive. The first expedition reached Yucheng with a few thousand starving men, was beaten there, and got back to Dunhuang with one or two in ten, which is why the Jade Gate was under orders to cut down anyone who rode in; the second took sixty thousand out of the garrison commanderies with a further 180,000 posted north of Jiuquan and Zhangye to hold the line, and came back through the gate with a little over ten thousand men and a thousand horses (Shiji, juan 123; Hanshu, juan 61). He had won with thirty thousand horse at the Tian Shan in 99 BCE, and the court was not allowed to call his later failures defeats. His last army out in 90 BCE was the largest of the reign and it ended in his surrender; the Book of Han puts his death in the steppe down to the hostility of Wei Lü, the surrendered officer who ranked above him (Hanshu, juan 54)." },
      portrait: "assets/portrait-liguangli.png",
      sourceQuote: { text: "Among the reasons the emperor made Li Guangli a general was that he wanted to ennoble the family of a favourite concubine.", source: "The historians' statement of why the Dayuan command came to him — the record puts no speech in his mouth; Shiji, juan 123; Hanshu, juan 61, Memoir of Zhang Qian and Li Guangli" },
      appearsIn: [
        { ep: "read/han/06/", num: 6, panels: [1, 3] }
      ],
      relations: [
        { to: "emperor-wu", kind: "patron", note: "He was given the army, and the title General of Ershi named for the Dayuan town he was sent to take, because of the sister the emperor was burying honours under." },
        { to: "li-ling", kind: "colleagues", note: "The great army was dispatched for his sake and Ling's five thousand foot were ordered to be no more than a supporting force — and when Ling met the Chanyu, his merit was small." }
      ]
    },
    {
      id: "li-ling", name: "Li Ling", hanzi: "李陵", years: "d. 74 BCE", dynasty: "han", color: "#6b4a4a",
      role: "Grandson of the famous shot Li Guang and heir to his posthumous marquisate. Given five thousand foot and no horse: thirty days north, a month of retreat south, a surrender, then twenty-odd years as the Chanyu's son-in-law.",
      myth: { myth: "Li Ling went over to the enemy of his own will, became their general and drilled their horse against his own frontier, and his family's execution was deserved.", truth: "The memoir has him surrender after five hundred thousand arrows were spent, the banners cut down, the treasure buried, and the road at an end a hundred-odd li short of the wall, with four hundred and odd men of five thousand getting in; he told his officers to scatter so that someone might reach the passes and report. The emperor afterwards said the mission had been mismanaged — he had been wrong to write Lu Bode into the edict — and sent an envoy to reward the survivors. The report that produced the attainder came from a Han column that could not find him and lost its own men; the drilling, the histories say, was being done by Li Xu, another surrendered officer, and Ling had him assassinated for it. He was invited home after Emperor Wu's death and refused: he was already in Xiongnu dress, and the alternative he named was the hands of the clerks. He died among the Xiongnu in 74 BCE." },
      portrait: "assets/portrait-liling.png",
      sourceQuote: { text: "Another few dozen arrows and I could have got clear. Now we have no weapons left. Scatter, every man as birds and beasts scatter — some of you may still get free and tell the Son of Heaven.", source: "Li Ling's last order to his officers before the breaking of the army, 99 BCE; Hanshu, juan 54, Memoir of Li Guang and Su Jian; relayed in Zizhi Tongjian, scroll 21" },
      appearsIn: [
        { ep: "read/han/06/", num: 6, panels: [3, 12, 13, 14, 16, 18] }
      ],
      relations: [
        { to: "li-guang", kind: "successor", note: "Grandson of the old shot and posthumous heir of his house, he was thought by the emperor to have his grandfather's style, and died abroad like his father's line had not." },
        { to: "sima-qian", kind: "allies", note: "They had never drunk a cup together and were of no party; asked what he made of the defeat, he said what happened had happened, and the sentence fell on him instead." }
      ]
    },
    {
      id: "li-ying", name: "Li Ying", hanzi: "李膺", years: "d. 169 CE", dynasty: "han", color: "#2e2e2e",
      role: "The judge whose severity made the eunuchs' kin afraid to leave their gates. The first name on the faction's lists, and the first great name it killed.",
      myth: { myth: "Gentle scholars of the classics, meek as students, murdered by malice.", truth: "Li Ying was a governor who ruled by the letter and by the prison, and the quarrel that opened the prohibitions came out of one of his executions: a man who had read an amnesty in advance and drilled his son to kill under cover of it was caught, pardoned, and put to death anyway by the governor who could not stomach it. That was lawful on the statute for the great crime; it was not diplomatic. The histories mourn the party's fall as the empire's loss and never pretend its members were harmless men." },
      portrait: "assets/portrait-liying.png",
      sourceQuote: { text: "Death is a turn of the season and I do not count the years. I grieve only that the ruin of the Han is at hand, and that I am to be cut down on a name while it waits.", source: "Li Ying under question in the imperial jail, 166–167 CE; Hou Han shu, juan 67, Memoir of the Partisan Prohibitions — the memoir's own compressed sentence, rendered compressed" },
      appearsIn: [
        { ep: "read/han/12/", num: 12, panels: [5, 6, 11, 14] }
      ],
      relations: [
        { to: "fan-pang", kind: "colleagues", note: "His death became the standard another man's mother held up for her son: now, she said, he might die beside Li Ying without shame." },
        { to: "du-mi", kind: "colleagues", note: "The two names at the head of the second list, taken on the same invented case and dead in the same year." },
        { to: "zhang-rang", kind: "enemies", note: "He governed so strictly that the inner court's kin would not leave their gates, which is why the ring wrote his name first on both prohibitions." }
      ]
    },
    {
      id: "liu-bang", name: "Liu Bang", hanzi: "劉邦", years: "256–195 BCE", dynasty: "han", color: "#7a2f22",
      role: "Emperor Gaozu of Han, founder. Took the field in the tenth month against a vassal's revolt, reached Pingcheng before his own army, and spent seven days inside a closed ring of cavalry. On the way home he apologised to a man he had put in irons and told the army he had killed the ten who had advised the march.",
      myth: { myth: "The founder was a swaggering village ruffian who won by noise and luck, a tyrant whose hair stood up when he was crossed.", truth: "The hair that bristled at Hong Gate is Fan Kuai's, and the annals say so (Shiji, juan 7). What the record keeps about this man is that he reversed himself in front of his own officers: he walked back out of the Qin palace when he was told to, handed the surrendered King of Qin over unharmed, and at Guangwu took Liu Jing's chains off before the army and said out loud that he had not taken his advice (juan 8; juan 99). His own answer for how he took the empire names three men he outranked — planning inside the tent, holding the country and feeding the army, leading a hundred thousand in the field — and says he was not the equal of any of them (juan 8). He was fifty when he came down the pass road." },
      portrait: "assets/portrait-liubang.png",
      sourceQuote: { text: "A law of three articles: whoever kills a man dies; whoever wounds a man, or robs him, answers for it in his person. All the rest of the Qin law is void.", source: "Liu Bang to the elders and worthies of the Guanzhong counties summoned at Bashang, 206 BCE; Shiji, juan 8, Basic Annals of Emperor Gaozu (Ban Gu copies it with small changes into Hanshu, juan 1, Annals of Emperor Gaozu)" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18] },
        { ep: "read/han/02/", num: 2, panels: [10] }
      ],
      relations: [
        { to: "xiang-yu", kind: "rivals", note: "Sworn together under the King of Chu to break Qin, and parted by the promise that whoever entered Xianyang first should rule it." },
        { to: "fan-kuai", kind: "brother", note: "A dog butcher of Pei who married the sister of Liu Bang's wife and came in with a shield through the gate at Hong Gate to keep his brother-in-law alive." },
        { to: "xiao-he", kind: "colleagues", note: "Fellow men of Pei out of the same county office, where Xiao He more than once shielded the village head from the law while both were ordinary men." }
      ]
    },
    {
      id: "liu-jing", name: "Liu Jing", hanzi: "劉敬", years: "fl. 202–198 BCE", dynasty: "han", color: "#3d5a45",
      role: "A conscript from Qi in a sheepskin coat who argued the court into camping the capital inside the pass, then reported that the Xiongnu could not be attacked and was chained for it. Released with a marquisate of two thousand households, he wrote the marriage-tribute agreement and proposed moving over a hundred thousand people into the Wei valley.",
      myth: { myth: "Cutting the great fiefs back was Chao Cuo's invention in 154 BCE, and the sheepskin-coat man from Qi was a lucky prophet of the capital's site whom the emperor rewarded on the spot.", truth: "The policy is older by half a century and it is his. The Shiji names it in his own memorial — strengthen the trunk, weaken the branches: he asked for the Tian of Qi, the Zhao, Qu and Jing of Chu, the descendants of Yan, Zhao, Han and Wei and the region's famous strongmen moved inside the Wei valley, at nearest seven hundred li from the Ordos horse, so that at peace they faced the Hu and if the lords moved there would be enough of them to march east; the record counts over a hundred thousand people moved (Shiji, juan 99). Nor was he rewarded on the spot: the insult he is quoted with on the road north — slave of Qi, you got your office with your tongue — stands on the same page as the apology, and the ten parties of assessors were beheaded on the emperor's own statement (juan 99). His name at the head of that page is Lou Jing; the surname Liu, the style Fengchun Jun and the marquisate of Jianxin, two thousand households, were all given him by the man he had contradicted." },
      portrait: "assets/portrait-liujing.png",
      sourceQuote: { text: "Two states at war display what they have. All I could see was the old and the lean. They are showing their short side on purpose to keep a strong arm in reserve — the Xiongnu cannot be struck.", source: "Liu Jing's report to the emperor before the northward march, 200 BCE; Shiji, juan 99, Memoir of Liu Jing and Shusun Tong (assembled in Zizhi Tongjian, scroll 11)" },
      appearsIn: [
        { ep: "read/han/02/", num: 2, panels: [1, 4, 10, 11, 12, 16] }
      ],
      relations: [
        { to: "liu-bang", kind: "commander", note: "A conscript in a sheepskin coat who argued the court into camping the capital inside the pass, was chained for saying the Xiongnu could not be attacked, and had the chains taken off in front of the army on the road home." },
        { to: "modu", kind: "enemies", note: "He read the bait — the old men, the starving cattle, the strong arm held back — and was put in irons at Guangwu for reporting it." }
      ]
    },
    {
      id: "liu-ju", name: "Liu Ju", hanzi: "劉據", years: "d. 91 BCE", dynasty: "han", color: "#2e2e2e",
      role: "Son of a singing girl who became empress, heir for thirty-one years. He struck off the investigator's head with his own hand, held Chang'an five days, and hanged at Hu.",
      myth: { myth: "The crown prince made war on his father to seize the throne and died a rebel.", truth: "Ban Gu files him under the severe posthumous name li, but the same chapters twice say he was frightened and could not make himself clear, and that the digging had reached his courtyard while his father lay ill at the summer palace with no answer going back. He held Chang'an five days and hanged himself in a storehouse at Hu two hundred li east of the walls. The dynasty never treated him as a criminal: his grandson came out of a gaol to the throne and rebuilt and endowed his tomb-park (Hanshu, juan 63; juan 8; juan 66)." },
      portrait: "assets/portrait-liuju.png",
      sourceQuote: { text: "You wretch of Zhao! Was it not enough for you to set a king and his son at odds in Zhao? Must you set my father and me at odds as well?", source: "Liu Ju, the Crown Prince, over the head of Jiang Chong whom he struck off with his own hand, 91 BCE; Hanshu, juan 45, Biography of Jiang Chong (the same curse in juan 63, Biographies of the Five Sons of Emperor Wu)" },
      appearsIn: [
        { ep: "read/han/07/", num: 7, panels: [10, 11] }
      ],
      relations: [
        { to: "emperor-wu", kind: "father", note: "His father made him heir at seven and set him the Gyang Chun in the rival reading, and in the end wrote his chancellor the order to clear the streets of him." },
        { to: "jiang-chong", kind: "enemies", note: "The commissioner dug paulownia figures among the column bases of the eastern palace, and the prince cut him down and cursed him as the man who had already divided one king and son." },
        { to: "shi-de", kind: "client", note: "His Junior Tutor, the only voice the record keeps from inside the eastern palace, who argued the household must strike before it was struck." }
      ]
    },
    {
      id: "liu-pi", name: "Liu Pi", hanzi: "劉濞", years: "d. 154 BCE", dynasty: "han", color: "#7a5f3a",
      role: "King of Wu, sixty-two in 154 BCE, son of the founder's elder brother and therefore the founder's nephew. He had coins cast from his mountains and salt boiled from his sea, had not attended court for a generation, and lost a war that lasted three months.",
      myth: { myth: "Punish the traitor beside the emperor and clear his path: the seven kingdoms rose as a loyal protest, driven to arms by one wicked adviser.", truth: "That was the slogan, and the record says so in as many words — the rising was nominally to kill Chao Cuo (Shiji, juan 106; juan 101). The same books show what sat under it: the copper hills of Yuzhang worked by runaways the empire could not get back, salt boiled from the sea, no land tax taken from his own people for a generation, seasonal gifts to every man of note, and officials from other kingdoms sent away empty-handed when they came for fugitives; the Shiji says this ran on for forty-odd years and draws the conclusion itself, that this is how he could put their multitude to work. When the emperor's envoy reached the camp with the pardon and the restored boundaries, Liu Pi laughed, said he was already the Emperor of the East, would not kneel to take it, and kept the man under guard (juan 101). Two officers in the record say the killing of Cuo achieved nothing: one returned from the front, and one said it to a surrendered king's face." },
      portrait: "assets/portrait-liupi.png",
      sourceQuote: { text: "I am sixty-two years old and I will lead this in person. My youngest son is fourteen and goes before the men. Anyone between my age and his is called up.", source: "The king of Wu calling his kingdom out to the field, first month of 154 BCE; Shiji, juan 106, Memoir of the King of Wu (Hanshu, juan 35, Memoir of Jing, Yan and the King of Wu)" },
      appearsIn: [
        { ep: "read/han/03/", num: 3, panels: [2, 8, 11] }
      ],
      relations: [
        { to: "emperor-jing", kind: "rivals", note: "He was the founder's nephew and the emperor's father's first cousin, and he rose over the land cut from his kingdom and a son killed years before with a gaming board." },
        { to: "chao-cuo", kind: "enemies", note: "Cuo had told the late emperor for years that Wu could be cut; the rebellion's slogan asked for his head, and the empire sent it out to the market." }
      ]
    },
    {
      id: "liu-quli", name: "Liu Quli", hanzi: "劉屈氂", years: "d. 91 BCE", dynasty: "han", color: "#6b4a4a",
      role: "The emperor's nephew and the second chancellor of these eleven months. He won the street war, and was cut in two afterwards on a fresh charge of witchcraft.",
      myth: { myth: "Liu Quli was a stanch defender of the throne who fell to a later intrigue.", truth: "He did win the street war for his uncle, and the record dates the five days and the tens of thousands dead to his command. But it also gives him a bargain struck with the general Li Guangli at the Wei bridge to make a rival prince heir, and makes his own end a charge of the very crime he had been suppressing: his wife accused of sacrificing at the soil-altar and cursing the emperor, he was paraded through the town and cut in two, his family's heads on the Huayang street (Hanshu, juan 66; juan 6)." },
      portrait: "assets/portrait-liuquli.png",
      sourceQuote: { text: "The chancellor who divided the seal and held the capital's streets against the crown prince, and was loaded in a provision-cart and cut in two in the eastern market some months later on a fresh charge of the same witchcraft.", source: "The record of Liu Quli; the histories give no speech of his; Hanshu, juan 66, Biographies of Gongsun He, Liu Quli, Tian Qianqiu and others; the street war also in juan 6 and juan 63" },
      appearsIn: [
        { ep: "read/han/07/", num: 7, panels: [15] }
      ],
      relations: [
        { to: "liu-ju", kind: "enemies", note: "He was the emperor's nephew and the chancellor who took the order to make his ramparts of ox-carts and kill and wound in numbers, and whose five days broke the prince's hold on the city." },
        { to: "emperor-wu", kind: "commander", note: "His lord's letter to him during the fighting put being the emperor's nephew aside: did not the Duke of Zhou execute his own brothers?" }
      ]
    },
    {
      id: "liu-wu", name: "Liu Wu", hanzi: "劉武", years: "d. 144 BCE", dynasty: "han", color: "#4f6356",
      role: "King of Liang, the emperor's full brother and the empire's richest prince. He held Suiyang through the siege, was deliberately abandoned while he held it, and spent the rest of his life getting even.",
      myth: { myth: "The emperor promised him the throne and then cheated him of it, so Liang's revenge on the minister who blocked it was the owed anger of a wronged heir.", truth: "The promise is in the record and so is its killing: the emperor said it at a private drinking party, and Dou Ying took up the wine and answered in front of them that the throne is the founder's and passes father to son, so there was no business handing it to the king of Liang (Shiji, juan 107, relayed in Zizhi Tongjian, scroll 16). What came after was not feeling but machinery — the memoir dates the quarrel that finished his commander with one flat clause, that from that point the king of Liang and the Commandant were at odds (juan 57) — and his agents did kill Yuan Ang on the road outside the capital's gate wall (juan 101). Sima Qian's closing word on him is neither pity nor praise but a charge of presumption: because he was loved he held the richest land, and because the empire was prosperous he could match the emperor's carriages and robes (juan 58). Liang survived him only one year: it was divided into five kingdoms for his five sons after his death in 144 BCE." },
      portrait: "assets/portrait-liuwu.png",
      sourceQuote: { text: "He was loved, and he held the richest land; and it fell in the Han's prosperous years, when the people were rich, so he piled up stores and enlarged his palaces until his carriages and robes matched the Son of Heaven's. That, too, was presumption.", source: "Sima Qian's judgment closing the hereditary house; Shiji, juan 58, Hereditary House of the King of Liang" },
      appearsIn: [

      ],
      relations: [
        { to: "emperor-jing", kind: "brother", note: "Full brother to the emperor and the empress dowager's favourite, and the man whose city was given to the rebels to chew on while the war was won over it." },
        { to: "zhou-yafu", kind: "enemies", note: "He held Suiyang through the siege while the Commandant let him be beaten to pieces, and spent the rest of his life at the empress dowager's ear against him." },
        { to: "yuan-ang", kind: "enemies", note: "When the king wanted to be heir, Ang argued the throne down on the house's own rule, and the king's agents caught him outside the gate wall at Anling." }
      ]
    },
    {
      id: "liu-xin", name: "Liu Xin", hanzi: "劉歆", years: "d. 23 CE", dynasty: "han", color: "#3f4a5a",
      role: "The age's greatest scholar of texts and the New's Teaching Master of the State, the man who wrote its ceremonies. An open indictment named him as the one who had inverted the Five Classics; he took his own life after a plot.",
      myth: { myth: "The man who wrote the New dynasty's rituals went down loyally with it, a scholar's martyr to the throne that had taken his own clan's empire.", truth: "He served that throne for over a decade and then plotted against it, and the record preserves both halves without stitching them into a motive. An old general had already asked publicly for his head, naming him as the one who had inverted the Five Classics and made the scholars unsure; Mang was furious, had the man led out, and then took part of what he said. When the scholar's own plot failed in 23 CE he killed himself with a general of the guard, and the book's point about the cover-up is not about loyalty but about appearances: the emperor could not bear the scandal of an inner quarrel, so he hid how they died." },
      portrait: "assets/portrait-liuxin.png",
      sourceQuote: { text: "The Teaching Master of the State had inverted the Five Classics and made the scholars unsure — execute this few, and comfort the empire.", source: "Not his words: Gongsun Lu's open indictment of the New's ministers named him first — Hanshu, juan 99 lower" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [13, 15] }
      ],
      relations: [
        { to: "wang-mang", kind: "colleagues", note: "He was the age's greatest scholar of texts and the New's Teaching Master of the State, the man who wrote its ceremonies; and in the same year the empire came apart he plotted to hand the capital back to the Han and took his own life. Mang hated the scandal of an inner quarrel and hid the manner of their deaths." }
      ]
    },
    {
      id: "liu-yan", name: "Liu Yan", hanzi: "劉縯", years: "d. 23 CE", dynasty: "han", color: "#6d7d8a",
      role: "His elder brother, Bo Sheng, who liked retainers and hard drinkers more than ploughing and who actually raised the rising. Killed by the emperor the family had made, in 23 CE; honoured by his brother twenty-odd years later.",
      myth: { myth: "The restoration was planned and started by the future emperor, the careful student of the Book of Documents who never did anything by accident.", truth: "The record gives the rising to the elder brother and the caution to the younger. Bo Sheng kept company with brave men and fed retainers; when Nanyang starved he was selling grain at Wan, which is where the episode's politics start; the annal says the future emperor at first did not accept the plan, and only weighed that his brother would certainly raise something great and that Wang Mang's ruin was already visible. When the loot was shared out unevenly and the crowd turned on the Liu family, it was the elder who collected what his own kinsmen had taken and gave that away too. He was killed in 23 CE by the emperor his family had made, and was named the martial duke of Qi in 39 CE." },
      portrait: "assets/portrait-liuyan.png",
      sourceQuote: { text: "The young men of the clan hid when they heard the rising had begun, saying that Bo Sheng was going to get them killed; then they saw Liu Xiu in the crimson robe and the tall cap of an officer and were startled into settling down.", source: "The clan's own words about him, kept in his brother's annal — Hou Han shu, juan 1 upper" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [2, 3, 5] }
      ],
      relations: [
        { to: "emperor-guangwu", kind: "brother", note: "He liked retainers and hard drinkers more than ploughing, and the annal says he kept mocking his careful younger brother over farm work, comparing him to the first emperor's elder brother — the nobody of the family story. He raised the rising; his brother took the throne." },
        { to: "wang-mang", kind: "enemies", note: "He began in the ninth month of 23 CE on an ox, and got a horse only by killing the commandant of Xinye — the commandant of the emperor whose ruin he judged already visible. Years before that he had ridden to Yan You to plead a rent-arrears case for the marquis of his own village." }
      ]
    },
    {
      id: "liu-yan-of-yi", name: "Liu Yan of Yi", hanzi: "劉焉", years: "d. 194 CE", dynasty: "han", color: "#4a4a6a",
      role: "Imperial clansman who in 188 proposed turning the regional inspectors into governors with real power, then asked for such a post himself — a far southern province, to be out of the way — and got Yizhou instead.",
      myth: { myth: "The Liu Yan who opened the way for Liu Bei in Shu is one man, and he was a warlord who carved out a kingdom on purpose.", truth: "Readers meet two Liu Yans in these years, and this is not the one standing at the chassis of state in 189: this Liu Yan is of the imperial house, an uncle by kinship to Emperor Ling, who in 188 proposed turning the regional inspectors into governors with real troops and then asked to be one himself — and got Yizhou. The reform is the hinge: the Hou Han shu marks the year his advice was taken with six characters saying the house of Han declined from here. He held the province until his death in 194, and his son lost it to Liu Bei, who came of the Zhongshan branch and not of Yan's line." },
      portrait: "assets/portrait-liuyanofyi.png",
      sourceQuote: { text: "The regions are not quiet because the weight of the office is not enough. Choose the court's heavy men and make them governors, and the four quarters settle of themselves.", source: "Liu Yan's memorial of 188 CE; Hou Han shu, Memoir of Liu Yan, juan 75" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [17] }
      ],
      relations: [
        { to: "liu-bei", kind: "successor", note: "He asked for the province behind the passes and founded the court of Shu; a generation later a kinsman of another branch took it from Liu Yan's son." }
      ]
    },
    {
      id: "lu-bode", name: "Lu Bode", hanzi: "路博德", years: "fl. 102–99 BCE", dynasty: "han", color: "#5c6b33",
      role: "Strong-Crossbow Commandant, ordered to meet Li Ling halfway. Ashamed to be another man's rear, he asked to postpone the stroke to spring; the emperor read the plea as treachery and marched the five thousand out.",
      myth: { myth: "The obstructive officer whose pride withheld the reinforcements and let Li Ling's five thousand be surrounded and destroyed.", truth: "The record gives him an argument, not a shirking. Ordered to be Li Ling's rear in 99 BCE, the commandant who had built the Juyan frontier works in 102 BCE (Shiji, juan 110; Hanshu, juan 94 upper) countered with a real plan — hold till spring, then ride out of Jiuquan and Zhangye with five thousand horse each and take the Chanyu — and the clause on his motive is simply that, an older officer, he was ashamed to be placed behind Ling. It was the emperor who marched the five thousand out alone and sent Bode off to the West River, and his own column that season met no enemy and got nothing. Emperor Wu later admitted the error himself, saying he had been wrong to write Bode into the edict at all (Hanshu, juan 54; juan 62)." },
      portrait: "assets/portrait-lubode.png",
      sourceQuote: { text: "It is autumn and the Xiongnu's horses are fat; we cannot fight. Let me keep Ling until spring, then ride out Jiuquan and Zhangye, five thousand horse apiece, and fall on the east and west Junji together — the Chanyu can certainly be taken.", source: "Lu Bode's memorial to Emperor Wu against marching in autumn, made after he was shamed at being ordered to ride out as Li Ling's rear; the plea the emperor read as treachery — Hanshu, juan 54, Memoir of Li Guang and Su Jian; the shame of being placed under Ling is also carried in Shiji, juan 111" },
      appearsIn: [
        { ep: "read/han/06/", num: 6, panels: [3, 4] }
      ],
      relations: [
        { to: "li-ling", kind: "commander", note: "The throne ordered him to meet and serve as Li Ling's rear, and as an older frontier commandant he was ashamed to ride under the grandson of Li Guang, a man set over the palace stables." },
        { to: "emperor-wu", kind: "enemies", note: "He asked the emperor to wait for spring rather than march under Ling, and the emperor took the plea for treachery and suspected Ling of writing it." }
      ]
    },
    {
      id: "lu-zhi", name: "Lu Zhi", hanzi: "盧植", years: "d. 192 CE", dynasty: "han", color: "#7a4a3a",
      role: "North Commandant of the Guards, leading the northern army's five campuses, and the age's great teacher of the classics. He would not fee the Yellow Gate envoy sent to his camp, was reported for it by the man himself, and lost his command and very nearly his life.",
      myth: { myth: "A minor name in the novel's first chapter, a scholar who happened to be general.", truth: "He was the age's great teacher of the classics and the commander who very nearly finished the war by himself: works thrown round Guangzong, Zhang Jue fast inside them all summer. That was going well enough to be complained of — a eunuch came to inspect the camp, was paid nothing, reported the town unwon, and the court took his command away and sent a mounted file to fetch him out in chains. He was condemned and escaped only by hiding. Note also that the memoir names the eunuch at his camp as a man of the surname Zhao, not Zhang Rang; Zhang Rang stands here for the ring that held the throne, not for the visitor." },
      portrait: "assets/portrait-luzhi.png",
      sourceQuote: { text: "If I am a criminal, how dare I not pay the salute? But when the order comes with its settled wording, I will take it then.", source: "Lu Zhi's answer to the eunuch who came to his camp and was given nothing, 184 CE; Hou Han shu, Memoir of Lu Zhi — his words, compressed" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [9, 10, 14, 16, 18] }
      ],
      relations: [
        { to: "huangfu-song", kind: "allies", note: "He testified for the general the inner court was prosecuting, and when the arrest came for him it was that general's road he was taken down." },
        { to: "zhu-jun", kind: "colleagues", note: "North, right and left central-intelligence generals in the one emergency, and three men the court afterwards made examples of." },
        { to: "liu-bei", kind: "patron", note: "The Three Kingdoms history says a kinsman's son of Zhuo, then of no name, sat in his classes in the north — he taught the man who outlasted the dynasty he saved." }
      ]
    },
    {
      id: "ma-yuanyi", name: "Ma Yuanyi", hanzi: "馬元義", years: "d. 184 CE", dynasty: "han", color: "#705a3f",
      role: "Zhang Jue's chief of one great battalion, who gathered tens of thousands out of Jing and Yang for a junction at Ye, came and went to the capital and took two Regular Attendants at the emperor's elbow as his men inside it, and was torn apart by teams at Luoyang when a fellow disciple gave the whole arrangement away.",
      myth: { myth: "The rising was a spontaneous explosion of desperate peasants, which is why it startled the court.", truth: "It had a man in Luoyang with a purse. Ma Yuanyi's work — years of recruiting in the south and east, then the march of the southern disciples north to a junction, then Regular Attendant Feng Xu and the eunuch Xu Feng bought to open the city from inside — is what the record has instead of spontaneity. The rising went early because his own disciple Tang Zhou informed in the first month of 184, and the court spent three months of warning on it and still nearly fell. He was torn apart by teams in the capital's market, and the patrol lists went out from him." },
      portrait: "assets/portrait-mayuanyi.png",
      sourceQuote: { text: "For years he had been drawing the officials of the southern commanderies over; now he led tens of thousands of the disciples of Jing and Yang toward the capital, with men inside the palace to open the gates for him.", source: "the Hou Han shu's account of Ma Yuanyi's commission in the Yellow Turban plot of 184 CE, the memoirs' narrative about him and not his own words; Hou Han shu, Memoir of Huangfu Song; juan 78, Memoir of the Eunuchs" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [5, 7] }
      ],
      relations: [
        { to: "zhang-jue", kind: "colleagues", note: "Zhang Jue's grand-officer for the south, and the movement's only recorded line into the capital's inner court." }
      ]
    },
    {
      id: "modu", name: "Modu", hanzi: "冒頓單于", years: "d. 174 BCE", dynasty: "han", color: "#4a6670",
      role: "Chanyu of the Xiongnu. He drilled his escort with a whistling arrow, killed his father with it, took a horse, a wife and a thousand li of empty grazing from the Eastern Hu, then hid his fat cattle and strong riders to lure the Han north.",
      myth: { myth: "A nomad raider who happened to be strong: the steppe comes and goes, it has no policy, and only a wall is an answer to it.", truth: "The record makes him a state-builder who ran deliberate deception as doctrine. He drilled his escort to shoot whatever his whistling arrow struck, on pain of death, tested the drill on his own best horse and his own favourite wife, then put the arrow into his father in 209 BCE, and afterwards killed his stepmother, his brother and every official who would not take the order (Shiji, juan 110). He let the Eastern Hu ask him for a thousand-li horse, then for a wife, then for a strip of grazing nobody lived on, gave the first two, and executed every councillor who said the grass could be spared. At Pingcheng he showed the Han envoys only the old and the starving on purpose; at Baideng he loosed picked cavalry into a ring and then opened one corner of it on his wife's argument and a rendezvous his defectors failed to keep; the settlement that followed was drafted as an agreement between two courts sworn as brothers, and it held, with quarrels, until 133 BCE." },
      portrait: "assets/portrait-modu.png",
      sourceQuote: { text: "What they asked for is waste grass — but a state stands on its land. How can it be given away!", source: "Modu to his councillors on the Eastern Hu's third demand, before he rode out and destroyed them; Shiji, juan 110, Annals of the Xiongnu (Hanshu, juan 94a)" },
      appearsIn: [
        { ep: "read/han/02/", num: 2, panels: [2, 3, 4, 6, 7, 8, 11, 13, 15] }
      ],
      relations: [
        { to: "liu-bang", kind: "enemies", note: "He hid his fat cattle and his picked riders behind old men and lean animals to lure the emperor forward, then closed a ring of cavalry sorted by coat colour round Baideng for seven days and let one corner open." },
        { to: "han-xin", kind: "allies", note: "The frontier king of Han handed him Mayi and then led Xiongnu cavalry against his own empire for five years, which is how the Chanyu knew where the Han army was." },
        { to: "liu-jing", kind: "enemies", note: "The one man in the Han court who said out loud that he could not be attacked, and the one who afterwards wrote the bride, the yearly cargo and the sworn brotherhood that answered him." }
      ]
    },
    {
      id: "ou-bo", name: "Ou Bo", hanzi: "區博", years: "fl. 12 CE", dynasty: "han", color: "#3d5a45",
      role: "A middle-rank palace officer. One memorial of his — the well-field has been dead a thousand years, not even Yao and Shun could revive it in a hundred — reversed the dynasty's central law.",
      myth: { myth: "Wang Mang's land law was killed by the great families of the empire, an interest-group veto, and the man who spoke it down was their mouthpiece.", truth: "The record gives neither the gentry nor a motive to him at all. It keeps one argument, which is about time and not about property: the well-field was a sage's law, but it had been abolished for a very long time; Qin had read the people's hearts and got the greatest profit out of the change, and the realm had still not wearied of the harm Qin left behind; to go against the hearts of the people now and chase a track cut off a thousand years ago was something even Yao and Shun risen again could not do in a hundred years. And the repeal that followed is not a legalisation: the emperor ordered that those holding named king's fields might sell them, and that those who had already bought or sold persons should for the present not be prosecuted." },
      portrait: "assets/portrait-oubo.png",
      sourceQuote: { text: "The empire has only just been settled and the ten thousand peoples are newly attached. This is not the time to do it.", source: "Hanshu, juan 99 middle — from his memorial against the king's-fields and private retainers law; the book also has him say the well-field has been dead a thousand years and not even Yao and Shun could revive it in a hundred" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [8] }
      ],
      relations: [
        { to: "wang-mang", kind: "commander", note: "He was a middle-rank palace officer in the New's own government, and he was the one man whose argument the emperor accepted — not because it overturned the reading of the classics, but because the empire would not read it." }
      ]
    },
    {
      id: "ouyang-xi", name: "Ouyang Xi", hanzi: "歐陽歙", years: "d. 39 CE", dynasty: "han", color: "#4f6356",
      role: "Grand Minister over the Masses, a teacher of the Documents from Runan, put in chains in 39 CE over the figures in the land-and-household audit and dead in prison within the year.",
      myth: { myth: "The audit of 39 CE was a routine piece of administrative housekeeping that cost nobody his career.", truth: "It cost the Grand Minister over the Masses his life, and it was the second holder of that office to die in eighteen months — one dismissed and by his own hand, one in chains. In the ninth month of 40 CE the governor of the capital commandery and ten-odd more went to prison and died there for the numbers. Then the land answered: the great families of the commanderies, the men who held the local soldiers, and the ordinary bandits rose everywhere in the same months, and the court did not send an army. It sent a proclamation." },
      portrait: "assets/portrait-ouyangxi.png",
      sourceQuote: { text: "The charge against him in the annal is four characters: the audit was not done truthfully. He was put in chains and dead in prison within the year.", source: "The four-word charge is the annal's own, not a speech of his — Hou Han shu, juan 1 lower, Annals of Emperor Guangwu" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [15] }
      ],
      relations: [
        { to: "emperor-guangwu", kind: "commander", note: "A teacher of the Documents from Runan who had served the throne through the Hebei years and was made Grand Minister over the Masses; when the land-and-household audit came in crooked in 39 CE he was thrown into prison, and the emperor would not let him out alive." }
      ]
    },
    {
      id: "ren-an", name: "Ren An", hanzi: "任安", years: "d. 91 BCE", dynasty: "han", color: "#55483a",
      role: "Courtesy Shaoqing: an officer in Wei Qing's household who would not change masters when the younger general rose, later protector of the Northern Army. He wrote to a friend in the inner chambers to reproach him with the duty of recommending men, and got this answer.",
      myth: { myth: "Ren An is remembered as a good man because a great one wrote him a letter.", truth: "The histories keep him for two stubborn acts and not one line of his own writing. He would not change masters when the Brilliant Rider rose, in an age when everybody else did and got office for it; and twenty-eight years later, as Protector of the Northern Army, he took the crown prince's credential out of his hand, closed the gate on it, and would not move either way — and was sentenced for watching and waiting. He died in the year the reply to his letter is dated to, and his own letters did not survive the age that copied this one." },
      portrait: "assets/portrait-renan.png",
      sourceQuote: { text: "All the old friends and household men of Wei Qing went off to follow the Brilliant Rider and got office and rank from it. Only Ren An would not.", source: "Sima Qian on the drift out of Wei Qing's household after 119 BCE; Shiji, juan 111, Biographies of the General and the Brilliant Rider; career in Shiji, juan 104" },
      appearsIn: [
        { ep: "read/han/05/", num: 5, panels: [13] },
        { ep: "read/han/06/", num: 6, panels: [17] }
      ],
      relations: [
        { to: "wei-qing", kind: "patron", note: "He was an officer of Wei Qing's household and stayed in it after the younger general's rise made leaving the obvious move." },
        { to: "sima-qian", kind: "colleagues", note: "He wrote at his friend in the inner chambers about the duty of recommending worthy men, and this letter is the answer he got." }
      ]
    },
    {
      id: "shi-de", name: "Shi De", hanzi: "石德", years: "d. 91 BCE", dynasty: "han", color: "#3f4a5a",
      role: "One of the prince's teachers, afraid of dying with his pupil. The only voice the record keeps from inside the eastern palace: proof dug up by an accuser, he says, proves nothing.",
      myth: { myth: "The rising of 91 BCE was the crown prince's own plot and his tutors merely followed him into it.", truth: "The record reverses this. Shi De, afraid the tutors would die with the prince, is the one who argues the household must strike first, on the ground that a proof dug up by an accuser proves nothing and the prince cannot make himself clear to an emperor lying sick at Ganquan. Ban Gu keeps the speech, the Fusu precedent and the prince's agreement because he wants the reader to see a frightened household choosing an act it could not undo. After the prince named his tutors to lead the divisions, Shi De appears in the book no more (Hanshu, juan 63; juan 66)." },
      portrait: "assets/portrait-shide.png",
      sourceQuote: { text: "The chancellor's son, the two princesses and the Wei have all died under this charge. Now the shaman and the imperial officer dig, and proofs appear; but none can say whether the shaman laid them there or they were truly there.", source: "Shi De, Junior Tutor of the Crown Prince, to Liu Ju in 91 BCE; Hanshu, juan 63, Biographies of the Five Sons of Emperor Wu" },
      appearsIn: [
        { ep: "read/han/07/", num: 7, panels: [10] }
      ],
      relations: [
        { to: "liu-ju", kind: "patron", note: "He was the prince's Junior Tutor and feared being executed with the rest of the household, so it was he who told his lord to forge an order and arrest Chong." },
        { to: "jiang-chong", kind: "enemies", note: "His whole speech is aimed at the commissioner: an accuser who digs up his own proof cannot be answered, and the precedent he names is Fusu, who took the sword when the order came." }
      ]
    },
    {
      id: "sima-qian", name: "Sima Qian", hanzi: "司馬遷", years: "fl. 108–91 BCE", dynasty: "han", color: "#2e2e2e",
      role: "Grand Astrologer, keeper of the stone chamber and the golden cases. He had never drunk a cup with Li Ling; asked his opinion he gave it, and took the palace punishment rather than leave a hundred and thirty chapters unfinished.",
      myth: { myth: "He was castrated and then put to death because the emperor read his history and was enraged by its candour.", truth: "Both books give one narrow cause, and it is a spoken sentence about Li Ling in the year after the surrender — he says himself that with his mouth's words he met this calamity — years before the book was finished. No official history has the emperor reading a page of it before punishing the man; the record says the opposite, that afterwards he was made Master of the Secretariat and honoured and entrusted with the documents that reached the throne. The stories of a ruler reading and killing the historian are later than the histories and reach us in anecdote. And no history used here says when or how Sima Qian died at all, which is the strangest silence in the chapter." },
      portrait: "assets/portrait-simaqian.png",
      sourceQuote: { text: "A man must die once. Some deaths are weightier than Mount Tai, some lighter than a feather — it all lies in what they are for.", source: "Sima Qian, the letter of reply to Ren An; Hanshu, juan 62, Memoir of Sima Qian; the same document transmitted independently in Wenxuan, juan 41" },
      appearsIn: [
        { ep: "read/han/06/", num: 6, panels: [1, 7, 13, 14, 17, 18] }
      ],
      relations: [
        { to: "ren-an", kind: "colleagues", note: "Ren An's reproach about the duty of recommending men is the occasion of the letter, and Sima Qian answers that he has no standing left to answer it." },
        { to: "li-ling", kind: "allies", note: "He had no debt to Li Ling and no party, and he said in front of the court that five thousand foot had been made to carry a whole campaign's failure." },
        { to: "emperor-wu", kind: "enemies", note: "The emperor judged the speech a slur on his wife's brother and a plea for the surrendered general, and he took the palace punishment rather than leave a hundred and thirty chapters unfinished." }
      ]
    },
    {
      id: "tangyi-fu", name: "Tangyi Fu", hanzi: "堂邑父", years: "fl. 138–126 BCE", dynasty: "han", color: "#705a3f",
      role: "A Xiongnu-born slave of the Tangyi household who went with him as guide and bowman and kept the party fed by shooting game when the rations gave out. One of the two men, out of over a hundred, who came back.",
      myth: { myth: "The loyal barbarian servant who saves the hero on the road — a stock figure with a story of his own.", truth: "He is real, and he is one clause. The histories name him only as a Xiongnu of the Tangyi household, a good shot who kept the party alive by hunting when there was nothing to eat, and they give him one reward after the return: the title Lord Who Bore the Mission, which is a title and not a marquisate. The Books say nothing at all about the son his master left behind in the steppe, and the only figure the historian sets against the whole thirteen years belongs to the party and not to the man: a hundred-odd went out, two came back." },
      portrait: "assets/portrait-tangyifu.png",
      sourceQuote: { text: "The Xiongnu man who went with him was a good shot: when the party's food gave out, he lived by shooting birds and beasts for the fire.", source: "The historian's note on the guide — the record preserves no speech of his; Shiji, juan 123, Memoir of the Peoples of the West; Hanshu, juan 61, Memoir of Zhang Qian and Li Guangli" },
      appearsIn: [
        { ep: "read/han/04/", num: 4, panels: [4, 7] }
      ],
      relations: [
        { to: "zhang-qian", kind: "commander", note: "He rode out as Zhang Qian's guide and bowman, was the only man who kept the party fed when the rations failed, and came home with him as one of two survivors." }
      ]
    },
    {
      id: "tian-qianqiu", name: "Tian Qianqiu", hanzi: "田千秋", years: "d. 77 BCE", dynasty: "han", color: "#8a6a2f",
      role: "An officer of the high tomb, over eight feet tall, who put the dead prince's case in one sentence about a son playing with his father's weapons and was made chancellor for it.",
      myth: { myth: "Tian Qianqiu was a man of deep experience and statesmanship whom the emperor promoted for his wisdom.", truth: "The Book of Han says the opposite in as many words: he had no other talent or learning and no record of service, and took the chancellorship within a month on one sentence, which had never happened before. He was an officer of the high tomb-park, over eight feet tall with a good presence, who put the dead prince's case into the line about a son playing with his father's weapons and said a white-haired old man had taught him the words in a dream. He was called the Carriage Chancellor because his years let him bring a small cart into the palace, and the emperor said the High Ancestor's spirit had sent him (Hanshu, juan 66)." },
      portrait: "assets/portrait-tianqianqiu.png",
      sourceQuote: { text: "A son who plays with his father's weapons deserves a beating. When the Son of Heaven's son kills a man by mistake, what crime is worth speaking of? I once dreamed of a white-haired old man who taught me these words.", source: "Tian Qianqiu's urgent memorial clearing the crown prince's name, some while after 91 BCE; Hanshu, juan 66, Biography of Tian Qianqiu (the same words in juan 63)" },
      appearsIn: [
        { ep: "read/han/07/", num: 7, panels: [16] }
      ],
      relations: [
        { to: "emperor-wu", kind: "commander", note: "He was made Grand Herald on the spot for a single sentence and chancellor within months, the one minister in this episode to take the seal out of a dream he claimed." },
        { to: "jiang-chong", kind: "enemies", note: "His memorial woke the emperor to the prince's innocence, and the reckoning that followed wiped out Jiang Chong's kin and burnt the eunuch who had worked with him on a bridge." }
      ]
    },
    {
      id: "wang-mang", name: "Wang Mang", hanzi: "王莽", years: "d. 23 CE", dynasty: "han", color: "#54386b",
      role: "Regent, then the one emperor of the New. Poor in a house of nine marquisates, famous for his own frugality, he governed an empire the way he had read a classic: by correcting the words.",
      myth: { myth: "Wang Mang was a Chinese socialist a thousand years early: state land, state monopolies, price control and planned credit.", truth: "This is a twentieth-century reading — Hu Shi made it explicitly in the 1930s — and the laws name their own model, which is not a ministry of planning but the Rites of Zhou: the well-field of Yu, the Zhou officer who bought up unsold goods, the five levels of price in the Yueyu, the loan against interest for funerals and sacrifices. Ban Gu's character note is decisive: he could not start a single thing without first finding a line of scripture to authorise it. Nor was it egalitarian: the land law confiscated nothing from a household of eight or fewer male mouths, which makes it nearer a ban on the traffic than a redistribution, and its author withdrew it in the fourth year after one officer's memorial." },
      portrait: "assets/portrait-wangmang.png",
      sourceQuote: { text: "Heaven produced the virtue that is in me. What can the troops of Han do to me? — said on the terrace in the palace lake in the tenth month of 23 CE, with the mandate documents and the bronze Dipper in his arms.", source: "His own last recorded line; the book says he took it out of the Analects — Hanshu, juan 99 lower, Biography of Wang Mang" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [1, 2, 3, 4, 5, 6, 14, 17, 18] }
      ],
      relations: [
        { to: "grand-empress-dowager-wang", kind: "rivals", note: "She was the only refusal he could not buy or argue with. To take the throne he needed the Han's transmission seal, and she held it; she threw it on the floor at his messenger's feet and told his brothers they would be clan-exterminated — and he then gave a banquet in her honour on the terrace in the middle of the lake." },
        { to: "emperor-guangwu", kind: "enemies", note: "The man who replaced him was a distant grandson of the dynasty he had displaced, and had been one of the junior officers in the army he sent against the rising. He was killed at the end of the same year that the future emperor's brother was murdered by the emperor the Liu family had made." },
        { to: "liu-xin", kind: "colleagues", note: "He wrote his institutions out of the ritual classics and found the age's greatest scholar of texts to do the writing with him; the book's summary of the mandate literature that came out of that partnership is that its wording was elegant and borrowed from the classics, and all of it manufactured argument." }
      ]
    },
    {
      id: "wang-yi", name: "Wang Yi", hanzi: "王邑", years: "d. 23 CE", dynasty: "han", color: "#6b4a4a",
      role: "Commander-in-chief of the New and Marquis of Chengdu. He led the mobilisation of a million, refused good advice twice under Kunyang, and rode back to Luoyang with a few thousand men.",
      myth: { myth: "Wang Yi's host was a million strong and was smashed by a handful at Kunyang.", truth: "The million is the court's own mobilisation figure in the Book of the Han, and the same book says four hundred and twenty thousand reached Luoyang; the Book of the Later Han keeps both numbers and adds that when Mang's troops came to the walls they were nearly a hundred thousand, with eight or nine thousand in the city, a thousand and odd in the relieving column and three thousand pushed in beside the water. No early text has ten thousand against a million. What the records do credit is a strike on a stationary ring: the camps were ordered not to move while their field commander fought with ten thousand, so the mass could not help one another, and then the storm came. He rode back to Luoyang with a few thousand men." },
      portrait: "assets/portrait-wangyi.png",
      sourceQuote: { text: "An army of a million, wherever it passes, should wipe everything out. Now we take this city, march on through blood, singing ahead and singing behind — is that not pleasant?", source: "Hanshu, juan 99 lower — his answer under Kunyang when Yan You told him to leave one side of the ring open" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [16] }
      ],
      relations: [
        { to: "wang-mang", kind: "commander", note: "He was the New's Commander-in-chief and Marquis of Chengdu, and he led the mobilisation the book calls a million, raised after two armies had already been lost in the east." },
        { to: "yan-you", kind: "colleagues", note: "The one sound piece of advice he received in the field came from his own subordinate, and he refused it twice: do not press a cornered foe, open a way out for a city under encirclement." }
      ]
    },
    {
      id: "wang-zhaojun", name: "Wang Zhaojun", hanzi: "王昭君", years: "fl. 33–31 BCE", dynasty: "han", color: "#6b5b73",
      role: "A woman of Nan commandery chosen into the palaces, given to the chanyu as a consort when the northern war was over. The era name was changed the same spring to mark the gift as finished.",
      myth: { myth: "Wang Zhaojun was sent out because she would not bribe the painter Mao Yanshou, who drew her portrait ugly in revenge; the emperor fell in love with her only at the farewell and could not recall his gift, and she drowned herself in a river rather than marry the new chanyu.", truth: "The portrait bureau and Mao Yanshou enter with a much later anecdote collection, the Miscellany of the Western Capital, and the drowning later still; the qin and the sorrow shown in song belong to that same literary tradition, not to the histories. What the official record gives is thin: selected into the palaces, handed to the chanyu in 33 BCE, styled Queen Who Sets the Barbarians at Peace, and the Book of the Later Han has her ask to go and the emperor see her only at the farewell. And the suicide is the exact reverse of the record's sequel: when Huhanye died she wrote asking to come home, was told to follow barbarian custom, remarried his successor, and bore daughters by him (Hanshu, juan 94 lower and juan 9; Hou Han shu, juan 89)." },
      portrait: "assets/portrait-wangzhaojun.png",
      sourceQuote: { text: "A daughter of good family from the palaces, given to the chanyu and styled Queen Who Sets the Barbarians at Peace; when he died she asked to go home, was told to follow barbarian custom, and remarried his successor.", source: "The historians' record of her; neither Han history gives her words of her own; Hanshu, juan 94 lower and the annals juan 9, with the request to return and the remarriage in Hou Han shu, juan 89, Biography of the Southern Xiongnu" },
      appearsIn: [
        { ep: "read/han/08/", num: 8, panels: [1] }
      ],
      relations: [
        { to: "huhanye-chanyu", kind: "husband", note: "The chanyu to whom the court gave her when the northern war was over, and whose death brought her a second husband by his own levirate custom." }
      ]
    },
    {
      id: "wei-qing", name: "Wei Qing", hanzi: "衛青", years: "d. 118 BCE", dynasty: "han", color: "#2f4a4a",
      role: "A marquis's household servant who called himself a slave's son, and rose to General-in-Chief. Formed his waggons into a ring, fought the Chanyu in a sandstorm, and never again received an increase of his fief.",
      myth: { myth: "Wei Qing was a great general quietly frozen out by court intrigue at the height of his honours.", truth: "The chapter knows a change of favour, not a purge. An office was invented big enough for two unbeatable generals, the two Grand Marshal seats, with equal stipends; Wei Qing retired further day by day while his nephew grew more honoured, and most of his household men went across to the better-paid command — the record names only Ren An as the man who would not. Sima Qian's judgment is unflattering and specific: a man of good and yielding nature who won the emperor by being soft, and there was no one in the empire who praised him. He died in his bed fourteen years after the Mobei; the extermination of his kindred came in 91 BCE with the crown prince's rising (Hanshu, juan 55)." },
      portrait: "assets/portrait-weiqing.png",
      sourceQuote: { text: "When the Marquises of Wuyi and Wu'an kept thick houses of retainers, emperors ground their teeth over it. A minister need only keep to the law and his duties — what has he to do with recruiting men?", source: "Wei Qing's answer when Su Jian asked why he did not recommend men and take disciples while he had the power; Shiji, juan 111, Biographies of the General and the Brilliant Rider" },
      appearsIn: [
        { ep: "read/han/05/", num: 5, panels: [2, 4, 5, 6, 8, 9, 10, 13, 14, 15, 17] }
      ],
      relations: [
        { to: "huo-qubing", kind: "colleagues", note: "His sister's son and his fellow Grand Marshal after 119 BCE, with rank and stipend fixed as equal because neither could be set above the other." },
        { to: "ren-an", kind: "client", note: "He took Ren An into his household, and Ren An was the only one of his men who would not leave for the brighter rising star." },
        { to: "emperor-wu", kind: "patron", note: "He was made General-in-Chief out of a marquis's stables, and after he circled the Chanyu he received no increase of fief and none of his officers were made marquises." }
      ]
    },
    {
      id: "wu-han", name: "Wu Han", hanzi: "吳漢", years: "d. 56 CE", dynasty: "han", color: "#45503f",
      role: "A fugitive horse-dealer from the far north-east who had sold grain on the road; Marshal-in-Chief for twenty years, the man who burned Chengdu after it had surrendered, and the one whose wife was scolded for buying land while the soldiers had none.",
      myth: { myth: "The soft way meant the restoration's government was gentle with its own officials.", truth: "The same pages that keep the emperor's word ruo dao keep his letters to his own commanders. He read Wu Han out in writing for throwing himself into a battle at Chengdu in 36 CE, after the city had surrendered and been burned; and in front of the court he scolded the same man's wife for buying land and houses while the soldiers had none. The man being reproved had been a fugitive selling grain on the road, and had held the highest military post of the empire for twenty years." },
      portrait: "assets/portrait-wuhan.png",
      sourceQuote: { text: "But I told you a thousand things, and here you go throwing yourself into a battle.", source: "The emperor's own letter reproving him after Chengdu in 36 CE — Hou Han shu, juan 18, Biography of Wu Han; juan 1 lower" },
      appearsIn: [
        { ep: "read/han/10/", num: 10, panels: [1, 7] }
      ],
      relations: [
        { to: "emperor-guangwu", kind: "commander", note: "A fugitive horse-dealer from the far north-east who had sold grain on the road; he was Marshal-in-Chief for twenty years, and the cavalry that saved the Hebei flight in the winter of 24 CE was his and Kou Xun's." },
        { to: "feng-yi", kind: "colleagues", note: "The record puts the two of them in the same month of the same settlement: the horse-dealer as Marshal-in-Chief beside a twenty-four-year-old as Grand Minister over the Masses and a district official of Yewang as Grand Minister of Works." }
      ]
    },
    {
      id: "xiang-yu", name: "Xiang Yu", hanzi: "項羽", years: "232–202 BCE", dynasty: "han", color: "#2e2e2e",
      role: "Commander of the allied armies, forty thousand strong. Broken the Qin main body already, he came west to punish a man he had agreed to make king.",
      myth: { myth: "He lost the empire at Hong Gate because he was too honourable to kill a rival when he had him at a banquet.", truth: "The histories give a smaller reason and a larger one. Smaller: he had taken Liu Bang's submission in front of his own officers, and Fan Zeng's signal was looked at and not answered (Shiji, juan 7). Larger: what he built three months later — eighteen kingdoms, himself styled overlord of Western Chu, Liu Bang parked behind three Qin kings in the valley of the Han — is the settlement that had to be lost, and Sima Qian sets it out in full before he lets the banquet carry any weight. The sentence he died saying, that Heaven was destroying him and fighting had done nothing wrong, is in the same chapter; the quote on this card is the Grand Historian's answer to it." },
      portrait: "assets/portrait-xiangyu.png",
      sourceQuote: { text: "He boasted of his achievements and ran on private cleverness without taking the ancients as his model, and in five years he lost his state. Still he did not wake up or blame himself. To say 'Heaven destroys me, not my fighting' — how mistaken!", source: "Sima Qian's judgment closing the annal; Shiji, juan 7, Basic Annals of Xiang Yu" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [3, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] }
      ],
      relations: [
        { to: "liu-bang", kind: "rivals", note: "He had agreed to make the man who entered Xianyang first a king, came west with four hundred thousand to punish him, drank at Hong Gate and let him go." },
        { to: "fan-zeng", kind: "patron", note: "The old man of Juchao he raised to the place of Second Father, whose three lifted jade ring-slices he looked at and did not answer." },
        { to: "ziying", kind: "enemies", note: "Liu Bang handed the surrendered King of Qin over to the palace officials unharmed; when Xiang Yu's army entered the capital it put him to death." }
      ]
    },
    {
      id: "xiao-he", name: "Xiao He", hanzi: "蕭何", years: "d. 193 BCE", dynasty: "han", color: "#40655a",
      role: "Liu Bang's old superior in the county office. While the generals scrambled for gold he loaded the archives: maps, registers, statutes.",
      myth: { myth: "Xiao He made Han Xin and Xiao He undid him: the patron who chased the great general through the night under a moonlit sky, then wrote to tell him to come and congratulate the court — and the palace guards killed him in a bell chamber.", truth: "The chase and the bell chamber belong to a different Han Xin, the Marquis of Huaiyin, whose memoir is Shiji, juan 92; the idiom about making and unmaking is a later proverb hung on that chapter, not a fact this line has reached. The King of Han who handed Mayi to the steppe in 200 BCE is a namesake and a different man entirely (juan 93). What Xiao He's own chapter puts first is quieter and better documented: while every general was filling carts with gold and silk he went to the offices of the chancellor and the censors and had the law codes, the household registers and the maps put away, and Sima Qian says in so many words that this is how the King of Han knew the empire's throat and its sores after Xiang Yu burned the capital (juan 53)." },
      portrait: "assets/portrait-xiaohe.png",
      sourceQuote: { text: "The King of Han came to know the empire's throats and sores, the numbers of its households, its strong places and its weak, and what the people suffered — all because Xiao He had taken the Qin documents whole.", source: "Sima Qian's judgment on what the archives were worth; Shiji, juan 53, Hereditary House of Chancellor Xiao (the same career in Hanshu, juan 40)" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [5, 8] }
      ],
      relations: [
        { to: "liu-bang", kind: "colleagues", note: "He had been chief clerk of Pei and had shielded Liu Bang from the law more than once while both were ordinary men, and later drew up the statutes the dynasty ran on." },
        { to: "fan-kuai", kind: "colleagues", note: "Old men of the same county office; when the gates opened and the generals ran for gold, these two took the two things nobody else wanted — the shield and the archives." }
      ]
    },
    {
      id: "xiao-wangzhi", name: "Xiao Wangzhi", hanzi: "蕭望之", years: "d. 47 BCE", dynasty: "han", color: "#4a5b6b",
      role: "The grandee who argued that a chanyu should be received as a guest and not a subject. He won, was painted on the wall of honoured ministers while still alive, and was driven to poison two years later.",
      myth: { myth: "Xiao Wangzhi was the honoured regent of the young Emperor Yuan, safe in the favour he had won.", truth: "He won the great rank argument, and was painted on the wall of the Qilin Pavilion from his likeness while still alive and still in the room, the tenth figure on it. Two years after the old emperor died, the secretaries Hong Gong and Shi Xian had him arrested; his wife said the summons could not be the emperor's will, his student Zhu Yun bade him die, and he asked for the poison at once so as not to be kept long a-dying. The young emperor struck his hands, said he had killed his best tutor, sent back the midday meal already found served, and wept where the court could see him (Hanshu, juan 78; juan 54)." },
      portrait: "assets/portrait-xiaowangzhi.png",
      sourceQuote: { text: "The chanyu is not reached by our calendar, so he is styled a matching state. Give him the rites of one who is not a subject, above the vassal kings, and yield the formal point rather than hold him as a subject.", source: "Xiao Wangzhi in the debate over the chanyu's rank before the audience of 51 BCE; Hanshu, juan 78, Biography of Xiao Wangzhi (the edict carried out in juan 94 lower)" },
      appearsIn: [
        { ep: "read/han/08/", num: 8, panels: [1, 5, 7, 8] }
      ],
      relations: [
        { to: "huhanye-chanyu", kind: "client", note: "He took up the chanyu's cause against the Chancellor and the Imperial Secretary, and the emperor's edict set the rank and the guest rite as Wangzhi had asked." }
      ]
    },
    {
      id: "yan-you", name: "Yan You", hanzi: "嚴尤", years: "d. 23 CE", dynasty: "han", color: "#33415c",
      role: "The one commander who argued against every frontier at once, and against encircling Kunyang. He got the king's head he said he would not hunt, and lost his rank for putting the bandits first.",
      myth: { myth: "The New dynasty's collapse was a war of geniuses: a brilliant general betrayed by a stupid commander-in-chief at Kunyang.", truth: "Yan You is real, and so is the advice he gave; what the record does not do is make him a hero of the defeat. His own career is a series of things he was punished for being right about, and at Kunyang he was a subordinate whose commander refused him twice and then lost the field because the mass was ordered to stay in its camps and could not help itself. The book's reason for the breaking is not genius but weather, order and arithmetic — the rain that fell like water poured, the wind, and a ring of tens of layers that could not move — and the two histories disagree about the numbers while agreeing about the storm." },
      portrait: "assets/portrait-yanyou.png",
      sourceQuote: { text: "Is this the fine-bearded one? How has he come to do a thing like this!", source: "Hou Han shu, juan 1 upper — his word on seeing Liu Xiu at Kunyang in 23 CE; the annal itself puts the admiration in his mouth" },
      appearsIn: [
        { ep: "read/han/09/", num: 9, panels: [16] },
        { ep: "read/han/10/", num: 10, panels: [4] }
      ],
      relations: [
        { to: "wang-yi", kind: "commander", note: "He served in the last and largest host the New could raise, and he gave its commander-in-chief the same advice twice — hurry on the pretender's capital and let the cities fall by themselves, then leave one side of the ring open so the besieged could run. Both were refused." },
        { to: "wang-mang", kind: "patron", note: "He argued against every frontier at once while the throne was spending armies on all of them, took the king's head he had said he would not hunt, and lost his rank for putting the bandits of the interior first." },
        { to: "emperor-guangwu", kind: "enemies", note: "He was on the wall-side of the battle that ended the dynasty, and the man he admired across the field was the junior officer whose thirteen horse went out at night and came back with three thousand." }
      ]
    },
    {
      id: "yuan-ang", name: "Yuan Ang", hanzi: "袁盎", years: "d. 148 BCE", dynasty: "han", color: "#705a3f",
      role: "A former chancellor's rival and the one man the emperor had not let Chao Cuo destroy. He proposed the execution that was meant to end the war, carried the pardon to Wu, and was refused audience.",
      myth: { myth: "He killed Chao Cuo out of private hatred — two ministers who loathed each other, and one of them used a rebellion to settle the account.", truth: "The hatred is in the record: the two would not look directly at each other, and Cuo's side of it survives as an accusation he made to a subordinate, that Ang had taken much Wu gold and sheltered the king's plans, for which Ang was reduced to commoner rank and then taken back into use (Shiji, juan 101; Hanshu, juan 49). What the book makes of the proposal itself is policy, not pique: it was the rebels' own slogan turned round and offered as a settlement, and Ang had to carry it — he went to Wu, was refused audience, and got out only because a clerk he had once found in bed with his maid had pardoned him, given him the girl and re-employed him now as a guard officer: that man bought two jars of strong wine, got the corner guard drunk, cut the tent and walked Ang out between the sleepers in wooden clogs (juan 101). He died in 148 BCE at another prince's order, over the succession rather than the fiefs (juan 101)." },
      portrait: "assets/portrait-yuanang.png",
      sourceQuote: { text: "Wu and Chu's anger is at Cuo: execute him, give back the lands that were cut, and the seven kingdoms can withdraw their armies without bloodshed.", source: "Yuan Ang to Emperor Jing in a cleared council, 154 BCE; Shiji, juan 101, Memoir of Yuan Ang and Chao Cuo (the same scene in juan 106; Hanshu, juan 49)" },
      appearsIn: [
        { ep: "read/han/03/", num: 3, panels: [1, 5, 6, 9, 11] }
      ],
      relations: [
        { to: "chao-cuo", kind: "rivals", note: "Cuo's answer to his criticism was the charge that survived in the record: Ang had taken a great deal of the king of Wu's money and had been covering for him all along." },
        { to: "emperor-jing", kind: "commander", note: "He asked for the room to be cleared before he would speak, and the emperor heard the proposal that sent a minister to the block and approved it." },
        { to: "liu-wu", kind: "enemies", note: "He argued the emperor's brother out of the succession, and the king of Liang had him knifed outside the gate wall at Anling." }
      ]
    },
    {
      id: "zhang-jian", name: "Zhang Jian", hanzi: "張儉", years: "d. 198 CE", dynasty: "han", color: "#4a6670",
      role: "The inspector who accused the great eunuch's mother's house and was hunted for it; he fled a year and every door he came to took him in, and the age named the flight for him.",
      myth: { myth: "The party was a secret society with rolls and officers, and the hunted man was its courier, carrying its papers from house to house.", truth: "He was hunted for a year across whole commands and the record captures no letter, no instruction, no organisation — the accusation was that the empire's famous men called one another famous, which the memoir itself treats as the offence. What was real was the counter-measure: a thousand in gold for his capture and the same crime charged to whoever sheltered him. He was amnestied in the rising year of 184 and lived another fourteen years; the shelterers the memoir names by story, the Kong house at Queshan, lost the elder brother to the court's choice." },
      portrait: "assets/portrait-zhangjian.png",
      sourceQuote: { text: "He changed his name and fled a whole year, and at every door he came to he threw himself on it; the houses took him in, though harbouring him was a charge against a whole clan.", source: "the Hou Han shu's narrative of Zhang Jian's flight; Hou Han shu, juan 67, Memoir of the Partisan Prohibitions — the memoir's phrase, which became the idiom, not a speech of his" },
      appearsIn: [
        { ep: "read/han/12/", num: 12, panels: [13, 14, 15] }
      ],
      relations: [
        { to: "li-ying", kind: "colleagues", note: "The case that destroyed Li Ying in 169 was built on Zhang Jian's accusation and Zhang Jian's flight: the palace charged that they had made one party of the empire's named men." }
      ]
    },
    {
      id: "zhang-jue", name: "Zhang Jue", hanzi: "張角", years: "d. 184 CE", dynasty: "han", color: "#8a6a2f",
      role: "The healer of Julu who styled himself Great Excellent Teacher, da xianliang shi, and served the way of the Yellow Emperor and Laozi, later called the way of Great Peace. Ten-odd years of charmed water and confession made him head of an enrolled empire inside the empire; he died of sickness before it was broken.",
      myth: { myth: "A sorcerer with magic and yellow earth, who raised an army of starving peasants overnight and founded organised Taoism.", truth: "He was a healer with a twelve-year start. The record gives him the way called Great Peace, water given a talisman and a recited formula, and one rule the sick had to keep first: kneel and put your faults on the record. Cures got told about, disciples went out in all directions, and eight provinces were enrolled into thirty-six battalions with appointed generals and an appointed day — an organisation, not an outbreak, and nothing in the record makes 184 a famine year. The religious line he is mistaken for, the Heavenly Masters of Hanzhong, is another family's and another book's; the Classic of Great Peace is never connected to him by the official histories." },
      portrait: "assets/portrait-zhangjue.png",
      sourceQuote: { text: "The Blue Heavens are spent, the Yellow Heavens rise: in the year jiazi, great fortune under all Heaven.", source: "the word written in white earth on the gates of the temples and provincial offices before the rising of 184 CE, the movement's own proclamation as the histories record it; Hou Han shu, Memoir of Huangfu Song, relayed in the Zizhi Tongjian" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [2, 5, 6, 7, 10, 12, 14, 15] }
      ],
      relations: [
        { to: "ma-yuanyi", kind: "colleagues", note: "His grand-officer for the south, whom he sent to Luoyang with the money that bought two men at the emperor's elbow." },
        { to: "huangfu-song", kind: "enemies", note: "The general who broke the movement: his coffin was opened after a sickness had killed him and his head sent south to the capital." }
      ]
    },
    {
      id: "zhang-liang", name: "Zhang Liang", hanzi: "張良", years: "fl. 218–195 BCE", dynasty: "han", color: "#54386b",
      role: "Heir of a destroyed state, counselor to both men in turn. Persuaded his general to sleep in the open and later walked him out of a banquet.",
      myth: { myth: "The idiom has him for ever: the man who decides a thousand li away inside the tent, a cold otherworldly strategist with no body and no wants.", truth: "The idiom is genuine — it is Liu Bang's own sentence, and Sima Qian quotes it back in the final judgment of the hereditary house (Shiji, juan 55). So is a good deal of the mystique: the same chapter says he learned grain-avoidance and breath-cultivation after the empire was settled and wanted to follow Red Pine, and that he shut his door and did not go out for over a year. What the chapter also records is a sickly man who asked for the smallest fief on offer — the place where he and Liu Bang had first met — and says in the text why he was asking for nothing. And Sima Qian adds that he had pictured someone towering and strange, and finding the portrait, found a face like a beautiful woman — the magician in the mountain cap is the novel's doing." },
      portrait: "assets/portrait-zhangliang.png",
      sourceQuote: { text: "You have no sooner entered the pass than you want to rest in what the Qin rested in. That is what is called helping the tyrant oppress.", source: "Zhang Liang to Liu Bang in the Qin palaces at Xianyang, 206 BCE; Shiji, juan 55, Hereditary House of Marquis Liu" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [6, 11, 14, 15, 18] }
      ],
      relations: [
        { to: "liu-bang", kind: "commander", note: "He had been given orders to attend the Lord of Pei for the King of Han, and said that vanishing now, with the man he served in danger, would be unrighteous and unspeakable." },
        { to: "fan-kuai", kind: "colleagues", note: "At the worst moment of the banquet Zhang Liang went out at the gate of the camp and brought Fan Kuai in with his shield; the counselor and the chariot-partner saved the same lord from opposite ends." }
      ]
    },
    {
      id: "zhang-qian", name: "Zhang Qian", hanzi: "張騫", years: "d. 114 BCE", dynasty: "han", color: "#7d5426",
      role: "An imperial attendant of Hanzhong who answered an advertisement for a man who could get there. Captured on the way out and again on the way back, gone thirteen years in all and more than ten of them in Xiongnu hands, he reached Ferghana, the Yuezhi, Bactria and Kangju and brought back the west as information.",
      myth: { myth: "Zhang Qian opened the Silk Road, so that caravans of Chinese silk went west to Rome and the world began to trade.", truth: "The name is modern: the geographer Richthofen coined Silk Road in 1877. What the histories say he did is zao kong, boring a hole through, and what moved west was state traffic: embassies of several hundred men carrying gold and silk goods worth tens of millions in cash, sent to buy alliances against the Xiongnu. Rome is in none of his reports; the farthest named place beyond the last state the Han reached is second-hand, and the Book of the Later Han states plainly that earlier Han envoys all turned back and not one of them got there. He died in 114 BCE, a year or so after being made Director of Ceremonies, and the west kept coming mainly because it wanted the market." },
      portrait: "assets/portrait-zhangqian.png",
      sourceQuote: { text: "I am the Han's envoy to the Yuezhi; the Xiongnu closed the road on me and I have got away. Send a man to conduct me on, and what Han will send you will be more than can be counted.", source: "Zhang Qian to the king of Dayuan asking for conductors and interpreters, c. 128 BCE; Shiji, juan 123, Memoir of the Peoples of the West; Hanshu, juan 61, Memoir of Zhang Qian and Li Guangli" },
      appearsIn: [
        { ep: "read/han/04/", num: 4, panels: [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13] }
      ],
      relations: [
        { to: "emperor-wu", kind: "patron", note: "The emperor advertised for a man who could reach the Yuezhi through Xiongnu country, and then spent twenty years of the treasury believing his answers." },
        { to: "tangyi-fu", kind: "allies", note: "His guide and bowman, a Xiongnu-born slave of the Tangyi household: of the hundred-odd men who rode out of Longxi, the two of them came back." },
        { to: "junchen", kind: "enemies", note: "Held by him ten-odd years, given a wife and a son, and never once parted with the Han staff with the three tufts on it." }
      ]
    },
    {
      id: "zhang-rang", name: "Zhang Rang", hanzi: "張讓", years: "d. 189 CE", dynasty: "han", color: "#55483a",
      role: "Regular Attendant, the man the emperor said was his lord. When the capital's plot was found out the emperor turned on the Regular Attendants, and Zhang Rang and his fellows went bareheaded and barefoot, paid their private wealth into the war, and were left in office; the officer who pressed for their deaths died in prison on a charge worked up against him.",
      myth: { myth: "A castrated demon who enchanted the emperor, and the eunuchs' power was pure manipulation of a puppet throne.", truth: "The histories make him the ablest of the inner court's men, and the emperor's own recorded phrase about him and his colleague is the truth of the relationship reversed: the throne said a certain Changshi was its father. When the rising of 184 broke, the emperor blamed the inner court and the ring threw itself on the empress dowager's intercession — bribed its way out of the purge that began with the arrests — and after that the court gave them its ear. He died in the spring of 189 in the palace coup that wiped his ring out, and his ring's killing of the general-in-chief brought a frontier army to the capital behind him." },
      portrait: "assets/portrait-zhangrang.png",
      sourceQuote: { text: "From that day the emperor's hand was in their hands: the appointments, the pardons and the punishments of the empire came out of the inner court, and whoever complained of it was told he kept a party.", source: "the Hou Han shu's judgment on the eunuch lords after the rising of 184; Hou Han shu, juan 78, Memoir of the Eunuchs — the historian's evaluation of him, not a speech" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [5] }
      ],
      relations: [
        { to: "li-ying", kind: "enemies", note: "The lists that damned him also named the men he outlived; he held the boy emperor's ear for twenty years after the second prohibition killed them." },
        { to: "huangfu-song", kind: "enemies", note: "He is the inner court behind the accusation that cost the saviour of the war his marquisate, twice." },
        { to: "lu-zhi", kind: "enemies", note: "The court that took Lu Zhi's command in chains was the court his ring held." }
      ]
    },
    {
      id: "zhizhi-chanyu", name: "Zhizhi Chanyu", hanzi: "郅支單于", years: "d. 36 BCE", dynasty: "han", color: "#3a5560",
      role: "His elder brother, who would not kneel and rode ten thousand li west instead. Built a city on the Talas, killed the envoys sent to talk to him, and was shot through the nose on the wall and died in his inner quarters.",
      myth: { myth: "Zhizhi was a cornered nomad who simply refused to come east, and his city was an accident of the retreat.", truth: "He was a builder and a breaker of envoys. The record has him absorb three steppe states, march into Kangju, raise a walled town with a doubled wooden palisade on five hundred conscripts a day for two years, and then write to Chang'an pretending he was in straits and wished to come, which the commentator Yan Shigu reads as mockery. Three missions sent to ask for the bodies of Gu Ji's party he detained and humiliated. He died fighting room to room into his inner quarters after an arrow went through his nose on the upper story of the wall (Hanshu, juan 70; juan 94 lower)." },
      portrait: "assets/portrait-zhizhichanyu.png",
      sourceQuote: { text: "He considered the road too far, and resented that Han backed his brother; he built a walled town in a foreign land, killed the envoys sent to talk to him, and was shot through the nose on the upper story.", source: "The historians' framing of Zhizhi Chanyu, whose own letter from Kangju claimed he lived in straits and wished to come; Hanshu, juan 94 lower, Biography of the Xiongnu, and juan 70, Biographies of Gan Yanshou and Chen Tang" },
      appearsIn: [
        { ep: "read/han/08/", num: 8, panels: [14] }
      ],
      relations: [
        { to: "huhanye-chanyu", kind: "brother", note: "The two brothers were rivals for one title across a war of five chanyus; one submitted to the Han and one would not, and the Han built its settlement on that refusal." },
        { to: "chen-tang", kind: "enemies", note: "The deputy who forged the edict and marched forty thousand to the Talas; the head his memorial asked to hang in the barbarian hostel street was Zhizhi's." },
        { to: "gan-yanshou", kind: "enemies", note: "The Protector General at the head of the columns that ringed his city, whose wife and ladies shot from the wall until an arrow took the chanyu in the nose." }
      ]
    },
    {
      id: "zhou-yafu", name: "Zhou Yafu", hanzi: "周亞夫", years: "d. 143 BCE", dynasty: "han", color: "#2f4a4a",
      role: "Marquis of Jiang, commander-in-chief. The man whose camp the late emperor had been stopped outside for discipline. He let the rebels beat the empire's richest fief to pieces, cut their grain, and would not fight until they were starving.",
      myth: { myth: "A general outside the court need not take every order from the Son of Heaven: the flawless disciplinarian who saved the dynasty by disobeying, and who never put a foot wrong in politics.", truth: "The refusal is real and thinner than the legend — he would not take the edict to relieve Liang and sent his light horse to seal the grain road instead; but the strategy had been agreed with the emperor before he left, in the words on this card, and approved (Shiji, juan 57). Xiliu is in the same chapter and needs no embellishment: the imperial advance party was stopped at the gate with the line that in this army we hear the general's orders, not the Son of Heaven's edict. What the record keeps as the rest of the man is politics lost, not avoided: he was outvoted at court, fell silent over a block of meat set in front of him at a banquet with no knife or chopsticks by it, and heard the emperor say as he left that such a sulk would not serve a young master. He was arrested over five hundred sets of store-made armour and shields his son had bought for his tomb; asked why he was arming himself in the world below, he stopped answering, went five days without food and died vomiting blood (juan 57; Hanshu, juan 40)." },
      portrait: "assets/portrait-zhouyafu.png",
      sourceQuote: { text: "The men of Chu are swift and reckless; do not meet their edge. Give them Liang to chew on, cut off their grain road, and they can be handled.", source: "Zhou Yafu's plan for the war, put to and approved by the emperor before he marched, 154 BCE; Shiji, juan 57, Hereditary House of the Marquis of Jiang (Zizhi Tongjian, scroll 16)" },
      appearsIn: [
        { ep: "read/han/03/", num: 3, panels: [13] }
      ],
      relations: [
        { to: "emperor-jing", kind: "commander", note: "The late emperor had marked him out at Xiliu for discipline and told his son he was the one to use in an emergency; the emperor approved this plan in advance and did not change it when the appeals came daily." },
        { to: "liu-wu", kind: "enemies", note: "He let the rebels beat the empire's richest fief to pieces because that was the plan the emperor had signed, and refused the edict that would have undone it; the king never forgave him." },
        { to: "liu-pi", kind: "enemies", note: "His light horse cut the road the rebels' grain came by, and at last their starving host came to the wall of his camp and challenged for a battle every day he did not give them." }
      ]
    },
    {
      id: "zhu-jun", name: "Zhu Jun", hanzi: "朱儁", years: "d. 195 CE", dynasty: "han", color: "#4f6356",
      role: "Right Commandant of the Guards, fighting his own war at Wan. The one officer who argues that men with no way out must fight to the death — and who refused a surrender for that reason, took the place by storm, and is credited with the killing either way.",
      myth: { myth: "The heroes of the novel's opening — the sworn brothers of the peach garden — made their names crushing the Yellow Turbans.", truth: "The record of that war has almost no room for them. It was fought and won by the dynasty's own career officers: Lu Zhi north against Julu, Huangfu Song and Zhu Jun west into Yingchuan, Dong Zhuo east, and a defeated Dong Zhuo who had to be lifted out by Lu Zhi's soldiers. Zhu Jun's own memoir states his price in the plainest way, as a credit: tens of thousands beheaded after Wan fell. The oath and the brothers' first battles belong to the fourteenth-century Romance, not to the histories — and the empire paid its real saviours with chains, dismissal and an invented charge." },
      portrait: "assets/portrait-zhujun.png",
      sourceQuote: { text: "A city whose help is outside holds to the last man when you press it. We are forcing men with no way out to be brave. Open the ring and fall on them as they come.", source: "Zhu Jun to his staff at Wan, 184 CE; Hou Han shu, Memoir of Zhu Jun, juan 66 — advice given to his officers, compressed into the form quoted" },
      appearsIn: [
        { ep: "read/han/13/", num: 13, panels: [9, 10, 11, 13, 16, 18] }
      ],
      relations: [
        { to: "huangfu-song", kind: "colleagues", note: "The second of the two central-intelligence generals of 184, fighting his own war at Wan while Song's fire went up in Yingchuan." },
        { to: "lu-zhi", kind: "colleagues", note: "Three commanders sent out of the northern army's campuses in one spring, and all three struck afterward by the court they rescued." },
        { to: "zhang-rang", kind: "enemies", note: "He was dismissed over his own report of the war, which is how the inner court answered the man who had taken Wan." }
      ]
    },
    {
      id: "ziying", name: "Ziying", hanzi: "子嬰", years: "d. 206 BCE", dynasty: "han", color: "#5f6a6a",
      role: "Forty-six days King of Qin. He killed the minister who had enthroned him, then came out in a plain cart with a cord about his neck.",
      myth: { myth: "He was the last emperor of Qin, and he gave up the empire meekly in a rope.", truth: "He was the last king. Zhao Gao put him at the head of the house in late 207, took the imperial style away and called him King of Qin, and the histories keep that title for his forty-six days (Shiji, juan 6; juan 8; Hanshu, juan 1). He was also not a passive man: those forty-six days were spent killing the chancellor who had enthroned him, by a feigned illness, a eunuch's blade in the ablutions palace, and three kin-groups exterminated behind it — and the speech on this card is the reason he gave his sons for the plot (juan 6; juan 87). The cord at the neck and the sealed tallies at Zhi Road are in the annals of Gaozu; the killing came later, and the man who did it was Xiang Yu." },
      portrait: "assets/portrait-ziying.png",
      sourceQuote: { text: "The Chancellor killed the Second Emperor at the Wangyi Palace, and, afraid the ministers would avenge him, pretended to set me up. Now he has me fasted and going to the temple — he means to kill me there.", source: "Ziying to his two sons on Zhao Gao's summons to fast at the ancestral temple, late 207 BCE; Shiji, juan 6, Basic Annals of the First Emperor of Qin (the killing itself in juan 87, Biography of Li Si)" },
      appearsIn: [
        { ep: "read/han/01/", num: 1, panels: [3] }
      ],
      relations: [
        { to: "liu-bang", kind: "enemies", note: "He came out in a white horse and an unadorned cart at Zhi Road with a cord round his neck, and Liu Bang took the surrender and handed him to the palace officials with nothing done to him." },
        { to: "xiang-yu", kind: "enemies", note: "The seals and tallies he gave up were those of an empire he had been demoted from forty-six days earlier; Xiang Yu's entry into the capital put him to death." }
      ]
    },
  ],
  // One entry per dynasty we publish episodes for. Everything downstream — the
  // homepage sections, the dynasty pages, the reader URLs, the build's page list and
  // the og cards — is derived from here, so a new dynasty means content files plus
  // this entry, not edits to the renderers. `dir`/`key` map content/<dir>NN.js to
  // window.<key>NN, published at <path>/NN/; `ogArt` is the master the dynasty's
  // social card is cropped from and `ogAlt` that card's alt text.
  lines: [
    {
      dynasty: "han", dir: "han", key: "HAN", path: "read/han", count: 13,
      heading: "The Han",
      ogArt: "panels/han01/00-cover.png",
      ogAlt: "A rebel army files down from a mountain pass toward the walled capital of Qin, 206 BCE",
      lede: "Thirteen episodes across the four centuries that gave China its name — from the hour a rebel army walked out of a mountain pass and promised the conquered a law worth obeying, to the year the empire's glue failed and the warlords inherited its provinces. Read them in order, or start anywhere.",
      chronology: [
        { year: "206 BCE", text: "Into the Pass: a rebel general abolishes the Qin code and promises three articles of law. Then Hong Gate.", source: "Shiji, juan 8, 9, 7" },
        { year: "202 BCE", text: "Xiang Yu is dead at the Wu river. Liu Bang becomes Emperor Gaozu.", source: "Episode 1" },
        { year: "200 BCE", text: "Baideng: the founder is held seven days by the steppe, and buys the next sixty years with silk and a borrowed princess.", source: "Episode 2" },
        { year: "196 BCE", text: "The vassal kings are removed one by one. The fiefs that survive are made smaller and safer.", source: "Hanshu, juan 1" },
        { year: "154 BCE", text: "The Seven Kingdoms rise over the plan to cut them back, and are broken in three months.", source: "Episode 3" },
        { year: "138 BCE", text: "Zhang Qian goes west to find the Yuezhi and never quite does. The road is bored open.", source: "Episode 4" },
        { year: "119 BCE", text: "The Mobei campaign: two generals, two columns, and the steppe's herds driven far beyond the river.", source: "Episode 5" },
        { year: "99 BCE", text: "Li Ling's crossbow column surrenders; the man who defends him takes the palace sentence instead of the block.", source: "Episode 6" },
        { year: "91 BCE", text: "The witchcraft prosecutions: effigies dug up by the thousand, a crown prince fighting in the streets of Chang'an, then dead.", source: "Episode 7" },
        { year: "89 BCE", text: "The Luntai edict — the emperor publicly withdraws the northern war he had waged for forty years.", source: "Hanshu, juan 7" },
        { year: "51 BCE", text: "Huhanye Chanyu comes to court as a subordinate. The steppe splits in two.", source: "Episode 8" },
        { year: "36 BCE", text: "Zhizhi Chanyu is killed in a far-off city by a Han colonel who acted without authority and was argued over afterwards.", source: "Episode 8" },
        { year: "8 CE", text: "Wang Mang takes the throne and starts renaming everything.", source: "Episode 9" },
        { year: "23 CE", text: "Kunyang breaks the new order; the usurper dies in his own palace pool.", source: "Episode 9" },
        { year: "25 CE", text: "Guangwu restores the Han, and moves the capital east to Luoyang.", source: "Episode 10" },
        { year: "39 CE", text: "The land-and-household audit, and six governors executed for falsifying it. The compromise that followed is the dynasty's.", source: "Episode 10" },
        { year: "56 CE", text: "The Feng Shan sacrifice, and a refusal to send an army further west than the next valley.", source: "Episode 10" },
        { year: "73 CE", text: "Ban Chao takes thirty-six men into the Western Regions and stays thirty years.", source: "Episode 11" },
        { year: "97 CE", text: "An envoy is sent on to the sea in the west and turns back. Then the passes close.", source: "Episode 11" },
        { year: "166 CE", text: "The Partisan Prohibitions: the empire outlawises the very families it later needs to fight for it.", source: "Episode 12" },
        { year: "184 CE", text: "The Yellow Turbans rise in eight provinces at once. The dynasty survives; its authority does not.", source: "Episode 13" }
      ]
    },
    {
      dynasty: "three-kingdoms", dir: "ep", key: "EP", path: "read/three-kingdoms", count: 12,
      heading: "Three Kingdoms",
      ogArt: "panels/ep01/15-two-banks.png",
      ogAlt: "Two armies on two banks of the Yangtze",
      lede: "Twelve episodes, running the whole arc of the age from Guandu (200) to the fall of Wu (280) — read them in order, or start anywhere. The Han line above tells you how the empire got into the state that broke.",
      chronology: [
        { year: "184", text: "The Yellow Turban uprising. The empire's glue fails.", source: "Hou Han shu; Sanguozhi" },
        { year: "200", text: "Guandu: Cao Cao breaks Yuan Shao and takes the north.", source: "Sanguozhi, Wei shu 1" },
        { year: "208", text: "Red Cliff: the fire that makes three states possible.", source: "This episode" },
        { year: "220", text: "Cao Pi takes the throne from Han. Wei begins; Han ends.", source: "Sanguozhi, Wei shu 2" },
        { year: "221", text: "Liu Bei proclaims the continuation of Han at Chengdu.", source: "Sanguozhi, Shu shu 2" },
        { year: "222", text: "Yiling: Lu Xun burns Liu Bei's linked camps.", source: "Episode 3" },
        { year: "229", text: "Sun Quan declares himself emperor. The third state is formal.", source: "Sanguozhi, Wu shu 2" },
        { year: "234", text: "Zhuge Liang dies at the Wuzhang Plains, still campaigning.", source: "Episode 4" },
        { year: "263", text: "Shu-Han surrenders to Wei.", source: "Sanguozhi, Shu shu 3" },
        { year: "280", text: "Jin takes Wu. The river is one again.", source: "Jin shu; Sanguozhi, Wu shu 2" }
      ]
    }
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
