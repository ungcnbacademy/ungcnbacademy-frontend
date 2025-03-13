'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import styles from './editProfile.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';

export default function EditProfile({ refreshData = () => {} }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseGetUserInfo, errorGetUserInfo, loadingGetUserInfo, axiosFetchGetUserInfo] = useAxios();
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

  useEffect(() => {
    axiosFetchGetUserInfo({
      method: 'GET',
      url: configuration.client.profile,
    });
  }, []);

  const onClearHandler = () => {
    setMessage({ text: '', type: '' });
    formRef.current.reset();
  };

  const onAddAdminSubmitHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);

    axiosFetch({
      method: 'PUT',
      url: configuration.client.profile,
      requestConfig: payload,
    });
  };

  return (
    <div className={styles.main}>
      {loadingGetUserInfo && <LoadingDots />}
      <form className={styles.form} onSubmit={onAddAdminSubmitHandler} ref={formRef}>
        <p className={styles.subTitle}>User details:</p>
        <p className={styles.label}>User first name</p>
        <Input
          type="text"
          placeholder="Your First Name"
          name="firstName"
          variant="secondary"
          defaultValue={responseGetUserInfo?.data?.firstName || ''}
          required
        />
        <p className={styles.label}>User last name</p>
        <Input
          type="text"
          placeholder="Your Last Name"
          name="lastName"
          variant="secondary"
          defaultValue={responseGetUserInfo?.data?.lastName || ''}
          required
        />

        <p className={styles.label}>User phone number</p>
        <Input
          type="tel"
          placeholder="Your Your Phone Number"
          name="phoneNumber"
          variant="secondary"
          defaultValue={responseGetUserInfo?.data?.phoneNumber || ''}
          required
        />

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
