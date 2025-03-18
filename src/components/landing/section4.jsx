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
          The UNGCNB Academy is an initiative of the Bangladesh Network of the United Nations Global Compact – the world’s largest
          corporate sustainability initiative.
          <br />
          The UNGCNB Academy provides business leaders and practitioners with the skills and knowledge they need to advance their
          companies in implementing the Ten Principles of the UN Global Compact, ESG Principles, and the Sustainable Development
          Goals.
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
