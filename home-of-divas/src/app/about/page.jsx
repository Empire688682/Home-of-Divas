import React from 'react';
import styles from './about.module.css';
import AboutCom from '@/Component/AboutCom/AboutCom';
import AboutHero from '@/Component/AboutHero/AboutHero';

const page = () => {
  return (
    <div className={styles.about}>
      <AboutHero/>
      <AboutCom/>
    </div>
  )
}

export default page
