'use client';

import React from 'react';
import styles from './MyOrder.module.css';

const MyOrder = () => {
  return (
    <div className={styles.myOrder}>
      <div className={styles.header}>
        <div className={styles.image}>Image</div>
        <div className={styles.name}>Name</div>
        <div className={styles.name}>Payment Details</div>
        <div className={styles.remove}>Delivery method</div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src='' alt="" />
        </div>
        <div className={styles.name}>
          <div>order.name</div>
          <div>Quantity: order.quantity</div>
        </div>
        <div className={styles.name}>Items total: #50,000</div>
        <div className={styles.remove}>Door delivery</div>
      </div>
    </div>
  );
}

export default MyOrder;
