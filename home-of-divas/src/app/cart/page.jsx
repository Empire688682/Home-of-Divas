"use client"
import React from 'react';
import styles from './cart.module.css';
import CartComponent from '@/Component/CartComponent/CartComponent';

const page = () => {
  return (
    <div className={styles.cart}>
      <CartComponent/>
    </div>
  )
}

export default page
