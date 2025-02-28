import React from 'react';
import styles from './quizResult.module.css';
export default function QuizResult({ data }) {
  return (
    <>
      {data && (
        <div className={styles.main}>
          {data?.needsManualGrading && <p>Needs Manual Grading: {data?.needsManualGrading ? 'Yes' : 'No'}</p>}
          {data?.passed && <p>Passed: {data?.passed ? 'Yes' : 'No'}</p>}
          {data?.score && <p>Score: {data?.score}</p>}
          {data?.percentage && <p>Percentage: {data?.percentage}</p>}
        </div>
      )}
    </>
  );
}
