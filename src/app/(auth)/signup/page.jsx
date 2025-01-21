'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Button from '@/components/ui/button/button';
import Input from '../../../components/ui/input/input';
import Message from '../../../components/ui/message/message';
import Image from 'next/image';
import GoogleSignUp from '@/components/auth/googleSignUp';
import { redirect } from 'next/navigation';
import { allAdminRoles, userRoles } from '@/constants/constants';

export default function Signup() {
	const [data, setData] = useState({});
	const [btnDisabled, setBtnDisabled] = useState(true);
	//const [confirmPassword, setConfirmPassword] = useState('');
	const [response, error, loading, axiosFetch] = useAxios();
	const [message, setMessage] = useState('');

	function handleChange(event) {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	}

	const onSignupSubmitHandlerAsync = async (e) => {
		e.preventDefault();
		if (data?.password !== data?.confirmPassword) {
			setMessage('Passwords do not match');
			return;
		}
		axiosFetch({
			method: 'Post',
			url: configuration.client.clientSignup,
			requestConfig: data,
		});
	};

	//setting message on successful signup
	useEffect(() => {
		if (response?.message && !error) {
			setMessage(response?.message);
		}
	}, [response?.message]);

	//password confirmation check
	useEffect(() => {
		if (data.password) {
			if (data?.password !== data?.confirmPassword) {
				setMessage('Passwords do not match');
			}
			if (data?.password?.length < 6 || data?.confirmPassword?.length < 6) {
				setMessage('Password should be at least 6 characters long');
			}
			if (data?.password === data?.confirmPassword) {
				setMessage('');
				setBtnDisabled(false);
			}
		}
	}, [data?.password, data?.confirmPassword]);

	//setting token on successful login
	useEffect(() => {
		if (response?.data) {
			localStorage.setItem('user', JSON.stringify(response));
			if (response?.data?.status !== 401) {
				window.location.reload();
			}
		}
	}, [response?.data]);

	//redirecting user based on role
	useEffect(() => {
		const userDetails = JSON.parse(localStorage.getItem('user'));
		if (!userDetails?.token || error) return;
		if (userDetails.data?.role === userRoles.client.role) {
			redirect('/client/my-courses');
		} else if (allAdminRoles.includes(userDetails.data?.role)) {
			redirect('/admin/dashboard');
		} else {
			redirect('/');
		}
	}, []);

	console.log(response)

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
					name="confirmPassword"
					onChange={handleChange}
					variant="outLined"
					value={data?.confirmPassword || ''}
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
			<GoogleSignUp />
			<small className={styles.small}>
				Already have an account?{' '}
				<Link href="/login" className={styles.link}>
					Login
				</Link>
			</small>
		</div>
	);
}
