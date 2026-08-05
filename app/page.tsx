"use client";

import { FormEvent, useState } from "react";
import douyinCatalog from "./douyin-catalog.json";

const linkedinUrl = "https://www.linkedin.com/in/bonanzhong/";
const douyinUrl = "https://www.douyin.com/user/MS4wLjABAAAAjQLsDJzNqH-lMIXUsRCp298zla02LnmZyACESD7llC4";

type Language = "en" | "zh";
type Detail = { title: string; category: string; intro: string; paragraphs: string[]; external?: { label: string; url: string } };

const socialCopy = {
  en: {
    label: "From my channels", title: "Recent work, in the original context.",
    intro: "Read recent leadership posts and browse selected short films here—without needing an account. Open the source only when you want the full platform experience.",
    linkedin: "LinkedIn · Leadership & marketplaces", douyin: "Douyin · Complete video archive", open: "Open original", all: "All", showing: "Showing", of: "of", loadMore: "Load more videos",
  },
  zh: {
    label: "来自我的社交频道", title: "在原本的语境里，看见最近的创作。",
    intro: "无需账号，也能在这里阅读近期职业文章、浏览精选短视频。只有想进入平台查看完整内容时，才需要打开原始链接。",
    linkedin: "LinkedIn · 领导力与市场平台", douyin: "抖音 · 完整作品分类", open: "打开原文", all: "全部", showing: "正在显示", of: "共", loadMore: "加载更多视频",
  },
} as const;

const linkedinPosts = {
  en: [
    { image: "/media/linkedin-team-culture.jpg", title: "The strongest teams make everyone better", text: "Everyday acts—sharing knowledge, stepping in, and earning trust—rarely appear on a dashboard, but they shape culture and performance.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7488859470878646272/" },
    { image: "/media/linkedin-womens-day.jpg", title: "Opportunity, contribution, and leadership", text: "A reflection on equity, inclusion, and creating spaces where every voice can be heard when decisions are made.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7436660928278048768/" },
    { image: "/media/linkedin-couprize.jpg", title: "When excellence shows up in different forms", text: "Deep ownership, customer-first judgment, innovation, and automation create a talent pool where impact multiplies.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7414482092639813632/" },
    { image: "/media/linkedin-talent-clarity.jpg", title: "Talent is the engine. Clarity is the compass.", text: "A framework for leading multi-layered teams through rapid organizational change without losing scale, speed, or direction.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7411175389114429440/" },
    { image: "/media/linkedin-memo-culture.jpg", title: "Depth of thinking, not volume of talking", text: "Amazon’s memo culture taught me that writing forces clarity, silence builds alignment, and ownership delivers results.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7393142833597046784/" },
    { image: "/media/linkedin-brand-program.jpg", title: "Launching the Coupang Brand Program", text: "Helping brands understand customers, build equity, and simplify operations in one of the world’s fastest-growing eCommerce markets.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7387681006633410560/" },
    { image: "/media/linkedin-ai-certificate.gif", title: "AI for Everyone", text: "Continuing to learn how AI can support better decisions, systems, and organizations.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7385261461553598464/" },
    { image: "/media/linkedin-iteration.jpg", title: "Launch gets you on the field. Iteration wins.", text: "A launch is a starting point: plan the next iterations, preserve measurement, and keep learning after release.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7383657701479919616/" },
    { image: "/media/linkedin-collaboration.jpg", title: "A masterpiece of collaboration", text: "Individual paintings inspired by leadership principles came together as one visual expression of teamwork, creativity, and purpose.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7333093175605022720/" },
  ],
  zh: [
    { image: "/media/linkedin-team-culture.jpg", title: "最强的团队，让身边每个人都变得更好", text: "分享知识、主动补位、赢得信任——这些行动很少出现在仪表盘上，却塑造文化并推动绩效。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7488859470878646272/" },
    { image: "/media/linkedin-womens-day.jpg", title: "机会、贡献与领导力", text: "关于公平、包容，以及如何让每一个声音都能在决策空间里被听见。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7436660928278048768/" },
    { image: "/media/linkedin-couprize.jpg", title: "当卓越以不同方式出现", text: "深度主人翁意识、客户优先的判断、创新和自动化，让优秀人才彼此影响并放大成果。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7414482092639813632/" },
    { image: "/media/linkedin-talent-clarity.jpg", title: "人才是引擎，清晰是指南针", text: "在快速组织变化中领导多层团队，同时保持规模、速度和方向的一套框架。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7411175389114429440/" },
    { image: "/media/linkedin-memo-culture.jpg", title: "思考的深度，而不是说话的音量", text: "亚马逊的备忘录文化让我看到：写作迫使思考清晰，安静阅读建立共识，主人翁意识带来结果。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7393142833597046784/" },
    { image: "/media/linkedin-brand-program.jpg", title: "推出酷澎品牌增长计划", text: "帮助品牌理解客户、建立品牌资产，并在高速增长的电商市场中简化运营。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7387681006633410560/" },
    { image: "/media/linkedin-ai-certificate.gif", title: "AI For Everyone", text: "持续学习 AI 如何支持更好的决策、系统和组织。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7385261461553598464/" },
    { image: "/media/linkedin-iteration.jpg", title: "发布让你上场，迭代让你获胜", text: "发布只是起点：提前规划后续迭代、保留数据衡量，并在上线后继续学习。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7383657701479919616/" },
    { image: "/media/linkedin-collaboration.jpg", title: "协作与创造力的作品", text: "每个人围绕领导力原则完成一幅画，最终组合成一个关于团队、创意和共同目标的整体。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7333093175605022720/" },
  ],
} as const;

const categoryLabels = {
  en: { cities: "Cities", events: "Events", arts: "Arts & culture", sports: "Fishing & sports", handmade: "Handmade", nature: "Nature", travel: "Travel", food: "Food", everyday: "Everyday life" },
  zh: { cities: "城市", events: "活动与节庆", arts: "艺术与文化", sports: "钓鱼与运动", handmade: "手工创作", nature: "自然", travel: "旅行", food: "美食", everyday: "日常生活" },
} as const;

const ui = {
  en: {
    nav: ["Writing", "Postcards", "Recommendations", "About"], note: "Get the note",
    eyebrow: "Marketplace leader · Systems thinker · Curious observer",
    hero: "Ideas, encounters, and useful things.",
    lede: "I’m Bonan Zhong. I build marketplaces, adaptive organizations, and leaders—then stay curious about the people, places, and small decisions that reveal how systems really work.",
    readLatest: "Read the latest", noteName: "A Note from Bonan",
    roles: ["Director at Coupang", "Former Amazon", "Seattle · Seoul · Elsewhere"], portrait: "Bonan Zhong",
    portraitLine: "From medicine to marketplaces, I follow the next meaningful bottleneck.",
    featuredLabel: "Featured idea · 6 min read", featuredTitle: "Every solution creates a new constraint.",
    featuredText: "The strength that gets a team to one stage can become the thing that holds it back at the next. The work is not simply becoming an expert—it is noticing when the system needs a new question.", readIdea: "Read the full idea",
    journal: "The journal", journalTitle: "Three ways into the work.", readNow: "Read now",
    stories: [
      ["Marketplace & Systems", "The next bottleneck", "What changes when the operating model that created growth starts limiting it?", "Essay"],
      ["Everyday Encounters", "A small thing I noticed", "The best part of travel is not only what we see, but what we quietly learn after coming home.", "Reflection"],
      ["AI & Adaptive Systems", "Organizations that keep learning", "AI matters less as a feature than as a new way for an organization to notice and adapt.", "Note"],
    ],
    postcards: "Postcards", postcardsTitle: "Places change the questions.", postcardsText: "Short observations from the Pacific Northwest, Seoul, and wherever curiosity leads next.", openPostcard: "Open postcard",
    postcardItems: [
      ["Seattle", "Sweet home, seen again", "Rain, water, evergreens—and the quiet pull of returning."],
      ["Seoul", "A city that performs", "Lanterns, live music, and a weekend along the Han River."],
      ["Hokkaido", "The extra small step", "What a ripe melon and a covered spray bottle taught me about care."],
    ],
    worth: "Worth sharing", worthTitle: "Useful things should come with a reason.", worthText: "Books, places, performances, tools, and ideas—each with a short note about why it might deserve your attention.",
    recs: [["BOOKS & IDEAS", "Four questions for a better decision"], ["LEADERSHIP", "Talent is the engine. Clarity is the compass."], ["VIDEO PROFILE", "Explore the complete video archive"]],
    about: "About Bonan", aboutTitle: "A career built by following the next meaningful constraint.",
    aboutLede: "My path has crossed surgery, regenerative medicine, biotechnology, Amazon, and Coupang. The common thread is a habit of questioning assumptions, finding the real bottleneck, and building systems that adapt.",
    aboutA: "Today, my interests center on AI, marketplaces, consumer platforms, seller services, and organizations that keep learning.",
    aboutB: "Outside work, I pay attention to culture, travel, nature, books, and the small encounters that make a place—and a life—more legible.",
    profileHere: "Professional profile — read here", videosHere: "Video profile — watch & read here", externalNote: "External platforms may require sign-in",
    subscribeTitle: "One thoughtful note, about once a week.", subscribeText: "Marketplace ideas, revealing encounters, and useful things—written in English or Chinese, whichever fits the thought best. Usually a five-minute read.",
    email: "Email address", emailPlaceholder: "you@example.com", thanks: "Thank you. Email delivery will open with the publication launch.", privacy: "No spam. English, 中文, or both. Unsubscribe anytime.",
    close: "Close", back: "Back to the journal", footer: "Ideas, encounters, and useful things.", top: "Back to top", personal: "Personal views only",
  },
  zh: {
    nav: ["文章", "旅行手记", "推荐", "关于我"], note: "订阅手记",
    eyebrow: "市场平台领导者 · 系统思考者 · 好奇的观察者",
    hero: "想法、见闻，还有值得分享的东西。",
    lede: "我是钟博南。我致力于构建市场平台、能够适应变化的组织和独当一面的领导者；同时，我也好奇于人、地方和日常中的小决定，因为它们往往能让我们看清一个系统如何运作。",
    readLatest: "阅读最新文章", noteName: "博南手记",
    roles: ["酷澎总监", "前亚马逊", "西雅图 · 首尔 · 更远的地方"], portrait: "钟博南",
    portraitLine: "从医学到市场平台，我始终在寻找下一个值得解决的瓶颈。",
    featuredLabel: "本期精选 · 阅读约 6 分钟", featuredTitle: "每一个解决方案，都会创造新的约束。",
    featuredText: "把团队带到一个新阶段的优势，有时会成为下一阶段的阻力。真正的挑战不只是成为专家，而是及时发现：系统已经需要一个新问题。", readIdea: "阅读全文",
    journal: "文章", journalTitle: "从三个角度认识我的思考。", readNow: "立即阅读",
    stories: [
      ["市场平台与系统", "下一个瓶颈", "当曾经推动增长的运营模式开始限制增长，会发生什么？", "长文"],
      ["日常见闻", "一件我注意到的小事", "旅行最好玩的地方，不只是看见了什么，而是回来以后偷偷学会了什么。", "随笔"],
      ["AI 与适应性系统", "不断学习的组织", "AI 的意义不只是一个功能，而是帮助组织更好地感知和适应。", "手记"],
    ],
    postcards: "旅行手记", postcardsTitle: "不同的地方，会改变我们提出的问题。", postcardsText: "来自美国西北部、首尔，以及好奇心带我到达的每一个地方的短篇观察。", openPostcard: "打开手记",
    postcardItems: [
      ["西雅图", "再次看见家乡", "雨、水、常青树，还有回家时那种安静的吸引力。"],
      ["首尔", "一座会表演的城市", "花灯、现场音乐，还有汉江边的周末。"],
      ["北海道", "多做的那一小步", "一颗刚好成熟的哈密瓜和一个被手挡住的喷壶，让我重新理解了体贴。"],
    ],
    worth: "值得分享", worthTitle: "好东西，应该说清楚为什么值得。", worthText: "书、地方、表演、工具和想法——每一项都附上一段简短的理由。",
    recs: [["书与思想", "做出更好决定的四个问题"], ["领导力", "人才是引擎，清晰是指南针"], ["视频主页", "浏览完整视频档案"]],
    about: "关于我", aboutTitle: "我的职业路径，始终围绕着寻找下一个值得解决的瓶颈。",
    aboutLede: "我的经历跨越了外科医学、再生医学、生物技术、亚马逊和酷澎。贯穿其中的是一种习惯：质疑假设、找到真正的瓶颈，并构建能够不断适应的系统。",
    aboutA: "今天，我关注 AI、市场平台、消费者平台、卖家服务，以及能够不断学习的组织。",
    aboutB: "工作之外，我关注文化、旅行、自然、阅读，以及那些让一个地方和一段人生变得更清晰的日常小事。",
    profileHere: "职业简介——站内阅读", videosHere: "视频主页——站内浏览", externalNote: "外部平台可能要求登录",
    subscribeTitle: "大约每周，写一封值得读的手记。", subscribeText: "市场平台、日常见闻和值得分享的东西——我会选择最自然的中文或英文来写，通常五分钟可以读完。",
    email: "邮箱地址", emailPlaceholder: "name@example.com", thanks: "谢谢。邮件发送将在正式发布时开通。", privacy: "不发垃圾邮件。可选中文、英文或两者。可随时退订。",
    close: "关闭", back: "返回文章", footer: "想法、见闻，还有值得分享的东西。", top: "回到顶部", personal: "仅代表个人观点",
  },
} as const;

const details: Record<Language, Record<string, Detail>> = {
  en: {
    constraint: { title: "Every solution creates a new constraint", category: "Marketplace & Systems", intro: "What if your greatest strength eventually becomes your greatest limitation?", paragraphs: ["I have asked myself that question throughout my career. It led me from surgery to regenerative medicine, from biotechnology to Amazon and Coupang—not because I was searching for a different career, but because I was searching for the next bottleneck where I could create greater impact.", "Every solution eventually creates a new constraint. A process that once brought clarity can become bureaucracy. Expertise that once accelerated decisions can narrow the questions we are willing to ask.", "The challenge is not simply becoming an expert. It is knowing when the system has changed enough that we need to learn something completely new.", "My approach remains consistent: question assumptions, find the real bottleneck, build systems that adapt, and develop leaders who eventually make themselves unnecessary."] },
    bottleneck: { title: "The next bottleneck", category: "Marketplace & Systems", intro: "The operating model that creates growth is rarely the one that sustains every later stage.", paragraphs: ["When a system succeeds, it changes the environment around it. More customers create more edge cases. More sellers create more variation. More tools create more handoffs.", "Scaling is not a larger version of the same work. It requires asking which constraint now limits the whole system—and whether our strongest habits are preventing us from seeing it.", "I look for four signals: decisions waiting for one person, teams optimizing local metrics at the expense of the whole, exceptions growing faster than the rules, and yesterday’s expertise shutting down new questions.", "The goal is a system capable of noticing its next constraint and adapting before it becomes a crisis."] },
    hokkaido: { title: "What I quietly learned after traveling", category: "Places & Cultures · Hokkaido", intro: "Nothing earth-shattering happened. Many people simply chose to take one small extra step.", paragraphs: ["This was my second Asian summer after moving to Seoul. Last year Tokyo’s heat made me question my choices, so this year I went north—to Hokkaido. The moment I stepped off the plane into weather below 20°C, I forgave the Asian summer.", "At breakfast, an elderly man cleaned a table. He held the spray bottle in one hand and used the other to shield people waiting nearby from the mist. It was the first time I thought that even a spray bottle could demonstrate consideration.", "In Furano, I chose a melon without understanding the label. At checkout, the shopkeeper stopped me and explained: ‘This one will be ripe in three days. I think you want to eat it today.’ She replaced it with one that was ready. Back at the hotel, it was perfect.", "The best part of travel is not only what we see, but what we quietly learn after coming home. Maybe the next time I pass a slow car, I will wave: It’s okay. Going slowly can be good too."], external: { label: "Open the original on Douyin — sign-in may be required", url: "https://www.douyin.com/video/7658469084598587122" } },
    learning: { title: "Organizations that keep learning", category: "AI & Adaptive Systems", intro: "AI matters less as a feature than as a new way for an organization to notice and adapt.", paragraphs: ["A feature can improve one task. An adaptive system changes how an organization senses what is happening, shares what it learns, and updates its decisions.", "The useful question is not only where AI can automate work. It is where information is lost, feedback arrives too late, and judgment remains trapped with too few people.", "Technology creates leverage only when the operating model changes with it. Otherwise, a faster tool delivers old assumptions more efficiently.", "The opportunity is to build organizations that continue getting smarter long after today’s problems have been solved."] },
    seattle: { title: "Seattle—sweet home", category: "Postcard · Seattle", intro: "Rain, water, evergreens—and the quiet pull of returning.", paragraphs: ["Seattle is where a city and the outdoors keep interrupting each other. Water appears at the end of a street. Mountains arrive when the clouds decide to move.", "It is where many of my interests meet: marketplaces and technology, fishing and lakes, everyday life and enormous landscapes.", "Some places impress you immediately. Home works differently. You understand it by leaving, returning, and noticing what your eyes had stopped seeing."] },
    seoul: { title: "A city that performs", category: "Postcard · Seoul", intro: "Lanterns, live music, taekwondo, K-pop, and weekends along the Han River.", paragraphs: ["Seoul often turns public space into a shared stage. A walk can become a concert, drone show, lantern procession, or a crowd around young performers with seemingly unlimited energy.", "At Dongdaemun, I watched taekwondo and K-pop share the same performance. They flipped, kicked, and danced as if gravity and knee pain did not exist yet.", "Youth is a built-in superpower people often appreciate only after it expires. A city can make that energy visible again, even if only for an evening."] },
    decisions: { title: "Four questions for a better decision", category: "Books & Ideas", intro: "A compact framework I return to when a problem looks obvious.", paragraphs: ["Which assumption is carrying most of the conclusion? If it changes, does the decision still hold?", "Where is the actual system constraint? Improving anything else may create activity without impact.", "What second-order constraint will this solution create if it succeeds?", "What would let the people closest to the work make a better decision without waiting for me?"] },
    professional: { title: "Bonan Zhong", category: "Professional profile", intro: "Director at Coupang · Former Amazon · Marketplace · Consumer Platforms · Seller Services", paragraphs: ["My career has crossed surgery, regenerative medicine, biotechnology, Amazon, and Coupang. The common thread is a search for the next bottleneck where I can create greater impact.", "Today I help organizations scale through AI, marketplaces, and leadership. My approach is to question assumptions, find the real bottleneck, build systems that adapt, and develop leaders who eventually make themselves unnecessary.", "I am interested in conversations about AI, consumer platforms, marketplaces, seller services, and organizations that continue getting smarter long after today’s problems have been solved."], external: { label: "Open LinkedIn — LinkedIn may require sign-in", url: linkedinUrl } },
    videos: { title: "西雅图大南瓜 · Seattle Big Pumpkin", category: "Video profile", intro: "A playful, curious guide to life in the American Northwest, Seoul, and beyond.", paragraphs: ["The video archive includes nearly 300 works about Seattle, Seoul, Korea, Japan, nature, fishing, public performances, cultural details, and everyday encounters.", "Representative stories include Seattle’s seasons, trout fishing in the American West, Seafair and the Blue Angels, Seoul’s lantern festivals and Han River performances, and a reflective journey through Hokkaido.", "The voice is visual, curious, and often playful—using specific small details to move from an experience to a broader reflection."], external: { label: "Open Douyin — Douyin may require sign-in", url: douyinUrl } },
  },
  zh: {
    constraint: { title: "每一个解决方案，都会创造新的约束", category: "市场平台与系统", intro: "如果你最大的优势，最终变成了最大的限制，会怎样？", paragraphs: ["我在职业生涯中一直问自己这个问题。它带我从外科医学走向再生医学，从生物技术走向亚马逊和酷澎。这不是因为我只想换一份工作，而是因为我在寻找下一个能够创造更大影响的瓶颈。", "每一个解决方案最终都会创造新的约束。曾经带来清晰的流程可能变成官僚；曾经加速决策的专业知识可能限制我们愿意提出的问题。", "挑战不只是成为专家，而是知道什么时候系统已经变化，我们必须学习完全不同的东西。", "我始终遵循同一套方法：质疑假设，找到真正的瓶颈，构建能够适应的系统，并培养最终不再依赖我的领导者。"] },
    bottleneck: { title: "下一个瓶颈", category: "市场平台与系统", intro: "创造增长的运营模式，很少能原样支撑之后的每一个阶段。", paragraphs: ["当一个系统成功时，它会改变周围的环境。更多客户带来更多边缘情况，更多卖家带来更多差异，更多工具带来更多交接。", "规模化不是把同样的工作放大。它要求我们重新问：现在是哪一个约束限制了整个系统？", "我会关注四个信号：决定不断等待同一个人；团队为局部指标牺牲整体；例外比规则增长得更快；昨天的专业知识在关闭今天的新问题。", "目标不是创造一个永远完美的系统，而是让它能发现下一个瓶颈，并在问题成为危机之前进化。"] },
    hokkaido: { title: "旅行以后，偷偷学会了什么", category: "地方与文化 · 北海道", intro: "一路下来，没有惊天动地的大事。只是很多人愿意多做一步。", paragraphs: ["这是我来首尔后的第二个亚洲夏天。去年在东京休假，热得我怀疑人生。今年学聪明了，直接往北跑——北海道。一下飞机，不到二十度。我当场原谅了亚洲的夏天。", "早餐时，一个老爷爷擦桌子，左手喷壶，右手挡着水雾，怕溅到旁边等位的人。我第一次觉得，原来一个喷壶，也可以很有教养。", "去富良野买哈密瓜，结账时阿姨用翻译告诉我：‘这颗三天后才熟，我猜你今天就想吃。’然后换了一颗当天熟的。回酒店切开，真的刚刚好。", "旅行最好玩的地方，不是看见了什么，而是回来以后，开始偷偷学会了一些什么。没关系。慢一点。也挺好。"], external: { label: "在抖音打开原文——可能需要登录", url: "https://www.douyin.com/video/7658469084598587122" } },
    learning: { title: "不断学习的组织", category: "AI 与适应性系统", intro: "AI 的意义不只是一个功能，而是帮助组织更好地感知和适应。", paragraphs: ["一个功能可以改善一项任务。一个适应性系统则会改变组织如何感知现状、分享知识和更新决策。", "有用的问题不只是 AI 可以自动化哪些工作，而是信息在哪里丢失，反馈在哪里到得太晚，判断在哪里被少数人掌握。", "只有当运营模式也随之改变时，技术才会创造杠杆。否则，更快的工具只会更高效地交付旧假设。", "真正的机会，是构建一个在今天的问题被解决之后，仍能继续变得更聪明的组织。"] },
    seattle: { title: "西雅图——甜蜜的家", category: "旅行手记 · 西雅图", intro: "雨、水、常青树，还有回家时那种安静的吸引力。", paragraphs: ["西雅图是一座城市与户外不断相互打断的地方。街道尽头会出现水面，云散时山会突然到来。", "这里也是我许多兴趣交汇的地方：市场平台与科技、钓鱼与湖泊、日常生活与近在咫尺的广阔风景。", "有些地方会立刻让人惊叹；家不一样。离开、归来，再次注意到眼睛曾经习惯忽略的东西，我们才真正理解它。"] },
    seoul: { title: "一座会表演的城市", category: "旅行手记 · 首尔", intro: "花灯、现场音乐、跆拳道、K-pop，还有汉江边的周末。", paragraphs: ["首尔常常把公共空间变成共同的舞台。一次散步可以变成音乐会、无人机表演、花灯游行，或一群人围着充满能量的年轻表演者。", "在东大门，我看到跆拳道和 K-pop 出现在同一个表演中。他们翻跃、踢腿、跳舞，仿佛地心引力和膝盖疼痛还不存在。", "青春像是一种内置的超能力，人们往往在失去后才懂得珍惜。一座城市可以让这种能量重新被看见，即使只有一个晚上。"] },
    decisions: { title: "做出更好决定的四个问题", category: "书与思想", intro: "当一个问题看起来理所当然时，我会回到这套简单的框架。", paragraphs: ["哪一个假设承担了大部分结论？如果它改变，这个决定还成立吗？", "系统真正的约束在哪里？改善其他部分可能只会创造忙碌，而不是影响。", "如果这个解决方案成功，它会创造什么第二层约束？", "如何让最靠近工作的人，不用等我也能做出更好的决定？"] },
    professional: { title: "钟博南", category: "职业简介", intro: "酷澎总监 · 前亚马逊 · 市场平台 · 消费者平台 · 卖家服务", paragraphs: ["我的职业经历跨越了外科医学、再生医学、生物技术、亚马逊和酷澎。贯穿其中的线索，是寻找下一个能够创造更大影响的瓶颈。", "今天，我通过 AI、市场平台和领导力帮助组织实现规模化。我的方法是质疑假设、找到真正的瓶颈、构建能够适应的系统，并培养最终不再依赖我的领导者。", "我很愿意讨论 AI、消费者平台、市场平台、卖家服务，以及如何打造在今天问题解决后仍能继续学习的组织。"], external: { label: "打开 LinkedIn——LinkedIn 可能要求登录", url: linkedinUrl } },
    videos: { title: "西雅图大南瓜", category: "视频主页", intro: "一个爱玩、好奇的观察者，带大家体验美国西北部、首尔和更远的生活。", paragraphs: ["这个视频档案在查看时已有近 300 个作品，内容包括西雅图、首尔、韩国、日本、自然、钓鱼、公共表演、文化细节和日常见闻。", "其中包括西雅图四季、美国西部钓鳟鱼、西雅图海洋节和蓝天使、首尔花灯节和汉江表演，以及北海道旅行的长篇思考。", "它的声音以视觉、好奇和玩心为特点，常常从一个具体的小细节走向更广泛的反思。"], external: { label: "打开抖音——抖音可能要求登录", url: douyinUrl } },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [videoCategory, setVideoCategory] = useState("all");
  const [visibleVideos, setVisibleVideos] = useState(24);
  const t = ui[language];
  const selected = selectedId ? details[language][selectedId] : null;
  const social = socialCopy[language];
  const posts = linkedinPosts[language];
  const categories = categoryLabels[language];
  const filteredVideos = videoCategory === "all" ? douyinCatalog : douyinCatalog.filter((video) => video.category === videoCategory);

  function subscribe(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubscribed(true); }

  return (
    <main lang={language === "zh" ? "zh-CN" : "en"}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hello Bonan"><span className="brand-dot">B</span><span>Hello Bonan</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#writing">{t.nav[0]}</a><a href="#postcards">{t.nav[1]}</a><a href="#recommendations">{t.nav[2]}</a><a href="#about">{t.nav[3]}</a>
        </nav>
        <div className="header-tools">
          <div className="language-filter site-language" aria-label="Site language">
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">English</button>
            <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} type="button">中文</button>
          </div>
          <a className="header-cta" href="#subscribe">{t.note}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.hero}</h1><p className="hero-lede">{t.lede}</p>
          <div className="hero-actions"><a className="button button-primary" href="#writing">{t.readLatest}</a><a className="button button-secondary" href="#subscribe">{t.noteName}</a></div>
          <div className="role-line">{t.roles.map((role) => <span key={role}>{role}</span>)}</div>
        </div>
        <div className="hero-portrait"><div className="portrait-frame portrait-photo"><img src="/media/linkedin-profile.jpg" alt={t.portrait}/><span className="portrait-note">{t.portrait}</span></div><p>{t.portraitLine}</p></div>
      </section>

      <section className="featured section-pad"><div className="section-label">{t.featuredLabel}</div><div className="featured-grid"><h2>{t.featuredTitle}</h2><div><p>{t.featuredText}</p><button className="text-link text-button" type="button" onClick={() => setSelectedId("constraint")}>{t.readIdea} <span>→</span></button></div></div></section>

      <section className="section-pad" id="writing"><div className="section-heading"><div><p className="eyebrow">{t.journal}</p><h2>{t.journalTitle}</h2></div></div>
        <div className="story-grid">
          {t.stories.map((story, index) => <button key={story[1]} className={`story-card card-button ${index === 0 ? "story-card-dark" : index === 1 ? "story-card-coral" : "story-card-paper"}`} type="button" onClick={() => setSelectedId(["bottleneck", "hokkaido", "learning"][index])}><div className="card-meta"><span>{story[0]}</span><span>{language === "zh" ? "中文" : "EN"}</span></div><div className="story-symbol">{["↗", "小", "∞"][index]}</div><div><h3>{story[1]}</h3><p>{story[2]}</p><span className="card-foot">{story[3]} · {t.readNow} →</span></div></button>)}
        </div>
      </section>

      <section className="postcards section-pad" id="postcards"><div className="section-heading postcards-heading"><div><p className="eyebrow">{t.postcards}</p><h2>{t.postcardsTitle}</h2></div><p>{t.postcardsText}</p></div>
        <div className="postcard-strip">{t.postcardItems.map((item, index) => <button key={item[0]} className={`postcard card-button postcard-${["seattle", "seoul", "hokkaido"][index]}`} type="button" onClick={() => setSelectedId(["seattle", "seoul", "hokkaido"][index])}><span className="postcard-index">0{index + 1}</span><div><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div><span className="open-cue">{t.openPostcard} →</span></button>)}</div>
      </section>

      <section className="recommendations section-pad" id="recommendations"><div className="recommendation-intro"><p className="eyebrow">{t.worth}</p><h2>{t.worthTitle}</h2><p>{t.worthText}</p></div>
        <div className="recommendation-list">{t.recs.map((item, index) => <button className="recommendation-item" key={item[1]} type="button" onClick={() => setSelectedId(["decisions", "professional", "videos"][index])}><span>0{index + 1}</span><div><small>{item[0]}</small><h3>{item[1]}</h3></div><span>{t.readNow} →</span></button>)}</div>
      </section>

      <section className="about section-pad" id="about"><div className="about-number">05</div><div className="about-copy"><p className="eyebrow">{t.about}</p><h2>{t.aboutTitle}</h2><p className="about-lede">{t.aboutLede}</p><div className="about-columns"><p>{t.aboutA}</p><p>{t.aboutB}</p></div>
        <div className="social-links"><button type="button" onClick={() => setSelectedId("professional")}>{t.profileHere} →</button><button type="button" onClick={() => setSelectedId("videos")}>{t.videosHere} →</button></div><small className="external-warning">{t.externalNote}</small>
      </div></section>

      <section className="social-showcase section-pad" id="channels">
        <div className="social-heading"><p className="eyebrow">{social.label}</p><h2>{social.title}</h2><p>{social.intro}</p></div>
        <div className="channel-block"><div className="channel-title"><div><img src="/media/linkedin-profile.jpg" alt={t.portrait}/><h3>{social.linkedin}</h3></div><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <div className="linkedin-grid">{posts.map((post) => <a className="linkedin-card" href={post.url} target="_blank" rel="noreferrer" key={post.url}><img src={post.image} alt=""/><div><h4>{post.title}</h4><p>{post.text}</p><span>{social.open} ↗</span></div></a>)}</div>
        </div>
        <div className="channel-block"><div className="channel-title"><div><img src="/media/douyin-avatar.jpg" alt="西雅图大南瓜"/><h3>{social.douyin}</h3></div><a href={douyinUrl} target="_blank" rel="noreferrer">Douyin ↗</a></div>
          <div className="video-filters" aria-label={social.douyin}><button className={videoCategory === "all" ? "active" : ""} onClick={() => { setVideoCategory("all"); setVisibleVideos(24); }} type="button">{social.all} <span>{douyinCatalog.length}</span></button>{Object.entries(categories).map(([key, label]) => <button className={videoCategory === key ? "active" : ""} onClick={() => { setVideoCategory(key); setVisibleVideos(24); }} type="button" key={key}>{label} <span>{douyinCatalog.filter((video) => video.category === key).length}</span></button>)}</div>
          <p className="video-count">{social.showing} {Math.min(visibleVideos, filteredVideos.length)} {social.of} {filteredVideos.length}</p>
          <div className="douyin-grid">{filteredVideos.slice(0, visibleVideos).map((video) => <a className="video-card" href={video.url} target="_blank" rel="noreferrer" key={video.url}><div><img src={video.image} alt={video.title} loading="lazy"/><span className="play-mark" aria-hidden="true">▶</span></div><h4>{video.title}</h4><span>{social.open} ↗</span></a>)}</div>
          {visibleVideos < filteredVideos.length && <button className="load-more" type="button" onClick={() => setVisibleVideos((count) => count + 24)}>{social.loadMore} ↓</button>}
        </div>
      </section>

      <section className="subscribe section-pad" id="subscribe"><div><p className="eyebrow">{t.noteName}</p><h2>{t.subscribeTitle}</h2></div><div className="subscribe-copy"><p>{t.subscribeText}</p>
        {subscribed ? <div className="success-message" role="status">{t.thanks}</div> : <form onSubmit={subscribe}><label className="sr-only" htmlFor="email">{t.email}</label><input id="email" name="email" type="email" placeholder={t.emailPlaceholder} required/><button type="submit">{t.note}</button></form>}<small>{t.privacy}</small>
      </div></section>

      {selected && <div className="reader-overlay" role="presentation" onMouseDown={() => setSelectedId(null)}><article className="reader-panel" role="dialog" aria-modal="true" aria-labelledby="reader-title" onMouseDown={(event) => event.stopPropagation()}><div className="reader-topline"><div><span>{selected.category}</span><span>{language === "zh" ? "中文" : "EN"}</span></div><button type="button" onClick={() => setSelectedId(null)}>{t.close} ×</button></div><div className="reader-body"><h2 id="reader-title">{selected.title}</h2><p className="reader-intro">{selected.intro}</p><div className="reader-copy">{selected.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{selected.external && <a className="reader-source" href={selected.external.url} target="_blank" rel="noreferrer">{selected.external.label} ↗</a>}</div><div className="reader-footer"><span>Hello Bonan</span><button type="button" onClick={() => setSelectedId(null)}>{t.back}</button></div></article></div>}

      <footer><div className="brand footer-brand"><span className="brand-dot">B</span><span>Hello Bonan</span></div><p>{t.footer}</p><div><button type="button" onClick={() => setSelectedId("professional")}>{t.about}</button><a href="#top">{t.top} ↑</a></div><small>© 2026 Bonan Zhong · {t.personal}</small></footer>
    </main>
  );
}
