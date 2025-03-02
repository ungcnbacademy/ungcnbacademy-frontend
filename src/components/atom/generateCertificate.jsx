'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './generateCertificate.module.css';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import Button from '../ui/button/button';
import LoadingDots from '../ui/loading/loadingDots';

export default function GenerateCertificate({ name = '', title = '', date = '', certificateId = '' }) {
  const containerRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCapture = async () => {
    if (!containerRef.current) return;
    if (name && title && date && certificateId) {
      if (containerRef.current) {
        setLoading(true);
        try {
          const image = await toPng(containerRef.current);
          setImageSrc(image); // Set the image source
        } catch (error) {
          console.error('Failed to capture the container:', error);
        } finally {
          setLoading(false);
        }
      }
    } else {
      alert('Info not found');
    }
  };

  useEffect(() => {
    if (name && title && date && certificateId) {
      setTimeout(() => {
        handleCapture();
      }, 1000);
    }
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.certificateOverlay}>
        <div className={styles.certificateContainer} ref={containerRef}>
          <div className={styles.logoContainer}>
            <img src="/logoBlack.svg" alt="Logo" className={styles.logo1} />
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
      {loading && <LoadingDots />}
      <div className={styles.container}>
        {imageSrc && <img src={imageSrc} alt="Generated Certificate" width={500} className={styles.certificateImage} />}
        <div className={styles.buttonSection}>
          {!imageSrc && <Button text="Generate Certificate" onClick={handleCapture} loading={loading} variant='outLined' />}
          {imageSrc && !loading && (
            <a href={imageSrc} download="certificate.png">
              {' '}
              <Button text="Download Certificate" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
