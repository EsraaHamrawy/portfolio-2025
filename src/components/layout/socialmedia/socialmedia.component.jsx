import React from 'react'
import styles from "./socialmedia.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Socialmedia = () => {
  return (
    <div  className={styles.socialLinkContainer}>
    
      <a
        href="https://www.linkedin.com/in/esraa-hamrawy"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <LinkedInIcon />
      </a>
      
      <a
        href="https://github.com/EsraaHamrawy"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <GitHubIcon />
      </a>
     
      
      <a
        href="mailto:esraa889675@gmail.com?subject=Hello%20Esraa&body=I%20saw%20your%20portfolio..."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <EmailIcon />
      </a>
     
    </div>
  )
}

export default Socialmedia
