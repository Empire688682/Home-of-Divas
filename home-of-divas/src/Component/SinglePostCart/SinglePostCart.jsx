import Image from 'next/image';
import styles from './SinglePostCart.module.css';
import { FaRegUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const SinglePostCart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.singlePostBanner}>
                <Image src='' alt='' fill />
            </div>
            <div className={styles.singlePostContent}>
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
                        <div className={styles.detailsCart}>
                            <FaFacebookF className={styles.blogSocialIcon} />
                            <BsInstagram className={styles.blogSocialIcon} />
                            <SlSocialTwitter className={styles.blogSocialIcon} />
                            <CiLinkedin className={styles.blogSocialIcon} />
                        </div>
                    </div>
                </div>
                <div className={styles.bigColumColum}>
                    <h2>post.title</h2>
                    <p>post.body</p>
                    <p>post.body</p>
                    <p>post.body</p>
                </div>
            </div>
            <div className={styles.centerPTag}>
                <p>Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed</p>
            </div>
            <div className={styles.singlePostSubContent}>
                <div className={styles.doubleImageCon}>
                    <div className={styles.doubleColumImage}>
                        <Image src='/image5.png' alt='' fill />
                    </div>
                    <div className={styles.doubleColumImage}>
                        <Image src='/image6.png' alt='' fill />
                    </div>
                </div>
                <p>Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed</p>
                <p>Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed</p>
            </div>
            <hr />
            <div className={styles.prevNextPostCon}>
                <div className={styles.prevNextPostConCart}>
                    <div className={styles.prevNextPostIcon1}>
                        <div className={styles.prevNextIconCon}>
                            <FaArrowLeftLong className={styles.prevNextIcon} />
                        </div>

                    </div>
                    <div className={styles.prevNextPostDetails}>
                        <p>Prev Post</p>
                        <h3>Space The Final Frontier</h3>
                    </div>
                </div>
                <div className={styles.prevNextPostConCart}>
                    <div className={styles.prevNextPostIcon2} >
                        <div className={styles.prevNextIconCon}>
                            <FaArrowRight className={styles.prevNextIcon} />
                        </div>
                    </div>
                    <div className={styles.prevNextPostDetails}>
                        <p>Next Post</p>
                        <h3>Telescopes 101</h3>
                    </div>
                </div>
            </div>
            <div className={styles.reviewSection}>
                <h2>05 Comments</h2>
                <div className={styles.reviewCart}>
                    <div className={styles.reviewImageSide}>
                        <div className={styles.reviewImageCon}>
                            <Image src='/review1.jpg' alt='' fill />
                        </div>
                        <div className={styles.reviewContent}>
                            <h3>Elsie Cunningham</h3>
                            <small>December 4, 2017 at 3:12 pm</small>
                            <p>Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                    <button className={styles.reviewReplyButton}>REPLY</button>
                </div>
                <div className={styles.reviewCart}>
                    <div className={styles.reviewImageSide}>
                        <div className={styles.reviewImageCon}>
                            <Image src='/review2.jpg' alt='' fill />
                        </div>
                        <div className={styles.reviewContent}>
                            <h3>Elsie Cunningham</h3>
                            <small>December 4, 2017 at 3:12 pm</small>
                            <p>Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                    <button className={styles.reviewReplyButton}>REPLY</button>
                </div>
                <div className={styles.reviewCart}>
                    <div className={styles.reviewImageSide}>
                        <div className={styles.reviewImageCon}>
                            <Image src='/review3.jpg' alt='' fill />
                        </div>
                        <div className={styles.reviewContent}>
                            <h3>Elsie Cunningham</h3>
                            <small>December 4, 2017 at 3:12 pm</small>
                            <p>Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                    <button className={styles.reviewReplyButton}>REPLY</button>
                </div>
                <div className={styles.reviewCart}>
                    <div className={styles.reviewImageSide}>
                        <div className={styles.reviewImageCon}>
                            <Image src='/review4.jpg' alt='' fill />
                        </div>
                        <div className={styles.reviewContent}>
                            <h3>Elsie Cunningham</h3>
                            <small>December 4, 2017 at 3:12 pm</small>
                            <p>Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                    <button className={styles.reviewReplyButton}>REPLY</button>
                </div>
                <div className={styles.reviewCart}>
                    <div className={styles.reviewImageSide}>
                        <div className={styles.reviewImageCon}>
                            <Image src='/review5.jpg' alt='' fill />
                        </div>
                        <div className={styles.reviewContent}>
                            <h3>Elsie Cunningham</h3>
                            <small>December 4, 2017 at 3:12 pm</small>
                            <p>Never say goodbye till the end comes!</p>
                        </div>
                    </div>
                    <button className={styles.reviewReplyButton}>REPLY</button>
                </div>
            </div>
            <div className={styles.reviewSection}>
                <h2>Leave Comment</h2>
                <form action="">
                    <input type="text" name="" id=""  placeholder='Enter Name' required/>
                    <input type="email" name="" id="" placeholder='Enter email address' required />
                    <input type="text" name="" id=""  placeholder='Your Subject' required/>
                    <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        </div>
    )
}

export default SinglePostCart
