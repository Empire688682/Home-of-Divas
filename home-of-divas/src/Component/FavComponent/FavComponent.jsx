'use client';
import React from 'react';
import styles from './FavComponent.module.css';
import { useGlobalContext } from '../Context';
import Image from 'next/image';
import { RxCross2 } from "react-icons/rx";

const FavComponent = () => {
    const {favItem, inFav, allProduct, addToCart, handleFav} = useGlobalContext();
    const handleBuynow =(id)=>{
      addToCart(id);
      handleFav(id)
    }

  return (
    <div className={styles.fav}>
      <h3>My Favorites</h3>
      {
        inFav ? <div className={styles.fav_Con}>
        {
          allProduct.map((product) =>{
            if(favItem[product._id]> 0){
              return <div key={product._id} className={styles.fav_cart}>
                <div className={styles.cart_head}>
                  <div className={styles.img_Con}>
                    <Image src={`/uploads/${product.image}`} alt='' fill/>
                  </div>
                  <div className={styles.cart_name_price}>
                    <p>{product.name}</p>
                    <small># {product.price}</small>
                  </div>
                </div>
                <div className={styles.cart_bottom}>
                <div className={styles.all_btn}>
                    <button onClick={()=>handleBuynow(product._id)} className={styles.buy_btn}>BUY NOW</button>
                    <button onClick={()=>handleFav(product._id)} className={styles.remove_btn}><RxCross2 className={styles.icon} /> REMOVE</button>
                  </div>
                </div>
              </div>
            }
          })
        }
      </div>:<p>Noting in Favorite</p>
      }
    </div>
  )
}

export default FavComponent
