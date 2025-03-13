import React from 'react';
import styles from './page.module.css';
import Landing from '@/components/landing/landing';
export const metadata = { title: 'Home | UNGCNB Academy' };
export default function Home() {
  return (
    <div className={styles.main}>
      <Landing />
    </div>
  );
}
