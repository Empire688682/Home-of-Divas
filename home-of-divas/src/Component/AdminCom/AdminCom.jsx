'use client'
import React from 'react';
import styles from './AdminCom.module.css';
import SideBar from './SideBar/SiseBar';
import { FaUserCircle } from "react-icons/fa";

const AdminCom = () => {
  return (
    <div className={styles.admin_Com}>
      <div className={styles.header}>
      <h1>Admin Panel</h1>
      <div className={styles.profile}>
      <FaUserCircle />
      <p>Logout</p>
      </div>
      </div>
      <SideBar />
    </div>
  )
}

export default AdminCom
