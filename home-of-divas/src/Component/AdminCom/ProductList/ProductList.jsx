'use client';

import React, { useState } from 'react';
import styles from './ProductList.module.css'; // Converted CSS to module
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useGlobalContext } from '@/Component/Context';

const ProductList = () => {
  const { allProduct, loading } = useGlobalContext();

  const removeProduct = async (id) =>{
    try {
      const comfirm = window.confirm("Are you sure you?");
      if(comfirm){
        const response = await axios.post('api/products/removeProduct', {id});
      if(response.data.message){
        setSuccess(response.data.message);
      }
      }
      else return null
    } catch (error) {
      console.log("ERROR:", error)
    }
  }

  return (
    <div className={styles.list_Item}>
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
                  <div className={styles.remove} onClick={()=>removeProduct(product._d)}>
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
