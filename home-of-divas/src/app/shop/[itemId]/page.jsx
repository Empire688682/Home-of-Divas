'use client';
import React, { useEffect, useState } from 'react';
import styles from './itemId.module.css';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useGlobalContext } from '@/Component/Context';
import Image from 'next/image';

const Page = () => {
  const params = useParams();
  const { itemId } = params;
  const { addToCart, handleFav } = useGlobalContext();

  const [productData, setProductData] = useState(null); // State to store fetched product data
  const [imgSrc, setImgSrc] = useState(null);

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
        <div className={styles.product}>
          <div className={styles.imageSection}>
            <Image src={imgSrc? imgSrc : `/uploads/${productData.images[0]}`} width={180} height={180} alt={productData.name} className={styles.mainImage} />
           <div className={styles.thumbnailContainerBig}>
           <div className={styles.thumbnailContainer}>
              <Image
                width={80}
                height={80}
                src={`/uploads/${productData.images[0]}`}
                className={styles.thumbnail}
                onClick={() => setImgSrc(`/uploads/${productData.images[0]}`)}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              <Image
                width={80}
                height={80}
                src={`/uploads/${productData.images[1]}`}
                className={styles.thumbnail}
                onClick={() => setImgSrc(`/uploads/${productData.images[1]}`)}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              <Image
                width={80}
                height={80}
                src={`/uploads/${productData.images[2]}`}
                className={styles.thumbnail}
               onClick={() => setImgSrc(`/uploads/${productData.images[2]}`)}
              />
            </div>
           </div>
          </div>
          <div className={styles.detailsSection}>
            <h3>{productData.name}</h3>
            <p className={styles.description}>{productData.itemDescription}</p>
            <p className={styles.price}>Price: #{productData.price}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.addToCartButton} onClick={() => addToCart(productData._id)} >Add to Cart</button>
              <button className={styles.addToFavButton} onClick={()=>handleFav(productData._id)}>Add to Fav</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading product...</h1>
      )}
    </div>
  );
}

export default Page;
