import DynamicButton from "../../components/general/dynamicButton/DynamicButton.jsx";
import cv from "../../assets/Esraa Alhamrawy Frontend Developer.pdf";
import { styles } from "../../styles.js";
import style from "./Hero.module.css";

const projects = [
  {
    badge: "Client work",
    title: "Bloom",
    summary: "Brand-forward e-commerce site with reusable sections, responsive layouts, and polished RTL delivery.",
    link: "https://www.bloom.com.jo/",
    tags: ["Bootstrap", "Custom CSS", "Responsive UI"],
  },
  {
    badge: "Team project",
    title: "Digital Center",
    summary: "Redux-driven storefront with auth flows, shared state, and routed product views.",
    link: "https://esraahamrawy.github.io/degetai-center/#/",
    tags: ["React", "Redux Toolkit", "React Router"],
  },
  {
    badge: "Professional demo",
    title: "COP 27 Conference",
    summary: "Conference landing page converted from design files with a live social feed integration.",
    link: "https://cop-27.vercel.app/",
    tags: ["Bootstrap", "Design-to-code", "Live content"],
  },
  {
    badge: "Personal project",
    title: "Aura Store",
    summary: "React storefront that demonstrates cart state, validation, and reusable product flows.",
    link: "https://e-comarce-front.vercel.app/",
    tags: ["React", "TypeScript", "Forms"],
  },
  {
    badge: "Productivity app",
    title: "Bookmark Manager",
    summary: "CRUD app for organizing bookmarks with local persistence and fast search.",
    link: "https://bookmark-jj5o2uztr-esraahamrawys-projects.vercel.app/",
    tags: ["JavaScript", "CRUD", "LocalStorage"],
  },
];

const ProjectShowcase = () => {
  return (
    <section className={`${style.container} ${style.fadeInUp} ${style.delay600}`} aria-labelledby="project-showcase-heading">
      <p className={`${styles.sectionSubText} text-center`}>Live proof</p>
      <h1 id="project-showcase-heading" className={`${styles.sectionHeadText} text-center`}>
        Project Showcase
      </h1>
      <p className={style.hiringLinksCopy}>
        A compact set of live builds recruiters can scan quickly for product scope, delivery quality, and implementation depth.
      </p>

      <div className={style.linkPillRow}>
        <DynamicButton href="#/" text="Back to home" />
        <DynamicButton href={cv} text="Resume" active={true} target="_blank" rel="noreferrer" />
        <DynamicButton href="https://github.com/EsraaHamrawy" text="GitHub" target="_blank" rel="noopener noreferrer" />
        <DynamicButton href="https://www.linkedin.com/in/esraa-hamrawy" text="LinkedIn" target="_blank" rel="noopener noreferrer" />
      </div>

      <div className={style.signalGrid}>
        {projects.map((project) => (
          <article key={project.title} className={style.signalCard}>
            <span className={style.signalBadge}>{project.badge}</span>
            <h2 className={style.signalCardTitle}>{project.title}</h2>
            <p className={style.signalCardText}>{project.summary}</p>
            <div className={style.signalPills}>
              {project.tags.map((tag) => (
                <span key={tag} className={style.signalPill}>{tag}</span>
              ))}
            </div>
            <div className={style.signalActions}>
              <DynamicButton href={project.link} text="Open live site" target="_blank" rel="noopener noreferrer" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
