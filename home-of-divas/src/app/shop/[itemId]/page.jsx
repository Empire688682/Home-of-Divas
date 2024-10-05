'use client'
import React from 'react';
import styles from './itemId.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

const page = () => {
  const params = useParams();
  const {itemId} = params
 
  return (
    <div className={styles.container}>
      <h1>{itemId}ggg</h1>
    </div>
  )
}

export default page
