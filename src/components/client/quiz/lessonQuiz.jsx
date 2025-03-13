'use client';
import React, { useEffect, useState } from 'react';
import styles from './lessonQuiz.module.css';
import Timer from './timer';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Message from '@/components/ui/message/message';
import { useRouter } from 'next/navigation';
import QuizResult from './quizResult';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function LessonQuiz({ courseId, moduleId, lessonId }) {
  const [questionNo, setQuestionNo] = useState(0);
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseSubmit, errorSubmit, loadingSubmit, axiosFetchSubmit] = useAxios();
  const [message, setMessage] = useState('');
  const [backBtnView, setBackBtnView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    axiosFetch({
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz/attempts`,
      method: 'POST',
    });
  }, []);

  useEffect(() => {
    if (responseSubmit?.status === 'success') {
      setMessage({ text: 'Successfully submitted', type: 'success' });
      setBackBtnView(true);
    }
    if (errorSubmit?.message) {
      setMessage({ text: errorSubmit?.message, type: 'error' });
      setBackBtnView(true);
    }
    if (error?.message && !response?.data) {
      setMessage({ text: error?.message, type: 'error' });
      setBackBtnView(true);
    }
  }, [responseSubmit, errorSubmit, error, response]);

  const quizSubmitHandler = (e) => {
    e.preventDefault();
    setMessage();
    const formData = new FormData(e.target);
    const data = {
      answers: [],
    };
    response?.data?.questions.forEach((question, index) => {
      question?.type === 'mcq' &&
        data.answers.push({
          questionId: question._id,
          selectedOption: formData.get(question.question),
        });

      question?.type === 'text' &&
        data.answers.push({
          questionId: question._id,
          textAnswer: formData.get(question.question),
        });
    });

    axiosFetchSubmit({
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz/attempts/${response?.data?.attemptId}/submit`,
      method: 'POST',
      requestConfig: data,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quiz</h1>
        {response?.data?.quizTime && <Timer initialTime={response?.data?.quizTime || 5} />}
      </div>
      {loading && <LoadingDots />}
      <div className={styles.container}>
        <form className={styles.form} onSubmit={quizSubmitHandler}>
          {response?.data?.questions.map((question, index) => (
            <div key={index} className={styles.questionContainer}>
              <div className={styles.questionInfo}>
                <span className={styles.questionNo}>Question no: {index + 1}</span>
                <span className={styles.marks}>Marks: {question?.marks}</span>
                <span className={styles.type}>Type: {question?.type.toUpperCase()}</span>
              </div>
              <p className={styles.question}>
                {index + 1}. {question?.question}
              </p>
              {question?.options &&
                question?.options.map((option, index) => (
                  <div key={index} className={styles.optionContainer}>
                    <input type="radio" name={question?.question} value={option.option} />
                    <label htmlFor="">{option.option}</label>
                  </div>
                ))}
              {question?.type === 'text' && (
                <textarea name={question?.question} placeholder="Enter your answer" className={styles.textarea} />
              )}
            </div>
          ))}
          <Message text={message?.text} type={message?.type} />
          <div className={styles.buttonContainer}>
            {response?.data && (
              <Button text="Submit" variant="primary" type="submit" loading={loadingSubmit} disabled={loadingSubmit} />
            )}
            {backBtnView && (
              <Button text="Back to Lesson" variant="secondary" onClick={() => router.push(`/client/my-courses/${courseId}`)} />
            )}
          </div>
        </form>
        <QuizResult data={responseSubmit?.data} />
      </div>
    </div>
  );
}
