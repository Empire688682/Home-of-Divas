'use client'
import React, { useEffect, useState } from 'react';
import styles from './itemId.module.css';
import { useParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const params = useParams();
  const { itemId } = params;

  const [productData, setProductData] = useState(null); // State to store fetched product data

  const fetchData = async () => {
    try {
      const response = await axios.post(`/api/products/${itemId}`, { itemId }); // Correct endpoint
      console.log("data:", response.data);
      if (response.data.success) {
        setProductData(response.data.data); // Save fetched data in state
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  useEffect(() => {
    if (itemId) {
      fetchData(); // Call fetchData if itemId is available
    }
  }, [itemId]);

  return (
    <div className={styles.container}>
      {productData ? (
        <div>
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
          <p>Price: {productData.price}</p>
          {/* Render other product details here */}
        </div>
      ) : (
        <h1>Loading product...</h1>
      )}
    </div>
  );
}

export default Page;
