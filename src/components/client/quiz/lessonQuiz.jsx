'use client';
import React, { useEffect, useState } from 'react';
import styles from './lessonQuiz.module.css';
import Timer from './timer';
import Button from '@/components/ui/button/button';
import QuizQuestion from '../atom/quizQuestion';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
export default function LessonQuiz({ courseId, moduleId, lessonId }) {
  const [questionNo, setQuestionNo] = useState(0);
  const [response, error, loading, axiosFetch] = useAxios();

  useEffect(() => {
    axiosFetch({
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz/attempts`,
      method: 'POST',
    });
  }, []);

  useEffect(() => {
    if (response?.data?.questions) {
      console.log(response.data);
    }
  }, [response]);

  const OnNextQuestionBtnPressHandler = () => {
    setQuestionNo(questionNo + 1);
  };
  const OnPreviousQuestionBtnPressHandler = () => {
    setQuestionNo(questionNo - 1);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quiz</h1>
        {response?.data?.quizTime && <Timer initialTime={response?.data?.quizTime || 5} />}
      </div>
      <div className={styles.container}>
        <QuizQuestion
          question={response?.data?.questions[questionNo].question}
          options={response?.data?.questions[questionNo].options}
          correctAnswer={response?.data?.questions[questionNo].correctAnswer}
          questionNo={questionNo + 1}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button text="Previous" variant="outLined" onClick={OnPreviousQuestionBtnPressHandler} disabled={questionNo === 0} />
        <Button
          text="Next"
          variant="primary"
          onClick={OnNextQuestionBtnPressHandler}
          disabled={questionNo === response?.data?.questions.length - 1}
        />
      </div>
    </div>
  );
}
