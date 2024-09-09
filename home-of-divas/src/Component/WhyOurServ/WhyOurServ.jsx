import React from 'react';
import styles from './WhyOurServ.module.css';
import Image from 'next/image';

const WhyOurServ = () => {
    return (
        <div className={styles.why_our_serv} id='service'>
            <h2>Why use our service?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore nisi ullam aliquid porro.</p>
            <div className={styles.why_our_serv_Com}>
            <div className={styles.four_col}>
                <div className={styles.img_Con}>
                    <Image src="/sewing-machine.png" alt='' fill />
                </div>
                <h3>Tailor Sweing</h3>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore nisi ullam aliquid porro amet optio similique deleniti.</small>
            </div>
            <div className={styles.four_col}>
                <div className={styles.img_Con}>
                    <Image src="/sewing-machine.png" alt='' fill />
                </div>
                <h3>Tailor Sweing</h3>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore nisi ullam aliquid porro amet optio similique deleniti.</small>
            </div>
            <div className={styles.four_col}>
                <div className={styles.img_Con}>
                    <Image src="/sewing-machine.png" alt='' fill />
                </div>
                <h3>Tailor Sweing</h3>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore nisi ullam aliquid porro amet optio similique deleniti.</small>
            </div>
            <div className={styles.four_col}>
                <div className={styles.img_Con}>
                    <Image src="/sewing-machine.png" alt='' fill />
                </div>
                <h3>Tailor Sweing</h3>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore nisi ullam aliquid porro amet optio similique deleniti.</small>
            </div>
            </div>
        </div>
    )
}

export default WhyOurServ
