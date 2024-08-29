import React from 'react';
import styles from './Review.module.css';
import Image from 'next/image';

const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles.two_col}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id possimus, alias repellendus vero illum impedit hic voluptates, rem commodi iure, harum dignissimos. Nemo consequuntur, doloremque error incidunt perferendis mollitia!</p>
        <div className={styles.inner_two_col}>
        <div className={styles.img_Con}>
            <Image src="/testimonial.png" alt='' fill />
        </div>
        <div className={styles.name_Con}>
            <h4>Simba Rossie</h4>
            <small>My beautiful dogs</small>
        </div>
        </div>
      </div>
      <div className={styles.two_col}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id possimus, alias repellendus vero illum impedit hic voluptates, rem commodi iure, harum dignissimos. Nemo consequuntur, doloremque error incidunt perferendis mollitia!</p>
        <div className={styles.inner_two_col}>
        <div className={styles.img_Con}>
            <Image src="/testimonial.png" alt='' fill />
        </div>
        <div className={styles.name_Con}>
            <h4>Simba Rossie</h4>
            <small>My beautiful dogs</small>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Review
