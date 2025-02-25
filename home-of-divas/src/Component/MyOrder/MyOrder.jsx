'use client';

import React, { useEffect, useState } from 'react';
import styles from './MyOrder.module.css';
import axios from 'axios';
import Image from 'next/image';

const MyOrder = () => {
  const [loading, setLoading] = useState(false);
  const [userOrder, setUserOrder] = useState([]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/users/userOrder', { withCredentials: true });
      if (response.data.success) {
        setUserOrder(response.data.data || []);
      }
    } catch (error) {
      console.log('ERROR:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className={styles.myOrderContainer}>
      <h2 className={styles.title}>My Orders</h2>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : userOrder.length > 0 ? (
        <div className={styles.orderList}>
          {userOrder.map((order) => (
            <div className={styles.orderCard} key={order._id}>
              <div className={styles.orderDetails}>
                {order.item.map((item, index) => (
                  <div className={styles.itemDetails} key={index}>
                    <Image src={`/uploads/${item.images[0]}`} alt='Product Image' width={60} height={60} className={styles.productImage} />
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.orderSummary}>
                <p>Total: <span className={styles.orderTotal}>${order.total}</span></p>
                <p>Payment: <span className={styles.paymentMethod}>{order.paymentMethod}</span></p>
                <p>Status: <span className={styles.orderStatus}>{order.status}</span></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noOrder}>No Orders Found</p>
      )}
    </div>
  );
};

export default MyOrder;
