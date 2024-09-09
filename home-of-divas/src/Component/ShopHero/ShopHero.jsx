import React from 'react'
import styles from './ShopHero.module.css';
import Image from 'next/image';
import { FaHandHoldingHeart } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ShopHero = () => {
    return (
        <div className={styles.shop_hero}>
            <div className={styles.tex_col}>
                <h3>NEW ARRIVALS ONLY</h3>
                <h2>new <FaHandHoldingHeart className={styles.hand_icon} />
                    collections for everyone</h2>
                <div className={styles.btn_Con}>
                <button><a style={{textDecoration:"none", color:"white"}} href="#shop">Explore our collection</a></button>
                <a style={{textDecoration:"none", color:"white"}} href="#shop"><IoIosArrowDropdownCircle className={styles.btn_Con_icon} /></a>
                </div>
            </div>
            <div className={styles.img_col}>
                <div className={styles.img_com}>
                    <Image src="/hero_image.png" alt="" fill />
                </div>
            </div>
        </div>
    )
}

export default ShopHero
