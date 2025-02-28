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
  const [responseSubmit, errorSubmit, loadingSubmit, axiosFetchSubmit] = useAxios();
	const [message, setMessage] = useState('');

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

	useEffect(() => {
		if (responseSubmit?.status === 'success') {
			setMessage({text: 'Successfully submitted', type: 'success'});
		}
		if (errorSubmit?.message) {
			setMessage({text: errorSubmit.message, type: 'error'});
		}
	}, [responseSubmit, errorSubmit]);

  const quizSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      answers: [],
    };
    response?.data?.questions.forEach((question, index) => {
      data.answers.push({
        questionId: question._id,
        selectedOption: formData.get(question.question),
      });
    });

    axiosFetchSubmit({
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz/attempts/${response?.data?.attemptId}/submit`,
      method: 'POST',
      data: data,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quiz</h1>
        {response?.data?.quizTime && <Timer initialTime={response?.data?.quizTime || 5} />}
      </div>
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
              {question?.options.map((option, index) => (
                <div key={index} className={styles.optionContainer}>
                  <input type="radio" name={question?.question} value={option.option} />
                  <label htmlFor="">{option.option}</label>
                </div>
              ))}
            </div>
          ))}
          <Button text="Submit" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  );
}
