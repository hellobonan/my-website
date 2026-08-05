# Hello Bonan — Design Document

## The problem

Bonan Zhong needs a personal website that serves two audiences:

1. Employers and executive recruiters looking for an e-commerce marketplace leader.
2. Friends and readers interested in Bonan’s writing, recommendations, experiences, videos, and way of thinking.

The website needs to establish Bonan’s professional credibility without feeling like a conventional online résumé. It should present him prominently as a Director of Marketplace Business at Coupang and communicate his strengths in big-picture thinking, strategy, and leadership. At the same time, it should feel personal, engaging, and worth revisiting.

Bonan expects to publish approximately once a week. Posts may cover life experiences, amusing everyday encounters, reflections on books, or spontaneous ideas. Each piece will be written in either English or Chinese—whichever feels most natural—rather than requiring every article to be translated.

The publishing workflow must make it easy to:

- Draft and edit content.
- Preview the finished presentation before publishing.
- Upload and preview photographs and videos.
- Upload and organize general files as well as photographs and videos.
- Publish long-form writing, short observations, image posts, video posts, and shared links.
- Share external websites with an automatically generated preview containing the page title, image, description, and destination.
- Send new writing to email subscribers.
- Encourage readers to follow and contact Bonan through LinkedIn.

The site should remain relatively inexpensive and should not demand substantial ongoing technical maintenance.

## The chosen approach

We will create an editorial publication with a strong executive layer.

The public brand will be **Hello Bonan**, with the preferred domain:

**hellobonan.com**

The working tagline is:

**Ideas, encounters, and useful things.**

The newsletter will be called:

**A Note from Bonan**

The experience should combine executive clarity with editorial warmth. A visitor should quickly understand who Bonan is and why his perspective carries weight, then be invited into a broader collection of ideas and personal discoveries.

Bonan’s professional portrait and current Coupang role will be prominent. His experience and marketplace leadership perspective will support his credibility, while the writing remains the living center of the site.

The voice and visual character should be:

- Inspirational, without becoming motivational or generic.
- Useful, with ideas readers can take away.
- Engaging, with warmth, curiosity, and occasional playfulness.
- Polished enough for executive recruiters.
- Personal enough for friends and regular readers.

English and Chinese posts will live together in one publication. Every post will have a clear language label, and readers will be able to browse by language. Translation will be optional rather than required.

The publishing system should provide a friendly visual editor, draft previews, direct image and video uploads, rich link previews, newsletter subscriptions, reader interactions, and a low-maintenance publishing process.

The expanded interaction requirements go beyond a basic publication. Ghost remains a possible foundation, but the final platform decision must confirm support for threaded replies, reactions, image attachments in conversations, private interaction analytics, and uploaded-video delivery. A more customizable publishing system may be needed if a managed platform cannot provide these features cleanly and affordably.

## What is in scope

### Brand and identity

- The **Hello Bonan** name and editorial identity.
- A restrained, distinctive visual system suitable for both professional and personal content.
- A professional portrait of Bonan.
- The tagline **Ideas, encounters, and useful things.**
- A responsive experience for desktop and mobile.

### Homepage

- Bonan’s name and portrait.
- His current position as Director of Marketplace Business at Coupang.
- A concise statement of his marketplace leadership perspective.
- Featured or recent writing.
- Selected recommendations or videos.
- A prominent invitation to subscribe.
- Clear paths to LinkedIn and professional contact.

### Writing

- A journal for weekly articles and shorter observations.
- Posts written naturally in either English or Chinese.
- Visible English and Chinese language labels.
- Browsing or filtering by language.
- Direct uploading and publishing of photographs and videos.
- Support for media galleries, video previews, captions, and rich article layouts.
- Reasonable media compression and delivery so image- and video-heavy pages remain fast.
- The ability to create a post centered on writing, photographs, video, or a mixture of formats.
- External website sharing with a polished preview card showing the source, title, description, image, and link when that information is available.
- The ability to edit or replace a broken or inaccurate automatic link preview before publishing.
- Drafting and previewing before publication.

### Media library, privacy, and file sharing

- A private media library for uploaded pictures, videos, documents, and other supported files.
- Named folders that can contain multiple files and media items, similar to a lightweight OneDrive folder.
- Tags and descriptive names to make files easier to organize and find.
- The ability to select and manage multiple files together.
- Per-folder and per-item visibility controls:
  - **Public:** visible through the website.
  - **Anyone with the private link:** accessible only through a share URL that is not listed publicly.
  - **Invited people only:** accessible only to selected friends or recipients after identity verification.
  - **Only Bonan:** stored privately and not shared.
- The ability to invite multiple people to a private folder.
- Shareable URLs for individual items and complete folders.
- The ability to revoke a link or a person’s access later.
- Optional expiration dates for private sharing links.
- A clear view of who currently has access to each private folder.
- Optional download permission for every file, picture, or video:
  - **Download allowed:** the viewer receives a visible download option.
  - **View only:** the normal download control and right-click save behavior are discouraged or removed where practical.
- Folder-level defaults for visibility and downloads, with the option to override an individual item.
- Private content must not appear in public navigation, search results, sitemaps, social previews, or newsletter content unless Bonan intentionally publishes it.
- Private files must use protected delivery rather than relying only on a hidden page address.
- Access activity for shared folders, including who opened or downloaded an item when the viewer is known.

“View only” cannot guarantee that a visible file will never be copied. A browser must receive pictures and video in order to display them, and a viewer may still use screenshots, screen recording, browser tools, or another device. The product will provide practical deterrence and access control, but it will not promise impossible copy protection.

### Recommendations

- Curated books, videos, ideas, places, products, or other worthwhile discoveries.
- Brief context explaining why Bonan recommends each item.
- The ability to feature recommendations within regular posts or in a dedicated collection.

### Experience and professional profile

- Current Coupang role displayed prominently.
- A concise career story focused on marketplace and e-commerce leadership.
- Leadership philosophy and strategic strengths.
- Publicly shareable accomplishments and initiatives.
- No confidential internal data.
- A clear invitation for relevant leadership opportunities.

### About

- A more personal introduction to Bonan.
- The connection between his professional work, curiosity, reading, and everyday observations.
- Appropriate personal interests and background.

### Audience and contact

- Email subscription to **A Note from Bonan**.
- Newsletter delivery for new posts.
- A visible LinkedIn follow/connect action.
- A clear route for recruiters or employers to reach out about leadership opportunities.
- Reader interactions on posts, including likes, comments, and sharing/forwarding actions.
- Threaded conversations that allow Bonan to reply directly to individual comments.
- The ability for Bonan to like reader comments.
- The ability for Bonan to include an additional picture in a comment reply.
- Clear visual distinction between Bonan’s replies and reader comments.
- Notifications or a private inbox that lets Bonan know when a new comment or reply needs attention.
- A lightweight identity step for interactions where knowing the reader is important, such as signing in or providing a verified email address.
- Basic search and social-sharing presentation if supported cleanly by the selected platform.

### Private analytics and engagement

- A private, authenticated dashboard available only to Bonan.
- View counts for the site and individual posts.
- Anonymous audience geography by country and approximate city, when available.
- Visibility into the pages, articles, recommendations, and links readers click most.
- Counts and trends for likes, comments, and sharing/forwarding actions.
- A private view of known readers who interact, when they have signed in or provided identifying information.
- Aggregate reporting for anonymous visitors without pretending to know their identity.
- Comment review, approval, hiding, deletion, spam handling, and moderation.
- A private conversation view where Bonan can read and respond to comments, like them, and attach pictures to replies.
- Private-folder activity showing views and downloads, with the recipient’s identity when access requires verification.
- Aggregate activity for anonymous “anyone with the link” sharing without falsely identifying the viewer.
- Protection of subscriber and reader information from public display.
- A privacy-conscious approach that collects only the information needed to understand content performance and manage reader relationships.

### Domain and launch

- Confirming availability and registering `hellobonan.com`, or selecting a close alternative if it is unavailable or unreasonably priced.
- Connecting the chosen domain to the finished site.
- Basic search-engine and social-preview metadata.
- A simple, dependable publishing setup with low ongoing maintenance.

## What we are deliberately not building

### Not a conventional résumé site

The homepage will not be dominated by a chronological résumé, dense job descriptions, corporate language, or a downloadable CV as the primary experience. Professional credibility matters, but the website should demonstrate how Bonan thinks rather than merely list positions.

### Not a corporate Coupang website

The site will represent Bonan personally. It will not imitate Coupang’s branding, speak on behalf of Coupang, or publish confidential information, internal metrics, private strategy, or proprietary materials. A suitable personal-views disclaimer may be included.

### Not a fully translated publication

We will not require every article to appear in both English and Chinese. Machine translation and a complex localization workflow are outside the initial scope. Each article will be published in the language that best suits it.

### Not a full social network or open community platform

Readers may like, comment on, share, and participate in threaded conversations on Bonan’s work. Bonan may reply with text or an additional picture and react to comments. The initial site will not include public member profile pages, general-purpose discussion forums, private reader-to-reader messaging, independent reader-created posts, follower-to-follower features, or groups.

### Not a full cloud-storage replacement

The site will provide a lightweight personal media library with folders, private sharing, recipient access, and download controls. It will not attempt to reproduce OneDrive’s complete feature set, including desktop file synchronization, office-document editing, file-version history, enterprise administration, large-scale backup, or collaborative document editing.

### Not a general-purpose video platform

Bonan may upload videos for publication, and the system may use a managed media service to store, process, and deliver them. The site will not build its own video encoding or streaming infrastructure, offer live streaming, support arbitrary reader video uploads, or attempt to compete with a dedicated video platform.

### Not an e-commerce business

Despite Bonan’s marketplace background, the site will not initially sell products, offer paid memberships, run a marketplace, process payments, or include shopping-cart functionality.

### Not a complex content operation

The first version will not include multiple authors, editorial approval roles, elaborate content taxonomies, automated translation, advanced personalization, or a large publishing calendar.

### Not an advertising or surveillance system

The site will include a private dashboard for content views, clicks, likes, comments, shares, and known-reader engagement. It will not include cross-site tracking, advertising infrastructure, invasive visitor fingerprinting, lead scoring, data brokerage, or aggressive marketing funnels.

Anonymous visitors will remain anonymous. The site will not claim to identify a specific person from views or clicks unless that person has intentionally signed in, subscribed, commented with identifying information, or otherwise consented to being known.

For visitors who do not sign up, the private dashboard may show an approximate country and city inferred from network information. This information may be incomplete or inaccurate and will not include precise addresses, live location, location history, or an attempt to identify the individual.

### Not an open-ended feature set

Podcasts, downloadable resources, speaking pages, case-study libraries, and other expansions may be considered later. They will not be included unless they become clearly necessary after the core site is in use.

## Success criteria

The first version succeeds when:

- A recruiter can understand Bonan’s role, leadership strengths, and professional direction within a minute.
- An interested employer can easily connect on LinkedIn or reach out about a relevant leadership opportunity.
- A friend or reader can quickly find writing, recommendations, and videos that feel distinctly Bonan.
- English and Chinese content coexist without making the experience confusing.
- Bonan can draft, visually preview, and publish a media-rich post without technical assistance.
- Bonan can upload and publish writing, photographs, and videos from the same editorial workflow.
- Bonan can organize multiple pictures, videos, and files into named folders.
- Bonan can decide whether each folder or item is public, accessible by private link, limited to invited people, or visible only to him.
- Bonan can allow downloads or present content as view-only, with the limits of browser-based copy protection clearly understood.
- Bonan can share a private folder with multiple friends and later change or revoke their access.
- Bonan can share an external website as an attractive, accurate preview card.
- Readers can subscribe and receive future posts.
- Readers can like, comment on, and share posts without the site becoming a full social network.
- Bonan can privately manage conversations, reply to comments, like comments, and add a picture to a reply.
- Bonan can privately see which content receives the most views, clicks, likes, comments, and sharing activity.
- Bonan can understand the approximate countries and cities of anonymous visitors.
- Bonan can see the identity of interacting readers when those readers have intentionally identified themselves, while anonymous visitors remain anonymous.
- The site feels polished, personal, and memorable while remaining affordable to operate.

## Detailed product specification

This section converts subjective phrases such as “friendly,” “engaging,” and “private analytics” into implementation requirements. Where audience behavior cannot be known before launch, the specification defines a default and a measurable experiment rather than claiming that one design is universally best.

### What “friendly” means

The publishing interface is friendly when Bonan can complete the normal weekly workflow without documentation or technical assistance:

1. Select **New post**.
2. Choose a post type: article, note, photo, video, recommendation, or link.
3. Write or upload content in a visual editor.
4. See autosave status and recover earlier revisions.
5. add a title, summary, language, category, tags, cover image, and optional newsletter settings.
6. Preview the exact desktop, mobile, email, and social-card presentation.
7. Resolve visible warnings for missing alt text, an unusually large upload, a broken link preview, or an incomplete email subject.
8. Publish immediately or schedule for a date and time.

Concrete requirements:

- Autosave after no more than two seconds of inactivity, with a visible **Saved** timestamp.
- Automatic draft recovery after a closed tab, lost connection, or browser crash.
- Plain-language labels such as **Cover image**, not storage or database terminology.
- Drag-and-drop uploads, paste-to-upload, upload progress, retry, and cancel.
- Reordering for galleries and mixed-media blocks.
- Automatic image resizing and video processing with clear status messages.
- Undo and redo for at least the current editing session.
- Preview widths of approximately 390 px for mobile and 1440 px for desktop.
- A pre-publish checklist that advises but does not unnecessarily block publishing.
- Keyboard navigation, visible focus states, descriptive errors, WCAG 2.2 AA color contrast, captions for video, and alt text for meaningful images.
- A first-time guided tour of no more than five steps; it remains dismissible and does not reappear unless requested.
- The median weekly post should take no more than five minutes of administrative work beyond creating the content itself.

### Public information architecture

Primary navigation:

- **Home**
- **Writing**
- **Recommendations**
- **About**
- **Subscribe**

Secondary utilities:

- Search
- English / 中文 content filter
- LinkedIn
- Professional contact
- Sign in, shown only where an interaction or private share requires identity

Content uses one primary type and one primary topic so reporting remains understandable.

Primary content types:

- Article
- Note
- Photo
- Video
- Recommendation
- Link

Primary topics:

- Marketplace & Leadership
- Books & Ideas
- Life & Encounters
- Places & Travel
- Useful Things
- Personal

Optional tags provide detail but do not become top-level navigation. Language is stored separately as English or Chinese; it is not a topic or tag. A post may have one primary topic, up to two secondary topics, and up to five tags.

### Visual system

The desired character is “editorial warmth with executive restraint.” The initial visual system is:

- Heading and article typeface: **Source Serif 4**, with system serif fallbacks. Article body is 19 px on desktop and 18 px on mobile, line height 1.65, with a maximum readable line length of 68 characters.
- Interface and metadata typeface: **Inter**, with system sans-serif fallbacks. Base interface size is 16 px; supporting metadata is never smaller than 14 px.
- Chinese body typeface: **Noto Serif SC**. Chinese interface text uses **Noto Sans SC**.
- Page background: warm paper `#F7F3EC`.
- Primary text: charcoal `#211F1C`.
- Secondary text: `#68625A`.
- Primary accent: burnt coral `#C9503D`.
- Secondary accent: muted gold `#A8772E`, used sparingly.
- Cards and elevated surfaces: `#FFFDFC`.
- Borders: `#DDD5C9`.
- Focus indicator: dark blue `#2457A7`, selected for visibility rather than decoration.
- Dark presentation is optional after launch; the initial reading experience defaults to the warm light theme.

Layout requirements:

- Desktop content grid: maximum width 1200 px, 24–40 px outer gutters.
- Article column: 680–740 px.
- Mobile gutters: 20 px.
- Paragraph spacing: approximately 0.9 em.
- Touch targets: at least 44 by 44 px.
- Cards use restrained borders, minimal shadow, 12–16 px corner radii, and a 4:3 or 16:9 media ratio.
- Motion lasts 150–250 ms, communicates state, and is removed when reduced motion is requested.
- Decorative animation never delays access to text or navigation.

The homepage uses a professional portrait in the first screen, but the text remains the primary introduction. The first screen contains Bonan’s name, role, one concise leadership statement, and two actions: **Read the latest** and **Get A Note from Bonan**. Recruiter contact and LinkedIn remain visible without turning the page into a job-search landing page.

### Engagement UX

The site optimizes for meaningful reading and return visits, not maximum clicking.

- The homepage begins with one featured piece and three recent items rather than an infinite feed.
- Each card shows type, language, topic, title, short description, date, estimated reading or viewing time, and image only when the image adds value.
- The article page has a quiet progress indicator, optional table of contents for articles with at least three headings, and a language label beside the publication date.
- A subscription invitation appears after the reader has reached roughly 50% of a post and again at the end. It does not interrupt the first screen.
- Related content shows no more than three items and prioritizes the same topic, then language, then recency.
- Likes require one action. Comments require a verified email or signed-in identity.
- The share action opens native device sharing when available and otherwise offers copy link, email, LinkedIn, and messaging-friendly options.
- No autoplay with sound, forced sign-up wall, countdown, infinite scroll, or repeated modal.
- Private-content actions state who has access, whether downloading is allowed, and when access expires.

Initial experiments, run only when traffic is sufficient:

- Homepage action wording: **Read the latest** versus **Explore the journal**.
- Subscription placement: halfway plus end versus end only.
- Content cards: image-led versus title-led, evaluated separately for each content type.
- Newsletter subject format: descriptive title versus title plus a short personal prefix.
- Reading typography: approved font families, body sizes of 17–20 px, line heights of 1.5–1.75, and line lengths of 58–72 characters.
- Interface typography: approved font families, navigation and button sizes, weight, and spacing.
- Color and contrast: approved accent colors, surface colors, and action-button treatments that continue to meet WCAG 2.2 AA.

An experiment must have one primary metric, run for at least two full newsletter cycles, and avoid declaring a winner from fewer than 200 eligible sessions per variation. Until traffic reaches that level, qualitative reader feedback takes priority over small percentage differences.

### Approved self-improvement loop

The website includes a controlled feedback loop that helps the experience evolve from observed behavior. It may collect evidence, identify opportunities, prepare variants, run approved tests, and recommend a winner. It must never silently redesign itself or publish a winning variation without Bonan’s explicit approval.

The loop is:

1. **Observe:** aggregate behavior, performance, accessibility, search behavior, reader feedback, and publishing friction.
2. **Diagnose:** identify a specific problem, affected audience, supporting metrics, sample size, and plausible causes.
3. **Propose:** create an experiment brief with a hypothesis, variants, screenshots, target audience, primary metric, guardrail metrics, duration, and rollback plan.
4. **Approve:** Bonan approves, edits, postpones, or rejects the experiment before it reaches readers.
5. **Run:** eligible visitors are assigned consistently to a control or variation. Active tests are visible in the private dashboard.
6. **Evaluate:** the system reports effect size, uncertainty, sample size, segment differences, accessibility results, and any guardrail regression.
7. **Decide:** Bonan approves the winner, retains the control, extends the test, or requests another variant.
8. **Deploy and monitor:** an approved winner is released with a version number, change log, and one-click rollback. Its effect is monitored for at least 14 days.

No experiment may:

- Change private-file permissions, consent behavior, unsubscribe behavior, security, or identity verification.
- Use deceptive interfaces, artificial urgency, hidden fees, forced continuity, or obstructive opt-outs.
- Reduce accessibility below WCAG 2.2 AA.
- Expose subscriber or reader identity in an experiment report.
- Run on fewer users by weakening the stated sample threshold.
- Optimize only for clicks when the change harms reading completion, trust, unsubscribes, complaints, page speed, or accessibility.

### Experiment management

The private dashboard contains an **Improve** area with:

- **Opportunities:** ranked issues such as low completion, low subscription conversion, slow pages, frequent failed searches, or editor abandonment.
- **Proposals:** experiment briefs awaiting Bonan’s approval.
- **Active tests:** status, allocation, elapsed time, sample progress, primary metric, guardrails, and a stop control.
- **Results:** concluded tests with control and variant values, effect size, confidence interval, segments, screenshots, and recommendation.
- **Change history:** every approved, rejected, deployed, and rolled-back change with date and reason.

Each proposal must show:

- Problem statement and evidence.
- Exact pages and audience affected.
- One primary success metric.
- Guardrails: accessibility, page speed, engaged time, completion, unsubscribe rate, complaint rate, and error rate as applicable.
- Control plus no more than two new variants.
- Desktop, mobile, English, and Chinese previews where the change affects them.
- Expected duration and minimum sample.
- Whether the test changes content, typography, layout, navigation, color, or newsletter presentation.
- Risks, technical cost, and rollback plan.
- Buttons for **Approve test**, **Request changes**, **Postpone**, and **Reject**.

Approval is required twice: once to start a reader-facing test and again to make its result the permanent default. Bonan can stop an active test immediately. Emergency automatic rollback is allowed only when an approved test causes a material error-rate, accessibility, performance, complaint, or unsubscribe regression; the rollback and reason must be reported immediately.

### Typography and visual testing rules

“Font,” “size,” and color tests are treated as reading-quality experiments rather than decoration.

- Only pre-approved, properly licensed, privacy-safe fonts may be tested.
- A font must support all required English and Chinese characters before entering a test.
- Typography variants must preserve the intended hierarchy and avoid layout shift while fonts load.
- Primary reading metrics: article completion, median engaged time, return-to-reading after interruption, and explicit readability feedback.
- Guardrails: page-load performance, layout shift, zoom behavior, contrast, reader complaints, and newsletter rendering.
- A larger click rate alone cannot justify a font or size change.
- Results are segmented by desktop/mobile, English/Chinese, and article length when sample size permits.
- If a segment is below the privacy or statistical threshold, it is combined or withheld rather than overinterpreted.

### Reader feedback collection

Behavioral analytics are supplemented by voluntary feedback:

- A quiet end-of-post question: **Was this worth your time?** with **Yes**, **Somewhat**, and **Not this time**.
- An optional follow-up reason such as useful, enjoyable, clear, too long, hard to read, or not relevant.
- A permanent **Send feedback** action for reporting confusion, accessibility issues, broken content, or general suggestions.
- An optional quarterly reader survey limited to five questions.
- Editor feedback after publishing, asking whether anything in the workflow was difficult.

Feedback is connected to the page, device class, language, and current experiment variant, but remains anonymous unless the reader intentionally provides contact information. Free-text feedback is private, access-controlled, and excluded from automated public display.

### Optimization metrics and safeguards

The feedback loop uses a balanced scorecard:

- **Discoverability:** successful navigation, search success, and content-card click-through.
- **Reading quality:** engaged-view rate, completion, median engaged time, readability feedback, and return visits.
- **Relationship:** confirmed subscriptions, replies, comments, and repeat readers.
- **Trust:** unsubscribes, spam complaints, negative feedback, privacy requests, and blocked interactions.
- **Performance:** Core Web Vitals, image/video start time, errors, and upload/publishing failures.
- **Accessibility:** automated violations plus reported keyboard, screen-reader, zoom, contrast, caption, and motion problems.

An experiment is recommended for adoption only when its primary metric improves without a meaningful guardrail regression. The dashboard must distinguish “no clear result” from “the control won.” It must not manufacture certainty from small samples.

### Optimization cadence

- Continuous: collect consented events, performance data, errors, and voluntary feedback.
- Weekly: surface anomalies and urgent experience problems.
- Monthly: provide a concise improvement report with no more than three prioritized opportunities.
- Quarterly: review navigation, content taxonomy, typography, accessibility, newsletter format, and audience segments.
- Annually: review the complete visual system and information architecture rather than accumulating endless small experiments.

The monthly report includes what changed, what was learned, active risks, recommended next tests, expected benefit, and effort. Bonan decides what enters the roadmap.

## External benchmark library

The product will maintain a small, current benchmark library of successful personal publications and expert-led websites. “Successful” means that the site demonstrates one or more verifiable indicators such as a large disclosed audience, a long-running publication, a durable archive, recognized professional authority, or a clearly functioning subscription business. Audience numbers disclosed by site owners are treated as their claims, not independently audited facts.

Benchmarks are reviewed before the initial visual design, quarterly during the first year, and annually thereafter. Each review records the date, observed pattern, relevance to Hello Bonan, proposed implementation, experiment opportunity, and patterns deliberately rejected. The review studies principles and interaction patterns; it does not copy another publisher’s wording, illustrations, code, or distinctive visual identity.

### Initial benchmark set

Reviewed July 2026:

#### James Clear

Source: `https://jamesclear.com/` and `https://jamesclear.com/newsletter`

Observed attributes:

- The homepage establishes authority quickly with a short introduction and concrete proof.
- The newsletter promise specifies format, reading time, frequency, and value before asking for an email address.
- A memorable recurring format makes the publication easy to recognize and anticipate.
- Recent newsletter issues are directly accessible from the homepage.
- The navigation has a small number of strong destinations.

Hello Bonan implementation:

- State Bonan’s current role and marketplace perspective in the first screen.
- Describe **A Note from Bonan** with a concrete promise: expected cadence, approximate reading time, languages, and types of ideas.
- Give recurring newsletter issues a light, recognizable structure without forcing every article into a template.
- Show the latest issue and a **Start here** collection before asking visitors to browse a full archive.
- Test a concise newsletter promise against a more personal version; measure confirmed-subscription conversion and unsubscribe rate.

#### Stratechery

Source: `https://stratechery.com/about/`

Observed attributes:

- A narrow editorial proposition makes the author’s perspective immediately understandable.
- Professional history supports the writing rather than replacing it.
- Content is explorable by concept, company, topic, format, and year.
- Search and archives treat old writing as a durable knowledge base.
- An ethics statement clarifies independence, conflicts, corrections, and boundaries.

Hello Bonan implementation:

- Use the statement **Marketplace strategy, leadership, and the useful ideas found beyond work** as an initial positioning hypothesis.
- Place a compact credibility strip below the introduction; keep the full career story on About.
- Provide topic, format, language, year, and search discovery without exposing a complex taxonomy in primary navigation.
- Add **Most useful**, **Most discussed**, and annual review collections once enough content exists.
- Publish a personal-views and editorial-integrity statement covering Coupang affiliation, confidential information, recommendations, gifts or affiliate links, corrections, and AI assistance.

#### Lenny’s Newsletter

Source: `https://www.lennysnewsletter.com/about`

Observed attributes:

- The audience and benefit are explicit: the publication says whom it serves and what readers become better at.
- A **Start here** route and **Top posts** reduce the burden of choosing from a large archive.
- Posts, interviews, podcasts, and community are presented as parts of one expertise ecosystem.
- Subscription value is explained with examples rather than a generic “join.”

Hello Bonan implementation:

- Give first-time visitors three curated routes: **Marketplace & leadership**, **Ideas worth keeping**, and **Stories from life**.
- Add a **Start here** page with five to eight representative works, updated quarterly.
- Let one idea connect an article, recommendation, video, and conversation while clearly labeling each format.
- Show a recent issue preview beside the subscription form.
- Do not introduce paid membership, bundles, or a general community in the first version.

#### Benedict Evans

Source: `https://www.ben-evans.com/newsletter/`

Observed attributes:

- The newsletter answers what it covers, why it matters, when it arrives, and how free and paid editions differ.
- A sample issue lets visitors evaluate quality before subscribing.
- Testimonials are attributed with the person’s relevant role.
- The archive compounds the value of a long-running publication.

Hello Bonan implementation:

- Provide a public sample issue and archive.
- Explain frequency and format immediately beside the form.
- Add testimonials only after receiving genuine permission; never fabricate or use vague anonymous praise.
- Use archive milestones such as yearly collections and “five ideas to begin with.”
- Keep the first version free; the benchmark informs clarity, not monetization.

#### Farnam Street

Source: `https://fs.blog/start/`

Observed attributes:

- A strong **Start Here** page states the mission, introduces the newsletter, points to popular articles, and explains the brand.
- Enduring topics organize a large archive.
- Reading-time expectations make the subscription commitment concrete.
- Articles, books, podcast, and community all reinforce one intellectual promise.
- Social proof is secondary to the value proposition.

Hello Bonan implementation:

- Make the Hello Bonan origin story part of the Start Here or About experience.
- Use enduring topics instead of a date-only blog archive.
- State a realistic issue reading time based on the selected send mode.
- Keep the first screen focused on Bonan’s perspective; place approved credibility and press references below the primary content.
- Show popular content only after it has a meaningful minimum audience; before that, use **Selected by Bonan**.

#### Julie Zhuo

Source: `https://www.juliezhuo.com/`

Observed attributes:

- A minimal page can establish professional identity with only a few role statements.
- Selected writing and talks demonstrate expertise more effectively than a chronological résumé.
- External work is linked directly rather than duplicated.

Hello Bonan implementation:

- Use a short role stack on About: marketplace leader, writer, reader, and observer.
- Curate selected accomplishments, writing, talks, and external appearances instead of presenting a dense employment timeline.
- Use external-link cards for reputable work hosted elsewhere.
- Preserve editorial warmth and a fuller publishing experience; do not imitate the benchmark’s extreme minimalism.

#### Seth’s Blog

Source: `https://seths.blog/`

Observed attributes:

- A consistent publishing voice and simple chronological reading experience can remain durable for many years.
- Short posts coexist with an extensive archive.
- Subscription, sharing, and archive access stay close to the writing.
- The interface does not overwhelm the author’s voice.

Hello Bonan implementation:

- Let Notes be genuinely short and publishable without a cover image.
- Offer both chronological browsing and topic-based discovery.
- Keep the article page visually quiet and place interaction tools after the idea, not before it.
- Provide RSS in addition to email for readers who prefer it.
- Avoid using publishing frequency alone as an engagement tactic; quality remains the constraint.

#### Wait But Why

Source: `https://waitbutwhy.com/` and `https://newsletter.waitbutwhy.com/signup`

Observed attributes:

- A distinctive conversational voice makes the publication recognizable.
- Original illustrations and diagrams make difficult ideas approachable.
- Long-form pieces use narrative progression and visual explanation.
- Subscription language feels human and sets expectations about email behavior.

Hello Bonan implementation:

- Allow occasional hand-drawn diagrams, annotated photographs, and visual explainers.
- Support long-form chapter navigation and “save your place” behavior.
- Write subscription and system messages in Bonan’s natural voice while keeping actions unambiguous.
- Do not imitate the site’s drawing style or humor; create a visual language specific to Bonan.

### Cross-benchmark design principles

The initial benchmark review produces these implementation principles:

1. **Make the promise concrete.** The first screen states who Bonan is, what he thinks about, and why the reader should continue.
2. **Demonstrate credibility through selected work.** Role and evidence support the ideas; they do not become a résumé wall.
3. **Give new readers a starting point.** A maintained Start Here page prevents a growing archive from becoming intimidating.
4. **Set subscription expectations.** Frequency, approximate length, language choice, sample issue, and privacy appear before submission.
5. **Build a compounding archive.** Search, topics, language, format, year, selected collections, and related content help older work remain useful.
6. **Create a recognizable rhythm.** Consistent metadata, newsletter structure, and publishing voice create familiarity without making all posts identical.
7. **Keep the reading surface quiet.** Navigation, promotion, and interaction do not interrupt the opening paragraphs.
8. **Use personality deliberately.** Warm system messages, captions, and editorial notes should sound like Bonan, while permissions and errors remain literal.
9. **Earn social proof.** Audience numbers, testimonials, employer names, and press references are displayed only when accurate, relevant, and approved.
10. **Protect trust.** Editorial boundaries, corrections, privacy, AI assistance, sponsorship, gifts, and affiliate relationships are explained publicly.

### Benchmark-to-experiment backlog

These ideas enter the **Improve** area as proposals, not automatic changes:

- Concrete hero promise versus a more personal welcome.
- Start Here routes organized by audience versus by topic.
- Selected-by-Bonan collection versus data-ranked popular content.
- Newsletter sample embedded on the subscription page versus opened separately.
- Five-minute structured digest versus a personal letter format.
- Quiet text-first cards versus media-led cards for Photo and Video content.
- Article-end related content organized by topic versus by reading intent.
- Role-and-proof credibility strip versus a short narrative biography.
- Chronological archive as the default versus topic collections as the default.

Each proposal follows the approval, sample-size, accessibility, privacy, and rollback rules already defined in this document. Benchmark similarity is never evidence by itself; Hello Bonan adopts an idea only when it fits the brand, passes review, and performs acceptably with its own readers.

## Bonan profile and public-content signals

This section records public source material reviewed with Bonan’s permission and translates it into content and design decisions. It is not a license to republish third-party people, music, venues, or copyrighted footage outside the permissions available for the original post.

### Public channels

- LinkedIn: `https://www.linkedin.com/in/bonanzhong/`
- Douyin: `https://www.douyin.com/user/MS4wLjABAAAAjQLsDJzNqH-lMIXUsRCp298zla02LnmZyACESD7llC4`

The Douyin profile was publicly reviewed in July 2026. LinkedIn initially presented a sign-in wall; Bonan subsequently supplied a LinkedIn `Profile.csv` export on July 30, 2026. Professional facts below are based on that user-provided export and information Bonan supplied directly in this design document. The export contains a headline and summary, not a complete position-by-position employment history, so dates, titles, employers, education, and accomplishments not explicitly present must be confirmed separately before publication.

### Verified LinkedIn profile signals

Profile name:

**Bonan Zhong**

LinkedIn headline:

**Director at Coupang | Ex-Amazon | Marketplace | Consumer Platforms | Seller Services**

The supplied summary describes a career path through:

- Surgery.
- Regenerative medicine.
- Biotechnology.
- Amazon.
- Coupang.

The unifying professional idea is not repeated career switching for its own sake. It is the search for the next constraint where Bonan can create greater impact. The summary argues that successful solutions eventually create new constraints and that leadership requires recognizing when prior expertise is no longer enough.

Current focus areas explicitly named in the profile are:

- Artificial intelligence.
- Marketplaces.
- Consumer platforms.
- Seller services.
- Organizational scaling.
- Leadership development.

The operating approach explicitly described in the profile is:

1. Question assumptions.
2. Find the real bottleneck.
3. Build systems that adapt.
4. Develop leaders who eventually make themselves unnecessary.

The professional voice is:

- Systems-oriented rather than title-oriented.
- Comfortable crossing disciplinary boundaries.
- Focused on leverage, adaptability, and organizational learning.
- Interested in the limits created by previous success.
- Ambitious about impact without relying on corporate superlatives.
- Open to conversations about AI, consumer platforms, marketplaces, and self-improving organizations.

The public website must not imply that surgery, regenerative medicine, biotechnology, Amazon, or Coupang experience occurred in a particular sequence, role, geography, or time period beyond what Bonan approves for publication.

### Verified Douyin profile signals

Public profile name:

**西雅图大南瓜** — “Seattle Big Pumpkin”

Public profile description:

**爱玩的大南瓜 带大家一起体验美国西北地区的生活**

Working English interpretation:

**A playful, curious guide sharing life in the American Northwest.**

The profile contains approximately 299 published works at the time of review. Public content samples show recurring subjects including:

- Seattle and the American Pacific Northwest.
- Seoul and everyday life in Korea.
- Travel in Japan, including Hokkaido, Sapporo, Furano, Biei, Asahikawa, Otaru, and Tomakomai.
- Nature and outdoor experiences, including fishing, lakes, flowers, and seasonal landscapes.
- Public culture and spectacle, including Seafair, the Blue Angels, lantern festivals, live music, drone shows, fountains, K-pop, and taekwondo.
- Cross-cultural details involving courtesy, public behavior, transport, food, streets, and local rituals.
- Short human observations that turn an ordinary encounter into a broader reflection.
- Chinese-first storytelling with occasional English or multilingual captions.

The content voice is:

- Observant rather than tour-guide-like.
- Curious about cultural differences without treating them as competition.
- Warm, playful, and willing to make fun of the narrator.
- Specific about small details.
- Visually led but capable of sustaining a longer reflective caption.
- Interested in what an experience teaches after the event is over.

One representative travel reflection uses details such as quiet roads, courteous drivers, a worker shielding others from cleaning spray, and a shopkeeper selecting a ripe melon. The conclusion moves from travel description to a lesson about people choosing to do one small extra thing. This structure—concrete detail, surprise, reflection, useful takeaway—is a strong candidate for Hello Bonan’s distinctive editorial form.

### Refined personal positioning

The initial positioning should connect professional perspective with this already-established observational voice:

**I build marketplaces, adaptive organizations, and leaders—then stay curious about the people, places, and small decisions that reveal how systems really work.**

Alternative for testing:

**From medicine to marketplaces, I follow the next meaningful bottleneck—and collect useful ideas and revealing everyday moments along the way.**

Short alternative:

**Marketplace leader. Systems thinker. Curious observer.**

These are working options, not final biography claims. Bonan approves the final wording.

The public brand remains **Hello Bonan**. **西雅图大南瓜** becomes an optional, secondary creator identity:

- It may appear as a small Douyin label or playful signature in the social/video section.
- It must not replace Bonan’s real name in recruiter-facing areas.
- It should not become a pumpkin-themed visual gimmick across the full site.
- A subtle pumpkin-orange accent or occasional editorial illustration may reference it after Bonan approves the treatment.

### Refined content pillars

The topic taxonomy should be adjusted to reflect observed content:

1. **Marketplace & Leadership**
   - Strategy, consumer platforms, seller services, customer behavior, leadership choices, marketplace systems, and organizational scaling.

2. **AI & Adaptive Systems**
   - Practical AI, organizational intelligence, evolving constraints, assumption testing, and systems designed to learn.

3. **Places & Cultures**
   - Seattle, Seoul, the Pacific Northwest, Korea, Japan, travel, cultural contrasts, and local traditions.

4. **Everyday Encounters**
   - Small moments, amusing situations, human behavior, courtesy, surprises, and observations worth remembering.

5. **Nature & Outdoors**
   - Fishing, lakes, mountains, seasons, landscapes, and restorative experiences.

6. **Books & Ideas**
   - Reading notes, concepts, recommendations, and useful mental models.

7. **Things Worth Sharing**
   - Videos, performances, places, products, links, events, and other recommendations.

The earlier **Life & Encounters**, **Places & Travel**, **Useful Things**, and **Personal** labels should be migrated into this clearer structure. A post still has one primary topic, up to two secondary topics, and up to five tags.

Location is a separate structured field, not a topic. When relevant, content may include country, region, and city. This enables collections such as **From Seattle**, **From Seoul**, and **Travel Notes** without mixing geography into the topic system.

### Signature editorial formats

Hello Bonan should support several repeatable but optional formats derived from the public work:

#### A Small Thing I Noticed

- 150–500 words.
- Begins with one observed detail.
- Ends with a reflection, question, or useful idea.
- Designed for weekly notes and ordinary encounters.

#### Postcard from…

- One city or place, 3–8 photographs or one short video.
- 100–350 words.
- Includes location, date, and a concise “what stayed with me” closing.

#### What This Taught Me

- 600–1,500 words.
- Connects a work, travel, reading, or cultural experience to a broader idea.
- Uses specific evidence before making a general claim.

#### Marketplace Notes

- 800–2,000 words.
- Executive-quality analysis based only on public information and personal experience that Bonan is permitted to share.
- Includes a clear personal-views disclaimer.
- May use an original framework or diagram.

#### The Next Bottleneck

- 700–1,800 words or a concise visual framework.
- Begins with a system that appears successful.
- Identifies the new constraint created by that success.
- Examines assumptions, second-order effects, and possible adaptive responses.
- May address AI, marketplaces, organizations, medicine, technology, or everyday systems.
- Avoids confidential employer information and unverified causal claims.

#### Learning a New Field

- A reflective essay or interview about moving across disciplines.
- Focuses on transferable methods, beginner’s mindset, decision-making under uncertainty, and what prior expertise helped or hindered.
- Does not publish private medical, employer, colleague, or patient information.

#### Worth Sharing

- A book, place, product, video, event, or external link.
- Contains the item, a 50–200 word explanation, who it may help, and why Bonan considers it worthwhile.
- Discloses gifts, sponsorship, or affiliate relationships.

#### One Minute with Bonan

- A short vertical video with captions and an optional transcript.
- May be embedded from Douyin or uploaded from the original source file.
- Includes a short contextual introduction so the page remains useful without playing the video.

### Homepage implications

The homepage should express both professional authority and lived curiosity:

- First screen: portrait, Bonan’s name, Coupang role, refined positioning statement, **Read the latest**, and **Get A Note from Bonan**.
- Second section: one featured idea selected for substance, not simply the newest item.
- Third section: three doors—**Marketplaces & Systems**, **Places & Encounters**, and **Books & Useful Things**.
- Fourth section: a visually rich **Postcards** strip with recent Seattle, Seoul, travel, nature, or cultural-event content.
- Fifth section: current recommendations or videos.
- Sixth section: compact professional credibility, LinkedIn, and recruiter contact.
- Final section: newsletter promise and sample issue.

The page should not split into a “serious professional half” and a “casual personal half.” Shared typography, pacing, voice, and editorial framing must make them feel like two expressions of the same curious, strategic person.

### Professional-profile presentation

The first version should present the professional story in three levels:

#### Homepage: 10-second version

- **Bonan Zhong**
- **Director at Coupang**
- **Former Amazon**
- One positioning statement.
- One proof-oriented link: **How I think about marketplaces and organizations**.

#### About page: one-minute version

Use a concise narrative rather than a résumé:

**Bonan’s career has crossed surgery, regenerative medicine, biotechnology, Amazon, and Coupang. The common thread is a habit of looking for the next constraint: questioning assumptions, finding the real bottleneck, building systems that adapt, and developing leaders who can carry the work forward. Today his interests center on AI, marketplaces, consumer platforms, seller services, and organizations that keep learning.**

This is draft website copy derived from the supplied profile and requires Bonan’s final factual and tone approval.

#### Experience page or expandable section: deeper version

- Roles and dates only after Bonan supplies or approves them.
- Three to five selected transitions or accomplishments.
- For each item: situation, challenge, Bonan’s contribution, outcome, and lesson.
- Public evidence or approved metrics where available.
- No confidential internal strategy, non-public business performance, proprietary operating details, patient information, or claims made on behalf of an employer.

### Professional content opportunities

The supplied profile supports an initial editorial backlog:

- When your greatest strength becomes your next limitation.
- Every solution creates a new constraint.
- How to locate the real bottleneck in a marketplace.
- What medicine taught me about systems and uncertainty.
- What biotechnology and consumer platforms have in common.
- When expertise helps—and when it prevents learning.
- Designing organizations that adapt after the leader steps away.
- Why developing replaceable leaders is a measure of leadership.
- AI as an organizational capability rather than a feature.
- What seller services reveal about marketplace health.

These are proposals, not claims that Bonan has already written or approved the arguments. Each enters the editorial workflow as a draft idea requiring Bonan’s selection and review.

### Social-content integration

- Display LinkedIn and Douyin as clearly labeled external channels.
- Use official platform marks only within their brand guidelines.
- Prefer original uploaded media on Hello Bonan when Bonan owns the source and wants a durable archive.
- When embedding platform content, show a privacy-aware placeholder and load the third-party embed only after the reader chooses to play or when consent allows.
- Store the original caption, source URL, publication date, language, and attribution.
- Allow Bonan to turn a social post into a richer website post without manually reconstructing its metadata.
- Never scrape and automatically republish new social posts without review.
- Provide an import-review queue where Bonan can select **Import as draft**, edit title and context, confirm media rights, preview, and publish.
- Avoid duplicate search-engine pages when the website and a social platform contain substantially identical text; the website version should add context or use appropriate canonical metadata.
- Track outbound clicks to LinkedIn and Douyin separately from on-site content engagement.

### Social-source analytics

The dashboard adds:

- Sessions referred by LinkedIn and Douyin.
- Newsletter subscriptions attributed to each source.
- Imported-post views, engaged time, completion, and interactions.
- Website-to-social outbound clicks.
- Performance by source format: short video, long caption, photograph, professional update, or external link.
- Cross-channel content lineage, showing that a website article developed from a specific social post.

Cross-channel reports must not imply that a person who viewed content on one platform is the same person who visited another unless the person intentionally uses a trackable, consented link or identifies themselves.

### Content-learning loop

Public social content may suggest—not automatically determine—future website ideas:

1. Identify recurring themes, formats, locations, and audience reactions.
2. Propose a website adaptation such as a Postcard, longer reflection, recommendation, or professional parallel.
3. Show the source post, proposed framing, expected audience, and rights checklist.
4. Require Bonan’s approval before importing or publishing.
5. Compare social-origin posts with website-original posts using engaged time, completion, subscription assists, and qualitative feedback.
6. Recommend future formats only when the evidence is sufficient and the recommendation still matches Bonan’s interests.

The system should learn that Bonan’s observed strengths include noticing concrete human details, finding humor without cruelty, connecting place with meaning, and moving from experience to reflection. It must not flatten that voice into generic travel content or optimize it toward sensationalism.

### Newsletter: A Note from Bonan

The newsletter is an email publication, not a separate stream of unrelated content.

Default delivery:

- Channel: email.
- Optional distribution links: LinkedIn post and a copyable web link. These are manual or scheduled promotional copies, not alternative subscription channels.
- Cadence: normally weekly, only when Bonan publishes something worth sending.
- Send modes: **Send full post**, **Send digest**, or **Publish without email**.
- Full-post email: complete notes up to approximately 800 words; longer articles use a 120–250 word personal introduction, a short excerpt, and one **Continue reading** action.
- Digest email: 80–150 word opening plus up to three items, each with a 20–50 word description.
- Subject line: ideally 35–55 characters; hard editorial warning at 70 characters.
- Preview text: 70–110 characters and distinct from the subject.
- Header: newsletter name, issue date, and optional one-line note from Bonan.
- Body width: 600–640 px, 16–18 px body text, minimum 1.5 line height, high-contrast buttons, and one primary action.
- Images: maximum 1200 px source width, compressed, accompanied by alt text, and never required to understand the message.
- Footer: unsubscribe, preference management, website link, privacy link, and required sender information.

Subscription behavior:

- Form fields: email only by default; optional first name appears after subscription or in preferences.
- Double opt-in is the default where appropriate and is mandatory where legally required.
- Preference choices: all notes, English only, Chinese only, and major professional essays only.
- Confirmation, welcome, unsubscribe, resubscribe, bounce, and complaint states are handled visibly.
- The welcome email is sent immediately and contains 3–5 representative pieces, what to expect, expected cadence, and a reply invitation.
- Every newsletter has a browser-readable archive page unless marked private.
- Replies go to an inbox Bonan reviews; no “no-reply” sender address.

Newsletter reporting:

- Delivered, bounced, unsubscribed, and spam-complaint counts are exact.
- Opens are labeled **estimated** because privacy protections and image blocking make them unreliable.
- Unique link clicks, click-through rate, subscription source, language preference, and subsequent unsubscribe rate are primary.
- Performance is shown at 24 hours, 7 days, 30 days, and lifetime.

### Private analytics dashboard

The dashboard defaults to the last 30 days and always shows the active date range, timezone, comparison period, definitions, and whether a metric is exact, estimated, or sampled. Bonan can select:

- Today
- Yesterday
- Last 7 days
- Last 28 days
- Last 30 days
- Last 90 days
- Month to date
- Year to date
- Previous calendar week, month, quarter, or year
- Custom range

All reporting uses Bonan’s selected timezone, initially America/Los_Angeles. Charts aggregate hourly for ranges of 48 hours or less, daily for 90 days or less, weekly for up to two years, and monthly beyond two years. Raw event records are retained for 13 months when affordable; aggregate monthly records are retained indefinitely.

Dashboard sections:

1. **Overview**
   - Unique visitors, sessions, content views, engaged views, total reading or viewing time, subscriptions, likes, comments, shares, outbound-link clicks, and private-file downloads.
   - Change against the immediately preceding equivalent period.
   - Time-series chart with selectable daily, weekly, or monthly granularity.

2. **Content**
   - One row per content item with title, type, topic, language, publish date, unique viewers, views, engaged-view rate, median engaged time, completion rate, likes, comments, shares, subscription assists, and outbound clicks.
   - Performance at 24 hours, 7 days, 30 days, 90 days, 1 year, and lifetime.
   - Comparison against the median of the previous ten items of the same type and language.

3. **Topics and formats**
   - Metrics grouped by primary topic, content type, language, and tag.
   - Ranking by unique viewers, engaged time, interaction rate, subscription conversion, and outbound click-through.
   - “Most clicks” is not combined with “most interaction”; each metric is independently selectable.

4. **Audience**
   - Country and approximate city for anonymous traffic when available.
   - Region, device class, referral source, language preference, and new versus returning audience.
   - No precise location or invented identity.
   - Groups with fewer than five people are hidden or rolled into **Other** to reduce privacy risk.

5. **Timing**
   - Views and interactions by reader-local weekday and hour where reliable; otherwise by Bonan’s dashboard timezone.
   - A 7-by-24 heat map.
   - Suggested posting windows based on the preceding 90 days, requiring at least eight published sends and 500 eligible sessions.
   - Suggestions show sample size and confidence and never imply that correlation proves the posting time caused performance.

6. **Newsletter**
   - Delivery, estimated opens, unique clicks, click-to-delivered rate, unsubscribes, complaints, and web sessions attributed to each issue.
   - Link-level click table and results by subscriber language preference.

7. **Conversations**
   - New, awaiting review, approved, hidden, spam, and replied-to comments.
   - Response time, posts generating conversation, known participants, and unread threads.

8. **Private sharing**
   - Folder and item views, verified viewer, access method, downloads, last access, failed access attempts, expiration, and revoked access.
   - Anonymous private-link viewers remain anonymous.

### Analytics definitions

- **Content view:** a content page becomes visible and remains visible for at least two seconds. Reloads by the same browser within 30 minutes are deduplicated for the unique-view count but remain available as raw views.
- **Engaged view:** at least 30 seconds active on the page, 50% scroll depth, or a meaningful interaction such as play, comment, share, or outbound click.
- **Completion:** 90% article scroll depth or 90% of a video played.
- **Interaction:** like, comment, reply, share, media play, gallery navigation, link click, subscription, or authorized download. Passive scroll is not counted as an interaction.
- **Interaction rate:** sessions with at least one interaction divided by eligible content sessions.
- **Subscription conversion:** confirmed subscriptions divided by unique visitors exposed to a subscription invitation.
- **Subscription assist:** a confirmed subscription occurring within seven days of a content view, reported separately from a same-session conversion.
- **Share:** use of an on-site share control. Downstream forwarding outside the site cannot be measured reliably and is not claimed.
- **Region:** country and approximate city derived from privacy-conscious network lookup or user-provided profile information; these sources are labeled separately.

Core event data includes timestamp, anonymous session identifier, authenticated reader identifier when intentionally known, content identifier, content type, primary topic, language, event name, referral source, campaign, device class, country, approximate city, newsletter issue, and privacy/consent state. Sensitive subscriber details are not exported in routine analytics tables.

Filters apply across the dashboard:

- Date range and comparison range
- Content item
- Content type
- Primary topic
- Language
- Country or region
- Referral source
- Device class
- New or returning visitor
- Known or anonymous reader

Tables can be sorted, searched, and exported as CSV. Charts can be downloaded as PNG. Scheduled weekly and monthly email summaries contain aggregate data only and link back to the authenticated dashboard.

### Dashboard presentation

- Summary cards state the metric, value, percentage change, comparison period, and definition tooltip.
- Line charts show no more than four series simultaneously.
- Tables retain exact values; charts abbreviate large numbers only on axes.
- Empty states explain whether there is no activity, tracking is unavailable, or a filter removed the data.
- Low-volume results show counts rather than misleading percentages.
- Every recommendation includes its source period and sample size.
- A **Single content view** opens a detail page with lifetime totals, a time-series chart, referral sources, geography, reading depth, interactions, newsletter attribution, and comparison with similar content.

### Privacy and consent

- Essential access and security events do not require marketing consent.
- Optional analytics respect applicable consent requirements and browser privacy signals.
- Known-reader activity is shown only after intentional identification through sign-in, subscription, comment verification, or an invited share.
- Public analytics never expose reader or subscriber data.
- Bonan can export or delete a known reader’s stored information.
- Analytics do not use cross-site tracking, fingerprinting, ad profiles, or purchased identity data.

### Launch acceptance tests

The detailed requirements are satisfied only when:

- Bonan can create, preview, schedule, publish, revise, and unpublish every supported post type on desktop and mobile.
- A test post can be sent as a full email, a digest, or without email.
- Language and newsletter preferences correctly control browsing and delivery.
- Every defined event appears in the correct content, topic, language, region, and time report.
- A content detail page reports 24-hour, 7-day, 30-day, yearly, and lifetime performance.
- Weekly, monthly, and yearly charts use the specified aggregation and timezone.
- The timing heat map withholds recommendations below its minimum data threshold.
- Anonymous users are never presented as named people.
- Private folders cannot be discovered through public navigation, search, social metadata, newsletter archives, or a revoked URL.
- Keyboard-only navigation, screen-reader labels, contrast, reduced motion, responsive layouts, email rendering, upload recovery, and broken-link behavior pass pre-launch checks.
- The dashboard and all private files require authenticated, authorized access.
