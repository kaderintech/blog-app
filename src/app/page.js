import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"; 

export default function Home() {
  return (
   <div>
      <div className={styles.background}>
        <h1>Lorem ipsum do lor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit.</p>
        <button>Start panning your trip</button>
      </div>
   </div>
  );
}
