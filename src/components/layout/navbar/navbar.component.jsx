import { NavLink, useLocation } from "react-router-dom";

import User from "../../general/user/user.component";
import Socialmedia from "../socialmedia/socialmedia.component.jsx";
import styles from "./navbar.module.css";
const Navbar = ({ navbarTitle,sidebarData }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    
    <div className={styles.navbar}>
      <div className={styles.pageTitle}>{navbarTitle}</div>

      <div className={styles.sideBarCont}>
        <div className={styles.sideBarLinks}>
          {sidebarData.map((item, index) => (
            <div
              key={index}
              className={item.childLinks ? "parentLinkContainer" : ""}
            >
               {!item.parentText && (
                <NavLink
                  key={index}
                  className={({ isActive }) => {
                    // ✅ Home is active when on "/" or "/home"
                    const isHomeActive =
                      (item.to === "/home" &&
                        (pathname === "/" || pathname === "/home")) ||
                      isActive;

                    return [
                      isHomeActive ? `${styles.active}` : "",
                      `${styles.link}`,
                    ].join(" ");
                  }}
                  to={item.to}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              )}

            </div>
          ))}
        </div>
        
      </div>


      <div className={styles.items}>

     

        <div>
        <Socialmedia/>
        </div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
