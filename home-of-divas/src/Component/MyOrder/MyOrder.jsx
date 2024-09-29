'use client';

import React, { useEffect, useState } from 'react';
import styles from './MyOrder.module.css';
import axios from 'axios';

const MyOrder = () => {

  const [loading, setLoading] = useState(false);
  const [userOrder, setUserOrder] = useState([]);
  const [userOrderItems, setUserOrderItems] = useState({});

  const fetchOrder = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/users/userOrder", { withCredentials: true });
      if (response.data.success) {
        setUserOrder(response.data.data || []);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className={styles.myOrder}>
      {
        userOrder && userOrder.length > 0 ? <>
          <div className={styles.header}>
            <div className={styles.image}>Image</div>
            <div className={styles.name}>Name</div>
            <div className={styles.name}>Payment Details</div>
            <div className={styles.remove}>Delivery method</div>
          </div>
          {
            userOrder.map((order) => (
              <div className={styles.content} key={order._id}>
                {
                  order.item.map((item) => (
                    <>
                      <div className={styles.image}>
                        <img src={`/uploads/${item.image}`} alt="IMG" />
                      </div>
                      <div className={styles.name}>
                        <div>{item.name}</div>
                        <div>Quantity: {item.quantity}</div>
                      </div>
                    </>
                  ))
                }
                <div className={styles.name}>#{order.total}</div>
                <div className={styles.remove}>{order.paymentMethod}</div>
              </div>
            ))
          }
        </>
          :
          <>{loading ? <h3>Loading...</h3> : <h3>No Order Found</h3>}</>
      }
    </div>
  );
}

export default MyOrder;
