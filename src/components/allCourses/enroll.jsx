'use client';
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import Button from '../ui/button/button';
import styles from './enroll.module.css';
import Message from '../ui/message/message';
import { configuration } from '@/configuration/configuration';
export default function Enroll({ courseId }) {
	const [response, error, loading, axiosFetch] = useAxios();
	const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
		}
		if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);

	const onEnrollClickHandler = () => {
    setMessage({ text: '', type: '' });
    axiosFetch({
      method: 'POST',
      url: `${configuration.enroll}/${courseId}/enroll`,
    });
  };
	return (
		<div className={styles.main}>
			<Button
				text="Enroll Now"
				className={styles.button}
				variant="secondary"
				onClick={onEnrollClickHandler}
        loading={loading}
			/>
			<Message text={message.text} type={message.type} />
		</div>
	);
}
