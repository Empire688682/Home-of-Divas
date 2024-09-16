"use client"; 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CartComponent.module.css';
import Image from 'next/image';

import { useGlobalContext } from '../Context'; 

const CartComponent = () => {
  const { allProduct, cartItems, removeFromCart, addToCart, inCart, getTotalValue } = useGlobalContext();
  const [availableItems, setAvailableItems] = useState(0);

const handleAvailableItems = () => {
    let itemCount = 0;
    allProduct.forEach((item)=>{
        if(cartItems[item._id] > 0){
            itemCount += 1
        }
        return itemCount
    })
  setAvailableItems(itemCount);
};

useEffect(() => {
  handleAvailableItems();
}, [allProduct, cartItems]);
 
  return (
    <div className={styles.Cart}>
        <h1>Shopping Cart ({availableItems} item) </h1>
      {
        inCart? <div className={styles.cartHead}>
        <h2 className={styles.product}>Product</h2>
        <h2 className={styles.headTitle}>Price</h2>
        <h2 className={styles.headTitle}>Quantity</h2>
        <h2 className={styles.headTitle}>Total</h2>
      </div>:<p>Nothing in Cart</p>
      }
      {allProduct.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div className={` ${styles.cartItems}`} key={item._id}>
              <div className={styles.product}>
              <div className={styles.img_Con}>
                <Image src={`/uploads/${item.image}`} alt='' fill/>
              </div>
              <p>{item.name}</p>
              </div>
              <div className={styles.headTitle}>
                #{item.price}
                </div>
              <div className={`${styles.headTitle} ${styles.quantityCon}`}>
                <h3 className={styles.quantity}>{cartItems[item._id]}</h3>
                <div className={styles.plusMinus}>
                  <p onClick={() => addToCart(item._id)}>+</p>
                  <p onClick={() => removeFromCart(item._id)}>-</p>
                </div>
              </div>
              <p className={styles.headTitle}>
                #{item.price * cartItems[item._id]}
                </p>
            </div>
          );
        } else {
          return null;
        }
      })}
     {
        inCart?  <p className={styles.deliveryNote} >Delivery fee not included yet</p>:null
     }
     {
        inCart?  <div className={`${styles.cartHead}`}>
        <p className={styles.product}></p>
        <p className={styles.headTitle}></p>
        <div className={`${styles.subTotal} ${styles.quantityCon}`}>
          <h3 className={styles.plusMinus}>
            Sub Total:
          </h3>
        </div>
        <h3 className={styles.total}># {getTotalValue()}</h3>
      </div>:null
     }
      {
        inCart? <div className={styles.checkOutBtnCon}>
        <Link href="/shop" className={styles.backToShopBtn}>COUNTINUE SHOPPING</Link> 
        <Link href="/order" className={styles.checkOutBtn}>PROCEED TO CHECKOUT</Link> 
      </div>:null
      }
    </div>
  );
};

export default CartComponent;
