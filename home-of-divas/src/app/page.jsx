import React from 'react';
import styles from "./page.module.css";
import Hero from '@/Component/Hero/Hero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';
import AboutCom from '@/Component/AboutCom/AboutCom';
import WhyOurServ from '@/Component/WhyOurServ/WhyOurServ';
import VideoLink from '@/Component/VideoLink/VideoLink';
import Review from '@/Component/Review/Review';
import Instagram from '@/Component/Instagram/Instagram';
import ContactForm from '@/Component/ContactForm/ContactForm';

const page = () => {
  return (
    <div>
      <Hero/>
      <ThreeCol/>
      <AboutCom/>
      <WhyOurServ/>
      <VideoLink/>
      <Review/>
      <Instagram/>
      <ContactForm/>
    </div>
  )
}

export default page
