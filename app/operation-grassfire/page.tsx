"use client";

import { useState } from "react";
import copy from "./production-copy.json";
import FilmLearnings from "../film-learnings";

const filmUrl = "https://evmg6pl30iamli5t.public.blob.vercel-storage.com/media/operation-grassfire.mp4";

export default function OperationGrassfire() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const t = copy[language];
  return <main className="film-page" lang={language === "zh" ? "zh-CN" : "en"}>
    <header className="site-header film-header">
      <a className="brand" href="/"><span className="brand-dot">B</span><span>Hello Bonan</span></a>
      <a className="film-back" href="/">← {t.back}</a>
      <div className="language-filter site-language" aria-label="Site language">
        <button className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")} type="button">English</button>
        <button className={language === "zh" ? "active" : ""} aria-pressed={language === "zh"} onClick={() => setLanguage("zh")} type="button">中文</button>
      </div>
    </header>
    <section className="film-hero" id="top"><p className="eyebrow">{t.eyebrow}</p><h1>Operation<br/>Grassfire</h1><p className="film-deck">{t.deck}</p><p className="film-intro">{t.intro}</p></section>
    <section className="film-player-wrap" aria-labelledby="watch-title">
      <div className="film-player-heading"><div><p className="eyebrow" id="watch-title">{t.watch}</p><p>{t.runtime}</p></div><span>01 / 01</span></div>
      <video className="film-player" controls playsInline preload="metadata" poster="/media/operation-grassfire-poster.png"><source src={filmUrl} type="video/mp4"/>{language === "zh" ? "你的浏览器不支持 HTML 视频。" : "Your browser does not support HTML video."}</video>
      <a className="film-direct-link" href={filmUrl} target="_blank" rel="noreferrer">{t.direct} ↗</a>
    </section>
    <section className="film-story section-pad"><div><p className="eyebrow">{t.storyLabel}</p><h2>{t.storyTitle}</h2></div><p>{t.story}</p></section>
    <section className="film-note section-pad"><p className="eyebrow">{t.whyLabel}</p><div><h2>{t.whyTitle}</h2><p>{t.why}</p></div></section>
    <section className="film-process section-pad"><div className="film-section-heading"><p className="eyebrow">{t.processLabel}</p><h2>{t.processTitle}</h2></div><div className="film-process-grid">{t.process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="film-production section-pad"><div className="film-production-heading"><div><p className="eyebrow">{t.factsLabel}</p><p>{t.factsIntro}</p></div></div><div className="film-facts"><div><strong>~14</strong><span>{t.days}</span></div><div><strong>76</strong><span>{t.videos}</span></div><div><strong>13:22</strong><span>{t.footage}</span></div><div><strong>$489.99</strong><span>{t.spend}</span></div></div><small>{t.tools}</small></section>
    <section className="film-lessons section-pad"><p className="eyebrow">{t.lessonsLabel}</p><FilmLearnings language={language}/></section>
    <section className="film-lessons section-pad"><div className="film-section-heading"><p className="eyebrow">{language === "zh" ? "镜头制作中的具体经验" : "Practical lessons from the shots"}</p><h2>{t.lessonsTitle}</h2></div><div className="film-lessons-grid">{t.lessons.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="film-next section-pad"><p className="eyebrow">{t.nextLabel}</p><p>{t.next}</p></section>
    <section className="film-reflection section-pad"><p className="eyebrow">{t.reflectionLabel}</p><p>{t.reflection}</p></section>
    <section className="film-disclosure section-pad"><p className="eyebrow">{t.disclosureLabel}</p><p>{t.disclosure}</p><div className="film-end-links"><a href="#top">↑ {t.top}</a><a href="/">← {t.home}</a></div></section>
  </main>;
}
