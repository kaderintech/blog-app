import React from "react";
import styles from "./topdest.module.css";
import Image from "next/image";

const TopDest = () => {
    return (
        <div className={`${styles.topDest} wrapper`}>
            <h2>Top Destinations</h2>
            <p>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>
            <div className={styles.views}>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className={styles.destContainer}>
                        <div className={styles.imgContainer}>
                            <Image width="230" height="180" src="/manzara.svg" alt="Destination" />
                            <p className={styles.title}>Dominican Republic</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopDest;
