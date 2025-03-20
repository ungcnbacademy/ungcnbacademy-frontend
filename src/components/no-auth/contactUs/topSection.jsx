import React from 'react';
import styles from './topSection.module.css';
import { companyInfo } from '@/constants/constants';
import { FaSquareXTwitter, FaSquareFacebook, FaLinkedin } from 'react-icons/fa6';

export default function TopSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Have questions about the {companyInfo.name}? <br /> We would love to hear from you
        </h1>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>CONNECT WITH US!</p>
        <div className={styles.socials}>
          <a href={companyInfo.socials.twitter} target="_blank">
            <FaSquareXTwitter className={styles.icon} />
          </a>
          <a href={companyInfo.socials.facebook} target="_blank">
            <FaSquareFacebook className={styles.icon} />
          </a>{' '}
          <a href={companyInfo.socials.linkedin} target="_blank">
            <FaLinkedin className={styles.icon} />
          </a>{' '}
        </div>
      </div>
    </div>
  );
}
