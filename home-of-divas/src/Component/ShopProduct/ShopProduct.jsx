'use client'
import React, { useState } from 'react';
import styles from './ShopProduct.module.css';
import Image from 'next/image';
import all_product from '../../../public/all_product';

const ShopProduct = () => {
    const [category, setCategory] = useState("All");
  return (
    <div className={styles.shop_product}>
      <div className={styles.shop_header}>
        <h2>Popular on Divas</h2>
        <div className={styles.shop_menus}>
          <li className={`${category === "All"?styles.active:""}`} onClick={()=>setCategory("All")}>All <b>/</b> </li>
          <li className={`${category === "Women"?styles.active:""}`}  onClick={()=>setCategory((prev)=> prev !== "Women"? "Women":"All")}>Women <b>/</b> </li>
          <li className={`${category === "Men"?styles.active:""}`}  onClick={()=>setCategory((prev)=> prev !== "Men"? "Men":"All")}>Men <b>/</b> </li>
          <li className={`${category === "Kids"?styles.active:""}`}  onClick={()=>setCategory((prev)=> prev !== "Kids"? "Kids":"All")}>Kids <b>/</b></li>
          <li className={`${category === "Materials"?styles.active:""}`}  onClick={()=>setCategory((prev)=> prev !== "Materials"? "Materials":"All")}>Materials</li>
        </div>
      </div>
      {
        all_product.map((item)=>{
            if(category === "All" || item.category === category){
                return <div>
                    <div>{item.name}</div>
                </div>
            }
        })
      }
    </div>
  )
}

export default ShopProduct
