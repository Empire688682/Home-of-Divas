import React from 'react';
import styles from './shop.module.css'
import ShopHero from '@/Component/ShopHero/ShopHero';
import ShopProduct from '@/Component/ShopProduct/ShopProduct';

const page = () => {
  return (
    <div className={styles.shop}>
      <ShopHero/>
      <ShopProduct/>
    </div>
  )
}

export default page
