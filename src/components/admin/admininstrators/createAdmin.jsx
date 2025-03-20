'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './createAdmin.module.css';
import { allAdminRoles, userRoles } from '@/constants/constants';
export default function CreateAdmin({refresh = () => {}}) {
	const [response, error, loading, axiosFetch] = useAxios();
	const formRef = useRef(null);
	const [message, setMessage] = useState({ text: '', type: '' });
	useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
			refresh();
		}
		if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);
	const onClearHandler = () => {
		setMessage({ text: '', type: '' });
		formRef.current.reset();
	};

	const onAddAdminSubmitHandler = (event) => {
		event.preventDefault();
    setMessage({ text: '', type: '' });
		const formData = new FormData(event.target);
		const payload = Object.fromEntries(formData);
		if (payload.password !== payload.confirmPassword) {
			setMessage({ text: 'Passwords do not match', type: 'error' });
			return;
		}
		delete payload.confirmPassword;
		//const finalPayload = { ...payload, creatorsRole: userDetails?.role };

		axiosFetch({
			method: 'POST',
			url: configuration.admin.admin,
			requestConfig: payload,
		});
	};

	return (
		<div className={styles.main}>
			<form
				className={styles.form}
				onSubmit={onAddAdminSubmitHandler}
				ref={formRef}
			>
				<p className={styles.subTitle}>User details:</p>
				<p className={styles.label}>Admin first name</p>
				<Input
					type="text"
					placeholder="Admin First Name"
					name="firstName"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Admin last name</p>
				<Input
					type="text"
					placeholder="Admin Last Name"
					name="lastName"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Email</p>
				<Input
					type="email"
					placeholder="Recharger admin email"
					name="email"
					variant="secondary"
					required
				/>
				<p className={styles.subTitle}>Admin Role:</p>
				<p className={styles.label}>Role</p>

				<Select
					options={allAdminRoles.map((role) => {
						return {
							label: userRoles.admin[role].title,
							value: role,
						};
					})}
					placeholder="Select role"
					name="role"
					variant="secondary"
					required
				/>
				<p className={styles.subTitle}>Password:</p>
				<p className={styles.label}>Password</p>
				<Input
					type="text"
					placeholder="Password"
					name="password"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Confirm password</p>
				<Input
					type="text"
					placeholder="Confirm password"
					name="confirmPassword"
					variant="secondary"
					required
				/>

				<div className={styles.submitContainer}>
					<Message
						text={message.text}
						type={message.type}
						loading={loading}
					/>
					<div className={styles.buttonContainer}>
						<Button
							text="Clear"
							variant="outLined"
							disabled={loading}
							onClick={onClearHandler}
						/>
						<Button
							type="submit"
							text="Submit"
							variant="primary"
							loading={loading}
							disabled={loading}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
