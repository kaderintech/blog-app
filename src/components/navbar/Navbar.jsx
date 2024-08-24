"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="logo.svg" alt="logo" width="360" height="49" />
      </div>
      <div className={`${styles.links} ${isOpen ? styles.showMenu : ""}`}>
        <Link href="/">destinations</Link>
        <Link href="/">food</Link>
        <Link href="/">well being</Link>
        <Link href="/">sport</Link>
        <Link href="/">family</Link>
        <Link href="/">lifestyle</Link>
      </div>
      <div className={styles.ctaBtn}>
        <div>
          <img src="./search.svg" />
        </div>
        <button>Get your 120$ christmas gift</button>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
