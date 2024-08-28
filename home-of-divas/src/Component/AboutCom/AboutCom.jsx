import React from 'react';
import styles from './AboutCom.module.css';
import Image from 'next/image';

const AboutCom = () => {
    return (
        <div className={styles.about_Com}>
            <div className={styles.small_col}>
                <div className={styles.img_Con}>
                    <Image src="/visit_bg.png" alt='' fill />
                </div>
            </div>
            <div className={styles.big_col}>
                <h3>About our tailor house</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptas iusto dicta placeat quibusdam quam ipsa, amet obcaecati cumque voluptatem laboriosam quae. Quos esse error, est optio unde fuga temporibus?</p>
                <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus recusandae cupiditate impedit animi asperiores similique.</small> <br />
                <button className={styles.btn}>Read more</button>
            </div>
        </div>
    )
}

export default AboutCom
