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
		if (userDetails.user?.role === userRoles.client.role ) {
			redirect('/');
		} else if (allAdminRoles.includes(userDetails.user?.role)) {
			redirect('/admin/dashboard');
		}
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<p className={styles.title}>LOGIN</p>
				<br />
				<form
					onSubmit={onLoginSubmitHandlerAsync}
					className={styles.form}
				>
					<Input
						type="email"
						placeholder="Enter your email"
						name="email"
						onChange={handleChange}
						className={styles.input}
					/>
					<Input
						type="password"
						placeholder="Enter your password"
						name="password"
						onChange={handleChange}
						className={styles.input}
					/>

					<br />
					{error?.message && (
						<Message text={error?.message} type="error" />
					)}
					<br />
					<Button
						disabled={btnDisabled || loading}
						text="Login"
						type="submit"
						variant="primary"
						loading={loading}
					/>
				</form>
				<small className={styles.small}>
					Dont have account?{' '}
					<Link href="/signup" className={styles.link}>
						Click here
					</Link>
				</small>

				<small>
					Forgot Password? {''}
					<Link href="/passwordReset" className={styles.link}>
						Click here
					</Link>
				</small>
			</div>
		</div>
	);
}
