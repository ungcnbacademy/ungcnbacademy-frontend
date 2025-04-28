import React from 'react';
import styles from './quizResult.module.css';
export default function QuizResult({ data }) {
  return (
    <>
      {data && (
        <div className={styles.main}>
          <h3 className={styles.title}>Quiz result</h3>
          {data?.needsManualGrading && <p>Needs Manual Grading: {data?.needsManualGrading ? 'Yes' : 'No'}</p>}
          <p className={styles.score}>
            Passed: {data?.passed ? <label className={styles.passed}>Yes</label> : <label className={styles.failed}>No</label>}
          </p>
          <p>Score: {data?.score}</p>
          <p>Percentage: {data?.percentage}</p>
        </div>
      )}
    </>
  );
}
