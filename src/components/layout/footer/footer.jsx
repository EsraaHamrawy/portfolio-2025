import React from 'react'
import styles from "./footer.module.css";
import Socialmedia from "../socialmedia/socialmedia.component.jsx";
function Footer() {
  return (
    <footer className={styles.Footer}>
      <Socialmedia />
    </footer>
  )
}

export default Footer
