import React from 'react';
import styles from './admin.module.css';
import AdminCom from '@/Component/AdminCom/AdminCom';

const page = () => {
  return (
    <div className={styles.admin}>
        <AdminCom/>
    </div>
  )
}

export default page
