import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://hellobonan-hello-bonan.vercel.app";
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
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Bytespider",
          "DeepSeekBot",
          "DuckAssistBot",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
