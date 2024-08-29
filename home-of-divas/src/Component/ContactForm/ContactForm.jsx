import React from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail} from "react-icons/md";

const ContactForm = () => {
    return (
        <div className={styles.contact_form}>
            <h2>Get in Touch</h2>
            <div className={styles.contact_form_Con}>
                <div className={styles.form_col}>
                    <form action="">
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
                        <input type="text" name="name" id="" placeholder='Enter your name' />
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="text" name="" id="" placeholder='Enter Subject' />
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className={styles.address_col}>
                    <div className={styles.address_box}>
                        <div className={styles.address_icon}>
                        <IoHomeOutline/>
                        </div>
                        <div className={styles.address_text}>
                            <h4>Buttonwood, California.</h4>
                            <p>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className={styles.address_box}>
                        <div className={styles.address_icon}>
                        <FiPhoneCall/>
                        </div>
                        <div className={styles.address_text}>
                            <h4>+1 253 565 2365</h4>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className={styles.address_box}>
                        <div className={styles.address_icon}>
                        <MdOutlineEmail/>
                        </div>
                        <div className={styles.address_text}>
                            <h4>support@colorlib.com</h4>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
