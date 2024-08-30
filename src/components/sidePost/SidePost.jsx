import React from "react";
import styles from "./sidepost.module.css"
import Image from "next/image";

const SidePost = () => {
  return (
    <div className={styles.sidepostContainer} >
        <div className={styles.sidepostContent}>
            <Image src="/icon-img.svg" alt="" width="80" height="80" />
            <p>Integer Maecenas Eget
              Viverra
            </p>
        </div>

        <div className={styles.sidepostContent}>
            <Image src="/icon-img.svg" alt="" width="80" height="80" />
            <p>Integer Maecenas Eget
                Viverra
            </p>
        </div>

        <div className={styles.sidepostContent}>
            <Image src="/icon-img.svg" alt="" width="80" height="80" />
            <p>Integer Maecenas Eget
                Viverra
            </p>
        </div>

        <div className={styles.sidepostContent}>
            <Image src="/icon-img.svg" alt="" width="80" height="80" />
            <p>Integer Maecenas Eget
                Viverra
            </p>
        </div>

          <div className={styles.sidepostContent}>
              <Image src="/icon-img.svg" alt="" width="80" height="80" />
              <p>Integer Maecenas Eget
                  Viverra
              </p>
          </div>
    </div>
  );
};

export default SidePost;
