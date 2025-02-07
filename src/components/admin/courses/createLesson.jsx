'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './createLesson.module.css';
import TextEditor from '../atom/textEditor';
export default function CreateLesson({courseId, moduleId}) {
  const [response, error, loading, axiosFetch] = useAxios();
	const [longDetails, setLongDetails] = useState('');
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
	const onClearHandler = () => {
		setMessage({ text: '', type: '' });
		formRef.current.reset();
	};

	const onAddLessonSubmitHandler = (event) => {
		event.preventDefault();
    setMessage({ text: '', type: '' });
		const formData = new FormData(event.target);
		formData.append('details', longDetails);

		axiosFetch({
			method: 'POST',
			url: configuration.courses +'/' + courseId + '/modules/' + moduleId + '/lessons',
			requestConfig: formData,
		});
	};

	return (
		<div className={styles.main}>
			<form
				className={styles.form}
				onSubmit={onAddLessonSubmitHandler}
				ref={formRef}
			>
				<p className={styles.subTitle}>Lesson details:</p>
				<p className={styles.label}>Module title</p>
				<Input
					type="text"
					placeholder="Lesson Title"
					name="title"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Lesson description</p>
				<Input
					type="text"
					placeholder="Lesson Description"
					name="description"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Lesson details</p>
				<TextEditor setData={setLongDetails} />
				<p className={styles.label}>Order</p>
				<Input
					type="number"
					placeholder="Order"
					name="order"
					variant="secondary"
					required
				/>
				<p className={styles.subTitle}>Accessibility:</p>
				<p className={styles.label}>is Quiz Required?</p>

				<Select
					options = {[{label: 'Yes', value: true}, {label: 'No', value: false}]}
					name="requireQuizPass"
					variant="secondary"
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
