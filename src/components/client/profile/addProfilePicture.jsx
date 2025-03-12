'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import styles from './addProfilePicture.module.css';

export default function AddProfilePicture({refreshData = () => {}}) {
  const [response, error, loading, axiosFetch] = useAxios();
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

  const onAddAdminSubmitHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);
    setMessage({ text: 'This feature is under development', type: 'error' });
    // axiosFetch({
    // 	method: 'PUT',
    // 	url: configuration.client.profile,
    // 	requestConfig: payload,
    // });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onAddAdminSubmitHandler} ref={formRef}>
        <p className={styles.subTitle}>User details:</p>
        <p className={styles.label}>User profile picture</p>
        <Input type="file" placeholder="Upload your profile picture" name="profilePicture" variant="secondary" required />

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
