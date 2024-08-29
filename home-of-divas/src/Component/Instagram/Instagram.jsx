import React from 'react';
import styles from './Instagram.module.css';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
    return (
        <div className={styles.instagram}>
            <h3>Follow us on Instagram</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className={styles.instagram_Con}>
                <div className={styles.four_col}>
                    <div className={styles.img_Con}>
                        <Image src="/offers3.png" alt='' fill />
                    </div>
                    <div className={styles.icon}>
                    <FaInstagram  style={{width:"50px", color:"white", height:"50px"}}/>
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_Con}>
                        <Image src="/offers3.png" alt='' fill />
                    </div>
                    <div className={styles.icon}>
                    <FaInstagram  style={{width:"50px", color:"white", height:"50px"}}/>
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_Con}>
                        <Image src="/offers3.png" alt='' fill />
                    </div>
                    <div className={styles.icon}>
                    <FaInstagram style={{width:"50px", color:"white", height:"50px"}}/>
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_Con}>
                        <Image src="/offers3.png" alt='' fill />
                    </div>
                    <div className={styles.icon}>
                    <FaInstagram style={{width:"50px", color:"white", height:"50px"}} />
                    </div>
                </div>
                <div className={styles.four_col}>
                    <div className={styles.img_Con}>
                        <Image src="/offers3.png" alt='' fill />
                    </div>
                    <div className={styles.icon}>
                    <FaInstagram  style={{width:"50px", color:"white", height:"50px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram
