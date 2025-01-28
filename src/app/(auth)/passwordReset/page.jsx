'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Button from '@/components/ui/button/button';
import Input from '../../../components/ui/input/input';
import Message from '../../../components/ui/message/message';
import Image from 'next/image';
import GoogleSignUp from '@/components/auth/googleSignUp';

export default function PasswordReset() {
	const [identifier, setIdentifier] = useState('');
	const [otp, setOtp] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState({ text: '', type: '' });
	const [responseOTP, errorOTP, loadingOTP, axiosFetchOTP] = useAxios();
	const [
		responsePasswordReset,
		errorPasswordReset,
		loadingPasswordReset,
		axiosFetchPasswordReset,
	] = useAxios();
	const [showContainer, setShowContainer] = useState(false);

	const requestOTPHandler = async (e) => {
		e.preventDefault();
		axiosFetchOTP({
			method: 'Post',
			url: configuration.requestOTP,
			requestConfig: { email: identifier },
		});
	};
	const passwordResetHandler = async (e) => {
		e.preventDefault();
		if (newPassword !== confirmPassword) {
			//message.error('Passwords do not match');
			setMessage({ text: 'Passwords do not match', type: 'error' });
			return;
		}
		axiosFetchPasswordReset({
			method: 'Post',
			url: configuration.resetPassword,
			requestConfig: { otp, password: newPassword, email: identifier, confirmPassword: confirmPassword },
		});
	};

	useEffect(() => {
		if (errorOTP?.message) {
			//message.error(errorOTP.message);
			setMessage({ text: errorOTP.message, type: 'error' });
		}
		if (responseOTP?.message && !errorOTP && !loadingOTP) {
			//message.success(responseOTP?.message);
			setMessage({ text: responseOTP?.message, type: 'success' });
			setShowContainer(true);
		}
	}, [responseOTP, errorOTP, loadingOTP]);

	useEffect(() => {
		if (
			responsePasswordReset?.message &&
			!errorPasswordReset &&
			!loadingPasswordReset
		) {
			//message.success(responsePasswordReset?.message);
			setMessage({
				text: responsePasswordReset?.message,
				type: 'success',
			});
			setShowContainer(false);
			setIdentifier('');
			setOtp('');
			setNewPassword('');
			setConfirmPassword('');
			//message.success('Please login with your new password');
			setMessage({
				text: 'Please login with your new password',
				type: 'success',
			});
		}
	}, [responsePasswordReset]);

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
			<form className={styles.form}>
				<label className={styles.label}>Email</label>
				<Input
					type="email"
					placeholder="Enter your email"
					name="email"
					value={identifier}
					onChange={(e) => setIdentifier(e.target.value)}
					variant="outLined"
					required
					className={styles.input}
				/>

				<Button
					loading={loadingOTP}
					disabled={!identifier}
					text="Forgot Password"
					type="submit"
					variant="outLined"
					onClick={requestOTPHandler}
					className={styles.button}
				/>
			</form>
			{message && <Message text={message.text} type={message.type} />}
			{showContainer && (
				<>
					<br />
					<form className={styles.form}>
						<Input
							type="text"
							placeholder="Enter OTP"
							name="otp"
							value={otp}
							onChange={(e) => setOtp(e.target.value)}
							variant="outLined"
							className={styles.input}
						/>
						<Input
							type="password"
							placeholder="New Password"
							name="newPassword"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							variant="outLined"
							className={styles.input}
						/>
						<Input
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							variant="outLined"
							className={styles.input}
						/>

						<Button
							loading={loadingPasswordReset}
							disabled={!otp || !newPassword || !confirmPassword}
							text="Reset Password"
							type="submit"
							variant="outLined"
							onClick={passwordResetHandler}
							className={styles.button}
						/>
					</form>
					{message && (
						<Message text={message.text} type={message.type} />
					)}
				</>
			)}

			<GoogleSignUp/>
			<small className={styles.small}>
				Already have an account?{' '}
				<Link href="/login" className={styles.link}>
					Login
				</Link>
			</small>
		</div>
	);
}
