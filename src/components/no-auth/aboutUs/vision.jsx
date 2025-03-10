'use client';
import React from 'react';
import styles from './vision.module.css';
import Button from '@/components/ui/button/button';
export default function Vision() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Our Vision</p>
      <p className={styles.text}>
        Our vision is to foster a sustainable future where the{' '}
        <span className={styles.span}>17 Sustainable Development Goals (SDGs)</span> are realized through the collective efforts
        of educators, policymakers, practitioners, and citizens. The <span className={styles.span}> UNGCNB Academy </span> will
        serve as a platform for learning, collaboration, and partnership, uniting global communities to advance sustainable
        development. By partnering with businesses, academic institutions, trainers, researchers, and other stakeholders, we aim
        to build an ESG-responsible world for the next generation, enhancing our knowledge and networks to drive meaningful change
        in sustainability.
      </p>
      <Button
        text="Learn More"
        variant="primary"
        onClick={() => {
          window.open('https://globalcompactbd.org/about/principles', '_blank');
        }}
      />
    </div>
  );
}
