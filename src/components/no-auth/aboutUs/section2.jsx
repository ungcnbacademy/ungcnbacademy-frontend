import { companyInfo } from '@/constants/constants';
import React from 'react';
import styles from './section2.module.css';
export default function Section2() {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        The {companyInfo.name} is made possible through the generous support of the ESG institute Bangladesh. Support from others are gratefully acknowledged.
      </p>
    </div>
  );
}
