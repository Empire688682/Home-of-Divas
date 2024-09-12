'use client'
import React, { useState } from 'react';
import styles from './AdminCom.module.css';
import SideBar from './SideBar/SiseBar';
import { FaUserCircle } from "react-icons/fa";
import AddItems from './AddItems/AddItems';
import ListItems from './ListItems/ListItems';

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
                <SideBar menu={menu} setMenu={setMenu} />
                <div className={styles.admin_Content_Value}>
                    {
                        menu === "add"? <AddItems />:null
                    }
                    {
                        menu === "list"? <ListItems />:null
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminCom
