'use client';
import React, { useEffect, useState } from 'react';
import styles from './giveFeedback.module.css';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import LoadingDots from '@/components/ui/loading/loadingDots';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Message from '@/components/ui/message/message';
export default function GiveFeedback({ courseId, moduleId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseGetFeedback, errorGetFeedback, loadingGetFeedback, axiosFetchGetFeedback] = useAxios();
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    axiosFetchGetFeedback({
      method: 'Get',
      url: configuration.courses + '/' + courseId + '/modules/' + moduleId + '/reviews/my',
    });
  }, []);

  useEffect(() => {
    if (response?.message) {
      setMessage({ text: response?.message, type: 'success' });
    }
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [response?.message, error?.message]);

  const feedBackSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payLoad = Object.fromEntries(formData);

    axiosFetch({
      method: 'POST',
      url: configuration.courses + '/' + courseId + '/modules/' + moduleId + '/reviews',
      requestConfig: {
        feedback: payLoad.feedback,
        rating: 5,
      },
    });
  };
  return (
    <div className={styles.main}>
      {loadingGetFeedback && <LoadingDots />}
      <p className={styles.text}>Please provide your feedback to help us improve our platform.</p>
      <form className={styles.form} onSubmit={feedBackSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter your feedback"
          variant="secondary"
          name="feedback"
          defaultValue={responseGetFeedback?.data?.feedback || ''}
        />
        <Message text={message.text} type={message.type} />
        <Button text="Submit" type="submit" variant="primary" className={styles.button} loading={loading} disabled={loading} />
      </form>
    </div>
  );
}
