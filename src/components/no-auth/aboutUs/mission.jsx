import React from 'react';
import styles from './mission.module.css';
import Image from 'next/image';
export default function Mission() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={styles.title}>Our Mission</p>
        <p className={styles.text}>
          At UNGCNB Academy, we are dedicated to developing and delivering impactful learning experiences on sustainability, ESG,
          and responsible business practices. Our goal is to equip individuals and organizations with the knowledge, skills, and
          tools needed to drive meaningful change. We curate cutting-edge content, foster innovative training models, and
          cultivate a dynamic community of learners committed to advancing ESG principles and the UN Global Compact's 10
          Principles. By empowering businesses and professionals, we strive to maximize their potential to create lasting positive
          impacts on society, the environment, and the economy.
        </p>
        <Image src="/logoBlack.svg" alt="mission" width={200} height={70} className={styles.logo} />
      </div>
      <div className={styles.right}>
        <Image src="/assets/about/mission.webp" alt="mission" width={500} height={500} className={styles.image} />
      </div>
    </div>
  );
}
