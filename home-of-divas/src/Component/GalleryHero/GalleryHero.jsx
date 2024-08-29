import React from 'react';
import styles from './GalleryHero.module.css';
import Image from 'next/image';

const GalleryHero = () => {
    return (
        <div className={styles.gallery_hero}>
            <div className={styles.text_col}>
                <div className={styles.gif_com}>
                    <Image src="/zipper.gif" alt="" fill />
                </div>
                <h2>Our Gallery</h2>
            </div>
            <div className={styles.img_col}>
                <div className={styles.img_com}>
                    <Image src="/h1_hero1.png" alt="" fill />
                </div>
            </div>
        </div>
    )
}

export default GalleryHero
