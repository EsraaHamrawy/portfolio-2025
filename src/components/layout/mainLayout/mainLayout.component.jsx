import { Outlet } from "react-router-dom";

import styles from "./mainLayout.module.css";
import ModuleContentWedget from "../moduleContentWedget/moduleContentWedget.component";
import LiquidEther from "../../../components/general/LiquidEther/LiquidEther.jsx";
import BackToTopButton from "../../../components/general/backToTopButton/BackToTopButton.jsx";
import Header from "../../layout/Header.jsx";

const MainLayout = () => {
  return (
    <div className={`${styles.pageWrapper} h-100 position-relative`}>
      <main className={`${styles.main}`}>
        <div style={{ width: '100%',      height: '98vh', position: 'relative' }} id="allmain">
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
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
