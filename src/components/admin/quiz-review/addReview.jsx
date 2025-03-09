'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './addReview.module.css';
import { allAdminRoles, userRoles } from '@/constants/constants';
export default function AddReview({ questionId, attemptId, courseId, moduleId, lessonId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const formRef = useRef(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (response?.message) {
      setMessage({ text: response?.message, type: 'success' });
    }
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [response, error]);

  const onClearHandler = () => {
    setMessage({ text: '', type: '' });
    formRef.current.reset();
  };

  const onAddFeedbackSubmitHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);

    axiosFetch({
      method: 'POST',
      url:
        configuration.courses +
        '/' +
        courseId +
        '/modules/' +
        moduleId +
        '/lessons/' +
        lessonId +
        '/quiz/attempts/' +
        attemptId +
        '/grade',
      requestConfig: { grades: [{ ...payload, questionId: questionId }] },
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onAddFeedbackSubmitHandler} ref={formRef}>
        <p className={styles.subTitle}>Review details:</p>
        <p className={styles.label}>Marks</p>
        <Input type="text" placeholder="Marks" name="marks" variant="secondary" required />
        <p className={styles.label}>Feedback</p>
        <Input type="text" placeholder="Feedback" name="feedback" variant="secondary" required />

        <div className={styles.submitContainer}>
          <Message text={message.text} type={message.type} loading={loading} />
          <div className={styles.buttonContainer}>
            <Button text="Clear" variant="outLined" disabled={loading} onClick={onClearHandler} />
            <Button type="submit" text="Submit" variant="primary" loading={loading} disabled={loading} />
          </div>
        </div>
      </form>
    </div>
  );
}
