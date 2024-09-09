"use client";

import React, { useState } from 'react';
import styles from './OrderCom.module.css';
import { useGlobalContext } from '../Context';
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const OrderCom = () => {
    const {getTotalValue} = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [circleCheck, setCircleCheck] = useState("card");

    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        City: "",
        Street: "",
        ZipCode: "",
        Phone: ""
    });

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.order_con}>
            <div className={styles.two_col}>
                <h3>Delivery Information</h3>
                <form>
                    <input onChange={handleOnchange} required value={data.FirstName} type="text" name="FirstName" placeholder='First name' />
                    <input onChange={handleOnchange} required value={data.LastName} type="text" name="LastName" placeholder='Last name' />
                    <input onChange={handleOnchange} required value={data.Email} type="email" name="Email" placeholder='Email' />
                    <input onChange={handleOnchange} required value={data.City} type="text" name="City" placeholder='City' />
                    <input onChange={handleOnchange} required value={data.Street} type="text" name="Street" placeholder='Street' />
                    <input onChange={handleOnchange} required value={data.ZipCode} type="number" name="ZipCode" placeholder='Zip code' />
                    <input onChange={handleOnchange} required value={data.Phone} type="tel" name="Phone" placeholder='Phone' />
                    <button id='submitButton' type='submit' style={{ display: 'none' }}>Submit</button>
                </form>
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
                <div>Subtotal <h4>#{getTotalValue()}</h4></div>
                <div>Delivery fees <h4>#2000</h4></div>
                <div>Total <h4>#{getTotalValue() + 2000}</h4></div>
                <label htmlFor='submitButton' className={styles.buttonLabel}>
                    {loading ? "Processing..." : "Proceed to checkout"}
                </label>
            </div>
        </div>
    );
};

export default OrderCom;
