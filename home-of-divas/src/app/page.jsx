import React from 'react';
import styles from "./page.module.css";
import Hero from '@/Component/Hero/Hero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';
import AboutCom from '@/Component/AboutCom/AboutCom';
import WhyOurServ from '@/Component/WhyOurServ/WhyOurServ';
import VideoLink from '@/Component/VideoLink/VideoLink';

const page = () => {
  return (
    <div>
      <Hero/>
      <ThreeCol/>
      <AboutCom/>
      <WhyOurServ/>
      <VideoLink/>
    </div>
  )
}

export default page
