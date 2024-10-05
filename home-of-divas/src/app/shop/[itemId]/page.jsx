'use client'
import React from 'react';
import styles from './itemId.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const router = useRouter();
  const itemId = router.query?.itemId;

  useEffect(()=>{
    console.log("itemId:",itemId);
  }, [itemId])
  return (
    <div className={styles.container}>
      <h1>Shop Page</h1>
    </div>
  )
}

export default page
