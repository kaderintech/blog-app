import React from "react";
import styles from "./post.module.css";
import Image from "next/image";

const Post = () => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.imageWrapper}>
                <Image width="560" height="420" src="https://picsum.photos/seed/picsum/560/420" />
                <div className={styles.onImg}>
                    <div className={styles.onImgLeft}>
                        <div className={styles.overlay}>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className={styles.overlay}>
                            <p>Aliquam</p>
                        </div>
                    </div>
                    <div className={styles.circleOverlay}>
                        <Image width="23" height="23" src="/img.svg" />
                    </div>
                </div>
            </div>
            <h2>Integer Maecenas Eget Viverra</h2>
            <div className={styles.infodetail}>
                <Image width="40" height="40" src="/author.jpg" />
                <h4>Joanna Wellick</h4>
                <p> — </p>
                <p>June 28, 2018</p>
                <p>.</p>
                <Image src="/share.svg" width="15" height="15" />
                <p>1K shares</p>
            </div>
            <p className={styles.postDesc}>
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
                Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
            </p>
            <div className="">
                <button>
                    View Post
                    <div className={styles.btnLine}></div>
                </button>
            </div>
        </div>
    );
};

export default Post;
