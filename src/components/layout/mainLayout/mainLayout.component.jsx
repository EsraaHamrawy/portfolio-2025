import { Outlet, useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";

import styles from "./mainLayout.module.css";
import SideBar from "../sideBar/sideBar.component";
import Navbar from "../navbar/navbar.component";
import ModuleContentWedget from "../moduleContentWedget/moduleContentWedget.component";
import LiquidEther from "../../../components/general/LiquidEther/LiquidEther.jsx";
import Header from "../../layout/Header.jsx";

const MainLayout = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const sidebarData = [
   
    {
    
      
        text: "home",
        to: "/home",
        icon: <HomeIcon />,
        pageTitle: "home Title",
    
    
    },
    {
      text: "Demo 1",
      to: "/PageDemoOne",
      icon: <FiberManualRecordIcon />,
      pageTitle: "Demo 1 Title",
    },
    {
      text: "Demo 2",
      to: "/PageDemoTow",
      icon: <FiberManualRecordIcon />,
      pageTitle: "Demo 2 Title",
    },
    {
      parentText: "Page Demo",
      childLinks: [
        {
          text: "Demo 1",
          to: "/PageDemoOne",
          icon: <FiberManualRecordIcon />,
          pageTitle: "Demo 1 Title",
        },
        {
          text: "Demo 2",
          to: "/PageDemoTow",
          icon: <FiberManualRecordIcon />,
          pageTitle: "Demo 2 Title",
        },
      ],
    },
  
  ];

  const matchDynamicRouteAndGetPageTitle = (path) => {
    if (path.startsWith("/purchase/requestDetails/")) {
      return "request details";
    }
    return "";
  };

  useEffect(() => {
    const initialPageTitle =
      sidebarData
        .flatMap((item) => (item.childLinks ? item.childLinks : [item]))
        .find((link) => link.to === location.pathname)?.pageTitle ||
      matchDynamicRouteAndGetPageTitle(location.pathname);
    setPageTitle(initialPageTitle);
  }, [location.pathname, sidebarData]);

  return (
  
    
    <div className={`${styles.pageWrapper} h-100 position-relative`}>
      {/* <aside className={`${styles.aside}`}>
        <SideBar
          moduleTitle="Esraa Al-Hamrawy"
          moduleSubTitle="FrontEnd Devloper"
          moduleLogo="/images/purchaseModuleLogo.svg"
          sidebarData={sidebarData}
        />
      </aside> */}

      <main className={`${styles.main}`}>
    
        {/* <Navbar navbarTitle={pageTitle}  sidebarData={sidebarData} /> */}
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
       
      </main>
      
    </div>
    
 
  );
};

export default MainLayout;
