import React from 'react';
import styles from './shop.module.css'
import ShopHero from '@/Component/ShopHero/ShopHero';
import ShopProduct from '@/Component/ShopProduct/ShopProduct';
import FastDeliver from '@/Component/FastDeliver/FastDeliver';

const page = () => {
  return (
    <div className={styles.shop}>
      <ShopHero/>
      <ShopProduct/>
      <FastDeliver/>
    </div>
  )
}

export default page
