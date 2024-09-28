"use client"
import React from 'react';
import styles from './failure.module.css';
import { FaTimesCircle } from 'react-icons/fa'; // Importing an icon for the failure symbol

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaTimesCircle className={styles.failure_icon} />
        <h1 className={styles.title}>Order Failed!</h1>
        <p className={styles.message}>Something went wrong while verifying your order. Please try again or contact support.</p>
        <button className={styles.button} onClick={() => window.location.href = '/'}>Back to Home</button>
      </div>
    </div>
  );
};

export default Page;
