'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';

import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button/button';
import Input from '../../../components/ui/input/input';
import Message from '../../../components/ui/message/message';
import Image from 'next/image';
export default function Signup() {
	const [data, setData] = useState({});
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [response, error, loading, axiosFetch] = useAxios();
	const [message, setMessage] = useState('');

	function handleChange(event) {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	}

	const onSignupSubmitHandlerAsync = async (e) => {
		e.preventDefault();
		if (data?.password !== confirmPassword) {
			setMessage('Passwords do not match');
			return;
		}
		axiosFetch({
			method: 'Post',
			url: configuration.registerUser,
			requestConfig: data,
		});
	};

	useEffect(() => {
		if (response?.message && !error) {
			setMessage(response?.message);
			setData({});
			setConfirmPassword('');
			setIsModalOpen(true);
		}
	}, [response?.data]);

	useEffect(() => {
		if (data.password) {
			if (data?.password !== confirmPassword) {
				setMessage('Passwords do not match');
			}
			if (data?.password?.length < 6 || confirmPassword?.length < 6) {
				setMessage('Password should be at least 6 characters long');
			}
			if (data?.password === confirmPassword) {
				setMessage('');
			}
		}
	}, [data, confirmPassword]);

	return (
		<div className={styles.main}>
			<Link href="/">
				<Image
					src={'/logoBlack.svg'}
					alt="Logo"
					width={160}
					height={50}
				/>
			</Link>
			<form onSubmit={onSignupSubmitHandlerAsync} className={styles.form}>
				<label className={styles.label}>First Name</label>
				<Input
					type="text"
					placeholder="Enter your first name"
					name="firstName"
					onChange={handleChange}
					value={data?.firstName || ''}
					variant="outLined"
					required
					className={styles.input}
				/>
				<label className={styles.label}>Last Name</label>
				<Input
					type="text"
					placeholder="Enter your last name"
					name="lastName"
					onChange={handleChange}
					value={data?.lastName || ''}
					variant="outLined"
					required
					className={styles.input}
				/>
				<label className={styles.label}>Email</label>
				<Input
					type="email"
					placeholder="Enter your email"
					name="email"
					onChange={handleChange}
					value={data?.email || ''}
					variant="outLined"
					required
					className={styles.input}
				/>
				<label className={styles.label}>Password</label>
				<Input
					type="password"
					placeholder="Enter your password"
					name="password"
					onChange={handleChange}
					variant="outLined"
					value={data?.password || ''}
					required
					className={styles.input}
				/>
				<label className={styles.label}>Confirm password</label>
				<Input
					type="password"
					placeholder="Confirm your password"
					name="password"
					onChange={(e) => {
						setConfirmPassword(e.target.value);
						setBtnDisabled(e.target.value !== data?.password);
					}}
					variant="outLined"
					value={confirmPassword}
					required
					className={styles.input}
				/>
				<Message text={message} type="error" />

				<Button
					type="submit"
					text="Sign up"
					variant="outLined"
					disabled={btnDisabled}
					loading={loading}
					className={styles.button}
				/>
			</form>
			{error?.message && <Message text={error?.message} type="error" />}
			<small className={styles.or}>or</small>
			<div className={styles.googleButton}>
				<Image
					src="/icons/google.svg"
					alt="Google"
					width={20}
					height={20}
				/>
				<p className={styles.googleText}>Sign up with google</p>
			</div>
			<small className={styles.small}>
				Already have an account?{' '}
				<Link href="/login" className={styles.link}>
					Login
				</Link>
			</small>
		</div>
	);
}
