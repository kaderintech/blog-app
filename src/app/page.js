"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"; 
import Featured from "@/components/featured/Featured";
import Post from "@/components/post/Post";
import Bigpost from "@/components/bigpost/Bigpost";
import TopDest from "@/components/destinations/TopDest";
import Category from "@/components/category/Category";

export default function Home() {
  return (
   <div>
     <Featured/>
     <div className={styles.posts}>
        <Post />
        <Post />
        <Post /> 

        <Post />
        <Post />
        <Post /> 

        <Post />
        <Post />
        <Post /> 
      </div>
      <div className={styles.loadBtn}>
        <button>Load More</button>
      </div>
      <Bigpost/>
      <TopDest/>
      <Category/>
   </div>
  );
}
