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
import Drawer from '@/components/ui/drawer/drawer';
import CreateQuiz from './createQuiz';
import Toast from '@/components/ui/toast/toast';

export default function QuizDetails({ courseId, moduleId, lessonId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] = useAxios();
  const [refreshData, setRefreshData] = useState(false);
  const [drawerOpenUpdateQuiz, setDrawerOpenUpdateQuiz] = useState(false);
  const [message, setMessage] = useState();

  const getQuizData = () => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz`,
    });
  };

  useEffect(() => {
    getQuizData();
  }, [refreshData]);

  const updateQuizDrawerRender = () => {
    return (
      <>
        {drawerOpenUpdateQuiz && (
          <Drawer
            title={response?.data?.quiz ? 'Update Quiz' : 'Create Quiz'}
            closeFunction={() => setDrawerOpenUpdateQuiz(false)}
            size="lg"
          >
            <CreateQuiz
              courseId={courseId}
              moduleId={moduleId}
              lessonId={lessonId}
              update={response?.data?.quiz ? true : false}
              refreshData={() => setRefreshData(!refreshData)}
            />
          </Drawer>
        )}
      </>
    );
  };

  const deleteQuizHandler = () => {
    confirm('Are you sure you want to delete this quiz?') &&
      axiosFetchDelete({
        method: 'DELETE',
        url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/quiz`,
      });
  };

  useEffect(() => {
    if (responseDelete?.message && !errorDelete) {
      setMessage({ text: responseDelete?.message, variant: 'success' });
      setRefreshData(!refreshData);
    }
    if (errorDelete?.message) {
      setMessage({ text: errorDelete?.message, variant: 'error' });
    }
    if (loadingDelete) {
      setMessage({ text: 'Loading...', variant: 'warning' });
    }
  }, [responseDelete, errorDelete, loadingDelete]);

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
      {updateQuizDrawerRender()}
      <Toast text={message?.text} variant={message?.variant} />
      <div className={styles.header}>
        <h2 className={styles.title}>Quiz</h2>
        <div className={styles.buttonContainer}>
          <Tooltip content="Refresh" placement="top">
            <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
          </Tooltip>
          {response?.data?.quiz && (
            <Button text={'Delete Quiz'} variant={'dangerOutLined'} onClick={() => deleteQuizHandler()} loading={loadingDelete} />
          )}
          <Button
            text={response?.data?.quiz ? 'Update Quiz' : 'Create Quiz'}
            onClick={() => setDrawerOpenUpdateQuiz(!drawerOpenUpdateQuiz)}
          />
        </div>
      </div>
      {loading && <LoadingDots />}
      {!loading && !error && response?.data && questionContainerRender()}
      {!loading && !response?.data && <p className={styles.notAvailable}>Not available.</p>}
    </div>
  );
}
