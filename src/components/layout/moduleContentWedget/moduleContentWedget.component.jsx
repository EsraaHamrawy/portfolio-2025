/* eslint-disable react/prop-types */ 
import styles from "./moduleContentWedget.module.css";
import Footer from "../footer/footer";
import Card from "../../../components/layout/socialmedia/newSocial"
const ModuleContentWedget = ({ children }) => {
  return (
    
    <div className="container mx-auto">
   <div className={styles.wedget}>
    
      {children}
     <Footer />
        </div>
    </div>
 
  );
};
export default ModuleContentWedget;
