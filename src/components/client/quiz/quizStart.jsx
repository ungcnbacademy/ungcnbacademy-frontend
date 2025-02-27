'use client';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import React, { useEffect } from 'react';
import styles from './quizStart.module.css';
import Button from '@/components/ui/button/button';
import { IoCheckmarkCircle, IoCloseCircleSharp } from 'react-icons/io5';
import LoadingDots from '@/components/ui/loading/loadingDots';
import { redirect, useRouter } from 'next/navigation';

export default function QuizStart({ courseId, moduleId, lessonId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const router = useRouter();
  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz`,
    });
  }, []);

  const checkEligibilityForQuizRender = () => {
    if (response?.data?.canTakeQuiz) {
      return (
        <>
          <IoCheckmarkCircle className={styles.iconOk} />
          <p className={styles.heading}>You are eligible for this quiz.</p>
        </>
      );
    } else {
      return (
        <>
          <IoCloseCircleSharp className={styles.iconError} />
          <p className={styles.heading}>You are not eligible for this quiz.</p>
        </>
      );
    }
  };

  const startQuizClickHAndler = () => {
    confirm('Are you sure you want to start the quiz?') &&
      redirect(`/client/my-courses/quiz/attempts/${courseId}/${moduleId}/${lessonId}`);
  };

  return (
    <div className={styles.main}>
      {loading && <LoadingDots />}
      {response && !loading && (
        <div className={styles.quizDetails}>
          {checkEligibilityForQuizRender()}
          <p className={styles.title}>Title: {response?.data?.quiz?.title}</p>
          <p>
            Maximum Attempts: {response?.data?.quiz?.maxAttempts}, Time: {response?.data?.quiz?.quizTime} minutes
          </p>
          <p>
            Total Questions: {response?.data?.quiz?.questionCount}, Total Marks: {response?.data?.quiz?.totalMarks}, Passing
            Score: {response?.data?.quiz?.passingScore}
          </p>
          <p className={styles.notes}>
            Notes: Do not close or refresh the browser window while taking the quiz, as this may result in losing your progress.
            Ensure a stable internet connection throughout the quiz to avoid interruptions. Avoid navigating away from this page
            during the quiz to maintain the integrity of your answers.
          </p>
          <div className={styles.buttonContainer}>
            <Button text="Back" variant="outLined" loading={loading} onClick={() => redirect(`/client/my-courses/${courseId}`)} />
            <Button text="Start Quiz" disabled={!response?.data?.canTakeQuiz} loading={loading} onClick={startQuizClickHAndler} />
          </div>
        </div>
      )}
    </div>
  );
}
