"use client";

import { FormEvent, useState } from "react";

const douyinUrl =
  "https://www.douyin.com/user/MS4wLjABAAAAjQ%20LsDJzNqH-lMIXUsRCp298zla02LnmZyACESD7llC4".replace("%20", "");

export default function Home() {
  const [language, setLanguage] = useState<"all" | "en" | "zh">("all");
  const [subscribed, setSubscribed] = useState(false);

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
            <a className="text-link" href="#about">How I think about systems <span>→</span></a>
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
            <article className="story-card story-card-dark">
              <div className="card-meta"><span>Marketplace & Systems</span><span>EN</span></div>
              <div className="story-symbol">↗</div>
              <div>
                <h3>The next bottleneck</h3>
                <p>What changes when the operating model that created growth starts limiting it?</p>
                <span className="card-foot">Essay · Coming soon</span>
              </div>
            </article>
          )}
          {(language === "all" || language === "zh") && (
            <article className="story-card story-card-coral">
              <div className="card-meta"><span>Everyday Encounters</span><span>中文</span></div>
              <div className="story-symbol">小</div>
              <div>
                <h3>一件我注意到的小事</h3>
                <p>旅行最好玩的地方，不只是看见了什么，而是回来以后偷偷学会了什么。</p>
                <span className="card-foot">随笔 · 即将发布</span>
              </div>
            </article>
          )}
          {(language === "all" || language === "en") && (
            <article className="story-card story-card-paper">
              <div className="card-meta"><span>AI & Adaptive Systems</span><span>EN</span></div>
              <div className="story-symbol">∞</div>
              <div>
                <h3>Organizations that keep learning</h3>
                <p>AI matters less as a feature than as a new way for an organization to notice and adapt.</p>
                <span className="card-foot">Note · Coming soon</span>
              </div>
            </article>
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
          <article className="postcard postcard-seattle">
            <span className="postcard-index">01</span>
            <div><span>Seattle</span><h3>Sweet home, seen again</h3><p>Rain, water, evergreens—and the quiet pull of returning.</p></div>
          </article>
          <article className="postcard postcard-seoul">
            <span className="postcard-index">02</span>
            <div><span>Seoul</span><h3>A city that performs</h3><p>Lanterns, live music, and a weekend along the Han River.</p></div>
          </article>
          <article className="postcard postcard-hokkaido">
            <span className="postcard-index">03</span>
            <div><span>Hokkaido</span><h3>The extra small step</h3><p>What a ripe melon and a covered spray bottle taught me about care.</p></div>
          </article>
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
          <div className="recommendation-item"><span>01</span><div><small>BOOKS & IDEAS</small><h3>Mental models for better decisions</h3></div><span>Five notes soon</span></div>
          <div className="recommendation-item"><span>02</span><div><small>PLACES & CULTURE</small><h3>A quieter way to experience a city</h3></div><span>Guide in progress</span></div>
          <div className="recommendation-item"><span>03</span><div><small>VIDEO</small><h3>One minute with Bonan</h3></div><span>From Douyin</span></div>
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

      <footer>
        <div className="brand footer-brand"><span className="brand-dot">B</span><span>Hello Bonan</span></div>
        <p>Ideas, encounters, and useful things.</p>
        <div><a href="https://www.linkedin.com/in/bonanzhong/">LinkedIn</a><a href="#top">Back to top ↑</a></div>
        <small>© 2026 Bonan Zhong · Personal views only</small>
      </footer>
    </main>
  );
}
