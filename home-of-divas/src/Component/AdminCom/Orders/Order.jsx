'use client';

import React, { useEffect, useState } from 'react';
import styles from './Order.module.css'; // Converted CSS to module
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [loading, setLoading] = useState(false);

 const fetchOrder = async () => {
   try {
    setLoading(true);
    const response = await axios.get("/api/order/allOrder");
    console.log('RESPONSE:', response);
    if(response.data.success) {
      setAllOrder(response.data.data || []);
    }
   } catch (error) {
    console.log("Error:", error);
   }
   finally{
    setLoading(false);
   }
  };

  useEffect(()=>{
    fetchOrder();
  },[]);

  console.log("ORDER:", allOrder)


  return (
    <div className={styles.order_items}>
      <ToastContainer style={{ width: '80%' }} />
      <h2>All Order List</h2>
            <div className={styles.content}>
              <div>
                <div className={styles.header_item}>Item</div>
                  <div className={styles.item}>
                    <small>Name: name</small><br />
                    <small>Qty: quantity</small>
                  </div>
              </div>
              <div>
                  <div>
                    <div className={styles.header_address}>Shipping Address</div>
                    <small className={styles.address}>
                      Name:FirstName LastName
                    </small><br />
                    <small>Email: Email</small><br />
                    <small>City: City</small><br />
                    <small>Street: Street</small><br />
                    <small>ZipCode: ZipCode</small><br />
                    <small>Phone: Phone</small>
                  </div>
              </div>
              <div>
                <div className={styles.header_amount}>Total Amount</div>
                <div className={styles.amount}>#.amount</div>
              </div>
              <div>
                <div className={styles.header_remove}>Remove</div>
                <div
                  className={styles.remove}
                >
                  X
                </div>
              </div>
            </div>
    </div>
  );
};

export default Order;