'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import { redirect } from 'next/navigation';

export default function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState('');

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    redirect(`/verify/${certificateId}`);
  };
  return (
    <div className={styles.main}>
      <form className={styles.container} onSubmit={onSubmitClickHandler}>
        <p className={styles.title}>Enter your certificate code</p>
        <Input
          type="text"
          placeholder="Enter your certificate code"
          variant="secondary"
          name="certificateId"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
        <Button text="Verify" type="submit" variant="primary" className={styles.button} />
      </form>
    </div>
  );
}
