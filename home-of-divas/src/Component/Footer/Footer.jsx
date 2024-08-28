import React from 'react';
import styles from './Footer.module.css';
import { FaCcMastercard } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.big_col}>
        <h2>Divas</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illum sapiente numquam, modi veniam.</p>
        <div className={styles.cards_Con}>
          <FaCcMastercard />
          <FaCcMastercard />
          <FaCcMastercard />
          <FaCcMastercard />
          <FaCcMastercard />
          <FaCcMastercard />
        </div>
      </div>
      <div className={styles.small_col}>
        <h3>QUICK LINKS</h3>
        <li>About</li>
        <li>Blogs</li>
        <li>Contact</li>
        <li>FAQ</li>
      </div>
      <div className={styles.small_col}>
        <h3>ACCOUNT</h3>
        <li>My Account</li>
        <li>Order Tracking</li>
        <li>Checkout</li>
        <li>Wishlist</li>
      </div>
      <div className={styles.big_col}>
        <h3>NEWSLETTER</h3>
        <form>
          <div className={styles.form_Con}>
            <input type="email" name="email" placeholder='Email' required />
            <button className={styles.btn} type="submit">SUBSCRIBE</button>
          </div>
          <div className={styles.socila_icon_Con}>
              <div className={styles.socila_icon}>
                <FaFacebookF />
              </div>
              <div className={styles.socila_icon}>
                <FaTwitter />
              </div>
              <div className={styles.socila_icon}>
                <FaYoutube />
              </div>
              <div className={styles.socila_icon}>
                <FaInstagram />
              </div>
            </div>
        </form>
      </div>
      <p  className={styles.designer}>Copyrighted 2024 <b>Divas</b> All rights reserved | Designed with <FaHeart style={{color:"red"}}/>  by <a href="#">Jay-empire</a> </p>
    </div>
  )
}

export default Footer
