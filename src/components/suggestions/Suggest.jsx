import React from "react";
import styles from "./suggest.module.css"
import Image from "next/image";

const Suggest = () => {
  return (
    <div className={styles.suggestions}>
        <h1>
            YOU MAY ALSO LIKE
        </h1>
        <div className={styles.suggestPostContainer}>
            <div className={styles.suggestPost}>
                <Image
                    className={styles.postImage}
                    width="350"
                    height="250"
                    src="/suggest3.svg"
                    alt="xx"
                />
                <div className={styles.onImg}>
                    <div className={styles.onImgLeft}>
                        <div className={styles.overlay}>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className={styles.overlay}>
                            <p>Aliquam</p>
                        </div>
                    </div>
                </div>
                <div className={styles.suggestPostDesc}>
                    <h1>Integer Maecenas Eget Viverra.
                        <span>Aenean eleifend ante maecenas pulvinar montes lorem et pede.</span>
                    </h1>
                      <p>June 21,2022
                        -  2 minute read</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Suggest;
