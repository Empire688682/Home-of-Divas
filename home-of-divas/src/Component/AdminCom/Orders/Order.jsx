'use client';

import React, { useEffect, useState } from 'react';
import styles from './Order.module.css'; // Converted CSS to module
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [orderAddress, setOrderAddress] = useState({});

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/order/allOrder");
      console.log('RESPONSE:', response);
      if (response.data.success) {
        setAllOrder(response.data.data || []);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);



  return (
    <div className={styles.order_items}>
      <ToastContainer style={{ width: '80%' }} />
      <h2>All Order List</h2>
      {
        allOrder.length > 0 ? <>
          {
            allOrder.map((order) => (
              <div key={order._id} className={styles.content}>
                <div>
                  <div className={styles.header_item}>Item</div>
                  {
                    order.item.map((item, index) => (
                      <div key={index} className={styles.item}>
                        <small>Name: {item.name}</small><br />
                        <small>Qty: {item.quantity}</small>
                      </div>
                    ))
                  }
                </div>
                <div>
                  <div>
                    <div className={styles.header_address}>Shipping Address</div>
                    {
                      Object.keys(order.addressData).length > 0 && <>
                        <div className={styles.address}>
                          <small>Name: {order.addressData.firstName} {order.addressData.lastName}</small><br />
                          <small>City: {order.addressData.city}</small><br />
                          <small>Street: {order.addressData.street}</small><br />
                          <small>State: {order.addressData.state}</small><br />
                          <small>Email: {order.addressData.email}</small><br />
                          <small>Phone: {order.addressData.phone}</small><br />
                          <small>ZipCode: {order.addressData.zipCode}</small><br />
                        </div>
                      </>
                    }
                  </div>
                </div>
                <div>
                  <div className={styles.header_amount}>Total Amount</div>
                  <div className={styles.amount}>#{order.total}</div>
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
            ))
          }
        </>
          :
          <>{
            loading ? <div className={styles.loading}><h2>Loading.....</h2></div> : <p>No Order Found</p>
          }
          </>
      }
    </div>
  );
};

export default Order;