'use client';
import useAxios from '@/hooks/useAxios';
import React, { use, useEffect, useState } from 'react';
import Button from '../ui/button/button';
import styles from './enroll.module.css';
import Message from '../ui/message/message';
import { configuration } from '@/configuration/configuration';
import { userRoles } from '@/constants/constants';
import { redirect } from 'next/navigation';
export default function Enroll({ courseId }) {
	const [response, error, loading, axiosFetch] = useAxios();
	const [message, setMessage] = useState({ text: '', type: '' });
	const [userDetails, setUserDetails] = useState();

	useEffect(() => {
		setUserDetails(JSON.parse(localStorage.getItem('user')));
	}, []);

	useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
		}
		if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);

	const onEnrollClickHandler = () => {
		if (userDetails?.data?.role != userRoles.client.role) {
			redirect('/login');
		}
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
