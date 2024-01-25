import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isToggled, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!isToggled);
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">E-Student</a>
          </div>
          <ul>
            <li>
              <a href="#">Study</a>
            </li>
            <li>
              <a href="#">Activity</a>
            </li>
            <li>
              <a href="#">Exam</a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="#">Log in</a>
          </div>
        </div>

        {/* mobile menu */}
        <FaBars className={styles.nav_bars} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
              <li>
                <a href="#">Study</a>
              </li>
              <li>
                <a href="#">Activity</a>
              </li>
              <li>
                <a href="#">Exam</a>
              </li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#">Log in</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
