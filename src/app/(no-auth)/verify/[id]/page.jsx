import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function VerifyCertificate({ params }) {
  return (
    <div className={styles.main}>
      <Image src="/assets/certificate.webp" alt="certificate" width={1920} height={1080} className={styles.certificate} />
    </div>
  );
}
