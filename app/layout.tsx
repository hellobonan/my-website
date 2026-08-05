import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "hellobonan.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = `${protocol}://${host}`;

  return {
    metadataBase: new URL(base),
    title: "Hello Bonan — Ideas, encounters, and useful things",
    description:
      "Bonan Zhong writes about marketplaces, adaptive organizations, places, people, and useful ideas.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Hello Bonan",
      description: "Ideas, encounters, and useful things.",
      type: "website",
      images: [{ url: `${base}/og.png`, width: 1733, height: 906, alt: "Hello Bonan — Ideas, encounters, and useful things." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hello Bonan",
      description: "Ideas, encounters, and useful things.",
      images: [`${base}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
