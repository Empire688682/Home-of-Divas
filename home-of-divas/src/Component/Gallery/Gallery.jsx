import React from 'react';
import styles from './Galley.module.css';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.four_col_Con}>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
            </div>
            <div className={styles.three_col_Con}>
                <div className={styles.three_col}>
                    <div className={styles.img_com}>
                        <Image src="/offers3.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.three_col}>
                    <div className={styles.img_com}>
                        <Image src="/offers3.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.three_col}>
                    <div className={styles.img_com}>
                        <Image src="/offers3.png" alt="" fill />
                    </div>
                </div>
            </div>
            <div className={styles.four_col_Con}>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_com}>
                        <Image src="/h1_hero1.png" alt="" fill />
                    </div>
                </div>
            </div>
            <div className={styles.three_col_Con}>
                <div className={styles.three_col}>
                    <div className={styles.img_com}>
                        <Image src="/offers3.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.three_col}>
                    <div className={styles.img_com}>
                        <Image src="/offers3.png" alt="" fill />
                    </div>
                </div>
                <div className={styles.three_col}>
                    <div className={styles.img_com}>
                        <Image src="/offers3.png" alt="" fill />
                    </div>
                </div>
            </div>
            <button className={styles.btn}>Load More</button>
        </div>
    )
}

export default Gallery
