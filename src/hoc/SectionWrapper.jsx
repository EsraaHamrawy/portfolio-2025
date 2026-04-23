import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer, useMotionSafety } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const { shouldReduceMotion, shouldToneDownMotion } = useMotionSafety();
    const Section = shouldReduceMotion ? "section" : motion.section;
    const sectionProps = shouldReduceMotion
      ? {}
      : {
          variants: staggerContainer(undefined, undefined, shouldToneDownMotion),
          initial: 'hidden',
          whileInView: 'show',
          viewport: { once: true, amount: 0.25 },
        };

    return (
      <Section
        {...sectionProps}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </Section>
    );
  };

export default StarWrapper;
