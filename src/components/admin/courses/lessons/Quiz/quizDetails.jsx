'use client';
import React, { useEffect } from 'react';
import styles from './quizDetails.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import { FaCheckCircle } from 'react-icons/fa';

export default function QuizDetails({ courseId, moduleId, lessonId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz`,
    });
  }, []);

  return (
    <div className={styles.main}>
      {response?.data?.quiz?.questions.map((question, index) => {
        return (
          <div key={index} className={styles.questionsContainer}>
            <div className={styles.questionText}>
              {index + 1}. {question?.question}
            </div>
            <div className={styles.optionsContainer}>
              {question?.options.map((option, index) => {
                return (
                  <div key={index} className={styles.optionTextContainer}>
                    <p className={ styles.optionText }>{index + 1}. {option?.option}</p>

                    {option?.isCorrect && (
                      <span className={styles.correct}>
                        <FaCheckCircle className={styles.icon} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
