'use client'
import React from 'react';
import styles from './Review.module.css';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { AllReview } from '../../../public/reviewData';

const Review = () => {
  return (
    <div className={styles.review}>
      <h1>Customer Reviews</h1>
      <div className={styles.review_cart}>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {AllReview.map((review) => (
            <SwiperSlide key={review.id} className={styles.review_slider}>
              <p>{review.body}</p>
              <div className={styles.img_Con_Con}>
                <div className={styles.img_Con}>
                  <Image src={review.imageSrc} alt='' fill />
                </div>
                <div className={styles.name_Con}>
                  <h3>{review.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Review
