"use client";
import React, { useEffect, useState } from "react";
import { RiInformationFill } from "react-icons/ri";
import { BsFillBagFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import styles from "./Profile.module.css";
import MyOrder from "@/Component/MyOrder/MyOrder";
import axios from "axios";
import { useGlobalContext } from "@/Component/Context";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const { setToken } = useGlobalContext();
  const [dashboard, setDashboard] = useState("information");
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("Divasuserdata")) || {})
    }
  }, [])

  const logoutUser = async () => {
    try {
      const response = await axios.get("api/users/logout");
      if (response) {
        router.push("/");
        setToken("");
        setUser({})
      }
    } catch (error) {
      console.log("ERROR:", error)
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.small_col}>
        <h2>ACCOUNT DASHBOARD</h2>
        <ul>
        {
            user.isAdmin ? <Link style={{textDecoration:"none"}} href="/admin"> <li><RiAdminFill style={{fontWeight:"bold"}} /> Admin</li> </Link> : null
          }
          <li onClick={() => setDashboard("information")}>
            <RiInformationFill />
            <span>Account Information</span>
          </li>
          <li onClick={() => setDashboard("order")}>
            <BsFillBagFill />
            <span>My Orders</span>
          </li>
        </ul>
        <p onClick={logoutUser}>
          <IoLogOut />
          <span>Logout Of Shop</span>
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
            <button onClick={logoutUser}>Logout</button>
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
