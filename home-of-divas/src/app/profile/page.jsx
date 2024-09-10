"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { useGlobalContext } from "@/Component/Context";
import styles from "./Profile.module.css";
import MyOrder from "@/Component/MyOrder/MyOrder";

const Profile = () => {
  const { logoutUser, user } = useGlobalContext();
  const [dashboard, setDashboard] = useState("information");

  const logout = () => {
    logoutUser();
  };

  return (
    <div className={styles.profile}>
      <div className={styles.small_col}>
        <h2>ACCOUNT DASHBOARD</h2>
        <ul>
          <li onClick={() => setDashboard("information")}>
            <FaUser />
            <span>Account Information</span>
          </li>
          <li onClick={() => setDashboard("order")}>
            <BsFillBagFill />
            <span>My Orders</span>
          </li>
        </ul>
        <p onClick={logout}>
          <IoLogOut />
          <span>Logout</span>
        </p>
      </div>
      {dashboard === "information" ? (
        <div className={styles.big_col}>
          <div className={styles.content_block_title}>
            <h2>User Information</h2>
          </div>
          <div className={styles.info_Con}>
            <div className={styles.info}>
              <p>First Name:</p>
              <p className={styles.small}>{user.fName}</p>
            </div>
            <div className={styles.info}>
              <p>Last Name:</p>
              <p className={styles.small}>{user.lName}</p>
            </div>
            <div className={styles.info}>
              <p>Email:</p>
              <p className={styles.small}>{user.email}</p>
            </div>
            <div className={styles.info}>
              <p>Gender:</p>
              <p className={styles.small}>{user.gender}</p>
            </div>
            <div className={styles.info}>
              <p>Date of Birth:</p>
              <p className={styles.small}>{user.dBirth}</p>
            </div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className={`${styles.big_col} ${styles.order_Page}`}>
          <div className={styles.content_block_title}>
            <h2>
              @ <span>{user.fName}</span> Welcome to your Order Page
            </h2>
          </div>
          <MyOrder user={user.fName} />
        </div>
      )}
    </div>
  );
};

export default Profile;
