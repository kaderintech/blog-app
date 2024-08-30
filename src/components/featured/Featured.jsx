import React, { useContext } from 'react';
import styles from "./featured.module.css"
import { DataContext } from "@/context/DataProvider";
import Image from 'next/image';


const Featured = () => {
  const data = useContext(DataContext);
  
  if (!data || !Array.isArray(data.images)) {
    return <div>Loading...</div>; // Yükleniyor göstergesi
  }
  return (
    <div
      className={`${styles.background}`}
      style={{ backgroundImage: `url(${data.images[0].image_url})` }} // Dinamik arka plan resmi
    >
      <div className={styles.cta}>
        <h1>Inspiration for travel by real people.</h1>
        <p>Book smart, travel simple</p>
        <div className={`${styles.btn} btn`}>
          <button>Start planning your trip</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
