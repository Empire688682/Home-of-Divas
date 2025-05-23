import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text_col}>
        <div className={styles.gif_com}>
          <Image src="/zipper.gif" alt="" fill />
        </div>
        <h2>We make cloths that suit you</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus tenetur dolorem, repudiandae, odit similique vel eius quod voluptatem non, officiis rerum perferendis. Harum inventore fugiat culpa provident odit voluptatibus.</p>
        <div className={styles.btnCon}>
          <a href="#service"> <button className={styles.btn}>OUR SERVICE</button></a>
        <Link href="/shop" className={styles.btn}>
        BUY STORE
        </Link>
        </div>
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
