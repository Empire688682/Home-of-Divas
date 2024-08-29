import React from 'react';
import styles from './ContactHero.module.css';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <div className={styles.contact_hero}>
      <div className={styles.text_col}>
        <h2>Contact Us</h2>
      </div>
      <div className={styles.img_col}>
        <div className={styles.img_com}>
            <Image src="/h1_hero1.png" alt="" fill />
        </div>
      </div>
    </div>
  )
}

export default ContactHero
