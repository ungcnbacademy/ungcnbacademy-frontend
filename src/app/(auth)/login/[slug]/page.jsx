'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';
import useAxios from '../../../../hooks/useAxios';
import { configuration } from '../../../../configuration/configuration';
import { redirect } from 'next/navigation';
import Button from '../../../../components/ui/button/button';
import Input from '../../../../components/ui/input/input';
import Message from '../../../../components/ui/message/message';
import { loginUserRoles, userRoles } from '@/utility/constants';

export default function Login({ params }) {
	const [data, setData] = useState({});
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [response, error, loading, axiosFetch] = useAxios();
	const unwrappedParams = React.use(params);
	const targetLocation = unwrappedParams.slug;
	const loginUrl =
		targetLocation === loginUserRoles.Admin
			? configuration.admin.loginUser
			: configuration.client.loginUser;

	function handleChange(event) {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	}

	const onLoginSubmitHandlerAsync = async (event) => {
		event.preventDefault();
		axiosFetch({
			method: 'Post',
			url: loginUrl,
			requestConfig: data,
		});
	};

	useEffect(() => {
		if (data?.phone && data?.password) {
			setBtnDisabled(false);
		} else {
			setBtnDisabled(true);
		}
	}, [data?.phone, data?.password]);

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

		const adminRoles = [
			userRoles.admin.masterAdmin.role,
			userRoles.admin.rechargerAdmin.role,
			userRoles.admin.stallAdmin.role,
			userRoles.admin.recharger.role,
			userRoles.admin.stallCashier.role,
		];

		if (!userDetails?.token || error) return;

		if (userDetails.user?.role === userRoles.client.role) {
			redirect('/');
		} else if (adminRoles.includes(userDetails.user?.role)) {
			redirect('/admin/dashboard');
		}
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<p className={styles.title}>
					{targetLocation === loginUserRoles.Admin
						? 'Admin login'
						: 'LOGIN'}
				</p>
				<br />
				<form
					onSubmit={onLoginSubmitHandlerAsync}
					className={styles.form}
				>
					<Input
						type="text"
						placeholder="Enter your email or phone number"
						name="phone"
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
				{targetLocation !== loginUserRoles.Admin && (
					<small className={styles.small}>
						Dont have account?{' '}
						<Link href="/signup" className={styles.link}>
							Click here
						</Link>
					</small>
				)}

				<small>
					Forgot Password? {''}
					<Link
						href={
							targetLocation === loginUserRoles.Admin
								? '/passwordReset/admin'
								: '/passwordReset/client'
						}
						className={styles.link}
					>
						Click here
					</Link>
				</small>
			</div>
		</div>
	);
}
