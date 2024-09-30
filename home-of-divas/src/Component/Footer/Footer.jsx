'use client'
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { FaCcMastercard } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoReturnUpBackSharp } from "react-icons/io5";
import Link from 'next/link';

const Footer = () => {
  const [vissible, setVissible] = useState(false);
  const backtoTop = () =>{
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scroll = window.scrollY;
      if(scroll > 400){
        setVissible(false)
      }
      else{
        setVissible(true)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.big_col}>
        <h2>Divas</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse illum sapiente numquam, modi veniam.</p>
        <div className={styles.cards_Con}>
          <div className={styles.cards}>
          <FaCcMastercard />
          </div>
          <div className={styles.cards}>
          <FaCcMastercard />
          </div>
          <div className={styles.cards}>
          <FaCcMastercard />
          </div>
          <div className={styles.cards}>
          <FaCcMastercard />
          </div>
          <div className={styles.cards}>
          <FaCcMastercard />
          </div>
          <div className={styles.cards}>
          <FaCcMastercard />
          </div>
        </div>
      </div>
      <div className={styles.small_col}>
        <h3>QUICK LINKS</h3>
        <Link className={styles.link} href='/about'><li>About</li></Link>
        <Link className={styles.link} href='/shop'><li>Shop</li></Link>
        <Link className={styles.link} href='/blog'><li>Blogs</li></Link>
        <Link className={styles.link} href='/contact'><li>Contact</li></Link>
        <Link className={styles.link} href='/contact'><li>FAQ</li></Link>
      </div>
      <div className={styles.small_col}>
        <h3>ACCOUNT</h3>
        <Link className={styles.link} href='/profile'><li>My Account</li></Link>
        <Link className={styles.link} href='/profile'><li>Order Tracking</li></Link>
        <Link className={styles.link} href='/checkout'><li>Checkout</li></Link>
        <Link className={styles.link} href='/favorite'><li>Favorite</li></Link>
      </div>
      <div className={styles.big_col}>
        <h3>NEWSLETTER</h3>
        <form>
          <div className={styles.form_Con}>
            <input type="email" name="email" placeholder='Email' required />
            <button className={styles.btn} type="submit">SUBSCRIBE</button>
          </div>
        </form>
        <div className={styles.socila_icon_Con}>
              <div className={styles.socila_icon}>
                <a href="http://"><FaFacebookF /></a>
              </div>
              <div className={styles.socila_icon}>
                <a href="http://"><FaTwitter /></a>
              </div>
              <div className={styles.socila_icon}>
                <a href="http://"><FaYoutube /></a>
              </div>
              <div className={styles.socila_icon}>
                <a href="http://"><FaInstagram /></a>
              </div>
            </div>
      </div>
      <p  className={styles.designer}>Copyrighted 2024 <b>Divas</b> All rights reserved | Designed with <FaHeart style={{color:"red"}}/>  by <a href="https://jayempire.netlify.app/">Jay-empire</a> </p>
      <div className={`${styles.back_top_icon} ${vissible? styles.hidden:""}`} onClick={backtoTop}>
      <IoReturnUpBackSharp />
      </div>
    </div>
  )
}

export default Footer
