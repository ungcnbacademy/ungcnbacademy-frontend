'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import styles from './addKnowledgePartner.module.css';
import ProgressBar from '@/components/ui/progressBar/progressBar';

export default function AddKnowledgePartner({ courseId, refreshData = () => {} }) {
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
  }, [response?.message, error?.message]);

  const onClearHandler = () => {
    setMessage({ text: '', type: '' });
    formRef.current.reset();
  };

  const onAddAdminSubmitHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);

    axiosFetch({
    	method: 'POST',
    	url: configuration.courses + '/' + courseId + '/knowledge-images',
    	requestConfig: formData,
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onAddAdminSubmitHandler} ref={formRef}>
        <p className={styles.subTitle}>Knowledge Partner details:</p>
        <p className={styles.label}>First knowledge partner  </p>
        <Input type="file" placeholder="Upload knowledge partner" name="knowledgePartImage1" variant="secondary" required />
        <p className={styles.label}>Second knowledge partner</p>
        <Input type="file" placeholder="Upload knowledge partner" name="knowledgePartImage2" variant="secondary" />
        <ProgressBar progress={progress} />
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
