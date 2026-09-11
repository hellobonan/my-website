export const filmLearnings = {
  en: [
    ["Mechanisms matter more with AI", "AI increases the speed and volume of production, but it does not remove the need for discipline. Explicit standards, clear constraints, and immediate review are essential. Without them, faster generation simply produces more inconsistency."],
    ["Quality failures compound", "An early defect rarely stays isolated. Problems in the concept, script, character design, or visual continuity become increasingly difficult and expensive to correct once later work depends on them. Quality must be checked at every stage—not only at the end."],
    ["Every addition has a cost", "The original plan was a five-minute film. It became 9 minutes and 36 seconds. Every new scene introduced more than runtime: it required additional assets, continuity, sound, transitions, revisions, and opportunities for failure. Creative ambition needs an explicit complexity budget."],
    ["Human judgment is the integration layer", "AI generated many of the assets. It did not decide what belonged in the film. Selecting, rejecting, sequencing, reconciling, and refining those outputs required human judgment. The final work emerged from those decisions—not from generation alone."],
  ],
  zh: [
    ["有了 AI，机制更重要", "AI 提高了制作的速度和产量，却没有消除对纪律的需求。明确的标准、清晰的约束和即时审核缺一不可。没有这些机制，更快的生成只会带来更多的不一致。"],
    ["质量问题会层层累积", "早期的缺陷很少会孤立存在。一旦后续工作依赖于它，概念、剧本、角色设计或视觉连续性中的问题，就会变得越来越难修正，修正成本也越来越高。质量必须在每个阶段检查，而不是只在最后把关。"],
    ["每一次增加都有代价", "原计划是一部五分钟的电影，最终变成了 9分36秒。每增加一个场景，增加的不只是片长，还包括额外的素材、连续性管理、声音、转场、修改，以及更多出错的可能。创作的雄心需要明确的复杂度预算。"],
    ["人的判断把一切整合起来", "AI 生成了许多素材，但它没有决定哪些内容应该进入电影。筛选、舍弃、排序、协调和打磨这些输出，都需要人的判断。最终作品来自这些决定，而不只是生成本身。"],
  ],
};

export default function FilmLearnings({ language }: { language: "en" | "zh" }) {
  return <div className="film-learnings">
    <h3>{language === "zh" ? "我的第一部 AI 电影教会我的四件事" : "Four things my first AI film taught me"}</h3>
    <ol className="film-learnings-grid">
      {filmLearnings[language].map(([title, text], index) => <li key={title}>
        <span className="film-learning-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div><h4>{title}</h4><p>{text}</p></div>
      </li>)}
    </ol>
  </div>;
}
