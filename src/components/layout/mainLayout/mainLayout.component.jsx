import { Outlet } from "react-router-dom";

import styles from "./mainLayout.module.css";
import ModuleContentWedget from "../moduleContentWedget/moduleContentWedget.component";
import LiquidEther from "../../../components/general/LiquidEther/LiquidEther.jsx";
import BackToTopButton from "../../../components/general/backToTopButton/BackToTopButton.jsx";
import Header from "../../layout/Header.jsx";
import { useMotionSafety } from "../../../utils/motion.js";

const MainLayout = () => {
  const { isCompactViewport, shouldReduceMotion } = useMotionSafety();
  const motionAwareProps = {
    mouseForce: shouldReduceMotion ? 0 : isCompactViewport ? 12 : 20,
    cursorSize: shouldReduceMotion ? 72 : isCompactViewport ? 84 : 100,
    isViscous: false,
    viscous: 30,
    iterationsViscous: 32,
    iterationsPoisson: 32,
    resolution: shouldReduceMotion ? 0.35 : isCompactViewport ? 0.4 : 0.5,
    isBounce: false,
    autoDemo: !shouldReduceMotion,
    autoSpeed: shouldReduceMotion ? 0.12 : isCompactViewport ? 0.32 : 0.5,
    autoIntensity: shouldReduceMotion ? 0 : isCompactViewport ? 1.4 : 2.2,
    takeoverDuration: shouldReduceMotion ? 0.12 : 0.25,
    autoResumeDelay: isCompactViewport ? 5000 : 3000,
    autoRampDuration: shouldReduceMotion ? 0.25 : 0.6,
  };

  return (
    <div className={`${styles.pageWrapper} h-100 position-relative`}>
      <main className={`${styles.main}`}>
        <div style={{ width: '100%',      height: '98vh', position: 'relative' }} id="allmain">
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        {...motionAwareProps}
        />
    </div>
    <Header />
        <div className={`${styles.mainContent}`}>
          <ModuleContentWedget>
            <Outlet />
          </ModuleContentWedget>
        </div>
        <BackToTopButton />
      </main>
    </div>
  );
};

export default MainLayout;
