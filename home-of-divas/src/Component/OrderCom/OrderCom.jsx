"use client";

import React, { useState } from 'react';
import styles from './OrderCom.module.css';
import { useGlobalContext } from '../Context';

const OrderCom = () => {
    const {getTotalValue} = useGlobalContext();
    const [loading, setLoading] = useState(false);

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
            <div className={`${styles.two_col} ${styles.cart}`}>
                <h3>Cart Totals</h3>
                <div>Subtotal <h4>#{getTotalValue()}</h4></div>
                <div>Delivery fees <h4>#2000</h4></div>
                <div>Total <h4>#{getTotalValue() + 20}</h4></div>
                <label htmlFor='submitButton' className={styles.buttonLabel}>
                    {loading ? "Processing..." : "Proceed to checkout"}
                </label>
            </div>
        </div>
    );
};

export default OrderCom;
