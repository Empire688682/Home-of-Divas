import React from 'react';
import styles from './favorite.module.css';
import FavComponent from '@/Component/FavComponent/FavComponent';

const page = () => {
  return (
    <div className={styles.fav}>
      <FavComponent/>
    </div>
  )
}

export default page
