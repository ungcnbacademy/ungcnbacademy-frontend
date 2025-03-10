import React from 'react';
import styles from './infoSection.module.css';
import { companyInfo } from '@/constants/constants';
export default function InfoSection() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contact us</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.text}>General Inquiries</p>
          <p className={styles.email}>{companyInfo.email}</p>
          <p className={styles.text}>Call us (9.00 - 18.00 BST)</p>
          <p className={styles.email}>{companyInfo.phone}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.section}>
            <p className={styles.text}>Find us</p>
            <p className={styles.text}>Bangladesh</p>
            <p className={styles.address}>{companyInfo.address}</p>

           
          </div>
        </div>
      </div>
    </div>
  );
}
