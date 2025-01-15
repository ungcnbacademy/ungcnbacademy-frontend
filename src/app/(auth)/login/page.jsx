'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { configuration } from '../../../configuration/configuration';
import { redirect } from 'next/navigation';
import Button from '../../../components/ui/button/button';
import Input from '../../../components/ui/input/input';
import Message from '../../../components/ui/message/message';

import { allAdminRoles, userRoles } from '@/constants/constants';
import Image from 'next/image';

export default function Login() {
	const [data, setData] = useState({});
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [response, error, loading, axiosFetch] = useAxios();

	function handleChange(event) {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	}

	const onLoginSubmitHandlerAsync = async (event) => {
		event.preventDefault();
		axiosFetch({
			method: 'Post',
			url: configuration.login,
			requestConfig: data,
		});
	};

	useEffect(() => {
		if (data?.email && data?.password) {
			setBtnDisabled(false);
		} else {
			setBtnDisabled(true);
		}
	}, [data?.email, data?.password]);

	useEffect(() => {
		if (response?.data) {
			localStorage.setItem('user', JSON.stringify(response?.data));
			if (response?.data?.status !== 401) {
				window.location.reload();
			}
		}
	}, [response?.data]);

	useEffect(() => {
		const userDetails = JSON.parse(localStorage.getItem('user'));
		if (!userDetails?.token || error) return;
		if (userDetails.user?.role === userRoles.client.role) {
			redirect('/');
		} else if (allAdminRoles.includes(userDetails.user?.role)) {
			redirect('/admin/dashboard');
		}
	}, []);

	return (
		<div className={styles.main}>
			<Image src={'/logoBlack.svg'} alt="Logo" width={160} height={50} />
			<form onSubmit={onLoginSubmitHandlerAsync} className={styles.form}>
				<label className={styles.label}>Email</label>
				<Input
					type="email"
					variant="outLined"
					placeholder="Enter your email"
					name="email"
					onChange={handleChange}
					className={styles.input}
				/>
				<label className={styles.label}>Password</label>
				<Input
					type="password"
					variant="outLined"
					placeholder="Enter your password"
					name="password"
					onChange={handleChange}
					className={styles.input}
				/>
				<Link
					href="/passwordReset"
					className={styles.forgotPasswordLink}
				>
					Forgot Password?
				</Link>
				<Button
					disabled={btnDisabled || loading}
					text="Login"
					type="submit"
					variant="primary"
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
				<p className={styles.googleText}>Sign in with google</p>
			</div>
			<small className={styles.small}>
				Don't have account?{' '}
				<Link href="/signup" className={styles.link}>
					Create an account
				</Link>
			</small>
		</div>
	);
}
