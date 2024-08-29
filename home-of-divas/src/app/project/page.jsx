import React from 'react';
import styles from './project.module.css';
import GalleryHero from '@/Component/GalleryHero/GalleryHero';
import Gallery from '@/Component/Gallery/Gallery';

const page = () => {
  return (
    <div className={styles.project}>
      <GalleryHero/>
      <Gallery/>
    </div>
  )
}

export default page
