import DynamicButton from "../../components/general/dynamicButton/DynamicButton.jsx";
import cv from "../../assets/Esraa Alhamrawy Frontend Developer.pdf";
import { styles } from "../../styles.js";
import style from "./Hero.module.css";

const processSteps = [
  {
    badge: "01",
    title: "Clarify the outcome",
    summary: "I start by aligning on the user problem, the business goal, and the delivery constraints so the implementation stays focused.",
  },
  {
    badge: "02",
    title: "Build the system",
    summary: "I translate the scope into reusable components, predictable state, and a clean UI structure that stays maintainable.",
  },
  {
    badge: "03",
    title: "Refine and ship",
    summary: "I close the loop with cross-checks, polish, and handoff-ready code so teams can move faster after launch.",
  },
];

const recommendations = [
  {
    badge: "Ownership",
    title: "Reliable delivery",
    summary: "Teams get a frontend owner who can turn requirements into shipped interfaces without needing heavy oversight.",
  },
  {
    badge: "Communication",
    title: "Clear collaboration",
    summary: "Product, backend, and QA partners get concise updates, quick clarification, and predictable handoffs.",
  },
  {
    badge: "Code quality",
    title: "Easy to extend",
    summary: "The code stays organized and reusable, which makes later changes easier for the next engineer or team.",
  },
];

const ProjectHighlights = () => {
  return (
    <section className={`${style.container} ${style.fadeInUp} ${style.delay600}`} aria-labelledby="project-highlights-heading">
      <p className={`${styles.sectionSubText} text-center`}>Hiring confidence</p>
      <h1 id="project-highlights-heading" className={`${styles.sectionHeadText} text-center`}>
        How I work
      </h1>
      <p className={style.hiringLinksCopy}>
        A short process snapshot and the themes collaborators usually value when working with me.
      </p>

      <h2 className={style.signalSectionTitle}>Process</h2>
      <div className={style.signalGrid}>
        {processSteps.map((step) => (
          <article key={step.title} className={style.signalCard}>
            <span className={style.signalBadge}>{step.badge}</span>
            <h3 className={style.signalCardTitle}>{step.title}</h3>
            <p className={style.signalCardText}>{step.summary}</p>
          </article>
        ))}
      </div>

      <h2 className={style.signalSectionTitle}>Recommendations</h2>
      <div className={style.signalGrid}>
        {recommendations.map((item) => (
          <article key={item.title} className={style.signalCard}>
            <span className={style.signalBadge}>{item.badge}</span>
            <h3 className={style.signalCardTitle}>{item.title}</h3>
            <p className={style.signalCardText}>{item.summary}</p>
          </article>
        ))}
      </div>

      <div className={style.signalActions}>
        <DynamicButton href="#/showcase" text="View live projects" />
        <DynamicButton href={cv} text="Resume" target="_blank" rel="noreferrer" />
        <DynamicButton href="https://github.com/EsraaHamrawy" text="GitHub" target="_blank" rel="noopener noreferrer" />
        <DynamicButton href="https://www.linkedin.com/in/esraa-hamrawy" text="LinkedIn" target="_blank" rel="noopener noreferrer" />
      </div>
    </section>
  );
};

export default ProjectHighlights;
