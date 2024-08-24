import React from "react";
import styles from "./featured.module.css"

const Featured = () => {
  return (
    <div className={styles.background}>
        <div className={styles.cta}>
            <h1>Inspiration for travel by real people.</h1>
            <p>Book smart, travel simple</p>
        </div>
        <div className={`${styles.btn} btn`}>
            <button>Start planning your trip</button>
        </div>
    </div>
  );
};

export default Featured;
