import React from 'react';
import styles from './ServiceHero.module.css';
import Image from 'next/image';

const Service = () => {
  return (
    <div className={styles.service_hero}>
      <div className={styles.text_col}>
        <h2>Our service</h2>
      </div>
      <div className={styles.img_col}>
        <div className={styles.img_com}>
            <Image src="/h1_hero1.png" alt="" fill />
        </div>
      </div>
    </div>
  )
}

export default Service
