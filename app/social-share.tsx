"use client";

import { useState } from "react";

const siteUrl = "https://hellobonan-hello-bonan.vercel.app";
const shareVersion = "20260813-2";

export default function SocialShare({ title, language, path, url: suppliedUrl, compact = false }: { title: string; language: "en" | "zh"; path?: string; url?: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const baseUrl = suppliedUrl || `${siteUrl}/${(path || "").replace(/^\//, "")}`;
  const url = suppliedUrl ? baseUrl : `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}share=${shareVersion}`;
  const text = `${title} — Hello Bonan`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  async function nativeShare(platform?: string) {
    const shareText = platform ? `${text}\n${language === "zh" ? `通过${platform}分享` : `Share via ${platform}`}` : text;
    if (navigator.share) {
      try { await navigator.share({ title, text: shareText, url }); return; } catch (error) { if ((error as Error).name === "AbortError") return; }
    }
    await navigator.clipboard.writeText(`${shareText}\n${url}`); setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }
  async function copyLink() { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
  return <details className={`share-menu ${compact ? "share-menu-compact" : ""}`}><summary>↗ {compact ? (language === "zh" ? "分享此内容" : "Share this") : (language === "zh" ? "转发与分享" : "Forward & share")}</summary><div className="share-panel" role="group" aria-label={language === "zh" ? `分享：${title}` : `Share ${title}`}>
    <p>{language === "zh" ? "选择平台。手机会打开相应应用；电脑会打开平台网页或复制内容。" : "Choose a platform. Mobile opens the supported app; desktop opens the platform page or copies the content."}</p>
    <a href={`mailto:?subject=${encodedText}&body=${encodeURIComponent(`${text}\n\n${url}`)}`}>Email</a>
    <a href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`} target="_blank" rel="noreferrer">WhatsApp</a>
    <button type="button" onClick={() => nativeShare("WeChat")}>WeChat</button>
    <button type="button" onClick={() => nativeShare("RedNote")}>RedNote · 小红书</button>
    <button type="button" onClick={() => nativeShare("Instagram")}>Instagram</button>
    <button type="button" onClick={() => nativeShare("Douyin")}>Douyin · 抖音</button>
    <button type="button" onClick={() => nativeShare("TikTok")}>TikTok</button>
    <button type="button" onClick={() => nativeShare("YouTube")}>YouTube</button>
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer">LinkedIn</a>
    <a href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`} target="_blank" rel="noreferrer">X</a>
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer">Facebook</a>
    <button type="button" className="native-share" onClick={() => nativeShare()}>{language === "zh" ? "更多社交媒体与应用" : "More social media & apps"}</button>
    <button type="button" onClick={copyLink}>{copied ? (language === "zh" ? "链接已复制" : "Link copied") : (language === "zh" ? "复制链接" : "Copy link")}</button>
  </div></details>;
}
