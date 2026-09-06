window.SITE = {
  dynasties: [
    { id: "qin", name: "Qin", hanzi: "秦", from: -221, to: -206, color: "#3d3a35", blurb: "The first empire, and the shortest." },
    { id: "han", name: "Han", hanzi: "漢", from: -206, to: 220, color: "#7a2f22", blurb: "Four centuries that gave China its name." },
    { id: "three-kingdoms", name: "Three Kingdoms", hanzi: "三國", from: 184, to: 280, color: "#b3402a", blurb: "The empire breaks in three; the stories never stopped.", episodes: 12 },
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
      id: "liu-bei", name: "Liu Bei", hanzi: "劉備", years: "161–223", dynasty: "three-kingdoms", color: "#5c6b33",
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
      id: "lu-xun", name: "Lu Xun", hanzi: "陸遜", years: "183–245", dynasty: "three-kingdoms", color: "#40655a",
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
      id: "sun-quan", name: "Sun Quan", hanzi: "孫權", years: "182–252", dynasty: "three-kingdoms", color: "#54386b",
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
      id: "huang-quan", name: "Huang Quan", hanzi: "黃權", years: "d. 240", dynasty: "three-kingdoms", color: "#6d5a2f",
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
      id: "sima-yi", name: "Sima Yi", hanzi: "司馬懿", years: "179–251", dynasty: "three-kingdoms", color: "#37414f",
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
      id: "ma-chao", name: "Ma Chao", hanzi: "馬超", years: "176–222", dynasty: "three-kingdoms", color: "#7d5426",
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
      id: "han-sui", name: "Han Sui", hanzi: "韓遂", years: "d. 215", dynasty: "three-kingdoms", color: "#4a6670",
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
      id: "jia-xu", name: "Jia Xu", hanzi: "賈詡", years: "147–223", dynasty: "three-kingdoms", color: "#3f4a5a",
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
      id: "xu-chu", name: "Xu Chu", hanzi: "許褚", years: "d. c. 230", dynasty: "three-kingdoms", color: "#6b4a2f",
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
      id: "zhang-liao", name: "Zhang Liao", hanzi: "張遼", years: "169–222", dynasty: "three-kingdoms", color: "#8a6a2f",
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
      id: "li-dian", name: "Li Dian", hanzi: "李典", years: "c. 180–215", dynasty: "three-kingdoms", color: "#3d5a45",
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
      id: "yue-jin", name: "Yue Jin", hanzi: "樂進", years: "d. 218", dynasty: "three-kingdoms", color: "#40655a",
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
      id: "ling-tong", name: "Ling Tong", hanzi: "凌統", years: "189–217", dynasty: "three-kingdoms", color: "#5b4a68",
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
      id: "fa-zheng", name: "Fa Zheng", hanzi: "法正", years: "176–220", dynasty: "three-kingdoms", color: "#55603f",
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
      id: "huang-zhong", name: "Huang Zhong", hanzi: "黃忠", years: "d. 220", dynasty: "three-kingdoms", color: "#8a5a2e",
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
      id: "xiahou-yuan", name: "Xiahou Yuan", hanzi: "夏侯淵", years: "d. 219", dynasty: "three-kingdoms", color: "#5a3f63",
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
      id: "lu-meng", name: "Lu Meng", hanzi: "呂蒙", years: "178–220", dynasty: "three-kingdoms", color: "#3a5a6b",
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
      id: "cao-ren", name: "Cao Ren", hanzi: "曹仁", years: "168–223", dynasty: "three-kingdoms", color: "#6b3a3a",
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
      id: "yu-jin", name: "Yu Jin", hanzi: "于禁", years: "d. 221", dynasty: "three-kingdoms", color: "#4a4a5e",
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
      id: "cao-xiu", name: "Cao Xiu", hanzi: "曹休", years: "d. 228", dynasty: "three-kingdoms", color: "#8a4b3a",
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
      id: "zhou-fang", name: "Zhou Fang", hanzi: "周魴", years: "d. c. 228", dynasty: "three-kingdoms", color: "#4a6b5a",
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
      id: "jia-kui", name: "Jia Kui", hanzi: "賈逵", years: "d. 228", dynasty: "three-kingdoms", color: "#6b5a4a",
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
      id: "cao-shuang", name: "Cao Shuang", hanzi: "曹爽", years: "d. 249", dynasty: "three-kingdoms", color: "#7a3b4f",
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
      id: "cao-fang", name: "Cao Fang", hanzi: "曹芳", years: "c. 231–274", dynasty: "three-kingdoms", color: "#4a5a7a",
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
      id: "jiang-ji", name: "Jiang Ji", hanzi: "蔣濟", years: "d. 249", dynasty: "three-kingdoms", color: "#8a7a4a",
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
      id: "sima-shi", name: "Sima Shi", hanzi: "司馬師", years: "208–255", dynasty: "three-kingdoms", color: "#3f5a5c",
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
      id: "deng-ai", name: "Deng Ai", hanzi: "鄧艾", years: "d. 264", dynasty: "three-kingdoms", color: "#6b5b3a",
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
      id: "zhong-hui", name: "Zhong Hui", hanzi: "鍾會", years: "225–264", dynasty: "three-kingdoms", color: "#7a4a3d",
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
      id: "jiang-wei", name: "Jiang Wei", hanzi: "姜維", years: "202–264", dynasty: "three-kingdoms", color: "#3d5a5f",
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
      id: "liu-shan", name: "Liu Shan", hanzi: "劉禪", years: "207–271", dynasty: "three-kingdoms", color: "#8a7a4f",
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
      id: "zhuge-zhan", name: "Zhuge Zhan", hanzi: "諸葛瞻", years: "227–263", dynasty: "three-kingdoms", color: "#5f6a54",
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
      id: "wang-jun", name: "Wang Jun", hanzi: "王濬", years: "206–285", dynasty: "three-kingdoms", color: "#456b52",
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
      id: "sima-yan", name: "Sima Yan", hanzi: "司馬炎", years: "236–290", dynasty: "three-kingdoms", color: "#6b4a5f",
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
      id: "sun-hao", name: "Sun Hao", hanzi: "孫皓", years: "242–284", dynasty: "three-kingdoms", color: "#8a3b2e",
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
      id: "du-yu", name: "Du Yu", hanzi: "杜預", years: "222–285", dynasty: "three-kingdoms", color: "#4a5a3f",
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
    }
  ],
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
