"use client";
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h3>Divas</h3>
      </div>
      <ul className={styles.menu}>
        <Link href="/" className={`${styles.links} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link href="/about" className={`${styles.links} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
        <Link href="/project" className={`${styles.links} ${pathname === '/project' ? styles.active : ''}`}>Project</Link>
        <Link href="/shop" className={`${styles.links} ${pathname === '/shop' ? styles.active : ''}`}>Shop</Link>
        <Link href="/contact" className={`${styles.links} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
      </ul>
      <div className={styles.user_login_cart}>
        <div className={styles.cart}>
          <FiShoppingCart />
        </div>
        <div className={styles.user_login}>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
