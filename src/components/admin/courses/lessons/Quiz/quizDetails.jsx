'use client';
import React, { useEffect, useState } from 'react';
import styles from './quizDetails.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import { FaCheckCircle } from 'react-icons/fa';
import LoadingDots from '@/components/ui/loading/loadingDots';
import Button from '@/components/ui/button/button';
import Tooltip from '@/components/ui/tooltip/tooltip';
import { BiRefresh } from 'react-icons/bi';

export default function QuizDetails({ courseId, moduleId, lessonId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [refreshData, setRefreshData] = useState(false);

  const getQuizData = () => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz`,
    });
  };

  useEffect(() => {
    getQuizData();
  }, [refreshData]);

  const questionContainerRender = () => {
    return (
      <div className={styles.questionsSection}>
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
                      <p className={styles.optionText}>
                        {index + 1}. {option?.option}
                      </p>

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
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Quiz</h2>
        <div className={styles.buttonContainer}>
          <Tooltip content="Refresh" placement="top">
            <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
          </Tooltip>
          <Button text={'Update Quiz'} />
        </div>
      </div>
      {loading && <LoadingDots />}
      {!loading && !error && response?.data && questionContainerRender()}
    </div>
  );
}
