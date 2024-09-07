"use client"; // This directive tells Next.js to render this component on the client side

import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import styles from './CartComponent.module.css'; // Make sure the module name matches (singular "module")

import { useGlobalContext } from '../Context'; // Adjust this path if necessary

const CartComponent = () => {
  const { allProduct, cartItems, removeFromCart, addToCart, getTotalValue } = useGlobalContext();
  
  return (
    <div className={styles.Cart}> {/* Use the imported styles */}
      <div className={styles.cartHead}>
        <h1 className={styles.product}>Product</h1>
        <h1 className={styles.headTitle}>Price</h1>
        <h1 className={styles.headTitle}>Quantity</h1>
        <h1 className={styles.headTitle}>Total</h1>
      </div>
      {allProduct.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className={`${styles.cartHead} ${styles.cartItems}`} key={item._id}>
              <p className={styles.product}>{item.name}</p>
              <p className={styles.headTitle}>#{item.new_price}</p>
              <div className={`${styles.headTitle} ${styles.quantityCon}`}>
                <h3 className={styles.quantity}>{cartItems[item.id]}</h3>
                <div className={styles.plusMinus}>
                  <p onClick={() => addToCart(item.id)}>+</p>
                  <p onClick={() => removeFromCart(item.id)}>-</p>
                </div>
              </div>
              <p className={styles.headTitle}>#{item.new_price * cartItems[item.id]}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className={`${styles.cartHead} ${styles.cartItems}`}>
        <p className={styles.product}></p>
        <p className={styles.headTitle}></p>
        <div className={`${styles.headTitle} ${styles.quantityCon}`}>
          <h3 className={styles.plusMinus}>
            Sub Total
          </h3>
        </div>
        <h3 className={styles.headTitle}>TOTALVALUE</h3> {/* Assuming getTotalValue calculates total */}
      </div>
      <div className={styles.checkOutBtnCon}>
        <Link href="/order" className={styles.checkOutBtn}>Check Out</Link>
      </div>
    </div>
  );
};

export default CartComponent;
