import React, { useContext } from 'react';
import styles from "./post.module.css";
import Image from "next/image";
import { DataContext } from "@/context/DataProvider";

const Post = () => {
    const data = useContext(DataContext);

    return (
        <div className={`${styles.posts} wrapper`}>
        {data.contents?.map((item, index) => (
            <div key={index} className={`${styles.postContainer} wrapper`}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.postImage}
                        width="560"
                        height="400"
                        src={item.image}
                        alt={item.image_alt}
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
                        <div className={styles.circleOverlay}>
                            <Image
                                width="23"
                                height="23"
                                src="/img.svg"
                                alt="Icon"
                            />
                        </div>
                    </div>
                </div>
                <h2>{item.title}</h2>
                <div className={styles.infodetail}>
                    <Image width="40" height="40" src={item.author.image} alt="Author" />
                    <h4>{item.author.name} { item.author.surname}</h4>
                    <p> — </p>
                    <p>{item.datePublished.split("T")[0].split("-").reverse().join("-")}</p>
                    <p>.</p>
                    <Image src="/share.svg" width="15" height="15" alt="Share icon" />
                    <p>1K shares</p>
                </div>
                <p className={styles.postDesc}>
                    {item.description}
                </p>
                <div>
                    <button>
                        View Post
                        <div className={styles.btnLine}></div>
                    </button>
                </div>
            </div>
        ))}
            <div className={styles.loadBtn}>
                <button>Load More</button>
            </div>
        </div>
    );
};

export default Post;



