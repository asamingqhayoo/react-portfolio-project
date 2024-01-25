import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaPalette, FaWordpress, FaDatabase } from "react-icons/fa6";

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Service</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
          <FaCode />
          <h4>Web Development</h4>
          <p> Our will development web application and electronics exam</p>
        </div>
        <div className={styles.services_items}>
          <FaPalette />
          <h4>Web Design</h4>
          <p> Our will development web application and electronics exam</p>
        </div>
        <div className={styles.services_items}>
          <FaDatabase />
          <h4>Database</h4>
          <p> Our will development web application and electronics exam</p>
        </div>
        <div className={styles.services_items}>
          <FaWordpress />
          <h4>WordPress</h4>
          <p> Our will development web application and electronics exam</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
