'use client';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';
import moment from 'moment';
import Button from '@/components/ui/button/button';

import { Stream } from '@cloudflare/stream-react';
import CreateAssets from '@/components/admin/courses/lesson/createAssets';
import UploadVideo from '@/components/admin/courses/lesson/uploadVideo';

export default function LessonDetails({ params }) {
	const unwrappedParams = React.use(params);
	const courseId = unwrappedParams.slug[0];
	const moduleId = unwrappedParams.slug[1];
	const lessonId = unwrappedParams.slug[2];
	const [response, error, loading, axiosFetch] = useAxios();

	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
		});
	}, []);

	const lessonDetailsRender = () => {
		return (
			<>
				<small>Lesson Details</small>
				<h2 className={styles.title}>{response?.data?.title}</h2>
				<p className={styles.subtitle}># {response?.data?._id}</p>
				<p className={styles.subtitle}>
					Duration: {response?.data?.duration}{' '}
					{Number(response?.data?.durationUnit) > 1
						? 'minutes'
						: 'seconds'}{' '}
				</p>
				<p className={styles.subtitle}>
					Description: {response?.data?.description}
				</p>
				<p className={styles.subtitle}>
					Created at:{' '}
					{moment(response?.data?.createdAt).format('lll')}
				</p>
				<br />
			</>
		);
	};

	const streamVideoRender = () => {
		return (
			<>
				{response?.data?.cloudflareVideoId && (
					<div className={styles.videoContainer}>
						<Stream
							src={response?.data?.cloudflareVideoId}
							controls
							className={styles.video}
						/>
					</div>
				)}
			</>
		);
	};

	return (
		<div className={styles.main}>
			{loading && <LoadingDots />}
			{response?.data && !loading && !error && (
				<div className={styles.container}>
					<div className={styles.left}>
						{lessonDetailsRender()}
						{streamVideoRender()}
						<UploadVideo
							courseId={courseId}
							moduleId={moduleId}
							lessonId={lessonId}
						/>
					</div>
					<div className={styles.right}>
						<small>Lesson Details</small>
						<h2 className={styles.title}>Assets</h2>
						<CreateAssets />
					</div>
				</div>
			)}
		</div>
	);
}
