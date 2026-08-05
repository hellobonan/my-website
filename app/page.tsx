"use client";

import { FormEvent, useState } from "react";

const douyinUrl =
  "https://www.douyin.com/user/MS4wLjABAAAAjQ%20LsDJzNqH-lMIXUsRCp298zla02LnmZyACESD7llC4".replace("%20", "");

type Detail = {
  title: string;
  category: string;
  language: "EN" | "中文";
  intro: string;
  paragraphs: string[];
  sourceLabel?: string;
  sourceUrl?: string;
};

const details: Record<string, Detail> = {
  constraint: {
    title: "Every solution creates a new constraint",
    category: "Marketplace & Systems",
    language: "EN",
    intro: "What if your greatest strength eventually becomes your greatest limitation?",
    paragraphs: [
      "I have asked myself that question throughout my career. It led me from surgery to regenerative medicine, from biotechnology to Amazon and Coupang—not because I was searching for a different career, but because I was searching for the next bottleneck where I could create greater impact.",
      "Every solution eventually creates a new constraint. A process that once brought clarity can become bureaucracy. Expertise that once accelerated decisions can narrow the questions we are willing to ask. A leader who once held a team together can become the reason the team cannot act without them.",
      "The challenge is not simply becoming an expert. It is knowing when the system has changed enough that we need to learn something completely new.",
      "My approach remains consistent: question assumptions, find the real bottleneck, build systems that adapt, and develop leaders who eventually make themselves unnecessary.",
    ],
    sourceLabel: "Connect with Bonan on LinkedIn",
    sourceUrl: "https://www.linkedin.com/in/bonanzhong/",
  },
  bottleneck: {
    title: "The next bottleneck",
    category: "Marketplace & Systems",
    language: "EN",
    intro: "The operating model that creates growth is rarely the one that sustains every later stage.",
    paragraphs: [
      "When a system succeeds, it changes the environment around it. More customers create more edge cases. More sellers create more variation. More tools create more handoffs. The original bottleneck disappears, but a new one forms somewhere else.",
      "This is why scaling is not a larger version of the same work. It requires asking which constraint now limits the whole system—and whether our strongest habits are preventing us from seeing it.",
      "I look for four signals: decisions repeatedly waiting for one person, teams optimizing local metrics at the expense of the whole, exceptions growing faster than the rules, and yesterday’s expertise shutting down new questions.",
      "The goal is not a permanently optimized system. It is a system capable of noticing its next constraint and adapting before the constraint becomes a crisis.",
    ],
  },
  hokkaido: {
    title: "旅行以后，偷偷学会了什么",
    category: "Places & Cultures · Hokkaido",
    language: "中文",
    intro: "一路下来，没有惊天动地的大事。只是很多人愿意多做一步。",
    paragraphs: [
      "这是我来首尔后的第二个亚洲夏天。去年在东京休假，热得我怀疑人生。今年学聪明了，直接往北跑——北海道。一下飞机，不到二十度。我当场原谅了亚洲的夏天。",
      "一路从札幌开到富良野、美瑛、旭川、小樽，再到苫小牧。最大感受：干净。干净到我一路都在找垃圾桶，后来发现，垃圾桶不一定有，垃圾是真的没有。",
      "早餐时，一个老爷爷擦桌子，左手喷壶，右手挡着水雾，怕溅到旁边等位的人。我第一次觉得，原来一个喷壶，也可以很有教养。",
      "去富良野买哈密瓜，看不懂日文，随手挑了一颗。结账时阿姨拦住我，用翻译告诉我：“这颗三天后才熟，我猜你今天就想吃。”然后换了一颗当天熟的。回酒店切开，真的刚刚好，甜得像作弊。",
      "旅行最好玩的地方，不是看见了什么，而是回来以后，开始偷偷学会了一些什么。比如以后超过一辆开得很慢的车，我也许会挥挥手：没关系。慢一点。也挺好。",
    ],
    sourceLabel: "View the original on Douyin",
    sourceUrl: "https://www.douyin.com/video/7658469084598587122",
  },
  learning: {
    title: "Organizations that keep learning",
    category: "AI & Adaptive Systems",
    language: "EN",
    intro: "AI matters less as a feature than as a new way for an organization to notice and adapt.",
    paragraphs: [
      "A feature can improve one task. An adaptive system changes how an organization senses what is happening, shares what it learns, and updates its decisions.",
      "The useful question is not only where AI can automate work. It is where information is lost, where feedback arrives too late, and where judgment remains trapped with too few people.",
      "Technology creates leverage only when the operating model changes with it. Otherwise, a faster tool simply delivers old assumptions more efficiently.",
      "The opportunity is to build organizations that continue getting smarter long after today’s problems have been solved.",
    ],
  },
  seattle: {
    title: "Seattle—sweet home",
    category: "Postcard · Seattle",
    language: "EN",
    intro: "Rain, water, evergreens—and the quiet pull of returning.",
    paragraphs: [
      "Seattle is where a city and the outdoors keep interrupting each other. Water appears at the end of a street. Mountains arrive when the clouds decide to move. Evergreen edges soften almost everything people build.",
      "It is also where many of my interests meet: marketplaces and technology, fishing and lakes, everyday life and the enormous landscapes just beyond it.",
      "Some places impress you immediately. Home works differently. You understand it by leaving, returning, and noticing what your eyes had stopped seeing.",
    ],
    sourceLabel: "See Seattle stories on Douyin",
    sourceUrl: douyinUrl,
  },
  seoul: {
    title: "A city that performs",
    category: "Postcard · Seoul",
    language: "EN",
    intro: "Lanterns, live music, taekwondo, K-pop, and weekends along the Han River.",
    paragraphs: [
      "Seoul often turns public space into a shared stage. A walk can become a concert, a drone show, a lantern procession, or a crowd gathered around young performers who seem to have unlimited energy.",
      "At Dongdaemun, I watched taekwondo and K-pop share the same performance. The performers were flipping, kicking, and dancing as if gravity and knee pain did not exist yet. It reminded me of high-school basketball days—eight hours straight and still not tired.",
      "Youth is a built-in superpower people often appreciate only after it expires. A city can make that energy visible again, even if only for an evening.",
    ],
    sourceLabel: "View the original on Douyin",
    sourceUrl: "https://www.douyin.com/video/7644529958057063270",
  },
  decisions: {
    title: "Four questions for a better decision",
    category: "Books & Ideas",
    language: "EN",
    intro: "A compact framework I return to when a problem looks obvious.",
    paragraphs: [
      "Which assumption is carrying most of the conclusion? If it changes, does the decision still hold?",
      "Where is the actual system constraint? Improving anything else may create activity without impact.",
      "What second-order constraint will this solution create if it succeeds?",
      "What would let the people closest to the work make a better decision without waiting for me?",
    ],
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"all" | "en" | "zh">("all");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const selected = selectedDetail ? details[selectedDetail] : null;

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hello Bonan home">
          <span className="brand-dot">B</span>
          <span>Hello Bonan</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#writing">Writing</a>
          <a href="#postcards">Postcards</a>
          <a href="#recommendations">Recommendations</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#subscribe">Get the note</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Marketplace leader · Systems thinker · Curious observer</p>
          <h1>Ideas, encounters, and useful things.</h1>
          <p className="hero-lede">
            I’m Bonan Zhong. I build marketplaces, adaptive organizations, and
            leaders—then stay curious about the people, places, and small
            decisions that reveal how systems really work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#writing">Read the latest</a>
            <a className="button button-secondary" href="#subscribe">A Note from Bonan</a>
          </div>
          <div className="role-line">
            <span>Director at Coupang</span>
            <span>Former Amazon</span>
            <span>Seattle · Seoul · Elsewhere</span>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Portrait placeholder for Bonan Zhong">
          <div className="portrait-frame">
            <span className="portrait-monogram">BZ</span>
            <span className="portrait-note">Portrait coming soon</span>
          </div>
          <p>From medicine to marketplaces, I follow the next meaningful bottleneck.</p>
        </div>
      </section>

      <section className="featured section-pad" aria-labelledby="featured-title">
        <div className="section-label">Featured idea · 6 min read</div>
        <div className="featured-grid">
          <div>
            <h2 id="featured-title">Every solution creates a new constraint.</h2>
          </div>
          <div>
            <p>
              The strength that gets a team to one stage can become the thing
              that holds it back at the next. The work is not simply becoming
              an expert—it is noticing when the system needs a new question.
            </p>
            <button className="text-link text-button" type="button" onClick={() => setSelectedDetail("constraint")}>
              Read the full idea <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section-pad" id="writing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The journal</p>
            <h2>Three ways into the work.</h2>
          </div>
          <div className="language-filter" aria-label="Filter writing by language">
            {(["all", "en", "zh"] as const).map((item) => (
              <button
                key={item}
                className={language === item ? "active" : ""}
                onClick={() => setLanguage(item)}
                type="button"
              >
                {item === "all" ? "All" : item === "en" ? "English" : "中文"}
              </button>
            ))}
          </div>
        </div>

        <div className="story-grid">
          {(language === "all" || language === "en") && (
            <button className="story-card story-card-dark card-button" type="button" onClick={() => setSelectedDetail("bottleneck")}>
              <div className="card-meta"><span>Marketplace & Systems</span><span>EN</span></div>
              <div className="story-symbol">↗</div>
              <div>
                <h3>The next bottleneck</h3>
                <p>What changes when the operating model that created growth starts limiting it?</p>
                <span className="card-foot">Essay · Read now →</span>
              </div>
            </button>
          )}
          {(language === "all" || language === "zh") && (
            <button className="story-card story-card-coral card-button" type="button" onClick={() => setSelectedDetail("hokkaido")}>
              <div className="card-meta"><span>Everyday Encounters</span><span>中文</span></div>
              <div className="story-symbol">小</div>
              <div>
                <h3>一件我注意到的小事</h3>
                <p>旅行最好玩的地方，不只是看见了什么，而是回来以后偷偷学会了什么。</p>
                <span className="card-foot">随笔 · 阅读全文 →</span>
              </div>
            </button>
          )}
          {(language === "all" || language === "en") && (
            <button className="story-card story-card-paper card-button" type="button" onClick={() => setSelectedDetail("learning")}>
              <div className="card-meta"><span>AI & Adaptive Systems</span><span>EN</span></div>
              <div className="story-symbol">∞</div>
              <div>
                <h3>Organizations that keep learning</h3>
                <p>AI matters less as a feature than as a new way for an organization to notice and adapt.</p>
                <span className="card-foot">Note · Read now →</span>
              </div>
            </button>
          )}
        </div>
      </section>

      <section className="postcards section-pad" id="postcards">
        <div className="section-heading postcards-heading">
          <div>
            <p className="eyebrow">Postcards</p>
            <h2>Places change the questions.</h2>
          </div>
          <p>Short observations from the Pacific Northwest, Seoul, and wherever curiosity leads next.</p>
        </div>
        <div className="postcard-strip">
          <button className="postcard postcard-seattle card-button" type="button" onClick={() => setSelectedDetail("seattle")}>
            <span className="postcard-index">01</span>
            <div><span>Seattle</span><h3>Sweet home, seen again</h3><p>Rain, water, evergreens—and the quiet pull of returning.</p></div>
            <span className="open-cue">Open postcard →</span>
          </button>
          <button className="postcard postcard-seoul card-button" type="button" onClick={() => setSelectedDetail("seoul")}>
            <span className="postcard-index">02</span>
            <div><span>Seoul</span><h3>A city that performs</h3><p>Lanterns, live music, and a weekend along the Han River.</p></div>
            <span className="open-cue">Open postcard →</span>
          </button>
          <button className="postcard postcard-hokkaido card-button" type="button" onClick={() => setSelectedDetail("hokkaido")}>
            <span className="postcard-index">03</span>
            <div><span>Hokkaido</span><h3>The extra small step</h3><p>What a ripe melon and a covered spray bottle taught me about care.</p></div>
            <span className="open-cue">Open postcard →</span>
          </button>
        </div>
      </section>

      <section className="recommendations section-pad" id="recommendations">
        <div className="recommendation-intro">
          <p className="eyebrow">Worth sharing</p>
          <h2>Useful things should come with a reason.</h2>
          <p>
            Books, places, performances, tools, and ideas—each with a short note
            about why it might deserve your attention.
          </p>
        </div>
        <div className="recommendation-list">
          <button className="recommendation-item" type="button" onClick={() => setSelectedDetail("decisions")}><span>01</span><div><small>BOOKS & IDEAS</small><h3>Four questions for a better decision</h3></div><span>Read →</span></button>
          <button className="recommendation-item" type="button" onClick={() => setSelectedDetail("hokkaido")}><span>02</span><div><small>PLACES & CULTURE</small><h3>A quieter way to experience a city</h3></div><span>Read →</span></button>
          <a className="recommendation-item" href={douyinUrl} target="_blank" rel="noreferrer"><span>03</span><div><small>VIDEO</small><h3>One minute with Bonan</h3></div><span>Open Douyin ↗</span></a>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-number">05</div>
        <div className="about-copy">
          <p className="eyebrow">About Bonan</p>
          <h2>A career built by following the next meaningful constraint.</h2>
          <p className="about-lede">
            My path has crossed surgery, regenerative medicine, biotechnology,
            Amazon, and Coupang. The common thread is a habit of questioning
            assumptions, finding the real bottleneck, and building systems that adapt.
          </p>
          <div className="about-columns">
            <p>
              Today, my interests center on AI, marketplaces, consumer
              platforms, seller services, and organizations that keep learning.
            </p>
            <p>
              Outside work, I pay attention to culture, travel, nature, books,
              and the small encounters that make a place—and a life—more legible.
            </p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bonanzhong/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={douyinUrl} target="_blank" rel="noreferrer">Douyin · 西雅图大南瓜 ↗</a>
          </div>
        </div>
      </section>

      <section className="subscribe section-pad" id="subscribe">
        <div>
          <p className="eyebrow">A Note from Bonan</p>
          <h2>One thoughtful note, about once a week.</h2>
        </div>
        <div className="subscribe-copy">
          <p>
            Marketplace ideas, revealing encounters, and useful things—written
            in English or Chinese, whichever fits the thought best. Usually a five-minute read.
          </p>
          {subscribed ? (
            <div className="success-message" role="status">
              Thank you. Email delivery will open with the publication launch.
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
              <button type="submit">Get the note</button>
            </form>
          )}
          <small>No spam. English, 中文, or both. Unsubscribe anytime.</small>
        </div>
      </section>

      {selected && (
        <div className="reader-overlay" role="presentation" onMouseDown={() => setSelectedDetail(null)}>
          <article
            className="reader-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reader-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="reader-topline">
              <div><span>{selected.category}</span><span>{selected.language}</span></div>
              <button type="button" onClick={() => setSelectedDetail(null)} aria-label="Close article">Close ×</button>
            </div>
            <div className="reader-body">
              <h2 id="reader-title">{selected.title}</h2>
              <p className="reader-intro">{selected.intro}</p>
              <div className="reader-copy">
                {selected.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {selected.sourceUrl && (
                <a className="reader-source" href={selected.sourceUrl} target="_blank" rel="noreferrer">
                  {selected.sourceLabel} ↗
                </a>
              )}
            </div>
            <div className="reader-footer">
              <span>Hello Bonan</span>
              <button type="button" onClick={() => setSelectedDetail(null)}>Back to the journal</button>
            </div>
          </article>
        </div>
      )}

      <footer>
        <div className="brand footer-brand"><span className="brand-dot">B</span><span>Hello Bonan</span></div>
        <p>Ideas, encounters, and useful things.</p>
        <div><a href="https://www.linkedin.com/in/bonanzhong/">LinkedIn</a><a href="#top">Back to top ↑</a></div>
        <small>© 2026 Bonan Zhong · Personal views only</small>
      </footer>
    </main>
  );
}
