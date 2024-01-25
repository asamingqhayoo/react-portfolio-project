import React from "react";
import styles from "./Contact.module.css";
import { Fa42Group, FaEnvelope, FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3>Get in Touch</h3>
          <p className={styles.contact_desc}>
            Our will development web application and electronics exam.
          </p>
          <p className={styles.contact_address}>
            43 m.6 Bangphra Sriracha Chonburi 20110
          </p>
          <p>
            <FaPhone /> (+66 95 875 5509)
          </p>
          <p>
            <FaEnvelope /> atsaming_ma@rmutto.ac.th
            <Fa42Group />
          </p>
        </div>
        <div className={styles.contact_form}>
          <form action="">
            <div className={styles.input_group}>
              <div>
                <label htmlFor="firt name">First Name</label>
                <input type="text" placeholder="eg. Atsaming" />
              </div>
              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" placeholder="eg. Matsamae" />
              </div>
            </div>
            <label htmlFor="email Address">Email Address</label>
            <input type="email" placeholder="eg. atsaming_ma@rmtuuo.ac.th" />
            <label htmlFor="message">Your Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type here..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
