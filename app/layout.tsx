import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hellobonan-hello-bonan.vercel.app";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: "Bonan Zhong 钟博南 | Marketplace & Ecommerce Leader",
    description:
      "Bonan Zhong (钟博南) is a marketplace and ecommerce leader with experience across seller services, account management, Amazon, Coupang, AI, life science and stem cell research in Seattle and Toronto.",
    applicationName: "Hello Bonan",
    authors: [{ name: "Bonan Zhong (钟博南)", url: siteUrl }],
    creator: "Bonan Zhong",
    publisher: "Bonan Zhong",
    category: "Business and Leadership",
    keywords: [
      "Bonan Zhong", "钟博南", "marketplace", "ecommerce", "e-commerce", "leader", "executive",
      "director", "account management", "seller service", "seller services", "vision", "Amazon",
      "Coupang", "Seattle", "Toronto", "stem cell", "life science", "AI", "marketplace leadership",
    ],
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Bonan Zhong 钟博南 | Marketplace & Ecommerce Leader",
      description: "Ideas and field notes from a marketplace, ecommerce and seller-services leader working across business, technology and life science.",
      type: "website",
      url: siteUrl,
      siteName: "Hello Bonan",
      locale: "en_US",
      alternateLocale: ["zh_CN"],
      images: [{ url: "/og.png", width: 1733, height: 906, alt: "Bonan Zhong — marketplace and ecommerce leader" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bonan Zhong 钟博南 | Marketplace & Ecommerce Leader",
      description: "Marketplace, ecommerce, seller services, leadership, AI and life-science perspectives.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#bonan-zhong`,
        name: "Bonan Zhong",
        alternateName: ["钟博南", "Hello Bonan"],
        url: siteUrl,
        image: `${siteUrl}/media/linkedin-profile.jpg`,
        sameAs: ["https://www.linkedin.com/in/bonanzhong/"],
        jobTitle: ["Marketplace Leader", "Ecommerce Executive", "Director", "Account Management Leader"],
        knowsAbout: ["Marketplace", "Ecommerce", "Seller Services", "Account Management", "Leadership", "Amazon", "Coupang", "Artificial Intelligence", "Stem Cell Research", "Life Science"],
        homeLocation: { "@type": "Place", name: "Seattle" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "University of Toronto" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Hello Bonan",
        alternateName: "Bonan Zhong 钟博南",
        inLanguage: ["en", "zh-CN"],
        author: { "@id": `${siteUrl}/#bonan-zhong` },
      },
    ],
  };
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
