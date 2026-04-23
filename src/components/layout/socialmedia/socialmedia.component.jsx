import React from 'react'
import styles from "./socialmedia.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Socialmedia = () => {
  return (
    <nav aria-label="Social media links">
      <div  className={styles.socialLinkContainer}>
      
      <a
        href="https://www.linkedin.com/in/esraa-hamrawy"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon aria-hidden="true" focusable="false" />
      </a>
      
      <a
        href="https://github.com/EsraaHamrawy"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="GitHub profile"
      >
        <GitHubIcon aria-hidden="true" focusable="false" />
      </a>
     
      
      <a
        href="mailto:esraa889675@gmail.com?subject=Hello%20Esraa&body=I%20saw%20your%20portfolio..."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Send an email"
      >
        <EmailIcon aria-hidden="true" focusable="false" />
      </a>
      
      </div>
    </nav>
  )
}

export default Socialmedia
