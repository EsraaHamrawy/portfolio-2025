/* eslint-disable react/prop-types */ 
import styles from "./moduleContentWedget.module.css";
import Footer from "../footer/footer";
const ModuleContentWedget = ({ children }) => {
  return (
    
    <div className="container mx-auto">
   <div className={styles.wedget} id="main-content-wedget">
    
      {children}
     <Footer />
        </div>
    </div>
 
  );
};
export default ModuleContentWedget;
