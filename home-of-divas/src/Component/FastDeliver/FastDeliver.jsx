'use client'
import styles from './FastDeliver.module.css';
import Image from 'next/image';
import React from 'react';

const FastDeliver = () => {
  return (
    <div className={styles.fast_deliver}>
      <div className={styles.three_col}>
        <div className={styles.img_Com}>
          <Image src='/logo_big.png' alt="Gourmet cuisine" fill />
        </div>
        <h3>Gourmet cuisine</h3>
        <p>Praesentium dolores officia, voluptate nostrum ex magni quis ea ipsa voluptas itaque adipisci illum? Culpa mollitia ea dolores laborum! Expedita, laboriosam cupiditate!</p>
      </div>
      <div className={styles.three_col}>
        <div className={styles.img_Com}>
          <Image src='/delivery_rider.png' alt="Rapid delivery" width={90} height={90} />
        </div>
        <h3>Rapid delivery</h3>
        <p>Praesentium dolores officia, voluptate nostrum ex magni quis ea ipsa voluptas itaque adipisci illum? Culpa mollitia ea dolores laborum! Expedita, laboriosam cupiditate!</p>
      </div>
      <div className={styles.three_col}>
        <div className={styles.img_Com}>
          <Image src='/Book.png' alt="Tasty recipes" width={90} height={90} />
        </div>
        <h3>Tasty recipes</h3>
        <p>Praesentium dolores officia, voluptate nostrum ex magni quis ea ipsa voluptas itaque adipisci illum? Culpa mollitia ea dolores laborum! Expedita, laboriosam cupiditate!</p>
      </div>
    </div>
  );
}

export default FastDeliver;
