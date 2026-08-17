import type { Metadata } from "next";

const siteUrl = "https://bonan.blog";

export const metadata: Metadata = {
  title: "Bonan Zhong 钟博南 — Marketplace, Ecommerce & Seller Services Leader",
  description: "Bilingual professional biography of Bonan Zhong (钟博南), Director at Coupang and former Amazon marketplace leader with a background in medicine, regenerative medicine, biotechnology and life science.",
  alternates: { canonical: `${siteUrl}/bonan-zhong` },
  openGraph: {
    title: "Bonan Zhong 钟博南 — Marketplace & Ecommerce Leader",
    description: "Director at Coupang · Former Amazon · Marketplace · Ecommerce · Seller Services · AI · Life Science",
    url: `${siteUrl}/bonan-zhong`, type: "profile",
    images: [{ url: `${siteUrl}/media/linkedin-profile.jpg`, width: 284, height: 350, alt: "Bonan Zhong 钟博南" }],
  },
};

export default function BonanZhongProfile() {
  const topics = ["Marketplace", "Ecommerce", "Seller Services", "Account Management", "Leadership", "Executive", "Director", "Amazon", "Coupang", "Seattle", "Toronto", "AI", "Stem Cell Research", "Life Science"];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/bonan-zhong#profile`,
    url: `${siteUrl}/bonan-zhong`,
    name: "Bonan Zhong 钟博南 — Professional Biography",
    inLanguage: ["en", "zh-CN"],
    mainEntity: { "@id": `${siteUrl}/#bonan-zhong` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
  return (
    <main className="profile-page">
      <header className="profile-header"><a href="/">Hello Bonan</a><a href="/">Back to home · 返回首页</a></header>
      <article className="profile-article">
        <section className="profile-hero">
          <div><p className="eyebrow">Marketplace leader · Systems thinker · Curious observer</p><h1>Bonan Zhong<span>钟博南</span></h1><p>Director at Coupang and former Amazon marketplace leader working across ecommerce, seller services, account management, consumer platforms, organizational leadership and AI.</p></div>
          <img className="profile-photo" src="/media/linkedin-profile.jpg" alt="Bonan Zhong (钟博南), marketplace and ecommerce leader" />
        </section>
        <section className="profile-details">
          <div className="profile-language" lang="en"><h2>Professional biography</h2><p>Bonan Zhong is a marketplace and ecommerce leader whose career has crossed surgery, regenerative medicine, biotechnology, Amazon and Coupang. He applies scientific rigor and systems thinking to marketplace growth, seller services, account management, consumer platforms and leadership.</p><p>Based across Seattle and Seoul, with formative connections to Toronto and the University of Toronto, Bonan focuses on finding the real constraint in complex organizations and building systems that can adapt. His current interests include artificial intelligence, marketplace vision, seller experience and organizations that keep learning.</p><p>His writing explores leadership, ecommerce, marketplaces, culture, travel, life science and the small decisions that reveal how systems really work.</p></div>
          <div className="profile-language" lang="zh-CN"><h2>钟博南简介</h2><p>钟博南（Bonan Zhong）是一位市场平台与电子商务领导者，职业经历横跨外科医学、再生医学、生物技术、亚马逊与酷澎。他将科学研究中的严谨方法和系统思维运用于电商平台增长、卖家服务、客户管理、消费者平台与组织领导。</p><p>他的工作与生活连接西雅图、首尔和多伦多，并拥有多伦多大学背景。钟博南关注复杂组织中真正的瓶颈，以及如何构建能够持续适应和学习的系统。目前关注领域包括人工智能、市场平台愿景、卖家体验和领导力发展。</p><p>他的文章记录领导力、电商、市场平台、文化、旅行、生命科学，以及那些能够揭示系统如何运作的日常细节。</p></div>
        </section>
        <div className="profile-topics" aria-label="Areas of experience">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
