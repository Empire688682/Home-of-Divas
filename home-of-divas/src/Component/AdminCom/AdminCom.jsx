'use client'
import React from 'react';
import styles from './AdminCom.module.css';
import SideBar from './SideBar/SiseBar';

const AdminCom = () => {
  return (
    <div className={styles.admin_Com}>
      <h1>Divas Admin Panel</h1>
      <SideBar />
    </div>
  )
}

export default AdminCom
