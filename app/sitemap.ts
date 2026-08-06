import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://hellobonan-hello-bonan.vercel.app/", lastModified, changeFrequency: "weekly", priority: 1, images: ["https://hellobonan-hello-bonan.vercel.app/media/linkedin-profile.jpg"] },
    { url: "https://hellobonan-hello-bonan.vercel.app/bonan-zhong", lastModified, changeFrequency: "monthly", priority: 0.9, images: ["https://hellobonan-hello-bonan.vercel.app/media/linkedin-profile.jpg"] },
  ];
}
