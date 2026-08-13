import type { MetadataRoute } from "next";
import englishStories from "./english-stories.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const baseUrl = "https://hellobonan-hello-bonan.vercel.app";
  return [
    { url: "https://hellobonan-hello-bonan.vercel.app/", lastModified, changeFrequency: "weekly", priority: 1, images: ["https://hellobonan-hello-bonan.vercel.app/media/linkedin-profile.jpg"] },
    { url: "https://hellobonan-hello-bonan.vercel.app/bonan-zhong", lastModified, changeFrequency: "monthly", priority: 0.9, images: ["https://hellobonan-hello-bonan.vercel.app/media/linkedin-profile.jpg"] },
    ...englishStories.flatMap((story) => ["en", "zh"].map((lang) => ({
      url: `${baseUrl}/collected-light/${story.id}/${lang}`,
      lastModified: new Date(story.date),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    }))),
  ];
}
