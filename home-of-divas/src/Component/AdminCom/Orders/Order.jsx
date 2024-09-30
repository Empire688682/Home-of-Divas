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
      if (response.data.success) {
        setAllOrder(response.data.data || []);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const removeOrder = async (orderId) => {
    try {
      const response = await axios.post("/api/order/removeOrder", { orderId });
      if (response.data.success) {
        fetchOrder();
        toast.success("Order removed successfully!");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Failed to remove order.");
    }
  };

  const handleOnChange = (event, orderId) => {
    const { value } = event.target;
    updateStatus(orderId, value);
  };

  const updateStatus = async (orderId, stage) => {
    try {
      const response = await axios.post("/api/order/orderStatus", { orderId, stage });
      if (response.data.success) {
        fetchOrder(); // Fetch orders again to get updated statuses
        toast.success("Status updated successfully!");
      }
    } catch (error) {
      console.log("ERROR:", error);
      toast.error("Failed to update status.");
    }
  };

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
                    order.item.map((item) => (
                      <div className={styles.item} key={item.name}>
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
                      Object.keys(order.addressData).length > 0 && <div className={styles.address}>
                        <small>Name: {order.addressData.firstName} {order.addressData.lastName}</small><br />
                        <small>City: {order.addressData.city}</small><br />
                        <small>Street: {order.addressData.street}</small><br />
                        <small>State: {order.addressData.state}</small><br />
                        <small>Email: {order.addressData.email}</small><br />
                        <small>Phone: {order.addressData.phone}</small><br />
                        <small>ZipCode: {order.addressData.zipCode}</small><br />
                      </div>
                    }
                  </div>
                </div>
                <div>
                  <div className={styles.header_amount}>Payment Method</div>
                  <div className={styles.amount}>{order.paymentMethod}</div>
                </div>
                <div>
                  <div className={styles.header_amount}>Status</div>
                  <select 
                    onChange={(event) => handleOnChange(event, order._id)} 
                    name="stage" 
                    value={order.status} // Use the current order status
                    id=""
                  >
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancel">Cancel</option>
                  </select>
                </div>
                <div>
                  <div className={styles.header_amount}>Total Amount</div>
                  <div className={styles.amount}>#{order.total}</div>
                </div>
                <div>
                  <div className={styles.header_remove}>Remove</div>
                  <div
                    className={styles.remove}
                    onClick={() => removeOrder(order._id)}
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
