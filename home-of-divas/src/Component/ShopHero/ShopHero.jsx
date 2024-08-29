import React from 'react'
import styles from './ShopHero.module.css';
import Image from 'next/image';
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaLongArrowAltRight } from 'react-icons/fa';

const ShopHero = () => {
    return (
        <div className={styles.shop_hero}>
            <div className={styles.tex_col}>
                <h3>NEW ARRIVALS ONLY</h3>
                <h2>new <FaHandHoldingHeart className={styles.hand_icon} />
                    collections for everyone</h2>
                <button>Latest Collection <FaLongArrowAltRight /> </button>
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
