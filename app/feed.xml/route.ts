import englishStories from "../english-stories.json";

const siteUrl = "https://bonan.blog";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '\"': "&quot;",
  })[character] ?? character);
}

export function GET() {
  const items = englishStories.map((story) => `
    <item>
      <title>${escapeXml(story.title)}</title>
      <link>${siteUrl}/collected-light/${story.id}/en</link>
      <guid isPermaLink="true">${siteUrl}/collected-light/${story.id}/en</guid>
      <pubDate>${new Date(`${story.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(story.summary)}</description>
      <author>Bonan Zhong</author>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hello Bonan — Collected Light</title>
    <link>${siteUrl}</link>
    <description>Original essays by Bonan Zhong about leadership, systems, marketplaces, places, and everyday observation.</description>
    <language>en-US</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
