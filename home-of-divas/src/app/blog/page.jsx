"use client"
import Image from 'next/image';
import styles from './blog.module.css';
import RightColumPostCart from '@/Component/RightColumPostCart/RightColumPostCart';
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useState,useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line @next/next/no-async-client-component
const Blog = () => {
  const [category, setCategory] = useState("All");
  const [allPosts, setAllPosts] = useState([]);
  
  return (
    <div className={styles.container}>
      <div className={styles.blogCon}>
        <div className={styles.blogBanner}>
             <div className={styles.bloBannerCont}>
             <h1>Dude Youre Getting a Telescope</h1>
              <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
              <button>View More</button>
             </div>
        </div>
      </div>
      <div className={styles.blogCategory}>
          <div className={styles.threeColum}  onClick={()=>setCategory((prev)=> prev === "Social"? "All":"Social")}>
            <div className={styles.imageCon}>
              <Image src='/SocialLife.jpg' alt='' fill/>
            </div>
            <div className={styles.overlay}>
              <h2>SOCIAL LIFE</h2>
              <hr />
              <p>Enjoy your social life together</p>
            </div>
          </div>
          <div className={styles.threeColum} onClick={()=>setCategory((prev)=> prev === "Politics"? "All":"Politics")}>
            <div className={styles.imageCon} >
              <Image src='/Politics.jpg' alt='' fill/>
            </div>
            <div className={styles.overlay}>
              <h2>POLITICS</h2>
              <hr />
              <p>Be a part of politics</p>
            </div>
          </div>
          <div className={styles.threeColum}onClick={()=>setCategory((prev)=> prev === "Food"? "All":"Food")}>
            <div className={styles.imageCon}>
              <Image src='/Food.jpg' alt='' fill/>
            </div>
            <div className={styles.overlay}>
              <h2>FOOD</h2>
              <hr />
              <p>Let the food be finised</p>
            </div>
          </div>
        </div>
        <div className={styles.AllPosts}>
          <div className={styles.leftColum}>
           
            <div className={styles.nextBackContainer}>
            <IoIosArrowBack className={styles.nextBackContainerIcon} />
            <div className={styles.nextBackNumber}>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
            <MdNavigateNext className={styles.nextBackContainerIcon} />
            </div>
          </div>
          <div className={styles.rightColum}>
            <RightColumPostCart />
          </div>
        </div>
    </div>
  )
}

export default Blog
