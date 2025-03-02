'use client';
import React, { useRef, useState } from 'react';
import styles from './generateCertificate.module.css';
import Image from 'next/image';
export default function GenerateCertificate({ name = 'William J Gates', title = ' Software Engineering Specialization ', date = '18 June 2023', certificateId = 'GFDS543' }) {
  const containerRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className={styles.main}>
      <div className={styles.certificateContainer} ref={containerRef}>
        <div className={styles.logoContainer}>
          <img src="/logoBlack.svg" alt="Logo"  className={styles.logo1} />
          <img src="/assets/certificate/logo.png" alt="Logo" className={styles.logo2} />
        </div>
        <div className={styles.top}>
          <p className={styles.subtitle}>We hereby certify that,</p>
          <p className={styles.name}> {name}</p>
        </div>
        <div className={styles.middle}>
          <p className={styles.subtitle}>has successfully completed and received a passing grade in </p>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>an online non credit course offered through ESGeducation on {date}. </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.signatureContainer}>
            <img src="/assets/certificate/signature.png" alt="Logo" width={190} height={70} className={styles.signature} />
            <p className={styles.name}>David J. Malan</p>
            <p className={styles.designation}>Vice President, CBEC.</p>
          </div>
          <img src="/assets/certificate/stamp.png" alt="Logo" width={149} height={149} />
          <div className={styles.qrContainer}>
            <div className={styles.qr}></div>
            <p className={styles.qrText}>https://esgeducation.netlify.app/verify/{certificateId}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
