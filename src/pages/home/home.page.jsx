import { Grid } from "@mui/material";
import { motion } from "framer-motion";


import Experiences from "../Experiences/Experiences.jsx"
import ContactMe from "../Contact/Contact.jsx";
import Skills from "../Skills/Skills.jsx";
import ChromaGrid from "../Certifications/Certifications.jsx"
import cv  from "../../assets/Esraa Alhamrawy Frontend Developer.pdf"
import { slideIn } from "../../utils/motion.js";
import style from "./Hero.module.css";
import { styles } from "../../styles";
import Illustration from "../../assets/Programming(3).svg";
import Skils from "../../assets/Skills .svg";
import MyWork from "../../assets/plennixLogo.svg";
import Hello from "../../assets/Hello.gif";
import Socialmedia from "../../components/layout/socialmedia/socialmedia.component.jsx";
import Card from "../../components/layout/socialmedia/newSocial.jsx";
import MagicBento from "../../components/general/MagicBento/MagicBento.jsx";
import Plasma from "../../components/general/Plasma/Plasma.jsx";
import DynamicButton from "../../components/general/dynamicButton/DynamicButton.jsx";
import Html from "../../assets/icons8-html-5-48.png";
import Css from "../../assets/icons8-css-48.png";
import Js from "../../assets/icons8-js-48.png";
import React from "../../assets/icons8-react-48.png";
import bootstrap from "../../assets/icons8-bootstrap-48.png";
import Redux from "../../assets/icons8-redux-50.png";
import github from "../../assets/icons8-github-logo-48.png";
// import material from "../../assets/icons8-material-ui.svg";
import {textVariant} from "../../utils/motion.js"
const Home = () => {
  const scrollToContact = () => {
    const section = document.getElementById('Contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
 
      {/* ✅ HERO SECTION */}

  <section className={" sm:px-16 px-6 sm:py-16 py-10"} id="home" >
        <Grid container      spacing={2} className={style.heroContaner}>
          {/* Left Side: Text */}
          <Grid item xs={12} md={6} className={style.heroText}>
            <div className={style.fadeInUp}>
            <img src={Hello} alt="Hello" width="20px" />
              <p>
             Hello  , I'm
              </p>
            </div>
            <div className={`${style.fadeInUp} ${style.delay200}`}>
              <h3 className={styles.sectionHeadText}>Esraa Hamrawy</h3>
              {/* <h2>Esraa Hamrawy</h2> */}
            </div>
            <div className={`${style.fadeInUp} ${style.delay400}`}>
              <h3>Frontend Developer</h3>
             
            </div>
            <div className={`${style.fadeInUp} ${style.delay600}`}>
              <p className={style.smallResume}>
                I’m a self-taught Front-End Developer with <span className={style.colorText}>3 years of experience</span> specializing in
                ReactJS and JavaScript. I create responsive, accessible, and user-friendly websites that
                combine functionality with clean design. I enjoy learning new technologies and work well in
                team environments, contributing ideas and collaborating to deliver great results.
                <span className={style.currentWork}>
                Currently, I'm a Frontend Developer at{" "}
                <a href="https://www.plennix.com/">
                  <img src={MyWork} className={style.MyWorklogo} alt="MyWork" />
                </a>
              </span>
              </p>
              
            </div>
            <div className={`${style.fadeInUp} ${style.delay900}`}>
              <div className={style.socialMedia}>
              <Socialmedia />
              </div>
            </div>
            <div className={`${style.fadeInUp} ${style.delay800}`} >
            <DynamicButton  text="Contact"  onClick={scrollToContact} /> 
            <DynamicButton to={cv} text="resume"  active={true}  />
            </div>
          </Grid>
          {/* Right Side: Image */}
          <Grid item xs={12} md={6} className={style.heroImage}>
            <div className={`${style.fadeInRight} ${style.delay900}`}>
              <img src={Illustration} alt="Illustration" />
            </div>
          </Grid>
        </Grid>
      </section>
{/* ✅ Experiences Me SECTION */}
  <section  id="experiences" >
      <Experiences />
   </section> 

     
      {/* ✅ SKILLS SECTION */}
      <section className={`${style.container} ${style.fadeInUp} ${style.delay1000}` } id="skills" >
          <p className={`${styles.sectionSubText} text-center`}>Technical</p>
          <h3 className={`${styles.sectionHeadText} text-center`}>SKILLS.</h3>
            <div className={`${style.skilscontainer} ${style.delay1000}`}>
            <p className={style.smallResume}>
            These are the <span className={style.colorText}>tools I use every day to turn ideas into</span> smooth, accessible, and visually clean interfaces. <span className={style.colorText}>They help me build</span> responsive, interactive experiences that feel simple, fast, and enjoyable to use.           
                  </p>
              {/* <img src={Skils} alt="Skils" /> */}
            </div>
            <Skills />
      </section>

   {/* ✅ Certifications SECTION */}
   <section className={`${style.container} ${style.fadeInUp} ${style.delay1000}` } id="Certifications" >
      <p className={`${styles.sectionSubText} text-center`}>My </p>
      <h3 className={`${styles.sectionHeadText} text-center`}>Certifications.</h3>
        <div className={`${style.skilscontainer} ${style.delay1000}`}>
        </div>
      <ChromaGrid />
      </section>

       {/* ✅ PROJECTS SECTION */}
       <section className={`${style.container} ${style.fadeInUp} ${style.delay1000}`} id={"projects"}>
     
      <div className={`${style.fadeInUp} ${style.delay400}`}>
      <p className={`${styles.sectionSubText}  text-center`}>My work</p>
      <h2 className={`${styles.sectionHeadText}  text-center`}>Projects.</h2>
      </div>
      <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      </section>

    



     {/* ✅ Contact Me SECTION */}
     <section className="sm:px-16 px-6 sm:py-16 py-10"   id="Contact" >
   

      {/* <div className={`${style.fadeInUp} ${style.delay400}`}>
        <h2 className={`${style.Textcolor} font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center  text-cente`}>Contact Me</h2>
      </div> */}
    
      <ContactMe />
      </section>


 


    </>
  );
};

export default Home;







