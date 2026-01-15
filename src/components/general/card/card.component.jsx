import React from 'react'
import Paper from '@mui/material/Paper'
import styles from "./card.module.css"
const Card = ({children}) => {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  )
}

export default Card

