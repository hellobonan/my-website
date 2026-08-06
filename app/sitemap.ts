import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://hellobonan-hello-bonan.vercel.app/",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }];
}
