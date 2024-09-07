'use client'
import React, { useState } from 'react';
import styles from './ShopProduct.module.css';
import Image from 'next/image';
import all_product from '../../../public/all_product';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from '../Context';

const ShopProduct = () => {
    const [category, setCategory] = useState("All");
    const { addToCart, removeFromCart, itemAdded, cartItems } = useGlobalContext();
    return (
        <div className={styles.shop_product}>
            <div className={styles.shop_header}>
                <h2>Popular on Divas</h2>
                <div className={styles.shop_menus}>
                    <li className={`${category === "All" ? styles.active : ""}`} onClick={() => setCategory("All")}>All <b>/</b> </li>
                    <li className={`${category === "Women" ? styles.active : ""}`} onClick={() => setCategory((prev) => prev !== "Women" ? "Women" : "All")}>Women <b>/</b> </li>
                    <li className={`${category === "Men" ? styles.active : ""}`} onClick={() => setCategory((prev) => prev !== "Men" ? "Men" : "All")}>Men <b>/</b> </li>
                    <li className={`${category === "Kids" ? styles.active : ""}`} onClick={() => setCategory((prev) => prev !== "Kids" ? "Kids" : "All")}>Kids <b>/</b></li>
                    <li className={`${category === "Materials" ? styles.active : ""}`} onClick={() => setCategory((prev) => prev !== "Materials" ? "Materials" : "All")}>Materials</li>
                </div>
            </div>
            <div className={styles.shop_items}>
                {
                    all_product.map((item) => {
                        if (category === "All" || item.category === category) {
                            return <div key={item.id} className={styles.shop_cart}>
                                <div className={styles.img_com}>
                                    <Image src={item.image} alt="" fill />
                                </div>
                                <div className={styles.item_text}>
                                    <div className={styles.item_name}>
                                        {item.name}
                                    </div>
                                    <div className={styles.item_price}>
                                        <div className={styles.item_stars}>
                                            <FaStar className={styles.star} />
                                            <FaStar className={styles.star} />
                                            <FaStar className={styles.star} />
                                            <FaStar className={styles.star} />
                                            <FaStar className={styles.star} />
                                        </div>
                                        <p>#{item.new_price}</p>
                                    </div>
                                </div>
                                <div className={styles.cart_fav_Con}>
                                    <div className={styles.fav}>
                                        <FaHeart />
                                    </div>
                                    {
                                        cartItems[item.id] > 0 ? <div className={styles.items_toggle_Con}>
                                            <p className={styles.add_icon} onClick={() => addToCart(item.id)}>+</p>
                                            <p>{cartItems[item.id]}</p>
                                            <p className={styles.remove_icon} onClick={() => removeFromCart(item.id)}>-</p>
                                        </div>
                                        :
                                        <div onClick={() => addToCart(item.id)} className={styles.cart}>
                                        <FiShoppingCart />
                                    </div>
                                    }
                                </div>
                            </div>
                        }
                    })
                }
            </div>
            {
                itemAdded === "true" ? <div className={styles.item_add_message}>
                    <p>Added To Cart Successfully!!</p>
                </div>:null
            }
            {
                itemAdded ==="false" ? <div className={styles.item_remove_message}>
                    <p>Removed From Cart Successfully!!</p>
                </div>:null
            }
        </div>
    )
}

export default ShopProduct
