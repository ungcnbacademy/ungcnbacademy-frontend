'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';

import styles from './createAssets.module.css';
import ProgressBar from '@/components/ui/progressBar/progressBar';

export default function CreateAssets({ courseId, moduleId, lessonId, refreshData = () => {} }) {
  const [response, error, loading, axiosFetch, progress] = useAxios();
  const formRef = useRef(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (response?.message) {
      setMessage({ text: response?.message, type: 'success' });
      refreshData();
    }
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [response, error]);

  const onClearHandler = () => {
    setMessage({ text: '', type: '' });
    formRef.current.reset();
  };

  const onAddAsset = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);

    axiosFetch({
      method: 'PUT',
      url: configuration.courses + '/' + courseId + '/modules/' + moduleId + '/lessons/' + lessonId,
      requestConfig: formData,
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onAddAsset} ref={formRef}>
        <p className={styles.subTitle}>Upload Assets:</p>
        <p className={styles.label}>Upload file</p>
        <Input type="file" placeholder="Upload file" name="assets" variant="secondary" required />
        <ProgressBar progress={progress} />
        <div className={styles.submitContainer}>
          <Message
            text={message.text}
            type={message.type}
            //loading={loading}
          />
          <div className={styles.buttonContainer}>
            <Button text="Clear" variant="outLined" disabled={loading} onClick={onClearHandler} />
            <Button type="submit" text="Submit" variant="primary" loading={loading} disabled={loading} />
          </div>
        </div>
      </form>
    </div>
  );
}
