'use client';

import React, { useState } from 'react';
import styles from './ProductList.module.css'; // Converted CSS to module
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const ProductList = () => {
  const [allFood, setAllFood] = useState([]);

  return (
    <div className={styles.list_Item}>
      <h2>All Food List</h2>
      <div className={styles.header}>
        <div className={styles.image}>Image</div>
        <div className={styles.name}>Name</div>
        <div className={styles.category}>Category</div>
        <div className={styles.price}>Price</div>
        <div className={styles.remove}>Remove</div>
      </div>
              <div className={styles.content}>
                <div className={styles.img_Con}>
                  <Image
                    src='/p1_product_i1.png'
                    alt=''
                    fill
                  />
                </div>
                <div className={styles.name}>food name</div>
                <div className={styles.category}>food category</div>
                <div className={styles.price}>food price</div>
                <div
                  className={styles.remove}
                >
                  X
                </div>
              </div>
    </div>
  );
};

export default ProductList;
