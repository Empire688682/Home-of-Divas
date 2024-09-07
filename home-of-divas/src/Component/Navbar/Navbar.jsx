"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import { LiaTimesSolid } from "react-icons/lia";
import { useGlobalContext } from '../Context';
import SignUp from '../SignUp/SignUp';
import { useRouter } from "next/navigation";

const Navbar = () => {
  const {token,inCart,inFav} = useGlobalContext();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [signup, setSignup] = useState(false);
  const router = useRouter();

  const toProfile = () =>{
    router.replace("/profile");
    setShowMenu(false)
  }; 

  const home = () =>{
    router.replace("/");
    setShowMenu(false)
  };

  const handleSigup = ()=>{
    setSignup(true);
    setShowMenu(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h3 onClick={home}>Divas</h3>
      </div>
      <div className={styles.big_screen_menu}>
        <ul className={styles.menu}>
          <Link href="/" className={`${styles.links} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
          <Link href="/about" className={`${styles.links} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
          <Link href="/project" className={`${styles.links} ${pathname === '/project' ? styles.active : ''}`}>Gallery</Link>
          <Link href="/service" className={`${styles.links} ${pathname === '/service' ? styles.active : ''}`}>Service</Link>
          <Link href="/shop" className={`${styles.links} ${pathname === '/shop' ? styles.active : ''}`}>Shop</Link>
          <Link href="/contact" className={`${styles.links} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
        </ul>
        <div className={styles.user_login_cart}>
          <div className={styles.user_login}>
            {
              token? <FaUserCircle onClick={toProfile} />:<p onClick={handleSigup}>Signup</p>
            }
          </div>
          <div className={styles.cart}>
            <FiShoppingCart />
            {
              inCart? <p></p>:null
            }
          </div>
          <div className={styles.user_fav}>
            <FaHeart />
            {
              inFav? <p></p>:null
            }
          </div>
        </div>
      </div>
      <div onClick={()=>setShowMenu(!showMenu)} className={styles.menu_bar}>
        <Image src="/dark_menu.png" alt="Menu Icon" width={50} height={50} />
      </div>

      {
        //MOBILE MENU
        <div className={`${styles.small_screen_menu} ${!showMenu? styles.active:""}`}>
          <div onClick={()=>setShowMenu(false)} className={styles.menu_close}>
            <LiaTimesSolid />
          </div>
          <div className={styles.logo}>
            <h3 onClick={home}>Divas</h3>
          </div>
          <div className={styles.user_login_cart}>
            <div className={styles.user_login}>
            {
              token? <FaUserCircle onClick={toProfile}  />:<p onClick={handleSigup}>Signup</p>
            }
            </div>
            <div className={styles.cart}>
              <FiShoppingCart />
              {
                inCart? <p></p>:null
              }
            </div>
            <div className={styles.user_fav}>
              <FaHeart />
              {
                inFav ? <p></p>:null
              }
            </div>
          </div>

          <ul className={styles.menu} onClick={()=>setShowMenu(false)}>
            <Link href="/" className={`${styles.links} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
            <Link href="/about" className={`${styles.links} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
            <Link href="/project" className={`${styles.links} ${pathname === '/project' ? styles.active : ''}`}>Gallery</Link>
            <Link href="/service" className={`${styles.links} ${pathname === '/service' ? styles.active : ''}`}>Service</Link>
            <Link href="/shop" className={`${styles.links} ${pathname === '/shop' ? styles.active : ''}`}>Shop</Link>
            <Link href="/contact" className={`${styles.links} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
          </ul>
        </div>
      }

      {
        signup? <SignUp setSignup={setSignup}/>:null
      }
    </div>
  );
};

export default Navbar;
