import styles from './RightColumPostCart.module.css'
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";


const RightColumPostCart = () => {
    return (
        <div className={styles.conatainer} >
            <div className={styles.searchPost}>
                <input type="text" required placeholder='Search Posts' />
                <button><FaSearch className={styles.searchPostIcon} /></button>
            </div>
            <hr />
            <div className={styles.bloger}>
                <div className={styles.logo_Con}>
                    <h2>Divas</h2>
                </div>
                <h2 className={styles.authorName}>Divas Blog</h2>
                <div className={styles.blogSocialIcons}>
                    <FaFacebookF className={styles.blogSocialIcon} />
                    <BsInstagram className={styles.blogSocialIcon} />
                    <SlSocialTwitter className={styles.blogSocialIcon} />
                    <CiLinkedin className={styles.blogSocialIcon} />
                </div>
                <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
            </div>
            <hr />
            <div className={styles.popularPosts}>
                <h1>Popular Posts</h1>
                <div className={styles.popularPostsCart}>
                    <div className={styles.popularPostsImgCon}>
                        <Image src='/image1.png' alt='' fill />
                    </div>
                    <div className={styles.popularPostsTititle}>
                        <h3>Space The Final Frontier</h3>
                        <p>02 Hours ago</p>
                    </div>
                </div>
                <div className={styles.popularPostsCart}>
                    <div className={styles.popularPostsImgCon}>
                        <Image src='/image2.png' alt='' fill />
                    </div>
                    <div className={styles.popularPostsTititle}>
                        <h3>How to get close to God</h3>
                        <p>02 Hours ago</p>
                    </div>
                </div>
                <div className={styles.popularPostsCart}>
                    <div className={styles.popularPostsImgCon}>
                        <Image src='/image3.png' alt='' fill />
                    </div>
                    <div className={styles.popularPostsTititle}>
                        <h3>How to become rich</h3>
                        <p>02 Hours ago</p>
                    </div>
                </div>
                <div className={styles.popularPostsCart}>
                    <div className={styles.popularPostsImgCon}>
                        <Image src='/image4.png' alt='' fill />
                    </div>
                    <div className={styles.popularPostsTititle}>
                        <h3>How to train my Dog</h3>
                        <p>02 Hours ago</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.middleImgCon}>
                <Image src='/socialLife.jpg' alt='' fill />
            </div>
            <hr />
            <div className={styles.rightColumPostsCategories}>
                <h1>Post Catgories</h1>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Technology</p>
                    <p>37</p>
                </div>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Lifestyles</p>
                    <p>7</p>
                </div>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Fashion</p>
                    <p>70</p>
                </div>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Art</p>
                    <p>20</p>
                </div>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Food</p>
                    <p>29</p>
                </div>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Architecture</p>
                    <p>15</p>
                </div>
                <div className={styles.rightColumPostsCategoriesCart}>
                    <p className={styles.title}>Adventure</p>
                    <p>35</p>
                </div>
            </div>
            <hr />
            <div className={styles.newsletter}>
                <h2>Newsletter</h2>
                <p>Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
                <div className={styles.subcribeSection}>
                    <AiOutlineMail style={{ width: "25px", height: "25px", color:"gray" }} />
                    <input type="email" name="" id="" required placeholder='Enter email' />
                    <button>Subscribe</button>
                </div>
                <p>You can unsubscribe at any time</p>
            </div>
            <hr />
            <div className={styles.tagClouds}>
                <h2>Tag Clouds</h2>
                <ul className={styles.tagCloudsCart}>
                    <li>Technology</li>
                    <li>Fashion</li>
                    <li>Architecture</li>
                    <li>Fashion</li>
                    <li>Food</li>
                    <li>Lifestyle</li>
                    <li>Art</li>
                    <li>Adventure</li>
                </ul>
            </div>
        </div>
    )
}

export default RightColumPostCart
