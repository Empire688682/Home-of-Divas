import React from 'react'
import styles from './VideoLink.module.css';
import Image from 'next/image';
import { IoIosPlayCircle } from "react-icons/io";

const VideoLink = () => {
  return (
    <div className={styles.video_link}>
       <Image src="/video-bg.png" alt='' fill />
       <div className={styles.play_icon}>
       <IoIosPlayCircle/>
       </div>
    </div>
  )
}

export default VideoLink
