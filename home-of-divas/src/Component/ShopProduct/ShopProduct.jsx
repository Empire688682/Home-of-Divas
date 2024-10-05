'use client'
import React, { useState } from 'react';
import styles from './ShopProduct.module.css';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from '../Context';
import { useRouter } from 'next/navigation';

const ShopProduct = () => {
    const [category, setCategory] = useState("All");
    const {
        allProduct,
        addToCart,
        removeFromCart,
        itemAdded,
        cartItems,
        handleFav,
        favItem,
        favAdded,
        loading,
        token,
        allProductError
    } = useGlobalContext();
    const router = useRouter();

    const handleAddToCart = (itemId) => {
        if (!token) {
            router.push("/signup");
        }
        else {
            addToCart(itemId)
        }
    }
    const handleRemoveFromCart = (itemId) => {
        if (!token) {
            router.push("/signup");
        }
        else {
            removeFromCart(itemId)
        }
    }
    const handleAddToFav = (itemId) => {
        if (!token) {
            router.push("/signup");
        }
        else {
            handleFav(itemId);
        }
    }

    return (
        <div className={styles.shop_product} id='shop'>
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
            {
                loading ? <div className={styles.loading}><p>Loading.......</p></div>
                    :
                    <div>
                        {
                            allProductError ? <div className={styles.error_message_Con}>
                                <p>Internal Server Error, or Network Error</p>
                            </div>
                                :
                                <div className={styles.shop_items}>
                                    {
                                        allProduct.map((item) => {
                                            if (category === "All" || item.category === category) {
                                                return <div key={item._id} className={styles.shop_cart}>
                                                    <div className={styles.img_com} onClick={() => router.push(`/shop/${item._id}`)}>
                                                        <item/>
                                                        <Image className={styles.img} src={`/uploads/${item.image}`} alt="" fill />
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
                                                            <p>#{item.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cart_fav_Con}>
                                                        <div className={favItem[item._id] < 0 || !favItem[item._id] ? styles.fav : styles.fav_red} onClick={() => handleAddToFav(item._id)}>
                                                            <FaHeart />
                                                        </div>
                                                        {
                                                            cartItems[item._id] > 0 ? <div className={styles.items_toggle_Con}>
                                                                <p className={styles.add_icon} onClick={() => handleAddToCart(item._id)}>+</p>
                                                                <p>{cartItems[item._id]}</p>
                                                                <p className={styles.remove_icon} onClick={() => handleRemoveFromCart(item._id)}>-</p>
                                                            </div>
                                                                :
                                                                <div onClick={() => handleAddToCart(item._id)} className={styles.cart}>
                                                                    <FiShoppingCart />
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        })
                                    }
                                </div>
                        }
                    </div>
            }

            {
                //CART ADD DISPLAY
                itemAdded === "true" ? <div className={styles.item_add_message}>
                    <p>Added To Cart Successfully!!</p>
                </div> : null
            }
            {
                //CART REMOVE DISPLAY
                itemAdded === "false" ? <div className={styles.item_remove_message}>
                    <p>Removed From Cart Successfully!!</p>
                </div> : null
            }
            {
                //FAV ADD DISPLAY
                favAdded === "true" ? <div className={styles.item_add_message}>
                    <p>Added To Favourite Successfully!!</p>
                </div> : null
            }
            {
                //FAV REMOVE DISPLAY
                favAdded === "false" ? <div className={styles.item_remove_message}>
                    <p>Removed From Favourite Successfully!!</p>
                </div> : null
            }
        </div>
    )
}

export default ShopProduct
