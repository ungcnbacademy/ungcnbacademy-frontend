import React from 'react';
import styles from './page.module.css';
import AllReview from '@/components/admin/quiz-review/allReview';
export default function QuizReviewPage() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Quiz Review</h2>
      </div>
      <div className={styles.container}>
        <AllReview />
      </div>
    </div>
  );
}
