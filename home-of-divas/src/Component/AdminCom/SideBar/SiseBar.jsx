'use client'
import React, { useState } from 'react';
import styles from './SideBar.module.css'
import { IoMdAdd } from "react-icons/io";
import { BsBasket3 } from "react-icons/bs";
import { MdChecklistRtl } from "react-icons/md";

const SideBar = ({menu, setMenu}) => {

  return (
    <div className={styles.side_Bar}>
      <div className={styles.side_Bar_Menu_Con}>
        <div onClick={()=> setMenu("add")} className={menu === "add"? `${styles.side_Bar_Menu } ${styles.active}`:`${styles.side_Bar_Menu }`}>
            <IoMdAdd className={styles.menu_Icon}/>
            <p>Add Item</p>
        </div>
        <div onClick={()=> setMenu("list")} className={menu === "list"? `${styles.side_Bar_Menu } ${styles.active}`:`${styles.side_Bar_Menu }`}>
            <MdChecklistRtl className={styles.menu_Icon}/>
            <p>Item List</p>
        </div>
        <div onClick={()=> setMenu("order")} className={menu === "order"? `${styles.side_Bar_Menu } ${styles.active}`:`${styles.side_Bar_Menu }`}>
            <BsBasket3 className={styles.menu_Icon}/>
            <p>Order</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
