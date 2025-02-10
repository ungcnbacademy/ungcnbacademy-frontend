'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './createModule.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';

export default function CreateModule({courseId, moduleId=''}) {
	const [response, error, loading, axiosFetch] = useAxios();
	const [responseGetInfo, errorGetInfo, loadingGetInfo, axiosFetchGetInfo] = useAxios();
	const formRef = useRef(null);
	const [message, setMessage] = useState({ text: '', type: '' });
	useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
		}
		if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);

	useEffect(() => {
		if (!moduleId) return;
		axiosFetchGetInfo({
			method: 'GET',
			url: configuration.courses + '/' + courseId + '/modules/' + moduleId,
		});
	},[moduleId]);

	const onClearHandler = () => {
		setMessage({ text: '', type: '' });
		formRef.current.reset();
	};

	const onAddModuleSubmitHandler = (event) => {
		event.preventDefault();
    setMessage({ text: '', type: '' });
		const formData = new FormData(event.target);
		const payload = Object.fromEntries(formData);

		let apiUrl = configuration.courses + '/' + courseId + '/modules';
		//for editing a module
		if (moduleId) {
			apiUrl += '/' + moduleId;
		}

		axiosFetch({
			method: moduleId ? 'PUT' : 'POST',
			url: apiUrl,
			requestConfig: payload,
		});
	};

	return (
		<div className={styles.main}>
			{loadingGetInfo && !errorGetInfo && <LoadingDots/>}
			<form
				className={styles.form}
				onSubmit={onAddModuleSubmitHandler}
				ref={formRef}
			>
				<p className={styles.subTitle}>Module details:</p>
				<p className={styles.label}>Module title</p>
				<Input
					type="text"
					placeholder="Module Title"
					name="title"
					variant="secondary"
					defaultValue={responseGetInfo?.data?.title}
					required
				/>
				<p className={styles.label}>Module description</p>
				<Input
					type="text"
					placeholder="Module Description"
					name="description"
					variant="secondary"
					defaultValue={responseGetInfo?.data?.description}
					required
				/>
				<p className={styles.label}>Order</p>
				<Input
					type="number"
					placeholder="Order"
					name="order"
					variant="secondary"
					defaultValue={responseGetInfo?.data?.order}
					required
				/>
				<p className={styles.subTitle}>Accessibility:</p>
				<p className={styles.label}>is active?</p>

				<Select
					options = {[{label: 'Yes', value: true}, {label: 'No', value: false}]}
					name="isAccessible"
					variant="secondary"
					defaultValue={responseGetInfo?.data?.isAccessible}
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
