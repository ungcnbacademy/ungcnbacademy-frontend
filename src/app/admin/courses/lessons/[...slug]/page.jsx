'use client';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';
import moment from 'moment';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import Message from '@/components/ui/message/message';
import { cloudflareCustomerId } from '@/constants/constants';
export default function LessonDetails({ params }) {
	const unwrappedParams = React.use(params);
	const courseId = unwrappedParams.slug[0];
	const moduleId = unwrappedParams.slug[1];
	const lessonId = unwrappedParams.slug[2];
	const [response, error, loading, axiosFetch] = useAxios();
	const [
		responseVideoUpload,
		errorVideoUpload,
		loadingVideoUpload,
		axiosFetchVideoUpload,
	] = useAxios();

	const [message, setMessage] = useState({ text: '', type: '' });

	useEffect(() => {
		if (responseVideoUpload?.message) {
			setMessage({ text: responseVideoUpload?.message, type: 'success' });
		}
		if (errorVideoUpload?.message) {
			setMessage({ text: errorVideoUpload?.message, type: 'error' });
		}
	}, [responseVideoUpload, errorVideoUpload]);

	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
		});
	}, []);

	const onVideoUploadHandler = (e) => {
		e.preventDefault();
    setMessage({ text: '', type: '' });
		const formData = new FormData(e.target);

		axiosFetchVideoUpload({
			method: 'POST',
			url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/video`,
			requestConfig: formData,
		});
	};

	return (
		<div className={styles.main}>
			<small>Lesson Details</small>
			{loading && <LoadingDots />}
			{response?.data && !loading && !error && (
				<>
					<h2 className={styles.title}>{response?.data?.title}</h2>
					<p># {response?.data?._id}</p>
					<p>Duration: {response?.data?.duration} </p>
					<p>Description: {response?.data?.description}</p>
					<p>
						Created at:{' '}
						{moment(response?.data?.createdAt).format('lll')}
					</p>
					<br />
          {response?.data?.videoUrl && <iframe
						src={response?.data?.videoUrl.replace(
							'manifest/video.m3u8',
							'iframe'
						)}
            //src={`https://customer-${cloudflareCustomerId}.cloudflarestream.com/${response?.data?.videoUrl}/iframe`}
            //src="https://customer-vv3mcx6scdxfhofx.cloudflarestream.com/7ec7f517977f45f9ad646d8d2f41f6a6/iframe"
						title="Example Stream video"
						width="100%"
						height="500"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>}


					<div className={styles.uploadVideo}>
						<label className={styles.label}>
							Upload or change video
						</label>
						<form
							className={styles.form}
							onSubmit={onVideoUploadHandler}
						>
							<Input
								type="file"
								variant="secondary"
								label="Upload Video"
                placeholder='Upload Video'
								name="video"
								className={styles.input}
							/>
							<Message
								text={message.text}
								type={message.type}
                loading={loadingVideoUpload}
							/>
							<Button
								type="submit"
								text="Upload"
								variant="primary"
								className={styles.button}
								loading={loadingVideoUpload}
							/>
						</form>
					</div>
				</>
			)}
		</div>
	);
}
