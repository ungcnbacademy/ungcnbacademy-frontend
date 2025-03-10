import React from 'react';
import styles from './topSection.module.css';
import { companyInfo } from '@/constants/constants';

export default function TopSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Have questions about the {companyInfo.name}? <br /> We would love to hear from you
        </h1>
      </div>
      <div className={styles.container}>
        <p>CONNECT WITH US!</p>
        <p>
          x: <a href={companyInfo.socials.twitter}>{companyInfo.socials.twitter}</a>
        </p>
        <p>
          Facebook: <a href={companyInfo.socials.facebook}>{companyInfo.socials.facebook}</a>{' '}
        </p>
        <p>
          Linkedin: <a href={companyInfo.socials.linkedin}>{companyInfo.socials.linkedin}</a>{' '}
        </p>
      </div>
    </div>
  );
}
