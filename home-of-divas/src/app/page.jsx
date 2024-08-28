import React from 'react';
import styles from "./page.module.css";
import Hero from '@/Component/Hero/Hero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';
import AboutCom from '@/Component/AboutCom/AboutCom';

const page = () => {
  return (
    <div>
      <Hero/>
      <ThreeCol/>
      <AboutCom/>
    </div>
  )
}

export default page
