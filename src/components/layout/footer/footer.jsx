import React from 'react'
import styles from "./footer.module.css";
import Socialmedia from "../socialmedia/socialmedia.component.jsx";
function Footer() {
  return (
    <div className={styles.Footer}>
    <Socialmedia />
  </div>
  )
}

export default Footer
