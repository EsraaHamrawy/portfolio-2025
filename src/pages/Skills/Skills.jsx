import Marquee from "react-fast-marquee";
import "./Skills.css";

import html from "../../assets/Skills/Html5.png";
import css from "../../assets/Skills/css.png";
import js from "../../assets/Skills/Js.png";
import bootstrap from "../../assets/Skills/Bootstrap.png";
import tailwind from "../../assets/Skills/Tailwind.png";
import mui from "../../assets/Skills/Mui.png";
import react from "../../assets/Skills/React.png";
// import node from "../../assets/Skills/Node.png";
// import python from "../../assets/Skills/Python.png";
import figma from "../../assets/Skills/Figma.png";
import github from "../../assets/Skills/Github.png";

const skillImages = [
  html,
  css,
  js,
  bootstrap,
  tailwind,
  mui,
  react,
  figma,
  github,
];

const getAltText = (imagePath) => imagePath.split("/").pop().split(".")[0];

const Skills = () => {
  return (
    <div className="skills mt-3">
      {/* Title */}
      {/* <h2 className="text-2xl md:text-4xl font-bold bungee-shade-regular title">Skills</h2> */}
      {/* Marquee Section */}
      <div className="container">
        <Marquee speed={30} pauseOnHover={true} gradient={true} gradientWidth={0}>
          {skillImages.map((image, index) => (
            <div key={index} className="mx-4 image-container">
              <img src={image} alt={getAltText(image)} className="skillicon object-contain" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Reverse Marquee for Mobile */}
      {/* <div className="mt-8 block md:hidden reverse-marquee">
        <Marquee
          speed={30}
          pauseOnHover={true}
          gradient={true}
          gradientWidth={0}
          direction="right"
        >
          {images.slice().reverse().map((image, index) => (
            <div key={index} className="mx-4">
              <img src={image} alt={getAltText(image)} className="h-20 md:h-24" />
            </div>
          ))}
        </Marquee>
      </div> */}
    </div>
  );
};

export default Skills;
