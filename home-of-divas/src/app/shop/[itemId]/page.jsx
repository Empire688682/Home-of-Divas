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
            <Image src={imgSrc? imgSrc : `/uploads/${productData.image}`} width={180} height={180} alt={productData.name} className={styles.mainImage} />
           <div className={styles.thumbnailContainerBig}>
           <div className={styles.thumbnailContainer}>
              <Image
                width={50}
                height={50}
                src={`/uploads/${productData.image}`}
                className={styles.thumbnail}
                onClick={() => setImgSrc(`/uploads/${productData.image}`)}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              <Image
                width={50}
                height={50}
                src="/feature.jpg"
                className={styles.thumbnail}
                onClick={() => setImgSrc('/feature.jpg')}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              <Image
                width={50}
                height={50}
                src="/delivery_rider.png"
                className={styles.thumbnail}
               onClick={() => setImgSrc('/delivery_rider.png')}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              <Image
                width={50}
                height={50}
                src="/exclusive_image.png"
                className={styles.thumbnail}
               onClick={() => setImgSrc('/exclusive_image.png')}
              />
            </div>
            <div className={styles.thumbnailContainer}>
              <Image
                width={50}
                height={50}
                src="/h1_hero1.png"
                className={styles.thumbnail}
               onClick={() => setImgSrc('/h1_hero1.png')}
              />
            </div>
           </div>
          </div>
          <div className={styles.detailsSection}>
            <h3>{productData.name}</h3>
            <p className={styles.description}>{productData.description}</p>
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
