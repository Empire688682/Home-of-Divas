"use client";

import React, { useState } from 'react';
import styles from './OrderCom.module.css';
import { useGlobalContext } from '../Context';
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';
import { IncrementalCache } from 'next/dist/server/lib/incremental-cache';

const OrderCom = () => {
    const {getTotalValue, cartItems, allProduct, inCart} = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [circleCheck, setCircleCheck] = useState("Paystack");

    const [addressData, setAddressData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        street: "",
        zipCode: "",
        phone: "",
        state: "",
    });

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setAddressData(prev => ({ ...prev, [name]: value }));
    };

    const placeOrder = async () => {
        let orderItem = [];
        allProduct.forEach(item => {
            if(cartItems[item._id] > 0){
                let itemInfo = {...item, quantity: cartItems[item._id]};
                orderItem.push(itemInfo);
            }
        });
        const itemData ={
            item:orderItem,
            total: getTotalValue() + 2000,
            addressData: addressData,
            paymentMethod: circleCheck
        }

        try {
            setLoading(true);
            const response = await axios.post('api/order/placeOrder', {itemData});
            if(response.data.success && response.data.authorization_url){
                window.location.href = response.data.authorization_url
            }
            if(response.data.success){
                setAddressData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    city: "",
                    street: "",
                    zipCode: "",
                    phone: "",
                    state: "",
                });
                
            }
            console.log("Response:", response);
        } catch (error) {
            console.log("ERROR:", error);
        }
        finally{
            setLoading(false);
        }
    };

    const handleFormSubmission =(e) => {
        e.preventDefault();
        placeOrder();
    }

    return (
        <div className={styles.order_con}>
            <div className={styles.two_col}>
                <h3>Delivery Information</h3>
                <form onSubmit={handleFormSubmission}>
                    <input onChange={handleOnchange} required value={addressData.firstName} type="text" name="firstName" placeholder='First name' />
                    <input onChange={handleOnchange} required value={addressData.lastName} type="text" name="lastName" placeholder='Last name' />
                    <input onChange={handleOnchange} required value={addressData.email} type="email" name="email" placeholder='Email' />
                    <input onChange={handleOnchange} required value={addressData.city} type="text" name="city" placeholder='City' />
                    <input onChange={handleOnchange} required value={addressData.state} type="text" name="state" placeholder='State' />
                    <input onChange={handleOnchange} required value={addressData.street} type="text" name="street" placeholder='Street' />
                    <input onChange={handleOnchange} required value={addressData.zipCode} type="number" name="zipCode" placeholder='Zip code' />
                    <input onChange={handleOnchange} required value={addressData.phone} type="tel" name="phone" placeholder='Phone' />
                    <button id='submitButton' type='submit' style={{ display: 'none' }}>Submit</button>
                </form>
            </div>
            <div className={styles.two_col}>
                <h3>Payment Methods</h3>
                <div className={styles.paywith_card}>
                <div>
                    {
                        circleCheck === "Paystack"? <FaCheckCircle  className={styles.paywith_card_icon} onClick={()=> setCircleCheck("Paystack")} />:<FaRegCircle  className={styles.paywith_card_icon} onClick={()=> setCircleCheck("Paystack")} />
                    }
                </div>
                <div>
                    <h5>Pay with card</h5>
                    <p>(Get 5% 0ff total price and money back guarantee)</p>
                    <small>You will be redirect to Paystack payment gateway</small>
                </div>
                </div>
                <div className={styles.payon_deliver}>
                <div >
                {
                        circleCheck === "Pay on dilever"? <FaCheckCircle className={styles.payon_deliver_icon} onClick={()=> setCircleCheck("Pay on dilever")} />:<FaRegCircle className={styles.payon_deliver_icon} onClick={()=> setCircleCheck("Pay on dilever")} />
                    }
                </div>
                <div>
                    <h5>Pay on delivery</h5>
                    <ul>
                        <li>Kindly note that we will only accept POS payment option on delivery</li>
                        <li>You have to make payment before opening package</li>
                        <li>Once the seal is broken, item can only be returned if damaged or defective</li>
                    </ul>
                </div>
                    
                </div>
            </div>
            <div className={styles.two_col}>
                <h3>Payment Methods</h3>
                <div className={styles.paywith_card}>
                <div>
                    {
                        circleCheck === "card"? <FaCheckCircle  className={styles.paywith_card_icon} onClick={()=> setCircleCheck("card")} />:<FaRegCircle  className={styles.paywith_card_icon} onClick={()=> setCircleCheck("card")} />
                    }
                </div>
                <div>
                    <h5>Pay with card</h5>
                    <p>(Get 5% 0ff total price and money back guarantee)</p>
                    <small>You will be redirect to Paystack payment gateway</small>
                </div>
                </div>
                <div className={styles.payon_deliver}>
                <div >
                {
                        circleCheck === "dilever"? <FaCheckCircle className={styles.payon_deliver_icon} onClick={()=> setCircleCheck("dilever")} />:<FaRegCircle className={styles.payon_deliver_icon} onClick={()=> setCircleCheck("dilever")} />
                    }
                </div>
                <div>
                    <h5>Pay on delivery</h5>
                    <ul>
                        <li>Kindly note that we will only accept POS payment option on delivery</li>
                        <li>You have to make payment before opening package</li>
                        <li>Once the seal is broken, item can only be returned if damaged or defective</li>
                    </ul>
                </div>
                    
                </div>
            </div>
            <div className={`${styles.two_col} ${styles.cart}`}>
            <h3>ORDER SUMMARY</h3>
                {
                    inCart? <>
                    <div>Subtotal <h4>#{getTotalValue()}</h4></div>
                    <div>Delivery fees <h4>#2000</h4></div>
                    <div>Total <h4>#{getTotalValue() + 2000}</h4></div>
                    <label htmlFor='submitButton' className={styles.buttonLabel}>
                        {loading ? "Processing..." : "Proceed to checkout"}
                    </label></>
                    :
                    <>
                    <p>NOTHING TO CHECKOUT</p>
                    <button onClick={()=>window.location.replace("/shop")} className={styles.buttonLabel}>View Products</button>
                    </>
                }
            </div>
        </div>
    );
};

export default OrderCom;
