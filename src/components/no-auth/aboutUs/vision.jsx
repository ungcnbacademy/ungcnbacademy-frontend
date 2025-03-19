'use client';
import React from 'react';
import styles from './vision.module.css';
import Button from '@/components/ui/button/button';
export default function Vision() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Our Vision</p>
      <p className={styles.text}>
        Our vision is a sustainable future where the 17 SDGs are realized through collective learning, collaboration, and action.
        UNGCNB Academy will be a catalyst for change, uniting businesses, educators, policymakers, and practitioners to advance
        ESG principles and responsible business practices. By fostering partnerships and localized solutions, we aim to build an
        ESG-responsible world for future generations, equipping stakeholders with the knowledge and networks to drive meaningful
        impact.
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
