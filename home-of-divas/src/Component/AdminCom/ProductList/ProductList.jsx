'use client';

import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css'; // Converted CSS to module
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import { useGlobalContext } from '@/Component/Context';
import axios from 'axios';

const ProductList = () => {
  const { allProduct, fetchProducts, loading } = useGlobalContext();

  const removeProduct = async (id) => {
    try {
      const response = await axios.post('api/products/removeProduct', { id });
      if (response.data.success) {
        fetchProducts();
        toast.success("Product removed successfully");
      }
    } catch (error) {
      console.log("ERROR:", error);
      toast.error("Failed to remove product");
    }
  }

  return (
    <div className={styles.list_Item}>
      <ToastContainer style={{ width: '80%' }} />
      <h2>All Product List</h2>
      <div className={styles.header}>
        <div className={styles.image}>Image</div>
        <div className={styles.name}>Name</div>
        <div className={styles.category}>Category</div>
        <div className={styles.price}>Price</div>
        <div className={styles.remove}>Remove</div>
      </div>
      {
        loading ? <div className={styles.loading}><p>Loading.....</p></div>
          : <div>
            {
              allProduct && allProduct.map((product) => {
                return <div className={styles.content}>
                  <div className={styles.img_Con}>
                    <Image
                      src={`/uploads/${product.image}`}
                      alt=''
                      fill
                    />
                  </div>
                  <div className={styles.name}>{product.name}</div>
                  <div className={styles.category}>{product.category}</div>
                  <div className={styles.price}>#{product.price}</div>
                  <div className={styles.remove} onClick={() => removeProduct(product._id)}>
                    X
                  </div>
                </div>
              })
            }
          </div>
      }
    </div>
  );
};

export default ProductList;
