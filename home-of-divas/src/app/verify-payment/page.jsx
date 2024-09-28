"use client"
import React from 'react';
import styles from './verify.module.css';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon for the success symbol

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaCheckCircle className={styles.success_icon} />
        <h1 className={styles.title}>Order Verified!</h1>
        <p className={styles.message}>Your order has been successfully verified. Thank you for shopping with us!</p>
        <button className={styles.button} onClick={() => window.location.href = '/'}>Back to Home</button>
      </div>
    </div>
  );
};

export default Page;
