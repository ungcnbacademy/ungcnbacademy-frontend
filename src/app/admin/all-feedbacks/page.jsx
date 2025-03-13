import React from 'react';
import styles from './page.module.css';
import AllFeedback from '@/components/admin/feedback/allFeedback';

export default function AllFeedbacks() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Feedbacks</h2>
      </div>
      <div className={styles.container}>
        {/* <AllFeedback /> */}
      </div>
    </div>
  );
}
