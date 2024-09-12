'use client';

import React, { useState } from 'react';
import styles from './Order.module.css'; // Converted CSS to module
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);

  return (
    <div className={styles.order_items}>
      <ToastContainer style={{ width: '80%' }} />
      <h2>All Order List</h2>
            <div className={styles.content}>
              <div>
                <div className={styles.header_item}>Item</div>
                  <div className={styles.item}>
                    <small>Name: {item.name}</small><br />
                    <small>Qty: {item.quantity}</small>
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
                <div className={styles.amount}>#{order.amount}</div>
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