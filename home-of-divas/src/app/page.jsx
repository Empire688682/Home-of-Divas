import React from 'react';
import styles from "./page.module.css";
import Hero from '@/Component/Hero/Hero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';
import AboutCom from '@/Component/AboutCom/AboutCom';
import WhyOurServ from '@/Component/WhyOurServ/WhyOurServ';
import VideoLink from '@/Component/VideoLink/VideoLink';
import Review from '@/Component/Review/Review';

const page = () => {
  return (
    <div>
      <Hero/>
      <ThreeCol/>
      <AboutCom/>
      <WhyOurServ/>
      <VideoLink/>
      <Review/>
    </div>
  )
}

export default page
