'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Button from '@/components/ui/button/button';
import Input from '../../../../components/ui/input/input';
import Message from '../../../../components/ui/message/message';
import { loginUserRoles } from '@/utility/constants';
export default function PasswordReset({params}) {
	const [identifier, setIdentifier] = useState('');
	const [otp, setOtp] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState({text: '', type: ''});
	const [responseOTP, errorOTP, loadingOTP, axiosFetchOTP] = useAxios();
	const [
		responsePasswordReset,
		errorPasswordReset,
		loadingPasswordReset,
		axiosFetchPasswordReset,
	] = useAxios();
	const unwrappedParams = React.use(params);
	const targetLocation = unwrappedParams.slug;
	const [showContainer, setShowContainer] = useState(false);

	const requestOTPLink = targetLocation === loginUserRoles.Admin
		? configuration.admin.requestOTP
		: configuration.client.requestOTP;
	const resetPasswordLink = targetLocation === loginUserRoles.Admin
		? configuration.admin.resetPassword
		: configuration.client.resetPassword;

	const requestOTPHandler = async (e) => {
		e.preventDefault();
		axiosFetchOTP({
			method: 'Post',
			url: requestOTPLink,
			requestConfig: { identifier },
		});
	};
	const passwordResetHandler = async (e) => {
		e.preventDefault();
		if (newPassword !== confirmPassword) {
			//message.error('Passwords do not match');
			setMessage({text:'Passwords do not match', type: 'error'});
			return;
		}
		axiosFetchPasswordReset({
			method: 'Post',
			url: resetPasswordLink,
			requestConfig: { otp, newPassword },
		});
	};

	useEffect(() => {
		if (errorOTP?.message){
			//message.error(errorOTP.message);
			setMessage({text: errorOTP.message, type: 'error'});
		}
		if (responseOTP?.message && !errorOTP && !loadingOTP) {
			//message.success(responseOTP?.message);
			setMessage({text: responseOTP?.message, type: 'success'});
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
			setMessage({text: responsePasswordReset?.message, type: 'success'});
			setShowContainer(false);
			setIdentifier('');
			setOtp('');
			setNewPassword('');
			setConfirmPassword('');
			//message.success('Please login with your new password');
			setMessage({text: 'Please login with your new password' , type: 'success'});
		}
	}, [responsePasswordReset]);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<p className={styles.title}>{targetLocation === loginUserRoles.Admin ? 'Admin Password Reset' : 'Password Reset'}</p>
				<br />
				<form className={styles.form}>
					<Input
						type="text"
						placeholder="Enter your email or phone number"
						name="identifier"
						value={identifier}
						onChange={(e) => setIdentifier(e.target.value)}
					/>
					{message && <Message text={message.text} type={message.type}/>}
					<br />
					<br />
					<Button
						loading={loadingOTP}
						disabled={!identifier}
						text="Submit"
						type="submit"
						onClick={requestOTPHandler}
					/>
				</form>

				{showContainer && (
					<>
						<br />
						<form className={styles.form}>
							<Input
								type="number"
								placeholder="Enter OTP"
								name="otp"
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
							/>
							<Input
								type="password"
								placeholder="New Password"
								name="newPassword"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<Input
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>
							{message && <Message text={message.text} type={message.type}/>}
							<br />
							<br />
							<Button
								loading={loadingPasswordReset}
								disabled={!otp || !newPassword || !confirmPassword}
								text="Submit"
								type="submit"
								variant="primary"
								onClick={passwordResetHandler}
							/>
						</form>
					</>
				)}

				<small className={styles.small}>
					Already have an account?{' '}
					<Link href={targetLocation === loginUserRoles.Admin ? '/login/admin' : "/login/client"} className={styles.link}>
						Click here
					</Link>
				</small>
				{targetLocation !== loginUserRoles.Admin && (
					<small className={styles.small}>
					Dont have account?{' '}
					<Link href="/signup" className={styles.link}>
						Click here
					</Link>
				</small>
				)}

			</div>
		</div>
	);
}
