'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './createLesson.module.css';
import TextEditor from '../../atom/textEditor';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function CreateLesson({courseId, moduleId, lessonId=''}) {
  const [response, error, loading, axiosFetch] = useAxios();
	const [responseGetInfo, errorGetInfo, loadingGetInfo, axiosFetchGetInfo] = useAxios();
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

	useEffect(() => {
		if (!lessonId) return;
		axiosFetchGetInfo({
			method: 'GET',
			url: configuration.courses + '/' + courseId + '/modules/' + moduleId + '/lessons/' + lessonId,
		});
	},[lessonId]);

	const onAddLessonSubmitHandler = (event) => {
		event.preventDefault();
    setMessage({ text: '', type: '' });
		const formData = new FormData(event.target);
		formData.append('details', longDetails);

		let apiUrl = configuration.courses + '/' + courseId + '/modules/' + moduleId + '/lessons';
		//for editing a lesson
		if (lessonId) {
			apiUrl += '/' + lessonId;
		}

		axiosFetch({
			method: lessonId ? 'PUT' : 'POST',
			url: apiUrl,
			requestConfig: formData,
		});
	};

	return (
		<div className={styles.main}>
			{loadingGetInfo && !errorGetInfo && <LoadingDots/>}
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
					defaultValue={responseGetInfo?.data?.title}
					required
				/>
				<p className={styles.label}>Lesson description</p>
				<Input
					type="text"
					placeholder="Lesson Description"
					name="description"
					variant="secondary"
					defaultValue={responseGetInfo?.data?.description}
					required
				/>
				<p className={styles.label}>Lesson details</p>
				<TextEditor setData={setLongDetails} defaultValue={responseGetInfo?.data?.details} />
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
				<p className={styles.label}>is Quiz Required?</p>

				<Select
					options = {[{label: 'Yes', value: true}, {label: 'No', value: false}]}
					name="requireQuizPass"
					variant="secondary"
					defaultValue={responseGetInfo?.data?.requireQuizPass}
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
