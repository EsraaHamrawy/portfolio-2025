import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc/";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "#1d1836",
        color: "#fff",
        // background:"rgba(132, 60, 188, 0.15)" ,
        background:"rgba(132, 60, 188, 0.15)" ,
        boxShadow: "0 0px 3px rgba(255, 255, 255, 0.15), 0px 0px 3px rgba(138, 43, 226, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #b468fc6e" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className=' text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-white/60   text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='text-white/60  mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
  typeof point === "string" ? (
    <li key={index}>{point}</li>
  ) : (
    <li key={index}>
      {point.label}{" "}
      <a 
        href={point.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-accent underline"
      >
        {point.url}
      </a>
    </li>
  )
))}
        {/* {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))} */}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        <p className={`${styles.sectionSubText}  text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      {/* </motion.div> */}

      <div className='mt-5 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
