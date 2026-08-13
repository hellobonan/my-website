import type { Metadata } from "next";
import { notFound } from "next/navigation";
import englishStories from "../../../english-stories.json";
import chineseEssays from "../../../essay-collection.json";
import SocialShare from "../../../social-share";

const siteUrl = "https://hellobonan-hello-bonan.vercel.app";
const previewVersion = "20260813-2";
const storyToEssay: Record<string, string> = {
  "story-01":"essay-01","story-02":"essay-02","story-03":"essay-03","story-04":"essay-04","story-05":"essay-05","story-06":"essay-06","story-07":"essay-07","story-08":"essay-08","story-09":"essay-09","story-10":"essay-10","story-11":"essay-11","story-12":"essay-12","story-13":"essay-13","story-14":"essay-14","story-16":"essay-15","story-17":"essay-16","story-18":"essay-19","story-19":"essay-17","story-20":"essay-18","story-21":"essay-20","story-22":"essay-21",
};
type EnglishStory = (typeof englishStories)[number];
type ChineseEssay = (typeof chineseEssays)[number];

function getContent(id: string, lang: string) {
  const story = englishStories.find((item) => item.id === id) as EnglishStory | undefined;
  if (!story || !["en", "zh"].includes(lang)) return null;
  const essay = chineseEssays.find((item) => item.id === storyToEssay[id]) as ChineseEssay | undefined;
  if (lang === "zh" && !essay) return null;
  return {
    story,
    title: lang === "zh" ? essay!.title : story.title,
    body: lang === "zh" ? essay!.body : story.body,
    summary: lang === "zh" ? essay!.excerpt : story.summary,
    image: essay?.image || story.image,
  };
}

export function generateStaticParams() {
  return englishStories.flatMap((story) => ["en", "zh"].filter((lang) => lang === "en" || storyToEssay[story.id]).map((lang) => ({ id: story.id, lang })));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string; lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params; const content = getContent(id, lang); if (!content) return {};
  const url = `${siteUrl}/collected-light/${id}/${lang}`;
  const image = content.image ? `${siteUrl}${content.image}?v=${previewVersion}` : `${siteUrl}/og.png?v=${previewVersion}`;
  return {
    title: `${content.title} | Hello Bonan`, description: content.summary,
    alternates: { canonical: url, languages: { en: `${siteUrl}/collected-light/${id}/en`, "zh-CN": `${siteUrl}/collected-light/${id}/zh` } },
    openGraph: { title: content.title, description: content.summary, type: "article", url, siteName: "Hello Bonan", images: [{ url: image, alt: content.title }] },
    twitter: { card: "summary_large_image", title: content.title, description: content.summary, images: [image] },
  };
}

export default async function CollectedLightStory({ params }: { params: Promise<{ id: string; lang: string }> }) {
  const { id, lang } = await params; const content = getContent(id, lang); if (!content) notFound();
  const language = lang as "en" | "zh";
  return <main className="shared-story-page" lang={language === "zh" ? "zh-CN" : "en"}>
    <header><a className="brand" href="/"><span className="brand-dot">B</span><span>Hello Bonan</span></a><nav><a href={`/collected-light/${id}/${language === "zh" ? "en" : "zh"}`}>{language === "zh" ? "English" : "中文"}</a><a href="/#essays">{language === "zh" ? "返回人间拾光" : "Back to Collected Light"}</a></nav></header>
    <article><p className="essay-reader-kicker">{language === "zh" ? "人间拾光 · 原创随笔" : "COLLECTED LIGHT · ORIGINAL STORY"}</p><h1>{content.title}</h1><p className="shared-story-date">{language === "zh" ? `发布于 ${content.story.date}` : content.story.dateLabel}</p>{content.image && <img src={content.image} alt={content.title}/>}<div className="reader-copy">{content.body.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><SocialShare title={content.title} language={language} path={`collected-light/${id}/${lang}`}/></article>
  </main>;
}
