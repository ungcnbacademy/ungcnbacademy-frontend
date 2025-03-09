'use client';
import React, { use, useEffect } from 'react';
import styles from './page.module.css';
import AllReview from '@/components/admin/quiz-review/allReview';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import ReviewDetails from '@/components/admin/quiz-review/reviewDetails';
export default function QuizReviewPage({ params }) {
  const unwrappedParams = use(params);
  const quizId = unwrappedParams.id;
  const [responseGetQuizInfo, errorGetQuizInfo, loadingGetQuizInfo, axiosFetchGetQuizInfo] = useAxios();

  useEffect(() => {
    axiosFetchGetQuizInfo({
      method: 'Get',
      url: `${configuration.admin.singleQuiz}/${quizId}`,
    });
  }, [quizId]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Quiz Review</h2>
      </div>
      <div className={styles.container}>
        {responseGetQuizInfo?.data && <ReviewDetails data={responseGetQuizInfo?.data} />}
      </div>
    </div>
  );
}
