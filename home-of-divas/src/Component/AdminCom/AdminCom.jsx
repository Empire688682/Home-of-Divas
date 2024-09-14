'use client'
import React, { useState } from 'react';
import styles from './AdminCom.module.css';
import SideBar from './SideBar/SiseBar';
import { FaUserCircle } from "react-icons/fa";
import AddItems from './AddItems/AddItems';
import ProductList from './ProductList/ProductList';
import Order from './Orders/Order';

const AdminCom = () => {
    const [menu, setMenu] = useState("add")
    return (
        <div className={styles.admin_Com}>
            <div className={styles.header}>
                <h1>Admin Panel</h1>
                <div className={styles.profile}>
                    <FaUserCircle />
                    <p>Logout</p>
                </div>
            </div>
            <div className={styles.admin_Content_Con}>
                <div className={styles.admin_SideBar}>
                <SideBar menu={menu} setMenu={setMenu} />
                </div>
                <div className={styles.admin_Content_Value}>
                    {
                        menu === "add"? <AddItems />:null
                    }
                    {
                        menu === "list"? <ProductList />:null
                    }
                    {
                        menu === "order"? <Order />:null
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminCom
