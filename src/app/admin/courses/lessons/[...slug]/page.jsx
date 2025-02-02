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
import Drawer from '@/components/ui/drawer/drawer';

export default function LessonDetails({ params }) {
	const unwrappedParams = React.use(params);
	const courseId = unwrappedParams.slug[0];
	const moduleId = unwrappedParams.slug[1];
	const lessonId = unwrappedParams.slug[2];
	const [response, error, loading, axiosFetch] = useAxios();
	const [isDrawerOpenCreateAssets, setIsDrawerOpenCreateAssets] =
		useState(false);
	const [isDrawerOpenUploadVideo, setIsDrawerOpenUploadVideo] =
		useState(false);

	const drawerOpenCreateAssetsRender = () => {
		return (
			<>
				{isDrawerOpenCreateAssets && (
					<Drawer
						title="Create Assets"
						closeFunction={() => setIsDrawerOpenCreateAssets(false)}
					>
						<CreateAssets />
					</Drawer>
				)}
			</>
		);
	};

	const drawerOpenUploadVideoRender = () => {
		return (
			<>
				{isDrawerOpenUploadVideo && (
					<Drawer
						title="Upload Video"
						closeFunction={() => setIsDrawerOpenUploadVideo(false)}
					>
						<UploadVideo
							courseId={courseId}
							moduleId={moduleId}
							lessonId={lessonId}
						/>
					</Drawer>
				)}
			</>
		);
	};

	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
		});
	}, []);

	const lessonDetailsRender = () => {
		return (
			<div className={styles.details}>
				<h2
					className={styles.title}
				>{`Lesson ${response?.data?.order}: ${response?.data?.title}`}</h2>
				<p className={styles.subtitle}># {response?.data?._id}</p>
				{response?.data?.duration && (
					<p className={styles.subtitle}>
						Duration: {response?.data?.duration}{' '}
						{Number(response?.data?.durationUnit) > 1
							? 'minutes'
							: 'seconds'}{' '}
					</p>
				)}
				<p className={styles.subtitle}>
					Description: {response?.data?.description}
				</p>
				<p className={styles.subtitle}>
					Created at:{' '}
					{moment(response?.data?.createdAt).format('lll')}
				</p>
			</div>
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
							onError={(error) => console.log(error)}
						/>
					</div>
				)}
			</>
		);
	};

	return (
		<div className={styles.main}>
			{drawerOpenCreateAssetsRender()}
			{drawerOpenUploadVideoRender()}
			{loading && <LoadingDots />}
			{response?.data && !loading && !error && (
				<div className={styles.container}>
					<div className={styles.top}>
						{lessonDetailsRender()}
						<div className={styles.buttonContainer}>
							<Button
								text="Create Assets"
								onClick={() =>
									setIsDrawerOpenCreateAssets(true)
								}
							/>
							<Button
								text="Upload Video"
								onClick={() => setIsDrawerOpenUploadVideo(true)}
							/>
						</div>
					</div>
					<div className={styles.bottom}>
						{response?.data?.cloudflareVideoId && (
							<div className={styles.left}>
								{streamVideoRender()}
							</div>
						)}
						<div className={styles.right}>
							<small>Lesson Details</small>
							<h2 className={styles.title}>Assets</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
