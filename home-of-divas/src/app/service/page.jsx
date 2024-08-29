import React from 'react';
import styles from './service.module.css'
import ServiceHero from '@/Component/ServiceHero/ServiceHero';
import ThreeCol from '@/Component/ThreeCol/ThreeCol';

const page = () => {
  return (
    <div>
      <ServiceHero/>
      <ThreeCol/>
    </div>
  )
}

export default page
