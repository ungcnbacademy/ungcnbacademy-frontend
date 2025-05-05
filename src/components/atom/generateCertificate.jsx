'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './generateCertificate.module.css';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import Button from '../ui/button/button';
import LoadingDots from '../ui/loading/loadingDots';
import generatePDF from 'react-to-pdf';

export default function GenerateCertificate({ name = '', title = '', date = '', certificateId = '' }) {
  const containerRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const options = {
    filename: 'certificate.pdf',
    page: {
      format: 'A4',
      orientation: 'landscape',
    },
  };

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
            <img src="/assets/certificate/gcnb.png" alt="Logo" className={styles.logo2} />
            <img src="/assets/certificate/logo.png" alt="Logo" className={styles.logo3} />
          </div>
          <div className={styles.top}>
            <p className={styles.subtitle}>We hereby certify that,</p>
            <p className={styles.name}> {name}</p>
          </div>
          <div className={styles.middle}>
            <p className={styles.subtitle}>has successfully completed and received a passing grade in </p>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>an online non credit course offered through UNGCNB Impact Academy on {date}. </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.signatureContainer}>
              <img src="/assets/certificate/signature.png" alt="Logo" width={300} height={44} className={styles.signature} />
              <p className={styles.name}>Shahamin S. Zaman</p>
              <p className={styles.designation}>Executive Director, Global Compact Network Bangladesh.</p>
            </div>
            {/* <img src="/assets/certificate/stamp.png" alt="Logo" width={149} height={149} /> */}
            <div className={styles.qrContainer}>
              <div className={styles.qr}></div>
              <p className={styles.qrText}>https://ungcnbacademy.org/verify/{certificateId}</p>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingDots />}
      <div className={styles.container}>
        {imageSrc && <img src={imageSrc} alt="Generated Certificate" width={500} className={styles.certificateImage} />}
        <div className={styles.buttonSection}>
          {!imageSrc && <Button text="Generate Certificate" onClick={handleCapture} loading={loading} variant="outLined" />}
          {/* {imageSrc && !loading && (
            <a href={imageSrc} download="certificate.png">
              {' '}
              <Button text="Download as PNG" />
            </a>
          )} */}
          {imageSrc && !loading && <Button onClick={() => generatePDF(containerRef, options)} text="Download Certificate" />}
        </div>
      </div>
    </div>
  );
}
