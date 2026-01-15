/* eslint-disable react/prop-types */ 
import styles from "./moduleContentWedget.module.css";
import Socialmedia from "../socialmedia/socialmedia.component.jsx";
import Card from "../../../components/layout/socialmedia/newSocial"
const ModuleContentWedget = ({ children }) => {
  return (
    
    <div className="container mx-auto">
   <div className={styles.wedget}>
    
      {children}
      <div className={styles.Footer}>
          <Socialmedia />
        </div>
        </div>
    </div>
 
  );
};
export default ModuleContentWedget;
