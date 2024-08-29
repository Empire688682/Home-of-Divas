import React from 'react';
import styles from './AboutHero.module.css';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className={styles.about_hero}>
      <div className={styles.text_col}>
        <h2>About Us</h2>
      </div>
      <div className={styles.img_col}>
        <div className={styles.img_com}>
            <Image src="/h1_hero1.png" alt="" fill />
        </div>
      </div>
    </div>
  )
}

export default AboutHero
