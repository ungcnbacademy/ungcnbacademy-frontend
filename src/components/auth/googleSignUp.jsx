import React from 'react';
import styles from './googleSignUp.module.css';
import Image from 'next/image';
export default function GoogleSignUp() {
  return (
    <div className={styles.main}>
      <small className={styles.or}>or</small>
      <div className={styles.googleButton}>
        <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
        <p className={styles.googleText}>Sign in with google</p>
      </div>
    </div>
  );
}
