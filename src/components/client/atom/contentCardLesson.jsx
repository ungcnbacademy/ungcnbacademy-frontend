'use client';
import React from 'react';
import styles from './contentCardLesson.module.css';
import { MdOutlineOndemandVideo, MdLock } from 'react-icons/md';
import Button from '@/components/ui/button/button';
import { redirect } from 'next/navigation';
import { formatDuration } from '@/utils/utils';

export default function ContentCardLesson({
  title,
  order,
  hasVideo,
  totalAssets,
  videoDuration,
  onClick = () => {},
  selected,
  checked = false,
  isLocked = false,
  lockMessage = 'Locked',
  isQuizRequired = false,
  courseId = '',
  moduleId = '',
  lessonId = '',
}) {
  const quizButtonClickHandler = (event) => {
    event.stopPropagation();
    redirect(`/client/my-courses/quiz/${courseId}/${moduleId}/${lessonId}`);
  };
  const lessonMarkCompleteHandler = (event) => {
    event.stopPropagation();
    redirect(`/client/my-courses/lessonMarkComplete/${courseId}/${moduleId}/${lessonId}`);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.LessonContainer}>
        <div className={`${styles.main} ${selected && styles.selected}`} onClick={onClick}>
          <div className={`${styles.check} ${checked && styles.checked}`}></div>
          <div className={styles.container}>
            <div className={styles.top}>
              <p className={styles.title}>
                Lesson {order}: {title}
              </p>
              <div className={styles.subtitle}>
                {hasVideo && <MdOutlineOndemandVideo />}
                {hasVideo && videoDuration && <label>Duration {formatDuration(videoDuration)},</label>}
                <label>Total Assets {totalAssets}.</label>
              </div>
            </div>

            <div className={styles.bottom}>
              {isQuizRequired && (
                <Button
                  text="Quiz"
                  variant="outLined"
                  className={styles.button}
                  onClick={(event) => quizButtonClickHandler(event)}
                />
              )}
              {!isQuizRequired && <Button text="Mark Complete" className={styles.button} variant="outLined" onClick={(event) => lessonMarkCompleteHandler(event)}/>}
            </div>
          </div>
        </div>
      </div>
      {isLocked && (
        <div className={styles.locked}>
          <div className={styles.lockContainer}>
            <MdLock className={styles.lockIcon} />
            <p className={styles.lockText}>{lockMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
