import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./mlsc-logo.png";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.polygon}>
          <img src={sheild} className={styles.sheild} alt="Sheild" />
        </div>
        <p className={styles.mobileTitle}>Microsoft Learn Student Chapter</p>
      </div>
      <div className={styles.right}>
        <div className={styles.microsoft}>MICROSOFT</div>
        <div className={styles.learn}>LEARN STUDENT</div>
        <div className={styles.chapter}>CHAPTER</div>
      </div>
    </div>
  );
};

export default LandingPage;
