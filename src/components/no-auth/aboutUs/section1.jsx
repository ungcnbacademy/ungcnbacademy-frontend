
import React from 'react';
import styles from './section1.module.css';
import Image from 'next/image';
export default function Section1() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.box}>
            <p className={styles.title}> 50+</p>
            <p className={styles.text}>massive open online courses to date</p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <p className={styles.text}>students from over</p>
            <p className={styles.title}>100+</p>
            <p className={styles.text}>countries</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>alumni </p>
            <p className={styles.title}>100</p>
            <p className={styles.title}>million</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Image src="/assets/about/map.svg" alt="mission" width={500} height={500} className={styles.map} />
      </div>
    </div>
  );
}
