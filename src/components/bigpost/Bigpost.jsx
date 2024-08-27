import React from "react";
import styles from "./bigpost.module.css"
import Image from "next/image";

const Bigpost = () => {
  return (
    <div className={`${styles.bigPostContainer} wrapper`}> 
        <img src="/BigPost.svg" alt="Big Post Image" className={styles.bigPostImage} />
        <div className={styles.slogan}>
            <button>Travel</button>
            <h2>Richird Norton photorealistic rendering as real photos</h2>
            <p>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
            <div className={styles.btn}>
                <button>Start planning your trip</button>
            </div>
        </div>
    </div>
  )
};

export default Bigpost;
