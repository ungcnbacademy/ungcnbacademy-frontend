'use client';
import React, { use, useEffect, useState } from 'react';
import styles from './page.module.css';
import Button from '@/components/ui/button/button';
import { redirect } from 'next/navigation';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Message from '@/components/ui/message/message';
import Header from '@/components/atom/header';

export default function MarkLessonComplete({ params }) {
  const unwrappedParams = use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const lessonId = unwrappedParams.slug[2];
  const [response, error, loading, axiosFetch] = useAxios();
  const [message, setMessage] = useState('');
  const markLessonCompleteHandler = () => {
    setMessage();
    axiosFetch({
      method: 'Post',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/complete`,
    });
  };

  useEffect(() => {
    response?.data && setMessage({ text: response?.message, type: 'success' });
    error?.message && setMessage({ text: error?.message, type: 'error' });
  }, [response, error]);

  return (
    <>
      <Header
        title={'Mark Lesson Complete'}
        description={'Educational resources from the world’s leading experts on sustainable development'}
        height='45vh'
      />
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.title}>Are you sure you want to mark this lesson as complete? </p>

          <p className={styles.notes}>
            Notes: Marking this lesson as complete will update your progress and move it out of your active lessons. You can still
            revisit it anytime, but it won't appear in your "in-progress" list.
          </p>
          <Message text={message?.text} type={message?.type} />
          <div className={styles.buttonContainer}>
            <Button
              text="Back to Course"
              variant="outLined"
              onClick={() => redirect(`/client/my-courses/${courseId}`)}
              disabled={loading}
            />
            <Button
              text="Mark Complete"
              variant="primary"
              onClick={markLessonCompleteHandler}
              loading={loading}
              disabled={loading}
            />
          </div>
        </div>
      </div>{' '}
    </>
  );
}
