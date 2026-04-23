import { Grid } from "@mui/material";
import { Suspense, lazy } from "react";
import cv  from "../../assets/Esraa Alhamrawy Frontend Developer.pdf"
import { useMotionSafety } from "../../utils/motion.js";
import style from "./Hero.module.css";
import { styles } from "../../styles";
import Illustration from "../../assets/Programming(3).svg";
import MyWork from "../../assets/plennixLogo.svg";
import Hello from "../../assets/Hello.gif";
import Socialmedia from "../../components/layout/socialmedia/socialmedia.component.jsx";
import DynamicButton from "../../components/general/dynamicButton/DynamicButton.jsx";
import DeferredMount from "../../components/general/deferredMount/DeferredMount.jsx";

const Experiences = lazy(() => import("../Experiences/Experiences.jsx"));
const ContactMe = lazy(() => import("../Contact/Contact.jsx"));
const Skills = lazy(() => import("../Skills/Skills.jsx"));
const ChromaGrid = lazy(() => import("../Certifications/Certifications.jsx"));
const MagicBento = lazy(() => import("../../components/general/MagicBento/MagicBento.jsx"));

const Home = () => {
  const { isCompactViewport, shouldReduceMotion } = useMotionSafety();

  const scrollToContact = () => {
    const section = document.getElementById('Contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section className={`sm:px-16 px-6 sm:py-16 py-10 ${style.heroSection}`} id="home" aria-labelledby="hero-title">
        <Grid container      spacing={2} className={style.heroContaner}>
          <Grid item xs={12} md={6} className={style.heroText}>
            <div className={style.fadeInUp}>
            <img src={Hello} alt="" aria-hidden="true" width="20px" />
              <p>Hello, I'm</p>
            </div>
            <div className={`${style.fadeInUp} ${style.delay200}`}>
              <h1 id="hero-title" className={styles.sectionHeadText}>Esraa Hamrawy</h1>
            </div>
            <div className={`${style.fadeInUp} ${style.delay400}`}>
              <p className="text-xl font-semibold">Frontend Developer</p>
              
            </div>
            <div className={`${style.fadeInUp} ${style.delay600}`}>
              <p className={style.smallResume}>
                I’m a frontend developer with <span className={style.colorText}>3 years of experience</span> building
                responsive, accessible interfaces with React and JavaScript. I value clean design, practical
                solutions, and strong collaboration across teams.
                <span className={style.currentWork}>
                Currently, I’m a frontend developer at{" "}
                <a href="https://www.plennix.com/" aria-label="Plennix website">
                  <img src={MyWork} className={style.MyWorklogo} alt="Plennix logo" />
                </a>
              </span>
              </p>
              
            </div>
            <div className={`${style.fadeInUp} ${style.delay900}`}>
              <div className={style.socialMedia}>
              <Socialmedia />
              </div>
            </div>
            <div className={`${style.fadeInUp} ${style.delay800} ${style.heroActions}`} >
            <DynamicButton text="Contact Me" onClick={scrollToContact} />
            <DynamicButton href={cv} text="View Resume" active={true} target="_blank" rel="noreferrer" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={style.heroImage}>
            <div className={`${style.fadeInRight} ${style.delay900}`}>
            <img src={Illustration} alt="Frontend developer illustration" />
            </div>
          </Grid>
        </Grid>
      </section>
      <section id="experiences">
        <DeferredMount>
          <Suspense fallback={null}>
            <Experiences />
          </Suspense>
        </DeferredMount>
      </section>

      <section className={`${style.container} ${style.fadeInUp} ${style.delay1000}` } id="skills" aria-labelledby="skills-heading">
          <p className={`${styles.sectionSubText} text-center`}>Core skills</p>
          <h2 id="skills-heading" className={`${styles.sectionHeadText} text-center`}>Skills</h2>
            <div className={`${style.skilscontainer} ${style.delay1000}`}>
            <p className={style.smallResume}>
            These are the <span className={style.colorText}>tools I use to turn ideas into</span> polished, responsive interfaces. <span className={style.colorText}>They help me build</span> products that feel clear, fast, and easy to use.
                  </p>
            </div>
            <DeferredMount>
              <Suspense fallback={null}>
                <Skills />
              </Suspense>
            </DeferredMount>
      </section>

    <section className={`${style.container} ${style.fadeInUp} ${style.delay1000}` } id="Certifications" aria-labelledby="certifications-heading">
      <p className={`${styles.sectionSubText} text-center`}>Selected</p>
      <h2 id="certifications-heading" className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
        <div className={`${style.skilscontainer} ${style.delay1000}`}>
        </div>
      <DeferredMount>
        <Suspense fallback={null}>
          <ChromaGrid />
        </Suspense>
      </DeferredMount>
      </section>

       <section className={`${style.container} ${style.fadeInUp} ${style.delay1000}`} id={"projects"} aria-labelledby="projects-heading">
      
      <div className={`${style.fadeInUp} ${style.delay400}`}>
      <p className={`${styles.sectionSubText}  text-center`}>Selected case studies</p>
      <h2 id="projects-heading" className={`${styles.sectionHeadText}  text-center`}>Case Studies</h2>
      </div>
      <DeferredMount>
        <Suspense fallback={null}>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            disableAnimations={shouldReduceMotion}
            spotlightRadius={isCompactViewport ? 180 : 300}
            particleCount={isCompactViewport ? 6 : 12}
            glowColor="132, 0, 255"
          />
        </Suspense>
      </DeferredMount>
      </section>

    



    <section className="sm:px-16 px-6 sm:py-16 py-10"   id="Contact" aria-labelledby="contact-heading" >
       <DeferredMount>
         <Suspense fallback={null}>
           <ContactMe />
         </Suspense>
       </DeferredMount>
    </section>


 


    </>
  );
};

export default Home;







