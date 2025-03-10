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
            <p className={styles.title}> 100+</p>
            <p className={styles.text}>Countries already engaged with UNGCNB Academy.</p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <p className={styles.title}>5+</p>
            <p className={styles.text}>Foundational courses in sustainable development and ESG responsibility.</p>
          </div>
          <div className={styles.box}>
            <p className={styles.title}>100+</p>
            <p className={styles.text}>Global leaders aligned with us to drive sustainable change.</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Image src="/assets/about/map.svg" alt="mission" width={500} height={500} className={styles.map} />
      </div>
    </div>
  );
}
