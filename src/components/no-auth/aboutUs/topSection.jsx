import React from 'react';
import styles from './topSection.module.css';
import { companyInfo } from '@/constants/constants';

export default function TopSection() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>About {companyInfo.name}</h1>
      <p className={styles.text}>The {companyInfo.name} represents the education and training portfolio of the UN Sustainable Development Solutions Network.</p>
    </div>
  );
}
