import React from 'react';
import styles from "./page.module.css";
import Hero from '@/Component/Hero/Hero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';
import AboutCom from '@/Component/AboutCom/AboutCom';
import WhyOurServ from '@/Component/WhyOurServ/WhyOurServ';

const page = () => {
  return (
    <div>
      <Hero/>
      <ThreeCol/>
      <AboutCom/>
      <WhyOurServ/>
    </div>
  )
}

export default page
