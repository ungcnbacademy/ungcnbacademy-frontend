'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import { Modal, Result } from 'antd';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button/button';
import Input from '../../../components/ui/input/input';
import Message from '../../../components/ui/message/message';
export default function Signup() {
	const [data, setData] = useState({});
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [response, error, loading, axiosFetch] = useAxios();
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState(false);
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
			<div className={styles.container}>
				<p className={styles.title}>SIGNUP</p>
				<br />
				<form
					onSubmit={onSignupSubmitHandlerAsync}
					className={styles.form}
				>
					<Input
						type="text"
						placeholder="Enter your username"
						name="name"
						onChange={handleChange}
						value={data?.name || ''}
						required
					/>
					<Input
						type="email"
						placeholder="Enter your email"
						name="email"
						onChange={handleChange}
						value={data?.email || ''}
						required
					/>
					<Input
						type="tel"
						name="phone"
						placeholder="Enter your phone"
						onChange={handleChange}
						value={data?.phone || ''}
					/>
					<Input
						type="password"
						placeholder="Enter your password"
						name="password"
						onChange={handleChange}
						value={data?.password || ''}
						required
					/>
					<Input
						type="password"
						placeholder="Confirm your password"
						name="password"
						onChange={(e) => {
							setConfirmPassword(e.target.value);
							setBtnDisabled(e.target.value !== data?.password);
						}}
						value={confirmPassword}
						required
					/>
					<Message text={message} type="error" />
					<br /> <br />
					<Button
						type="submit"
						text="signup"
						variant="primary"
						disabled={btnDisabled}
						loading={loading}
					/>
				</form>

				<small className={styles.small}>
					Already have an account?{' '}
					<Link href="/login/client" className={styles.link}>
						Click here
					</Link>
				</small>
			</div>
			<Modal open={isModalOpen} footer={null} closable={false}>
				<Result
					status="success"
					title="Signup Successful"
					subTitle="Please login to your account to continue"
					extra={[
						<Button
							key="login"
							text="Login"
							variant="primary"
							onClick={() => {
								router.push('/login/client');
							}}
						/>,
						<Button
							key="home"
							text="Home"
							variant="secondary"
							onClick={() => {
								router.push('/');
							}}
						/>,
					]}
				/>
			</Modal>
		</div>
	);
}
