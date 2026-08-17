import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://bonan.blog";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Baiduspider",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "OAI-AdsBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Amazonbot",
          "GoogleOther",
          "Google-Extended",
          "meta-externalagent",
          "Applebot",
          "Applebot-Extended",
          "Bytespider",
          "DeepSeekBot",
          "DuckAssistBot",
          "YandexBot",
          "NaverBot",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
