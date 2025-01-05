'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import Message from '@/components/ui/message/message';
import Select from '@/components/ui/select/select';
export default function AddAddress() {
	const [response, error, loading, axiosFetch] = useAxios();
	const [message, setMessage] = useState();
	const handleAddressSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const payload = Object.fromEntries(formData);
		axiosFetch({
			method: 'Post',
			url: configuration.client.address,
			requestConfig: payload,
		});
	};

	useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
		} else if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);

	return (
		<div className={styles.main}>
			<h1 className={styles.pageTitle}>Add Address</h1>
			<br />
			<form className={styles.form} onSubmit={handleAddressSubmitHandler}>
				<p className={styles.span}>Address</p>
				<Input
					placeholder="Address label"
					variant="secondary"
					name="label"
				/>
				<p className={styles.span}>Street</p>
				<Input placeholder="Street" variant="secondary" name="street" />
				<p className={styles.span}>Area</p>
				<Input placeholder="Area" variant="secondary" name="area" />
				<p className={styles.span}>City</p>
				<Input placeholder="City" variant="secondary" name="city" />
				<p className={styles.span}>Postal code</p>
				<Input
					placeholder="Postal code"
					variant="secondary"
					name="postalCode"
				/>
				<p className={styles.span}>Make default</p>
				<Select
					name="isDefault"
					options={[
						{ value: true, label: 'Yes' },
						{ value: false, label: 'No' },
					]}
					variant="secondary"
				/>
				{message?.text && (
					<Message text={message?.text} type={message?.type} />
				)}
				<Button
					type="submit"
					text="Submit"
					variant="secondary"
					className={styles.button}
					loading={loading}
					disabled={loading}
				/>
			</form>
		</div>
	);
}
