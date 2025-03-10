import React from 'react';
import styles from './section2.module.css';
import Image from 'next/image';
export default function Section2() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <p className={styles.title}>LEARN HOW WE CAN NOT JUST COEXIST ON THIS PLANET, BUT COME TOGETHER TO SAVE IT.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <p className={styles.title}>THE PREMIER SOURCE OF HIGH-QUALITY RESOURCES AND GUIDANCE ON EDUCATION FOR THE SDGS.</p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <p className={styles.quote}>
              Sustainability is not just a commitment; it is a continuous journey of collaboration between businesses,
              communities, and development partners. By fostering responsible leadership and inclusive growth, we can create
              lasting impact for both people and the planet." <br /> <br /> — Ms. Zaman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
