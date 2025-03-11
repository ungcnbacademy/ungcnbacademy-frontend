import React from 'react';
import styles from './section4.module.css';
import Button from '../ui/button/button';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/constants/constants';

export default function Section4() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={styles.text}>
          The {companyInfo.name} is a program of the Sustainable Development Solutions Network, a global initiative for the United
          Nations supporting the Sustainable Development Goals.
        </p>
        <Link href="/about-us">
          <Button text="About Us" variant="outLined" className={styles.button} />
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}>
          <Image src="/logoBlack.svg" alt="Logo" width={200} height={80} />
        </div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}
