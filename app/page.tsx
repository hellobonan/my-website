"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import douyinCatalog from "./douyin-catalog.json";
import essayCollection from "./essay-collection.json";

const linkedinUrl = "https://www.linkedin.com/in/bonanzhong/";
const douyinUrl = "https://www.douyin.com/user/MS4wLjABAAAAjQLsDJzNqH-lMIXUsRCp298zla02LnmZyACESD7llC4";

type Language = "en" | "zh";
type Detail = { title: string; category: string; intro: string; paragraphs: string[]; external?: { label: string; url: string } };
type Essay = { id: string; title: string; category: string; excerpt: string; body: string };

const featuredBooks = [
  { isbn: "9780062316097", title: "Sapiens", author: "Yuval Noah Harari", zh: "《人类简史》把人类的共同想象、制度与合作能力放进一条宏大的时间线，提醒我们：许多看似自然的规则，其实都是可以重新设计的。", en: "A sweeping account of how shared stories, institutions, and cooperation shaped humanity—and why many rules that feel natural are, in fact, designed." },
  { isbn: "9780525559474", title: "Think Again", author: "Adam Grant", zh: "一本关于重新思考的实用指南：把观点当作可以更新的假设，而不是必须防守的身份。", en: "A practical guide to treating opinions as hypotheses to update, rather than identities to defend." },
  { isbn: "9780316491976", title: "Range", author: "David Epstein", zh: "为什么跨领域经历、迟一点专精和持续试验，往往能在复杂世界里产生更好的判断。", en: "Why breadth, delayed specialization, and experimentation often produce better judgment in a complex world." },
  { isbn: "9780735211292", title: "Atomic Habits", author: "James Clear", zh: "真正持久的改变，通常不是来自一次意志爆发，而是来自环境、身份和微小系统的持续积累。", en: "Lasting change rarely comes from one burst of willpower; it compounds through environment, identity, and small systems." },
  { isbn: "9780593420317", title: "The Creative Act", author: "Rick Rubin", zh: "创造不是少数人的天赋，而是一种看见、收集、等待和编辑世界的生活方式。", en: "Creativity is not a rare gift but a way of noticing, collecting, waiting, and editing the world." },
  { isbn: "9780593653166", title: "The Coming Wave", author: "Mustafa Suleyman", zh: "从 AI 到合成生物学，技术能力迅速扩张时，社会如何同时保留创新、责任与控制。", en: "How society might preserve innovation, responsibility, and control as AI and synthetic biology accelerate." },
];

const requestedBookTitles = `Crucial Conversations|Never Split the Difference|You're the Boss|Leadership and Self-Deception|What Got You Here Won't Get You There|Magic Words|The Power of Now|How to Win Friends and Influence People|Third Millennium Thinking|How to Stop Worrying and Start Living|Outlive|The Game of Life and How to Play It|Surrounded by Idiots|Outliers|Thinking, Fast and Slow|Same as Ever|Behave|Factfulness|The Prophet|The Almanack of Naval Ravikant|Daring Greatly|Algorithms to Live By|How to Love Someone Without Losing Your Mind|The Score Takes Care of Itself|Lateral Thinking|The Winning Attitude|The Code of Trust|Dare to Lead|Leaders Eat Last|How to Start a Business on Your Kitchen Table|Superforecasting|Working Backwards|Radical Candor|The Goal|BE 2.0|Drive|The Five Dysfunctions of a Team|Multipliers|Good to Great|The Most Human Human|Trillion Dollar Coach|The Carpenter|The Berry Pickers|Influence, New and Expanded|Ego Is the Enemy|Talk Like TED|Designing Your Life|How to Talk to Anyone|The Elements of Style|Scarcity|The Magic of Thinking Big|The Obstacle Is the Way|The First 90 Days|Difficult Conversations|Measure What Matters|Choose Your Story, Change Your Life|The Lean Startup|The Ride of a Lifetime|Centered Leadership|Negotiating the Nonnegotiable|Crack the C-Suite Code|Make Yourself Clear|The Intelligent Investor|You Are the Placebo|Proof of Heaven|Secrets of Sand|Principles|An Uncommon Dialogue|Bad Blood|Start with Why|The Power of Habit|Do I Make Myself Clear?|Originals|Maybe You Should Talk to Someone|Fall in Love with the Problem, Not the Solution|The Five Love Languages|The Social Animal|Nonviolent Communication|Mindful Parenting|Replay|The Practice of Management|Toyota Production System`.split("|");

const bookCorrections: Record<string,{ author: string; isbn: string; amazon: string; cover?: string }> = {
  "How to Start a Business on Your Kitchen Table": { author: "Shann Nix Jones", isbn: "", amazon: "https://www.amazon.com/dp/B07Y7GMZT6", cover: "https://images-na.ssl-images-amazon.com/images/P/B07Y7GMZT6.01.LZZZZZZZ.jpg" },
  "Lateral Thinking": { author: "Edward de Bono", isbn: "9780060903251", amazon: "https://www.amazon.com/dp/0060903252" },
  "How to Love Someone Without Losing Your Mind": { author: "Todd Baratz, LMHC", isbn: "9780593581193", amazon: "https://www.amazon.com/dp/0593581199", cover: "https://images2.penguinrandomhouse.com/smedia/9780593581193" },
  "Magic Words": { author: "Jonah Berger", isbn: "9780063204935", amazon: "https://www.amazon.com/dp/0063204932" },
  "Range": { author: "David Epstein", isbn: "9780735214507", amazon: "https://www.amazon.com/dp/0735214506" },
  "Think Again": { author: "Adam Grant", isbn: "9781984878120", amazon: "https://www.amazon.com/dp/1984878123", cover: "https://images4.penguinrandomhouse.com/smedia/9781984878120" },
  "The Carpenter": { author: "Jon Gordon", isbn: "9780470888544", amazon: "https://www.amazon.com/s?k=The+Carpenter+Jon+Gordon" },
  "The Goal": { author: "Eliyahu M. Goldratt & Jeff Cox", isbn: "9780884271789", amazon: "https://www.amazon.com/s?k=The+Goal+Eliyahu+Goldratt" },
  "Scarcity": { author: "Sendhil Mullainathan & Eldar Shafir", isbn: "9781250056115", amazon: "https://www.amazon.com/dp/125005611X" },
  "Choose Your Story, Change Your Life": { author: "Kindra Hall", isbn: "9781400228485", amazon: "https://www.amazon.com/dp/B0912L9BPD", cover: "https://harpercollins-christian.imgix.net/covers/9781400228485.jpg?auto=format&h=648" },
  "Crack the C-Suite Code": { author: "Cassandra Frangos", isbn: "9781613630846", amazon: "https://www.amazon.com/dp/B07HRXDGD6", cover: "https://pennsylvania-press-us.imgix.net/covers/9781613630846.jpg" },
  "You Are the Placebo": { author: "Dr. Joe Dispenza · narrated by Adam Boyce", isbn: "9781401944582", amazon: "https://www.amazon.com/s?k=You+Are+the+Placebo+Adam+Boyce" },
  "Principles": { author: "Ray Dalio", isbn: "9781501124020", amazon: "https://www.amazon.com/dp/B074B2CZJG" },
  "Do I Make Myself Clear?": { author: "Harold Evans", isbn: "9780316509190", amazon: "https://www.amazon.com/dp/B01G1K1RQS" },
  "Originals": { author: "Adam Grant", isbn: "9780143128854", amazon: "https://www.amazon.com/dp/014312885X" },
};

function bookTheme(title: string) { if (/lead|boss|team|coach|management|c-suite|multipliers|great|score/i.test(title)) return "Leadership"; if (/conversation|talk|words|clear|influence|negotiat|friends|communication/i.test(title)) return "Communication"; if (/thinking|forecast|algorithm|fact|goal|startup|business|working backwards|Toyota|principles/i.test(title)) return "Decisions & systems"; if (/love|life|worry|mind|habit|ego|obstacle|attitude|placebo|outlive/i.test(title)) return "Life & self"; return "Ideas & stories"; }
const libraryBooks = requestedBookTitles.filter((title) => !featuredBooks.some((book) => book.title.toLowerCase() === title.toLowerCase())).map((title) => ({ title, author: bookTheme(title), en: `A concise, practical exploration of ${bookTheme(title).toLowerCase()}—included here for the questions, mental models, and choices it helps sharpen.`, zh: `一本关于${({ Leadership: "领导力", Communication: "沟通与影响", "Decisions & systems": "决策与系统", "Life & self": "人生与自我", "Ideas & stories": "思想与故事" } as Record<string,string>)[bookTheme(title)]}的实用作品，值得关注的是它帮助我们重新提出的问题、形成的思维模型和改进的选择。` }));
const allBooks = [...featuredBooks, ...libraryBooks].map((book) => ({ ...book, ...(bookCorrections[book.title] || {}) }));

function BookCover({ title, isbn, cover }: { title: string; isbn?: string; cover?: string }) { const [src, setSrc] = useState(cover || (isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg` : "")); useEffect(() => { if (cover || isbn) return; let active = true; fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&limit=1&fields=cover_i`).then((response) => response.json()).then((data) => { if (active && data.docs?.[0]?.cover_i) setSrc(`https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-L.jpg`); }).catch(() => {}); return () => { active = false; }; }, [title, isbn, cover]); return src ? <img src={src} alt={`${title} cover`} loading="lazy"/> : <div className="book-cover-fallback"><span>{title}</span><i>Hello Bonan Library</i></div>; }

function Engagement({ id, language }: { id: string; language: Language }) {
  const [likes, setLikes] = useState(0); const [liked, setLiked] = useState(false); const [comments, setComments] = useState<string[]>([]); const [draft, setDraft] = useState("");
  useEffect(() => { try { setLikes(Number(localStorage.getItem(`likes-${id}`) || 0)); setLiked(localStorage.getItem(`liked-${id}`) === "1"); setComments(JSON.parse(localStorage.getItem(`comments-${id}`) || "[]")); } catch {} }, [id]);
  function like() { const nextLiked = !liked; const next = Math.max(0, likes + (nextLiked ? 1 : -1)); setLiked(nextLiked); setLikes(next); localStorage.setItem(`liked-${id}`, nextLiked ? "1" : "0"); localStorage.setItem(`likes-${id}`, String(next)); }
  function comment(event: FormEvent) { event.preventDefault(); if (!draft.trim()) return; const next = [...comments, draft.trim()]; setComments(next); setDraft(""); localStorage.setItem(`comments-${id}`, JSON.stringify(next)); }
  return <div className="engagement"><button className={liked ? "liked" : ""} type="button" onClick={like}>♥ {likes} {language === "zh" ? "喜欢" : "likes"}</button><details><summary>✦ {comments.length} {language === "zh" ? "留言" : "comments"}</summary><div className="comment-list">{comments.map((item, index) => <p key={`${item}-${index}`}>{item}</p>)}</div><form onSubmit={comment}><input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={language === "zh" ? "写下你的想法…" : "Share a thought…"}/><button type="submit">{language === "zh" ? "发布" : "Post"}</button></form><small>{language === "zh" ? "互动暂存在这台设备上" : "Saved on this device"}</small></details></div>;
}

const essayCategories = {
  en: { all: "All essays", places: "Cities & journeys", arts: "Arts & encounters", leadership: "Teams & leadership", systems: "Systems & ideas", people: "People & lives", everyday: "Everyday wit" },
  zh: { all: "全部随笔", places: "城市与远方", arts: "艺术与现场", leadership: "组织与领导力", systems: "系统与思想", people: "人物与人生", everyday: "日常与幽默" },
} as const;

const essayEnglishTitles = ["Seoul, This Summer Is a Little Well-Done", "A Thousand Stalls, A Thousand Interesting Souls", "The Most Important Part of Team Building Isn’t Dinner", "At Gyeongpo Lake, I Didn’t Keep Looking at the Lake", "Today, My Liver Has Layers", "Seongyojang: The Bridge Is Gone, the Home Remains", "At 250, What Deserves Celebration Is the Capacity to Correct", "Pathology Never Assumed Experts Wouldn’t Make Mistakes", "My Second Asian Summer in Seoul", "F. William Sunderman — The Invisible Threads of a Life", "The Cicadas Return; the People Do Not", "Two Things St. Louis Left with Me", "The Four O’Clock Michelin", "A Very Cool Buddha", "My First K-pop Experience", "Experience Often Repeats Bias — Third Millennium Thinking", "The Little Street", "Seoul After Dark — An Unexpected Journey Begun by a Poster"];
const essayEnglishSummaries = [
  "A humorous reflection on Seoul’s extreme summer heat—and how a changing climate alters the rhythms, economies, and expectations of a city.", "Inside a vast creative market, handmade objects become introductions to the people, patience, and imagination behind them.", "A team dinner cruise becomes a lesson in why belonging is built through shared moments, not the meal itself.", "Small sculptures around Gyeongpo Lake become more memorable than the landmark, revealing how curiosity changes what travel allows us to see.", "A playful food story in which an ordinary meal becomes an unexpectedly layered cultural and sensory experience.", "At a historic Korean residence, ten generations of continuity reveal that a home survives through people, memory, and repeated return.", "A reflection on America at 250: maturity is not the absence of mistakes, but the institutional capacity to recognize and correct them.", "Pathology’s safeguards show why high-stakes systems should anticipate expert error instead of pretending expertise makes error impossible.", "A journey through Hokkaido reveals consideration in tiny gestures—from shielding strangers from spray to choosing a melon ripe for today.", "The life of F. William Sunderman reveals the invisible connections among medicine, science, music, mentorship, and a life of sustained curiosity.", "The recurring sound of cicadas opens a meditation on memory, time, and the people who no longer return with the season.", "Two vivid impressions from St. Louis become a compact portrait of place, history, and the details that remain after travel.", "A Michelin reservation at four in the afternoon becomes a long, funny story about timing, expectation, hospitality, and surprise.", "An unexpectedly stylish Buddha challenges the solemnity we project onto history and makes cultural distance feel immediately human.", "A first encounter with K-pop becomes an observation of youth, performance, discipline, and the extraordinary energy of a live crowd.", "Third Millennium Thinking asks us to test experience itself, because experience can reinforce old bias as easily as it produces wisdom.", "A small street proves that scale has little to do with richness: attention can turn an ordinary passage into a complete world.", "One poster in late-night Seoul opens an unplanned route through performance, chance, and the rewards of following curiosity.",
];

function displayVideoTitle(video: { title: string; category: string }, language: Language, index = 0) { if (language === "zh") return video.title; const label = categoryLabels.en[video.category as keyof typeof categoryLabels.en] || "Life"; return `${label} · Visual field note ${String(index + 1).padStart(2, "0")}`; }

const socialCopy = {
  en: {
    label: "Ideas in motion", title: "Work, wonder, and the moments between.",
    intro: "Leadership reflections meet hundreds of visual field notes—from rivers and cities to handmade experiments, live events, and the small surprises that make life vivid.",
    linkedin: "From the professional notebook", douyin: "Sparks of Life", archive: "See the full source archive", open: "Open story", all: "All", places: "Explore by place", themes: "Explore by theme", showing: "Showing", of: "of", loadMore: "Reveal more sparks",
  },
  zh: {
    label: "流动的想法", title: "工作、好奇心，以及它们之间的生活。",
    intro: "这里既有关于领导力的思考，也有数百个视觉现场笔记——河流、城市、手工创作、现场活动，以及让生活突然发亮的小意外。",
    linkedin: "职业思考手记", douyin: "生活火花", archive: "查看完整来源档案", open: "打开故事", all: "全部", places: "按地点探索", themes: "按主题探索", showing: "正在显示", of: "共", loadMore: "发现更多火花",
  },
} as const;

const linkedinPosts = {
  en: [
    { image: "/media/linkedin-team-culture.jpg", title: "The strongest teams make everyone better", text: "Everyday acts—sharing knowledge, stepping in, and earning trust—rarely appear on a dashboard, but they shape culture and performance.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7488859470878646272/" },
    { image: "/media/linkedin-womens-day.jpg", title: "Opportunity, contribution, and leadership", text: "A reflection on equity, inclusion, and creating spaces where every voice can be heard when decisions are made.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7436660928278048768/" },
    { image: "/media/linkedin-couprize.jpg", title: "When excellence shows up in different forms", text: "Deep ownership, customer-first judgment, innovation, and automation create a talent pool where impact multiplies.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7414482092639813632/" },
    { image: "/media/linkedin-talent-clarity.jpg", title: "Talent is the engine. Clarity is the compass.", text: "A framework for leading multi-layered teams through rapid organizational change without losing scale, speed, or direction.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7411175389114429440/" },
    { image: "/media/linkedin-collaboration.jpg", title: "A masterpiece of collaboration", text: "Individual paintings inspired by leadership principles came together as one visual expression of teamwork, creativity, and purpose.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7333093175605022720/" },
    { image: "/media/linkedin-snake-river.jpg", title: "Life Lessons from the Snake River", text: "A 1,078-mile river became a lesson in ambitious beginnings, patient growth, flexibility, learning from the dirt, and joining something larger than ourselves.", url: "https://www.linkedin.com/pulse/life-lessons-from-snake-river-bonan-zhong-d4mrc" },
  ],
  zh: [
    { image: "/media/linkedin-team-culture.jpg", title: "最强的团队，让身边每个人都变得更好", text: "分享知识、主动补位、赢得信任——这些行动很少出现在仪表盘上，却塑造文化并推动绩效。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7488859470878646272/" },
    { image: "/media/linkedin-womens-day.jpg", title: "机会、贡献与领导力", text: "关于公平、包容，以及如何让每一个声音都能在决策空间里被听见。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7436660928278048768/" },
    { image: "/media/linkedin-couprize.jpg", title: "当卓越以不同方式出现", text: "深度主人翁意识、客户优先的判断、创新和自动化，让优秀人才彼此影响并放大成果。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7414482092639813632/" },
    { image: "/media/linkedin-talent-clarity.jpg", title: "人才是引擎，清晰是指南针", text: "在快速组织变化中领导多层团队，同时保持规模、速度和方向的一套框架。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7411175389114429440/" },
    { image: "/media/linkedin-collaboration.jpg", title: "协作与创造力的作品", text: "每个人围绕领导力原则完成一幅画，最终组合成一个关于团队、创意和共同目标的整体。", url: "https://www.linkedin.com/feed/update/urn:li:activity:7333093175605022720/" },
    { image: "/media/linkedin-snake-river.jpg", title: "蛇河教给我的人生课", text: "一条绵延 1,078 英里的河，让我重新理解高目标、耐心成长、灵活前行、从泥沙中学习，以及融入更大整体的意义。", url: "https://www.linkedin.com/pulse/life-lessons-from-snake-river-bonan-zhong-d4mrc" },
  ],
} as const;

const categoryLabels = {
  en: { cities: "Cities", events: "Events", arts: "Arts & culture", sports: "Fishing & sports", handmade: "Handmade", nature: "Nature", travel: "Travel", food: "Food", everyday: "Everyday life" },
  zh: { cities: "城市", events: "活动与节庆", arts: "艺术与文化", sports: "钓鱼与运动", handmade: "手工创作", nature: "自然", travel: "旅行", food: "美食", everyday: "日常生活" },
} as const;

const placeLabels = {
  en: { seattle: "Seattle area", alaska: "Alaska", hawaii: "Hawaii", canada: "Canada", korea: "Korea", japan: "Japan", chicago: "Chicago", yellowstone: "Yellowstone", california: "California", usa: "Other U.S.", elsewhere: "Elsewhere" },
  zh: { seattle: "西雅图地区", alaska: "阿拉斯加", hawaii: "夏威夷", canada: "加拿大", korea: "韩国", japan: "日本", chicago: "芝加哥", yellowstone: "黄石公园", california: "加利福尼亚", usa: "美国其他地区", elsewhere: "其他地点" },
} as const;

function getVideoPlace(title: string) {
  const rules: [string, RegExp][] = [
    ["alaska", /阿拉斯加|alaska/i], ["hawaii", /夏威夷|hawaii|honolulu|檀香山/i], ["canada", /加拿大|canada|温哥华|vancouver|victoria|banff|班夫/i],
    ["chicago", /芝加哥|chicago/i], ["yellowstone", /黄石|yellowstone/i], ["california", /加州|加利福尼亚|california|san francisco|旧金山|los angeles|洛杉矶/i],
    ["seattle", /西雅图|seattle|bellevue|贝尔维尤|redmond|雷德蒙德|华盛顿湖|washington lake|marymoor|chel[ae]n|雷尼尔|rainier/i],
    ["korea", /韩国|korea|首尔|seoul|江陵|gangneung|釜山|busan|济州|jeju|汉江|han river|东大门|dongdaemun/i],
    ["japan", /日本|japan|东京|tokyo|北海道|hokkaido|富良野|furano|大阪|osaka|京都|kyoto/i],
    ["usa", /美国|america|usa|u\.s\.|纽约|new york|拉斯维加斯|las vegas|波士顿|boston|佛罗里达|florida/i],
  ];
  return (rules.find(([, pattern]) => pattern.test(title)) || ["elsewhere"])[0];
}

const destinationOrder = ["seattle", "alaska", "hawaii", "canada", "korea", "japan", "chicago", "yellowstone", "california", "usa"];

const mapAreas = [
  { key: "seattle", en: "Seattle", zh: "西雅图", pattern: /西雅图|seattle/i, x: 18, y: 30 },
  { key: "sammamish", en: "Sammamish", zh: "萨马米什", pattern: /sammamish|萨马米什/i, x: 24, y: 36 },
  { key: "chelan", en: "Chelan", zh: "奇兰", pattern: /chelan|奇兰/i, x: 30, y: 25 },
  { key: "redmond", en: "Redmond", zh: "雷德蒙德", pattern: /redmond|雷德蒙/i, x: 22, y: 42 },
  { key: "alaska", en: "Alaska", zh: "阿拉斯加", pattern: /alaska|阿拉斯加/i, x: 8, y: 8 },
  { key: "hawaii", en: "Hawaii", zh: "夏威夷", pattern: /hawaii|夏威夷/i, x: 14, y: 78 },
  { key: "canada", en: "Canada", zh: "加拿大", pattern: /canada|加拿大|vancouver|温哥华/i, x: 24, y: 14 },
  { key: "yellowstone", en: "Yellowstone", zh: "黄石", pattern: /yellowstone|黄石/i, x: 39, y: 42 },
  { key: "chicago", en: "Chicago", zh: "芝加哥", pattern: /chicago|芝加哥/i, x: 50, y: 38 },
  { key: "harbin", en: "Harbin", zh: "哈尔滨", pattern: /harbin|哈尔滨/i, x: 84, y: 20 },
  { key: "korea", en: "Korea", zh: "韩国", pattern: /korea|韩国|seoul|首尔|江陵|gangneung/i, x: 86, y: 42 },
  { key: "japan", en: "Japan", zh: "日本", pattern: /japan|日本|北海道|hokkaido|东京|tokyo/i, x: 92, y: 52 },
];

const globeLocations = [
  { key: "seattle", en: "Seattle", zh: "西雅图", lat: 47.6205, lon: -122.3493, landmark: "Space Needle, Seattle", symbol: "◭" }, { key: "sammamish", en: "Sammamish", zh: "萨马米什", lat: 47.6163, lon: -122.0356, landmark: "Lake Sammamish, Washington", symbol: "≈" }, { key: "chelan", en: "Chelan", zh: "奇兰", lat: 47.8408, lon: -120.0165, landmark: "Lake Chelan, Washington", symbol: "≈" },
  { key: "alaska", en: "Alaska", zh: "阿拉斯加", lat: 63.0695, lon: -151.0074, landmark: "Denali, Alaska", symbol: "△" }, { key: "hawaii", en: "Hawaii", zh: "夏威夷", lat: 21.2634, lon: -157.8057, landmark: "Hawaiian tropical flowers", symbol: "✿" }, { key: "canada", en: "Vancouver", zh: "温哥华", lat: 49.2888, lon: -123.1111, landmark: "Canada Place, Vancouver", symbol: "⌁" }, { key: "toronto", en: "Toronto", zh: "多伦多", lat: 43.6426, lon: -79.3871, landmark: "CN Tower, Toronto", symbol: "↟" },
  { key: "yellowstone", en: "Yellowstone", zh: "黄石", lat: 44.916, lon: -110.4158, landmark: "Bison in Lamar Valley, Yellowstone", symbol: "♉" }, { key: "chicago", en: "Chicago", zh: "芝加哥", lat: 41.8796, lon: -87.6237, landmark: "Art Institute of Chicago", symbol: "▣" }, { key: "harbin", en: "Harbin", zh: "哈尔滨", lat: 45.7732, lon: 126.6167, landmark: "Flood Control Monument, Harbin", symbol: "♜" },
  { key: "korea", en: "Seoul", zh: "首尔", lat: 37.5796, lon: 126.977, landmark: "Gyeongbokgung Palace, Seoul", symbol: "宫" }, { key: "japan", en: "Japan", zh: "日本", lat: 35.6762, lon: 139.6503, landmark: "Sushi in Tokyo, Japan", symbol: "鮨" },
];

const curatedSparkUrls = [
  "https://www.douyin.com/video/7402500473552440612",
  "https://www.douyin.com/video/7443316754949901595",
  "https://www.douyin.com/video/7219158862765559096",
  "https://www.douyin.com/video/7128616231518735647",
  "https://www.douyin.com/video/7640499506980111027",
  "https://www.douyin.com/video/7670288236707311214",
  "https://www.douyin.com/video/7123404557735988488",
  "https://www.douyin.com/video/7640706893246598363",
  "https://www.douyin.com/video/7666322382810748507",
];

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
    journal: "How I see", journalTitle: "Three lenses for seeing what others miss.", readNow: "Read now",
    stories: [
      ["01 · SYSTEMS", "Find the constraint behind the problem", "Most visible problems are symptoms. I look for the bottleneck quietly shaping every decision around it.", "Field principle"],
      ["02 · LEADERSHIP", "Build yourself out of the system", "The strongest leader is not the permanent answer, but the person who leaves behind judgment that keeps multiplying.", "Leadership principle"],
      ["03 · CURIOSITY", "Small signals reveal the whole", "A river, a melon, or a covered spray bottle can expose how an entire culture or system really works.", "Observation principle"],
    ],
    postcards: "Field atlas", postcardsTitle: "Every place leaves a different question behind.", postcardsText: "An image-led atlas of the places that shaped the stories—from the Pacific Northwest to Asia and beyond.", openPostcard: "Explore place",
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
    journal: "我的观察方式", journalTitle: "三个视角，看见别人容易错过的东西。", readNow: "立即阅读",
    stories: [
      ["01 · 系统", "找到问题背后的约束", "最显眼的问题往往只是症状。我寻找那个安静地影响所有决定的真正瓶颈。", "现场原则"],
      ["02 · 领导力", "让系统最终不再依赖自己", "最强的领导者不是永远提供答案的人，而是留下能够持续复制判断力的系统。", "领导力原则"],
      ["03 · 好奇心", "小信号能揭示整个系统", "一条河、一颗哈密瓜，或一只被手挡住的喷壶，都可能暴露一种文化或系统如何真正运作。", "观察原则"],
    ],
    postcards: "现场地图", postcardsTitle: "每一个地方，都会留下一个不同的问题。", postcardsText: "一张由真实画面组成的旅行地图——从美国西北部到亚洲，以及更远的地方。", openPostcard: "探索地点",
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
    constraint: { title: "Every solution creates a new constraint", category: "Marketplace & Systems · 6 min read", intro: "What if the strength that carried you here quietly becomes the limitation that keeps you from what comes next?", paragraphs: ["I have followed that question through several very different chapters of my life. I began in surgery, where precision is immediate and consequences are visible. The problem is often physically in front of you; a decision becomes an action, and the feedback can be brutally clear. Medicine taught me rigor, responsibility, and respect for evidence. It also taught me that being technically right is not enough. A patient is a whole system, not an isolated procedure.", "Regenerative medicine widened the frame. Instead of repairing one moment of damage, we asked whether a biological system could be helped to repair itself. Biotechnology widened it again: a discovery matters only when research, manufacturing, regulation, capital, and real human need can meet. Each move looked like a change of field. To me, each was a move toward a larger constraint—the next place where solving one problem could unlock more impact.", "At Amazon and later Coupang, the system became larger still. A marketplace is not simply a website with buyers and sellers. It is a living network of incentives, information, selection, trust, logistics, technology, and millions of small decisions. Improve one part and behavior changes elsewhere. Faster growth creates more exceptions. More tools create more handoffs. More expertise can create narrower ownership. Success changes the environment that made success possible.", "This is why every solution eventually creates a new constraint. A process introduced to create consistency can become bureaucracy once people stop understanding the judgment behind it. A leader who saves every difficult decision can become the queue that slows the whole organization. A dashboard created to sharpen attention can make teams optimize what is measurable while missing what matters. Even expertise can become a constraint when it gives us answers faster than curiosity gives us better questions.", "I look for four signals. First, decisions repeatedly wait for one person. Second, local metrics improve while the customer’s full experience gets worse. Third, exceptions multiply faster than the rules intended to contain them. Fourth, people defend the current operating model by describing how well it worked in the past. These are rarely failures of effort. They are evidence that the system has outgrown its previous solution.", "The response is not constant reorganization or novelty for its own sake. It is disciplined re-examination. Which assumption carries most of our conclusion? Where is information being lost? Who is closest to the work but furthest from the decision? If this solution succeeds, what second-order constraint will it create? Good systems do not avoid constraints; they become better at noticing and moving them.", "Leadership has the same pattern. Early in a team’s life, a leader may need to supply answers, standards, and momentum. Later, the very habit of supplying every answer prevents judgment from spreading. The work changes from being the best problem-solver in the room to creating context, principles, and decision rights that let others solve problems the leader has never seen. The strongest leader does not leave behind dependency. They leave behind a system that keeps learning.", "My career may look nonlinear from the outside—surgery, regenerative medicine, biotechnology, Amazon, Coupang. The connecting line is simple: question assumptions, locate the real bottleneck, and build something adaptive enough to discover the next one. Progress is not a final state where constraints disappear. Progress is developing the courage and clarity to see when yesterday’s strength has completed its job—and to ask a better question before the system asks it for us."] },
    bottleneck: { title: "The next bottleneck", category: "Marketplace & Systems", intro: "The operating model that creates growth is rarely the one that sustains every later stage.", paragraphs: ["When a system succeeds, it changes the environment around it. More customers create more edge cases. More sellers create more variation. More tools create more handoffs.", "Scaling is not a larger version of the same work. It requires asking which constraint now limits the whole system—and whether our strongest habits are preventing us from seeing it.", "I look for four signals: decisions waiting for one person, teams optimizing local metrics at the expense of the whole, exceptions growing faster than the rules, and yesterday’s expertise shutting down new questions.", "The goal is a system capable of noticing its next constraint and adapting before it becomes a crisis."] },
    independence: { title: "Build yourself out of the system", category: "Leadership", intro: "The goal of leadership is not to become indispensable. It is to make good judgment increasingly independent of you.", paragraphs: ["A leader can solve today’s problem and still become tomorrow’s bottleneck. Every decision that must climb the hierarchy teaches the organization to wait instead of think.", "I look for places where context, principles, and decision rights can move closer to the work. The aim is not less accountability; it is accountability distributed with enough clarity to act.", "The real test is what happens when the leader leaves the room. Does quality fall, or does the system continue learning, challenging itself, and raising its own standard?", "The strongest legacy is not a queue of people who need your answer. It is a network of leaders capable of producing better answers than you could alone."] },
    smallSignals: { title: "Small signals reveal the whole", category: "Curiosity & Systems", intro: "The smallest gesture can be a compressed explanation of an entire culture, organization, or life.", paragraphs: ["A shopkeeper replacing a melon because it will not ripen today says something about customer judgment. A hand shielding strangers from spray mist says something about consideration. A river navigating fifteen dams says something about adaptation.", "I pay attention to these moments because systems often reveal themselves indirectly. Policies describe what should happen; small behaviors reveal what people have truly learned to value.", "This is also why travel matters to me. A new place interrupts familiar assumptions and makes ordinary details visible again.", "Curiosity is not a hobby separate from leadership. It is the discipline of noticing weak signals before they become obvious truths."] },
    hokkaido: { title: "What I quietly learned after traveling", category: "Places & Cultures · Hokkaido", intro: "Nothing earth-shattering happened. Many people simply chose to take one small extra step.", paragraphs: ["This was my second Asian summer after moving to Seoul. Last year Tokyo’s heat made me question my choices, so this year I went north—to Hokkaido. The moment I stepped off the plane into weather below 20°C, I forgave the Asian summer.", "At breakfast, an elderly man cleaned a table. He held the spray bottle in one hand and used the other to shield people waiting nearby from the mist. It was the first time I thought that even a spray bottle could demonstrate consideration.", "In Furano, I chose a melon without understanding the label. At checkout, the shopkeeper stopped me and explained: ‘This one will be ripe in three days. I think you want to eat it today.’ She replaced it with one that was ready. Back at the hotel, it was perfect.", "The best part of travel is not only what we see, but what we quietly learn after coming home. Maybe the next time I pass a slow car, I will wave: It’s okay. Going slowly can be good too."], external: { label: "Open the original on Douyin — sign-in may be required", url: "https://www.douyin.com/video/7658469084598587122" } },
    learning: { title: "Organizations that keep learning", category: "AI & Adaptive Systems", intro: "AI matters less as a feature than as a new way for an organization to notice and adapt.", paragraphs: ["A feature can improve one task. An adaptive system changes how an organization senses what is happening, shares what it learns, and updates its decisions.", "The useful question is not only where AI can automate work. It is where information is lost, feedback arrives too late, and judgment remains trapped with too few people.", "Technology creates leverage only when the operating model changes with it. Otherwise, a faster tool delivers old assumptions more efficiently.", "The opportunity is to build organizations that continue getting smarter long after today’s problems have been solved."] },
    seattle: { title: "Seattle—sweet home", category: "Postcard · Seattle", intro: "Rain, water, evergreens—and the quiet pull of returning.", paragraphs: ["Seattle is where a city and the outdoors keep interrupting each other. Water appears at the end of a street. Mountains arrive when the clouds decide to move.", "It is where many of my interests meet: marketplaces and technology, fishing and lakes, everyday life and enormous landscapes.", "Some places impress you immediately. Home works differently. You understand it by leaving, returning, and noticing what your eyes had stopped seeing."] },
    seoul: { title: "A city that performs", category: "Postcard · Seoul", intro: "Lanterns, live music, taekwondo, K-pop, and weekends along the Han River.", paragraphs: ["Seoul often turns public space into a shared stage. A walk can become a concert, drone show, lantern procession, or a crowd around young performers with seemingly unlimited energy.", "At Dongdaemun, I watched taekwondo and K-pop share the same performance. They flipped, kicked, and danced as if gravity and knee pain did not exist yet.", "Youth is a built-in superpower people often appreciate only after it expires. A city can make that energy visible again, even if only for an evening."] },
    decisions: { title: "Four questions for a better decision", category: "Books & Ideas", intro: "A compact framework I return to when a problem looks obvious.", paragraphs: ["Which assumption is carrying most of the conclusion? If it changes, does the decision still hold?", "Where is the actual system constraint? Improving anything else may create activity without impact.", "What second-order constraint will this solution create if it succeeds?", "What would let the people closest to the work make a better decision without waiting for me?"] },
    professional: { title: "Bonan Zhong", category: "Professional profile", intro: "Director at Coupang · Former Amazon · Marketplace · Consumer Platforms · Seller Services", paragraphs: ["My career has crossed surgery, regenerative medicine, biotechnology, Amazon, and Coupang. The common thread is a search for the next bottleneck where I can create greater impact.", "Today I help organizations scale through AI, marketplaces, and leadership. My approach is to question assumptions, find the real bottleneck, build systems that adapt, and develop leaders who eventually make themselves unnecessary.", "I am interested in conversations about AI, consumer platforms, marketplaces, seller services, and organizations that continue getting smarter long after today’s problems have been solved."], external: { label: "Open LinkedIn — LinkedIn may require sign-in", url: linkedinUrl } },
    videos: { title: "西雅图大南瓜 · Seattle Big Pumpkin", category: "Video profile", intro: "A playful, curious guide to life in the American Northwest, Seoul, and beyond.", paragraphs: ["The video archive includes nearly 300 works about Seattle, Seoul, Korea, Japan, nature, fishing, public performances, cultural details, and everyday encounters.", "Representative stories include Seattle’s seasons, trout fishing in the American West, Seafair and the Blue Angels, Seoul’s lantern festivals and Han River performances, and a reflective journey through Hokkaido.", "The voice is visual, curious, and often playful—using specific small details to move from an experience to a broader reflection."], external: { label: "Open Douyin — Douyin may require sign-in", url: douyinUrl } },
  },
  zh: {
    constraint: { title: "每一个解决方案，都会创造新的约束", category: "市场平台与系统 · 阅读约6分钟", intro: "如果把你带到今天的最大优势，正在悄悄变成通往下一阶段的限制，会怎样？", paragraphs: ["这个问题贯穿了我几段看起来完全不同的职业经历。我从外科医学开始。那里要求精确、责任和对证据的尊重；决定很快变成行动，反馈有时也异常直接。医学让我明白，技术上正确并不足够，因为病人是一个完整系统，而不是一个孤立的手术步骤。", "再生医学把视野拉远了一层：我们不只修复一次损伤，而是思考能否帮助生物系统恢复自我修复的能力。生物技术又把问题扩大：一个发现必须穿过研发、制造、法规、资本和真实需求，才能成为真正的价值。每次转变看似换了领域，对我而言却是在寻找更大的瓶颈。", "到了亚马逊和酷澎，系统变得更大。市场平台不是一个连接买家和卖家的网站，而是由激励、信息、选择、信任、物流、技术和无数微小决定构成的网络。改善一处，其他地方的行为就会改变；增长越快，例外越多；工具越多，交接越多；专业越深，也可能让责任变窄。", "所以，每一个解决方案最终都会创造新的约束。为了一致性建立的流程，在人们忘记背后的判断后会变成官僚；总能解决难题的领导者，会变成所有决定排队等待的瓶颈；为了聚焦而建立的仪表盘，也可能让团队只优化可测量的东西，却错过真正重要的东西。", "我通常寻找四个信号：决定是否反复等待同一个人；局部指标变好时，客户的完整体验是否反而变差；例外是否比规则增长得更快；人们是否只用过去的成功来捍卫当前模式。这些往往不是努力不足，而是系统已经长大，旧答案无法继续承载它。", "应对方式不是为了新鲜而不停重组，而是有纪律地重新检查：哪一个假设承担了大部分结论？信息在哪里丢失？最接近工作的人为什么离决定最远？如果这个方案成功，它会产生什么第二层约束？好的系统并不会消灭约束，而是越来越早地发现并移动约束。", "领导力也遵循同样的规律。团队早期，领导者需要提供答案、标准和速度；到了下一阶段，继续给出所有答案，反而会阻止判断力扩散。工作必须从‘成为房间里最好的解题者’，转向提供背景、原则和决策权，让别人能够解决领导者从未见过的问题。", "从外科医学、再生医学、生物技术，到亚马逊和酷澎，我的路径在外人看来也许并不线性。连接它们的线索其实很简单：质疑假设，找到真正的瓶颈，构建能够适应变化的系统。进步不是约束从此消失，而是有勇气看见昨天的优势已经完成使命，并在系统替我们提出问题之前，先提出一个更好的问题。"] },
    bottleneck: { title: "下一个瓶颈", category: "市场平台与系统", intro: "创造增长的运营模式，很少能原样支撑之后的每一个阶段。", paragraphs: ["当一个系统成功时，它会改变周围的环境。更多客户带来更多边缘情况，更多卖家带来更多差异，更多工具带来更多交接。", "规模化不是把同样的工作放大。它要求我们重新问：现在是哪一个约束限制了整个系统？", "我会关注四个信号：决定不断等待同一个人；团队为局部指标牺牲整体；例外比规则增长得更快；昨天的专业知识在关闭今天的新问题。", "目标不是创造一个永远完美的系统，而是让它能发现下一个瓶颈，并在问题成为危机之前进化。"] },
    independence: { title: "让系统最终不再依赖自己", category: "领导力", intro: "领导力的目标不是让自己不可替代，而是让好的判断越来越不必依赖自己。", paragraphs: ["领导者可以解决今天的问题，却成为明天的瓶颈。每一个必须层层上报的决定，都在教组织等待，而不是思考。", "我会寻找能够把背景、原则和决策权移到离工作更近的地方。这不是减少问责，而是让清晰度与责任一起被分配。", "真正的测试，是领导者离开房间以后会发生什么：质量会下降，还是系统会继续学习、挑战自己并提高标准？", "最好的遗产不是一群等待你回答的人，而是一张能够共同创造更好答案的领导者网络。"] },
    smallSignals: { title: "小信号能揭示整个系统", category: "好奇心与系统", intro: "一个最小的动作，有时是对整种文化、组织或生活方式的压缩解释。", paragraphs: ["店主因为哈密瓜今天还没熟而主动替换，透露了她对客户判断的理解；一只挡住喷雾的手，透露了对陌生人的体贴；一条穿过十五座大坝的河，透露了适应的力量。", "我关注这些时刻，因为系统往往不会直接介绍自己。规则描述应该发生什么，而小行为揭示人们真正学会珍视什么。", "这也是旅行对我重要的原因。新的地方会打断熟悉的假设，让普通细节重新变得可见。", "好奇心不是与领导力分开的爱好。它是一种纪律：在微弱信号变成明显事实之前，就先注意到它。"] },
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
  const [selectedEssayId, setSelectedEssayId] = useState<string | null>(null);
  const [essayCategory, setEssayCategory] = useState("all");
  const [videoCategory, setVideoCategory] = useState("all");
  const [mapArea, setMapArea] = useState("seattle");
  const [showArchive, setShowArchive] = useState(false);
  const [visibleVideos, setVisibleVideos] = useState(24);
  const [globeRotation, setGlobeRotation] = useState(122);
  const [globeZoom, setGlobeZoom] = useState(1);
  const [bookQuery, setBookQuery] = useState("");
  const [bookCategory, setBookCategory] = useState("All");
  const [bookSort, setBookSort] = useState("curated");
  const [visibleBooks, setVisibleBooks] = useState(18);
  const dragStart = useRef<{ x: number; rotation: number } | null>(null);
  const t = ui[language];
  const selected = selectedId ? details[language][selectedId] : null;
  const selectedEssay = (essayCollection as Essay[]).find((essay) => essay.id === selectedEssayId) || null;
  const filteredEssays = (essayCollection as Essay[]).filter((essay) => essayCategory === "all" || essay.category === essayCategory);
  const social = socialCopy[language];
  const posts = linkedinPosts[language];
  const categories = categoryLabels[language];
  const places = placeLabels[language];
  const filteredVideos = douyinCatalog.filter((video) => videoCategory === "all" || video.category === videoCategory).slice().sort((a, b) => b.views - a.views);
  const activeMapArea = mapAreas.find((area) => area.key === mapArea) || mapAreas[0];
  const activeGlobePlace = globeLocations.find((place) => place.key === mapArea) || globeLocations[0];
  const activeMapPattern = mapAreas.find((area) => area.key === mapArea)?.pattern || new RegExp(activeGlobePlace.en, "i");
  const mapStories = douyinCatalog.filter((video) => activeMapPattern.test(video.title)).sort((a, b) => b.views - a.views).slice(0, 4);
  const curatedSparks = curatedSparkUrls.map((url) => douyinCatalog.find((video) => video.url === url)).filter(Boolean);
  const filteredBooks = allBooks.filter((book) => (bookCategory === "All" || bookTheme(book.title) === bookCategory) && `${book.title} ${book.author} ${bookTheme(book.title)}`.toLowerCase().includes(bookQuery.toLowerCase())).slice().sort((a,b) => bookSort === "az" ? a.title.localeCompare(b.title) : bookSort === "za" ? b.title.localeCompare(a.title) : 0);

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

      <section className="featured section-pad"><div className="section-label">{t.featuredLabel}</div><div className="featured-grid"><h2>{t.featuredTitle}</h2><div><p>{t.featuredText}</p><button className="text-link text-button" type="button" onClick={() => setSelectedId("constraint")}>{t.readIdea} <span>→</span></button></div></div><Engagement id="featured" language={language}/></section>

      <section className="section-pad" id="writing"><div className="section-heading"><div><p className="eyebrow">{t.journal}</p><h2>{t.journalTitle}</h2></div></div>
        <div className="story-grid">
          {t.stories.map((story, index) => <button key={story[1]} className={`story-card card-button ${index === 0 ? "story-card-dark" : index === 1 ? "story-card-coral" : "story-card-paper"}`} type="button" onClick={() => setSelectedId(["bottleneck", "independence", "smallSignals"][index])}><div className="card-meta"><span>{story[0]}</span><span>{language === "zh" ? "中文" : "EN"}</span></div><div className="story-symbol">{["↗", "×", "◌"][index]}</div><div><h3>{story[1]}</h3><p>{story[2]}</p><span className="card-foot">{story[3]} · {t.readNow} →</span></div></button>)}
        </div><Engagement id="writing" language={language}/>
      </section>

      <section className="postcards section-pad" id="postcards"><div className="section-heading postcards-heading"><div><p className="eyebrow">{t.postcards}</p><h2>{t.postcardsTitle}</h2></div><p>{t.postcardsText}</p></div>
        <div className="atlas-map"><div className="globe-stage"><div className="globe-controls"><button type="button" onClick={() => setGlobeZoom((z) => Math.min(1.28, z + .1))} aria-label="Zoom in">＋</button><button type="button" onClick={() => setGlobeZoom((z) => Math.max(.8, z - .1))} aria-label="Zoom out">−</button><small>{language === "zh" ? "拖拽旋转地球 · 点击3D地标" : "DRAG THE EARTH · CHOOSE A 3D LANDMARK"}</small></div><div className="globe" style={{ transform: `scale(${globeZoom})`, backgroundPosition: `${50 - globeRotation / 1.8}% center` }} onPointerDown={(event) => { dragStart.current = { x: event.clientX, rotation: globeRotation }; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={(event) => { if (dragStart.current) setGlobeRotation(dragStart.current.rotation + (event.clientX - dragStart.current.x) * .45); }} onPointerUp={() => { dragStart.current = null; }} onWheel={(event) => { event.preventDefault(); setGlobeZoom((z) => Math.max(.8, Math.min(1.28, z - event.deltaY * .001))); }}><div className="globe-grid"/>{globeLocations.map((place) => { const relativeLon = ((place.lon + globeRotation + 540) % 360) - 180; const visible = Math.abs(relativeLon) < 88; const x = 50 + relativeLon / 1.8; const y = 50 - place.lat / 1.8; return <button key={place.key} type="button" className={`globe-pin landmark-${place.key} ${mapArea === place.key ? "active" : ""}`} style={{ left: `${x}%`, top: `${y}%`, opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }} onClick={() => setMapArea(place.key)}><i className="landmark-mini"><b>{place.symbol}</b></i><span>{language === "zh" ? place.zh : place.en}</span></button>; })}</div><div className="globe-city-selector">{globeLocations.map((place) => <button type="button" key={place.key} className={mapArea === place.key ? "active" : ""} onClick={() => { setMapArea(place.key); setGlobeRotation(-place.lon); }}><b>{place.symbol}</b><span>{language === "zh" ? place.zh : place.en}</span></button>)}</div><small className="nasa-credit">NASA Blue Marble · Markers share the map projection</small></div>
          <div className="map-results"><div><small>{language === "zh" ? "城市3D地标" : "CITY · 3D LANDMARK"}</small><div className={`landmark-symbol landmark-large landmark-${activeGlobePlace.key}`}>{activeGlobePlace.symbol}</div><h3>{language === "zh" ? activeGlobePlace.zh : activeGlobePlace.en}</h3><p className="landmark-name">{activeGlobePlace.landmark}</p><p>{language === "zh" ? "这个微型3D场景直接标记在城市位置；也可以继续进入 Google Earth 查看真实环境。" : "This miniature 3D scene sits directly on the city location. Google Earth remains available for the real surroundings."}</p><a className="earth-link" href={`https://earth.google.com/web/search/${encodeURIComponent(activeGlobePlace.landmark)}`} target="_blank" rel="noreferrer">{language === "zh" ? "查看真实地标" : "See the real landmark"} ↗</a></div><div className="map-story-grid">{mapStories.map((video, index) => <a href={video.url} target="_blank" rel="noreferrer" key={video.url}><img src={video.image} alt={displayVideoTitle(video, language, index)}/><span>{displayVideoTitle(video, language, index)}</span></a>)}</div></div>
        </div><Engagement id="atlas" language={language}/>
      </section>

      <section className="essay-salon section-pad" id="essays">
        <div className="essay-heading"><p className="eyebrow">{language === "zh" ? "人间拾光 · 原创随笔" : "COLLECTED LIGHT · ORIGINAL ESSAYS"}</p><h2>{language === "zh" ? "人间拾光" : "Collected Light"}</h2><p>{language === "zh" ? "十八篇关于城市、艺术、团队、系统与日常的现场笔记。不是攻略，而是生活经过时留下的光。" : "Eighteen original field notes on cities, art, teams, systems, and everyday life—small illuminations gathered along the way."}</p></div>
        <div className="essay-filters" aria-label={language === "zh" ? "随笔分类" : "Essay categories"}>{Object.entries(essayCategories[language]).map(([key, label]) => <button key={key} type="button" className={essayCategory === key ? "active" : ""} onClick={() => setEssayCategory(key)}>{label}<span>{key === "all" ? essayCollection.length : essayCollection.filter((essay) => essay.category === key).length}</span></button>)}</div>
        <div className="essay-grid">{filteredEssays.map((essay, index) => { const originalIndex = Number(essay.id.slice(-2)) - 1; return <button type="button" onClick={() => setSelectedEssayId(essay.id)} className={`essay-card essay-tone-${(originalIndex % 6) + 1}`} key={essay.id}><div className="essay-art"><span>{String(index + 1).padStart(2, "0")}</span><i>{language === "zh" ? "图片待上传" : "IMAGE COMING SOON"}</i></div><div className="essay-card-copy"><small>{essayCategories[language][essay.category as keyof typeof essayCategories.en]}</small><h3>{language === "zh" ? essay.title : essayEnglishTitles[originalIndex]}</h3><p>{language === "zh" ? essay.excerpt : essayEnglishSummaries[originalIndex]}</p><span>{language === "zh" ? "阅读全文" : "Read the English edition"} →</span></div></button>; })}</div><Engagement id="essays" language={language}/>
      </section>

      <section className="bookshelf section-pad" id="books"><div className="books-heading"><div><p className="eyebrow">{language === "zh" ? `博南书单 · ${allBooks.length}本` : `Bonan’s bookshelf · ${allBooks.length} books`}</p><h2>{language === "zh" ? "那些改变我提问方式的书。" : "Books that changed the way I ask questions."}</h2></div><p>{language === "zh" ? "按领导力、沟通、决策与系统、人生与自我、思想与故事分类；也可以按书名排序。" : "Browse by leadership, communication, decisions and systems, life and self, or ideas and stories—then sort the shelf by title."}</p></div><div className="book-tools"><input type="search" value={bookQuery} onChange={(event) => { setBookQuery(event.target.value); setVisibleBooks(18); }} placeholder={language === "zh" ? "搜索书名或主题…" : "Search titles or themes…"}/><select value={bookSort} onChange={(event) => setBookSort(event.target.value)} aria-label={language === "zh" ? "书名排序" : "Sort books"}><option value="curated">{language === "zh" ? "精选顺序" : "Curated order"}</option><option value="az">A → Z</option><option value="za">Z → A</option></select><span>{filteredBooks.length} {language === "zh" ? "本书" : "books"}</span></div><div className="book-categories">{["All","Leadership","Communication","Decisions & systems","Life & self","Ideas & stories"].map((category) => <button type="button" className={bookCategory === category ? "active" : ""} onClick={() => { setBookCategory(category); setVisibleBooks(18); }} key={category}>{language === "zh" ? ({ All: "全部", Leadership: "领导力", Communication: "沟通与影响", "Decisions & systems": "决策与系统", "Life & self": "人生与自我", "Ideas & stories": "思想与故事" } as Record<string,string>)[category] : category}</button>)}</div><div className="book-grid">{filteredBooks.slice(0, visibleBooks).map((book) => <article className="book-card" key={book.title}><BookCover title={book.title} isbn={"isbn" in book ? book.isbn : undefined} cover={"cover" in book ? book.cover : undefined}/><div><small>{book.author !== bookTheme(book.title) ? `${book.author} · ` : ""}{bookTheme(book.title)}</small><h3>{book.title}</h3><p><b>{language === "zh" ? "我的短评：" : "Quick review: "}</b>{book[language]}</p><div className="book-links"><a href={"amazon" in book ? book.amazon : `https://www.amazon.com/s?k=${encodeURIComponent(book.title)}`} target="_blank" rel="noreferrer">Amazon ↗</a><a href={`https://www.audible.com/search?keywords=${encodeURIComponent(book.title)}`} target="_blank" rel="noreferrer">Audible ↗</a></div></div></article>)}</div>{visibleBooks < filteredBooks.length && <button className="load-more books-more" type="button" onClick={() => setVisibleBooks((count) => count + 18)}>{language === "zh" ? "继续翻阅" : "Explore more books"} ↓</button>}<Engagement id="books" language={language}/></section>

      <section className="web-discoveries section-pad" id="web-discoveries"><div className="web-heading"><p className="eyebrow">{language === "zh" ? "有趣的网站" : "Interesting corners of the internet"}</p><h2>{language === "zh" ? "两个重新观看世界的入口。" : "Two portals for seeing the world differently."}</h2></div><div className="web-grid"><a href="https://anitabi.cn/" target="_blank" rel="noreferrer" className="web-card anime-web"><div className="web-visual"><span>聖地</span><i>2D → REAL WORLD</i></div><div><small>ANIME × MAP</small><h3>AniTABI · 动画巡礼</h3><p>{language === "zh" ? "把动画中的场景与现实地图、街道和取景地对应起来。适合沿着作品去旅行，也适合发现熟悉画面背后的真实城市。" : "Match scenes from anime with their real-world maps, streets, and filming locations—then travel through a story into the city behind it."}</p><b>{language === "zh" ? "打开网站" : "Visit website"} ↗</b></div></a><a href="https://www.skylinewebcams.com/" target="_blank" rel="noreferrer" className="web-card webcam-web"><div className="web-visual"><span>LIVE</span><i>THE WORLD · RIGHT NOW</i></div><div><small>REAL-TIME WINDOWS</small><h3>SkylineWebcams</h3><p>{language === "zh" ? "通过世界各地的实时摄像头，看看此刻的广场、海滩、火山、城市和动物。不是旅行攻略，而是一扇正在发生的窗。" : "Look through live cameras at plazas, beaches, volcanoes, cities, and animals around the world—a window into what is happening right now."}</p><b>{language === "zh" ? "观看实时世界" : "Watch the live world"} ↗</b></div></a></div><Engagement id="interesting-websites" language={language}/></section>

      <section className="recommendations section-pad" id="recommendations"><div className="recommendation-intro"><p className="eyebrow">{t.worth}</p><h2>{t.worthTitle}</h2><p>{t.worthText}</p></div>
        <div><div className="recommendation-list">{t.recs.map((item, index) => <button className="recommendation-item" key={item[1]} type="button" onClick={() => setSelectedId(["decisions", "professional", "videos"][index])}><span>0{index + 1}</span><div><small>{item[0]}</small><h3>{item[1]}</h3></div><span>{t.readNow} →</span></button>)}</div><Engagement id="recommendations" language={language}/></div>
      </section>

      <section className="about section-pad" id="about"><div className="about-number">05</div><div className="about-copy"><p className="eyebrow">{t.about}</p><h2>{t.aboutTitle}</h2><p className="about-lede">{t.aboutLede}</p><div className="about-columns"><p>{t.aboutA}</p><p>{t.aboutB}</p></div>
        <div className="social-links"><button type="button" onClick={() => setSelectedId("professional")}>{t.profileHere} →</button><button type="button" onClick={() => setSelectedId("videos")}>{t.videosHere} →</button></div><small className="external-warning">{t.externalNote}</small>
      <Engagement id="about" language={language}/></div></section>

      <section className="social-showcase section-pad" id="channels">
        <div className="social-heading"><p className="eyebrow">{social.label}</p><h2>{social.title}</h2><p>{social.intro}</p></div>
        <div className="channel-block"><div className="channel-title"><div><img src="/media/linkedin-profile.jpg" alt={t.portrait}/><h3>{social.linkedin}</h3></div><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <div className="linkedin-grid">{posts.map((post) => <a className="linkedin-card" href={post.url} target="_blank" rel="noreferrer" key={post.url}><img src={post.image} alt=""/><div><h4>{post.title}</h4><p>{post.text}</p><span>{social.open} ↗</span></div></a>)}</div><Engagement id="linkedin" language={language}/>
        </div>
        <div className="channel-block sparks-block"><div className="channel-title"><div><img src="/media/douyin-avatar.jpg" alt="西雅图大南瓜"/><h3>{social.douyin}</h3></div><a href={douyinUrl} target="_blank" rel="noreferrer">{social.archive} ↗</a></div>
          <p className="spark-intro">{language === "zh" ? "九个经过编辑挑选的瞬间：不是最新发布，而是最能代表我如何看世界的画面。" : "Nine editorially chosen moments—not the newest posts, but the clearest expression of how I see the world."}</p>
          <div className="curated-grid">{curatedSparks.map((video, index) => video && <a className={`curated-card curated-${index + 1}`} href={video.url} target="_blank" rel="noreferrer" key={video.url}><div className="spark-media"><img src={video.image} alt={displayVideoTitle(video, language, index)}/><span className="hover-preview">▶ {language === "zh" ? "悬停静音预览" : "HOVER FOR MUTED PREVIEW"}</span></div><div><small>{language === "zh" ? ["城市", "手作", "绘画", "活动", "艺术", "钓鱼", "夜色", "雕塑", "发现"][index] : ["PLACE", "HANDMADE", "PAINTING", "EVENT", "ART", "FISHING", "NIGHT", "SCULPTURE", "DISCOVERY"][index]}</small><h4>{displayVideoTitle(video, language, index)}</h4><span>{social.open} ↗</span></div></a>)}</div>
          <button className="archive-toggle" type="button" onClick={() => setShowArchive((open) => !open)}>{showArchive ? (language === "zh" ? "收起完整档案" : "Close the full archive") : (language === "zh" ? "按主题浏览全部 305 个作品" : "Browse all 305 works by theme")} {showArchive ? "↑" : "↓"}</button>
          {showArchive && <div className="archive-panel"><div className="filter-group"><strong>{social.themes}</strong><div className="video-filters" aria-label={social.themes}><button className={videoCategory === "all" ? "active" : ""} onClick={() => { setVideoCategory("all"); setVisibleVideos(24); }} type="button">{social.all} <span>{douyinCatalog.length}</span></button>{Object.entries(categories).map(([key, label]) => { const count = douyinCatalog.filter((video) => video.category === key).length; return <button className={videoCategory === key ? "active" : ""} onClick={() => { setVideoCategory(key); setVisibleVideos(24); }} type="button" key={key}>{label} <span>{count}</span></button>; })}</div></div><p className="video-count">{social.showing} {Math.min(visibleVideos, filteredVideos.length)} {social.of} {filteredVideos.length}</p><div className="douyin-grid">{filteredVideos.slice(0, visibleVideos).map((video, index) => <a className="video-card" href={video.url} target="_blank" rel="noreferrer" key={video.url}><div><img src={video.image} alt={displayVideoTitle(video, language, index)} loading="lazy"/><span className="play-mark" aria-hidden="true">▶</span></div><h4>{displayVideoTitle(video, language, index)}</h4><span>{social.open} ↗</span></a>)}</div>{visibleVideos < filteredVideos.length && <button className="load-more" type="button" onClick={() => setVisibleVideos((count) => count + 24)}>{social.loadMore} ↓</button>}</div>}<Engagement id="sparks" language={language}/>
        </div>
      </section>

      <section className="subscribe section-pad" id="subscribe"><div><p className="eyebrow">{t.noteName}</p><h2>{t.subscribeTitle}</h2></div><div className="subscribe-copy"><p>{t.subscribeText}</p>
        {subscribed ? <div className="success-message" role="status">{t.thanks}</div> : <form onSubmit={subscribe}><label className="sr-only" htmlFor="email">{t.email}</label><input id="email" name="email" type="email" placeholder={t.emailPlaceholder} required/><button type="submit">{t.note}</button></form>}<small>{t.privacy}</small>
      </div></section>

      {selected && <div className="reader-overlay" role="presentation" onMouseDown={() => setSelectedId(null)}><article className="reader-panel" role="dialog" aria-modal="true" aria-labelledby="reader-title" onMouseDown={(event) => event.stopPropagation()}><div className="reader-topline"><div><span>{selected.category}</span><span>{language === "zh" ? "中文" : "EN"}</span></div><button type="button" onClick={() => setSelectedId(null)}>{t.close} ×</button></div><div className="reader-body"><h2 id="reader-title">{selected.title}</h2><p className="reader-intro">{selected.intro}</p><div className="reader-copy">{selected.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{selected.external && <a className="reader-source" href={selected.external.url} target="_blank" rel="noreferrer">{selected.external.label} ↗</a>}</div><div className="reader-footer"><span>Hello Bonan</span><button type="button" onClick={() => setSelectedId(null)}>{t.back}</button></div></article></div>}

      {selectedEssay && <div className="reader-overlay" role="presentation" onMouseDown={() => setSelectedEssayId(null)}><article className="reader-panel essay-reader" role="dialog" aria-modal="true" aria-labelledby="essay-reader-title" onMouseDown={(event) => event.stopPropagation()}><div className="reader-topline"><div><span>{essayCategories[language][selectedEssay.category as keyof typeof essayCategories.en]}</span><span>{language === "zh" ? "原创中文" : "ENGLISH EDITION"}</span></div><button type="button" onClick={() => setSelectedEssayId(null)}>{t.close} ×</button></div><div className="reader-body"><p className="essay-reader-kicker">{language === "zh" ? "人间拾光" : "Collected Light"}</p><h2 id="essay-reader-title">{language === "zh" ? selectedEssay.title : essayEnglishTitles[Number(selectedEssay.id.slice(-2)) - 1]}</h2><div className="reader-copy">{language === "zh" ? selectedEssay.body.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={`${selectedEssay.id}-${index}`}>{paragraph}</p>) : <><p>{essayEnglishSummaries[Number(selectedEssay.id.slice(-2)) - 1]}</p><p>This English edition presents the article’s central observation and editorial context. The original Chinese version remains available instantly through the language switch above.</p></>}</div><Engagement id={selectedEssay.id} language={language}/></div><div className="reader-footer"><span>Hello Bonan</span><button type="button" onClick={() => setSelectedEssayId(null)}>{language === "zh" ? "返回人间拾光" : "Back to Collected Light"}</button></div></article></div>}

      <footer><div className="brand footer-brand"><span className="brand-dot">B</span><span>Hello Bonan</span></div><p>{t.footer}</p><div><button type="button" onClick={() => setSelectedId("professional")}>{t.about}</button><a href="#top">{t.top} ↑</a></div><small>© 2026 Bonan Zhong · {t.personal}</small></footer>
    </main>
  );
}
