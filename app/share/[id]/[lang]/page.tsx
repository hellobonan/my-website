import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SocialShare from "../../../social-share";

const siteUrl = "https://hellobonan-hello-bonan.vercel.app";
const previewVersion = "20260813-2";
const sections = {
  featured: { anchor: "featured", en: ["The bottleneck is rarely where everyone is looking.", "A featured idea about finding the constraint that actually shapes the system.", "/media/linkedin-iteration.jpg"], zh: ["瓶颈很少在所有人都盯着的地方。", "一篇关于寻找真正决定系统表现之约束点的精选思考。", "/media/linkedin-iteration.jpg"] },
  writing: { anchor: "writing", en: ["Latest writing", "Bonan Zhong’s latest essays on leadership, systems, marketplaces, and everyday observation.", "/media/linkedin-team-culture.jpg"], zh: ["最新文章", "钟博南关于领导力、系统、商业与日常观察的最新文章。", "/media/linkedin-team-culture.jpg"] },
  atlas: { anchor: "postcards", en: ["Field Atlas", "Cities, journeys, landmarks, and visual field notes from around the world.", "/media/stories/story-01.jpeg"], zh: ["世界地图", "来自世界各地的城市、旅程、地标与视觉现场笔记。", "/media/stories/story-01.jpeg"] },
  essays: { anchor: "essays", en: ["Collected Light", "Complete original stories about cities, art, teams, systems, people, and everyday life.", "/media/stories/story-22.jpg"], zh: ["人间拾光", "关于城市、艺术、团队、系统、人物与日常生活的原创随笔。", "/media/stories/story-22.jpg"] },
  books: { anchor: "books", en: ["Bonan’s bookshelf", "Books that changed the way Bonan Zhong asks questions.", "/media/books/think-again.png"], zh: ["博南书单", "那些改变钟博南提问方式的书。", "/media/books/think-again.png"] },
  "interesting-websites": { anchor: "web-discoveries", en: ["Interesting corners of the internet", "Useful websites for seeing—and building—the world differently.", "/media/blueprint-community.png"], zh: ["有趣的网站", "重新观看与创造世界的实用网站。", "/media/blueprint-community.png"] },
  about: { anchor: "about", en: ["About Bonan Zhong", "Marketplace and ecommerce leader, systems thinker, and curious observer.", "/media/linkedin-profile.jpg"], zh: ["关于钟博南", "电商与平台业务领导者、系统思考者与好奇的观察者。", "/media/linkedin-profile.jpg"] },
  linkedin: { anchor: "channels", en: ["Professional notebook", "Leadership reflections and professional field notes from Bonan Zhong.", "/media/linkedin-team-culture.jpg"], zh: ["职业思考手记", "钟博南关于领导力与职业现场的思考。", "/media/linkedin-team-culture.jpg"] },
  sparks: { anchor: "channels", en: ["Sparks of Life", "A visual archive of cities, nature, culture, art, and everyday discoveries.", "/media/stories/story-22.jpg"], zh: ["生活火花", "关于城市、自然、文化、艺术与日常发现的视觉档案。", "/media/stories/story-22.jpg"] },
  subscribe: { anchor: "subscribe", en: ["A Note from Bonan", "Follow new essays, field notes, and useful discoveries from Hello Bonan.", "/media/linkedin-profile.jpg"], zh: ["博南来信", "订阅 Hello Bonan 的新文章、现场笔记与有用发现。", "/media/linkedin-profile.jpg"] },
} as const;

function content(id: string, lang: string) { const section = sections[id as keyof typeof sections]; if (!section || !["en","zh"].includes(lang)) return null; const [title, description, image] = section[lang as "en" | "zh"]; return { ...section, title, description, image }; }
export function generateStaticParams() { return Object.keys(sections).flatMap((id) => ["en","zh"].map((lang) => ({ id, lang }))); }
export async function generateMetadata({ params }: { params: Promise<{ id:string; lang:string }> }): Promise<Metadata> { const {id,lang}=await params; const item=content(id,lang); if(!item)return {}; const url=`${siteUrl}/share/${id}/${lang}`; const image=`${siteUrl}${item.image}?v=${previewVersion}`; return { title:`${item.title} | Hello Bonan`, description:item.description, alternates:{canonical:url}, openGraph:{title:item.title,description:item.description,url,siteName:"Hello Bonan",type:"website",images:[{url:image,alt:item.title}]},twitter:{card:"summary_large_image",title:item.title,description:item.description,images:[image]} }; }
export default async function SharedSection({params}:{params:Promise<{id:string;lang:string}>}) { const {id,lang}=await params; const item=content(id,lang); if(!item)notFound(); const language=lang as "en"|"zh"; return <main className="shared-section-page" lang={language === "zh" ? "zh-CN":"en"}><article><img src={item.image} alt={item.title}/><p className="essay-reader-kicker">HELLO BONAN</p><h1>{item.title}</h1><p>{item.description}</p><a className="button button-primary" href={`/#${item.anchor}`}>{language === "zh" ? "查看此栏目":"View this section"} →</a><SocialShare title={item.title} language={language} path={`share/${id}/${lang}`}/></article></main>; }
