window.EP03 = {
  id: "tk-03",
  dynasty: "Three Kingdoms",
  order: 3,
  title: "Fire at Yiling",
  subtitle: "Yiling, 222 CE",
  readMinutes: 8,
  hook: "Grief took Jing province and two of his sworn brothers; the war to take them back took four hundred li of stockades, one night of fire, and the emperor himself.",
  heroAlt: "Stockades burning along the wooded hills above the Yangtze gorges at Yiling, 222 CE",
  people: [
    { id: "liubei", name: "Liu Bei", hanzi: "劉備", years: "161–223", role: "Came east with everything Shu had to recover Jing province. Lost the line, the army and, within the year, his life.", portrait: "assets/portrait-liubei.png" },
    { id: "luxun", name: "Lu Xun", hanzi: "陸遜", years: "183–245", role: "A scholar made grand commander at thirty-nine. Waited six months against his own generals' contempt, then burned the line in a night.", portrait: "assets/portrait-luxun.png" },
    { id: "sunquan", name: "Sun Quan", hanzi: "孫權", years: "182–252", role: "Bought the north's neutrality on paper to take Jing province in fact, then chose a scholar over his oldest generals.", portrait: "assets/portrait-sunquan.png" },
    { id: "huangquan", name: "Huang Quan", hanzi: "黃權", years: "d. 240", role: "Argued against the war, commanded its northern bank, was cut off by the fire, and ended a honoured general of Wei.", portrait: "assets/portrait-huangquan.png" }
  ],
  panels: [
    {
      art: "panels/ep03/00-cover.png", ratio: 1.75, size: "full",
      caption: "221–222 CE. Two years after the Yangtze fire, the alliance it made was already dead: Jing province gone, Guan Yu dead, and Liu Bei coming east with everything Shu had.",
      sima: { text: "Episode 3 is told, like the others, only from the official histories: the Records of the Three Kingdoms, Pei Songzhi's fifth-century commentary, and the Zizhi Tongjian. The novel Romance of the Three Kingdoms is used nowhere as a source; where it disagrees, the Myth Check at the end says so.", source: "On our sources", tag: "note" }
    },
    {
      art: "panels/ep03/02-jing-lost.png", ratio: 1.75, size: "std",
      caption: "It began in 219, while Guan Yu was north at Fan: white-robed sailors in merchant hulls, a river taken without a battle, and Maicheng's last ride.",
      sima: { text: "Lü Meng crossed in plain clothes as merchants, took Jiangling without a fight, and Guan Yu — his army dissolved by letters sent home to it — was caught fleeing Maicheng and put to death on Sun Quan's order.", source: "Sanguozhi, Wu shu 2 & Shu shu 6; Zizhi Tongjian 68", tag: "history" }
    },
    {
      art: "panels/ep03/03-two-thrones.png", ratio: 1.75, size: "std",
      caption: "In 220 Cao Pi took the throne from Han. In 221 Liu Bei answered it at Chengdu, proclaiming Han not ended but continued — and a border war became a war between emperors.",
      sima: { text: "Cao Pi received the abdication in the tenth month of 220; Liu Bei proclaimed himself emperor in the fourth month of 221, giving the eastern war the dignity of a restoration.", source: "Sanguozhi, Wei shu 2 & Shu shu 2; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/04-zhang-fei.png", ratio: 1.75, size: "std",
      caption: "On the eve of the march, Zhang Fei was murdered in his camp by two officers he had whipped and kept at his side. They took his head to Wu.",
      bubbles: [
        { who: "liubei", name: "Liu Bei", side: "left", text: "You punish past all measure, and whip your own strong men, and keep them at your side — that is the road to disaster." }
      ],
      sima: { text: "Liu Bei had warned him in exactly these terms. Fan Jiang and Zhang Da killed Zhang Fei and fled to Wu with his head, on the day the army was to march.", source: "Sanguozhi, Shu shu 6; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/05-east-march.png", ratio: 1.75, size: "wide",
      caption: "Seventh month, 221: Liu Bei crossed the gorges. Sun Quan sent letters and hostages and asked for peace; the answer was no. So Sun Quan turned north on paper and took a king's seal from Wei.",
      sima: { text: "Sun Quan sued for peace and was refused; he submitted to Wei and was enfeoffed as King of Wu, buying the north's neutrality for the war in the west.", source: "Sanguozhi, Shu shu 2 & Wu shu 2; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/06-huang-quan-north.png", ratio: 1.75, size: "std",
      caption: "Huang Quan asked to lead the vanguard and keep the emperor behind. Refused, he took the northern bank of the river instead, to watch Wei while the army faced Wu.",
      bubbles: [
        { who: "huangquan", name: "Huang Quan", side: "right", text: "The Wu are fierce and the current runs downhill. Let me be the vanguard to face them; Your Majesty should be the rear anchor." }
      ],
      sima: { text: "Huang Quan counselled against the emperor leading in person and asked to go first. Liu Bei made him commander of the forces north of the river instead — a column with no road home once the line broke.", source: "Sanguozhi, Shu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/07-lu-xun-appointed.png", ratio: 1.75, size: "std",
      caption: "Sun Quan's answer was a scholar of thirty-nine: Lu Xun, made grand commander over fifty thousand, with the oldest generals of Wu under him and none of them pleased.",
      sima: { text: "Sun Quan appointed Lu Xun grand commander with the staff of authority over Zhu Ran, Pan Zhang, Han Dang, Xu Sheng and Sun Huan — some old comrades of Sun Ce, some of the royal house, all senior to him.", source: "Sanguozhi, Wu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/08-bait.png", ratio: 1.75, size: "wide",
      caption: "Wu Ban walked into the open at the valley mouth with a few thousand, daring an attack. Every Wu general wanted it. Lu Xun said no.",
      bubbles: [
        { who: "luxun", name: "Lu Xun", side: "left", text: "There is a trick in it. We will watch." }
      ],
      sima: { text: "Liu Bei sent Wu Ban to camp in the open as bait with the elite hidden in the side valleys; the Wu generals urged an attack and Lu Xun refused. When the ambush showed itself, they yielded to his reading.", source: "Sanguozhi, Wu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/09-sun-huan.png", ratio: 1.75, size: "std",
      caption: "At Yiling, Sun Huan of the royal house was cut off and besieged, and begged the grand commander for relief. None came. He held anyway — and afterwards asked how.",
      sima: { text: "Sun Huan, besieged at Yiling, sent for rescue; Lu Xun would not send it, saying the siege would lift of itself when the main line broke. It did, and Sun Huan came out to join the pursuit.", source: "Sanguozhi, Wu shu 6 & Wu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/10-six-months.png", ratio: 1.75, size: "wide",
      caption: "From the first month to the sixth, nothing. Four hundred li of Shu stockades in the hills and the woods, and a Wu army that would not come out. His own generals called him a coward to his face.",
      bubbles: [
        { who: "luxun", name: "Lu Xun", side: "right", text: "I am only a scholar holding a charge from the lord. The state bent you all to me because I can bear humiliation and carry weight. Do your part, and say no more." }
      ],
      sima: { text: "The stalemate ran from the first to the sixth month of 222. To his resentful veterans Lu Xun laid his hand on his sword and spoke so; the camps stayed shut.", source: "Sanguozhi, Wu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/11-fire.png", ratio: 1.75, size: "full",
      caption: "Intercalary sixth month: every soldier a bundle of dry grass. The first stockade burned, and the wind carried it down four hundred li of them.",
      sima: { text: "Lu Xun ordered each man to carry a bundle of dry grass and attacked with fire; the camps fell in a chain, and he pressed the advantage through the whole line.", source: "Sanguozhi, Wu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/12-collapse.png", ratio: 1.75, size: "wide",
      caption: "Forty camps and more. Zhang Nan and Feng Xi died in them, and the tribal chief Sha Moke with them; the boats, the weapons and the grain went into the river, and so did the dead.",
      sima: { text: "The Shu camps, forty and more, were taken; Zhang Nan, Feng Xi and the barbarian chief Sha Moke were killed; the boats, weapons and supplies were lost utterly, and the corpses drifted down the river.", source: "Sanguozhi, Shu shu 2 & Wu shu 2; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/13-ma-an.png", ratio: 1.75, size: "std",
      caption: "Liu Bei rallied on Ma'an mountain and put his men in a ring. The ring closed. He came out in the dark, and the relay riders burned his abandoned armour behind him so the road stayed hidden.",
      sima: { text: "Liu Bei climbed Ma'an mountain and formed his troops in a ring; Lu Xun pressed from all sides and the army came apart. Liu Bei fled by night into Baidicheng at Yong'an.", source: "Sanguozhi, Wu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/14-huang-quan-wei.png", ratio: 1.75, size: "std",
      caption: "North of the river, Huang Quan's road home was gone. He surrendered to Wei with his column intact. At Chengdu someone proposed seizing his family; Liu Bei refused.",
      bubbles: [
        { who: "liubei", name: "Liu Bei", side: "left", text: "I let Huang Quan down. Huang Quan did not let me." }
      ],
      sima: { text: "Huang Quan's return was cut by the Wu advance; he led his force over to Wei. When officers asked to arrest his family, Liu Bei said the words in the panel, and kept them as before.", source: "Sanguozhi, Shu shu 13; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/15-no-pursuit.png", ratio: 1.75, size: "std",
      caption: "Xu Sheng and Pan Zhang wanted Baidicheng and the emperor in it. Lu Xun and Zhu Ran said no: look north. Within days Cao Pi's three columns were moving.",
      sima: { text: "Xu Sheng, Pan Zhang and Song Qian urged pursuit to take Liu Bei; Lu Xun, Zhu Ran and Luo Tong held that Wei's massing was the real danger. In the ninth month Cao Pi's armies crossed south.", source: "Sanguozhi, Wu shu 13 & Wu shu 2; Zizhi Tongjian 69", tag: "history" }
    },
    {
      art: "panels/ep03/16-baidicheng.png", ratio: 1.75, size: "wide",
      caption: "Fourth month, 223: Liu Bei died at Yong'an, and gave his son and his state to Zhuge Liang. The alliance of 208 was rebuilt within the year — on Wu's terms.",
      bubbles: [
        { who: "liubei", name: "Liu Bei", side: "right", text: "If the heir can be helped, help him. If he cannot — you may take it yourself." }
      ],
      sima: { text: "Liu Bei died at Yong'an in the fourth month of 223, entrusting Liu Shan to Zhuge Liang and Li Yan. Zhuge Liang sent Deng Zhi to Wu; the alliance was renewed against Wei.", source: "Sanguozhi, Shu shu 2 & Shu shu 5; Zizhi Tongjian 70", tag: "history" }
    }
  ],
  myths: [
    {
      myth: "Lu Xun pursued too far, lost his way in Zhuge Liang's stone maze of the Eight Trigrams at Yufu, and was led out by a father-in-law.",
      truth: "No history knows the maze. The sources have Lu Xun stopping at the border on purpose, because Wei's armies were massing behind him; Zhuge Liang was at Baidicheng arranging a succession, not building labyrinths.",
      source: "Sanguozhi, Wu shu 13 & Shu shu 5; Zizhi Tongjian 69–70"
    },
    {
      myth: "The war was grief for Guan Yu gone mad — a vengeful old man's blunder from the first day.",
      truth: "The sources show a reasoned attempt to recover Jing province: Sun Quan offered peace and hostages and was refused; the Shu army held the initiative for six months; and Cao Pi's verdict on the linked camps was a professional judgement on a disposition, not a description of a fit of rage.",
      source: "Sanguozhi, Shu shu 2 & Wu shu 2, Wei shu 2 in Pei Songzhi's commentary; Zizhi Tongjian 69"
    },
    {
      myth: "The Shu army was annihilated to a man, and Liu Bei died of a broken heart within the year.",
      truth: "He withdrew in order to Yong'an and held it; Huang Quan's northern column came through intact and went over to Wei; the emperor governed, arranged the succession formally, and died of illness ten months after the battle.",
      source: "Sanguozhi, Shu shu 2 & Shu shu 13; Zizhi Tongjian 69–70"
    }
  ],
  sources: [
    { title: "Records of the Three Kingdoms (Sanguozhi)", author: "Chen Shou", date: "late 3rd c. CE", detail: "Shu shu 2 (Liu Bei), Shu shu 5 (Zhuge Liang), Shu shu 6 (Guan Yu, Zhang Fei), Shu shu 13 (Huang Quan), Wu shu 2 (Sun Quan), Wu shu 6 (Sun Huan), Wu shu 13 (Lu Xun)." },
    { title: "Commentary to the Sanguozhi", author: "Pei Songzhi", date: "429 CE", detail: "Cites the Wei shu for Cao Pi's verdict on the linked camps — how can a seven-hundred-li camp resist an enemy? — a soldier's judgement, not a sneer." },
    { title: "Zizhi Tongjian", author: "Sima Guang", date: "1084 CE", detail: "Juan 68–70: the loss of Jing, the eastern war, the fire at Yiling, and the entrustment at Yong'an." }
  ]
};
