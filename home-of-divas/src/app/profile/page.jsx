"use client"; // Enables client-side rendering
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { useRouter } from "next/navigation"; // New hook for navigation
import { useGlobalContext } from "@/Component/Context"; // Adjust path as needed
import styles from "./Profile.module.css"; // Using CSS module
import MyOrder from "@/Component/MyOrder/MyOrder";

const Profile = () => {
  const { setToken, token} = useGlobalContext(); // Fix useGlobalContext as a function
  const router = useRouter(); // Replaces useNavigate from React Router

  const [dashboard, setDashboard] = useState("information");
  const [user, setUser ] = useState("");

  useEffect(()=>{
    if(typeof window !== "undefined"){
      const savedToken = localStorage.getItem("Divastoken") || "";
      const savedUser = JSON.parse(localStorage.getItem("Divasuserdata")) || "";
      setToken(savedToken);
      setUser(savedUser);
    }
  },[]);

  const logoutUser = () => {
    localStorage.removeItem("Divastoken");
    localStorage.removeItem("Divasuser");
    setToken("");
    router.push("/"); // Use Next.js navigation to redirect
    router.refresh(); // Force a page refresh
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
        <p onClick={logoutUser}>
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
              <p>dBirth:</p>
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
          {/* Assuming MyOrder is another component */}
          <MyOrder user={user.fName} />
        </div>
      )}
    </div>
  );
};

export default Profile;
