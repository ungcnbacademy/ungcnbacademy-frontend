import React from 'react';
import styles from './mission.module.css';
import Image from 'next/image';
export default function Mission() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={styles.title}>Our Mission</p>
        <p className={styles.text}>
          The UNGCNB Academy empowers individuals and organizations with cutting-edge learning on sustainability, ESG, and
          responsible business. Through innovative training and a dynamic learning community, we equip professionals with the
          knowledge and tools to advance the UN Global Compact’s 10 Principles and drive meaningful impact on society, the
          environment, and the economy.
        </p>
        <Image src="/logoBlack.svg" alt="mission" width={200} height={70} className={styles.logo} />
      </div>
      <div className={styles.right}>
        <Image src="/assets/about/mission.webp" alt="mission" width={500} height={500} className={styles.image} />
      </div>
    </div>
  );
}
