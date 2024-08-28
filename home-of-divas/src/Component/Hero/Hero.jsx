import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text_col}>
        <h2>We make cloths that suit you</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus tenetur dolorem, repudiandae, odit similique vel eius quod voluptatem non, officiis rerum perferendis. Harum inventore fugiat culpa provident odit voluptatibus.</p>
        <button className={styles.btn}>OUR SERVICE</button>
      </div>
      <div className={styles.img_col}>
        <div className={styles.img_com}>
            <Image src="/h1_hero1.png" alt="" fill />
        </div>
      </div>
    </div>
  )
}

export default Hero
