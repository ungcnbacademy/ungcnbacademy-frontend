import React from 'react';
import styles from './section5.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button/button';
import { companyInfo } from '@/constants/constants';
export default function Section5() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.videoWrapper}>
          <video autoPlay loop muted className={styles.video} playsInline>
            <source src="/assets/landing/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <h1 className={styles.title}>Meet Our Faculty</h1>
          <p className={styles.description}>
            {companyInfo.name} courses and degree programs are taught by academics, practitioners, and global leaders. Learn about
            our faculty here.
          </p>
          <br />
          <Link href="/courses" className={styles.link}>
            <Button text="Our Courses" />
          </Link>
        </div>
      </div>
    </div>
  );
}
