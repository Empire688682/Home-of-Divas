import React from 'react'
import styles from './HomePageBanner.module.css'

const HomePageBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colum}>
        <h1>2536</h1>
        <p>Projects Completed</p>
      </div>
      <div className={styles.colum}>
        <h1>2536</h1>
        <p>Happy Clients</p>
      </div>
      <div className={styles.colum}>
        <h1>2536</h1>
        <p>Cups of Coffee</p>
      </div>
      <div className={styles.colum}>
        <h1>2536</h1>
        <p>Real Professionals</p>
      </div>
    </div>
  )
}

export default HomePageBanner
