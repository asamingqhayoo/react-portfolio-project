import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>Our will development web application and electronics exam</p>
          <img
            src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/354940607_6250829338287245_8830041056882642818_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0XdBusGTJ0oAX9sV3vv&_nc_ht=scontent-bkk1-1.xx&oh=00_AfChDZvwZwfD0eH-zjQs2nbqiagqW-QwsPrOws_bKq7Q9Q&oe=65B44467"
            alt=""
          />
          <h4>Ya</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>Our will development web application and electronics exam</p>
          <img
            src="https://scontent-bkk1-1.xx.fbcdn.net/v/t31.18172-8/25487311_1771944889775049_3067101585440103664_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=w5YbZRjNz0MAX-LB8sS&_nc_ht=scontent-bkk1-1.xx&oh=00_AfAAWP26e8_i0GI7HVvFktq4Gtlvw5SsIO1kWmPOq2NBQQ&oe=65D6D478"
            alt=""
          />
          <h4>BOY</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>Our will development web application and electronics exam</p>
          <img
            src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/341184412_2155205771356948_7912492857856657454_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=gvYtqyYEwAcAX8iib9L&_nc_ht=scontent-bkk1-1.xx&oh=00_AfD8Ur4Dft4sTDILiYjom9HeovMqxa7eWPObUC3AfObZZw&oe=65B4F6D7"
            alt=""
          />
          <h4>ERT</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>Our will development web application and electronics exam</p>
          <img
            src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/332711647_5626995820756537_325894852615016670_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=mOVTgu_KhIgAX_5Hlqz&_nc_ht=scontent-bkk1-1.xx&oh=00_AfAYsGIf_8IUisIY3vecr8Jqc-M-I02O0m7CzkXqvl0h3g&oe=65B4529D"
            alt=""
          />
          <h4>MINK</h4>
          <p className={styles.bio}>Web Design</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
