import React from 'react';
import styles from "./page.module.css";
import Hero from '@/Component/Hero/Hero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';

const page = () => {
  return (
    <div>
      <Hero/>
      <ThreeCol/>
    </div>
  )
}

export default page
