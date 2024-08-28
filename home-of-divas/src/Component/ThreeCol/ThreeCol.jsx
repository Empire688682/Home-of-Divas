import React from 'react';
import styles from './ThreeCol.module.css';
import Image from 'next/image';

const ThreeCol = () => {
    return (
        <div className={styles.three_Con}>
            <div className={styles.three_col}>
                <div className={styles.img_overflow}>
                    <div className={styles.img_Con}>
                        <Image src="/offers1.png" alt='' fill />
                    </div>
                </div>
                <h3>Tailor Sweing</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi placeat beatae pariatur exercitationem sed iste illo illum cum! Deleniti placeat obcaecati reprehenderit aperiam blanditiis accusamus, beatae hic libero nesciunt nemo.</p>
            </div>
            <div className={styles.three_col}>
                <div className={styles.img_overflow}>
                    <div className={styles.img_Con}>
                        <Image src="/offers2.png" alt='' fill />
                    </div>
                </div>
                <h3>Mesurement</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi placeat beatae pariatur exercitationem sed iste illo illum cum! Deleniti placeat obcaecati reprehenderit aperiam blanditiis accusamus, beatae hic libero nesciunt nemo.</p>
            </div>
            <div className={styles.three_col}>
                <div className={styles.img_overflow}>
                    <div className={styles.img_Con}>
                        <Image src="/offers3.png" alt='' fill />
                    </div>
                </div>
                <h3>Ready-made</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi placeat beatae pariatur exercitationem sed iste illo illum cum! Deleniti placeat obcaecati reprehenderit aperiam blanditiis accusamus, beatae hic libero nesciunt nemo.</p>
            </div>
        </div>
    )
}

export default ThreeCol
