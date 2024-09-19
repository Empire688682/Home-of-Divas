// src/app/blog/[slug]/page.jsx
import React from 'react';
import styles from './singlePost.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import SinglePostCart from '@/Component/SinglePostCart/SinglePostCart';
import RightColumPostCart from '@/Component/RightColumPostCart/RightColumPostCart';


const SinglePost = async ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.blogHead}>
        <h1>Blog Details Page</h1>
        <div className={styles.headLinks}>
          <Link href='/' style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link href='/blog' style={{ color: "white", textDecoration: "none" }}>Blog</Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link href={`/blog/j`} style={{ color: "white", textDecoration: "none" }}>Single Blog</Link>
        </div>
      </div>
      <div className={styles.singlePostContent}>
        <div className={styles.SinglePost}>
          <SinglePostCart/>
        </div>
        <div className={styles.RightColumPostCart}>
          <RightColumPostCart />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
