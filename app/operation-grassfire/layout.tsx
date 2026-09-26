import type { Metadata } from "next";

const filmUrl = "https://evmg6pl30iamli5t.public.blob.vercel-storage.com/media/operation-grassfire.mp4";

export const metadata: Metadata = {
  title: "Operation Grassfire — AI Film & Building Story | Hello Bonan",
  description: "Bonan Zhong’s first movie made with AI: a 9-minute-36-second film, its production story, and four lessons on mechanisms, quality, complexity, and human judgment.",
  alternates: { canonical: "https://bonan.blog/operation-grassfire" },
  openGraph: {
    title: "Operation Grassfire — AI Film & Building Story",
    description: "Watch Bonan Zhong’s first AI film and explore the production experience behind it.",
    url: "https://bonan.blog/operation-grassfire",
    type: "video.movie",
    images: [{ url: "https://bonan.blog/media/operation-grassfire-poster.png", width: 1920, height: 1080, alt: "Still from Operation Grassfire" }],
    videos: [{ url: filmUrl, type: "video/mp4", width: 1920, height: 1080 }],
  },
};

export default function GrassfireLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
