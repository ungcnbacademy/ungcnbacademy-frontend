'use client';
import React, { use } from 'react';
import styles from './page.module.css';
import GenerateCertificate from '@/components/atom/generateCertificate';
export default function Certificate({ params }) {
  const unwrappedParams = use(params);
  const type = unwrappedParams.type;
  return <div className={styles.main}>
    <GenerateCertificate/>
  </div>;
}
