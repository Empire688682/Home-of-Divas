import styles from './LeftColumPostCart.module.css';
import { FaRegUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';

const LeftColumPostCart = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.smallLeftColum}>
        <div className={styles.smallLeftColumHeadDetails}>
          <div className={styles.detailsCart}>
            <p>Rossie Simba</p>
            <FaRegUser className={styles.detailsIcon} />
          </div>
          <div className={styles.detailsCart}>
            <p>1.2M Views</p>
            <IoMdEye className={styles.detailsIcon} />
          </div>
          <div className={styles.detailsCart}>
            <p>12 Dec, 2017</p>
            <MdOutlineDateRange className={styles.detailsIcon} />
          </div>
          <div className={styles.detailsCart}>
            <p>06 Comments</p>
            <BiMessageRounded className={styles.detailsIcon} />
          </div>
        </div>
      </div>
      <div className={styles.bigColumColum}>
        <div className={styles.bigColumColumImgCon}>
          <Image src={post.imageSrc} alt='' fill />
        </div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/blog/${post.id}`}><button>View More</button></Link>
      </div>
    </div>
  );
};

export default LeftColumPostCart;
