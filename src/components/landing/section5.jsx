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
          <h1 className={styles.title}>Join the Movement. Learn from the Best.</h1>
          <p className={styles.description}>
            At {companyInfo.name}, our courses and programs are led by top academics, industry experts, and global leaders. Be part of a learning journey that creates real impact.
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
