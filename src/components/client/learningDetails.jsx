'use client';
import React, { useEffect, useState } from 'react';
import styles from './learningDetails.module.css';
import { Stream } from '@cloudflare/stream-react';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '../ui/loading/loadingDots';
import ContentCardModule from './atom/contentCardModule';
import ContentCardLesson from './atom/contentCardLesson';
export default function LearningDetails({ id }) {
	const [response, error, loading, axiosFetch] = useAxios();
	const [selectedLesson, setSelectedLesson] = useState(null);
	const [videoPlayerLoading, setVideoPlayerLoading] = useState(true);
	const [selectedLessonDetails, setSelectedLessonDetails] = useState(null);
	const [responseLesson, errorLesson, loadingLesson, axiosFetchLesson] =
		useAxios();

	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${id}`,
		});
	}, []);

	const getLessonDataHandler = (moduleId, lessonId) => {
		axiosFetchLesson({
			method: 'Get',
			url: `${configuration.courses}/${id}/modules/${moduleId}/lessons/${lessonId}`,
		});
	};

	useEffect(() => {
		if (selectedLesson) {
			getLessonDataHandler(
				selectedLesson.moduleId,
				selectedLesson.lessonId
			);
		}
	}, [selectedLesson]);

	useEffect(() => {
		if (response?.data?.modules[0]?.lessons[0]) {
			setSelectedLesson({
				moduleId: response?.data?.modules[0]?._id,
				lessonId: response?.data?.modules[0]?.lessons[0]?._id,
			});
		}
	}, [response]);

	const courseContentListViewRender = () => {
		return (
			<>
				{response?.data?.modules && (
					<p className={styles.title}>Course Content</p>
				)}
				{response?.data?.modules &&
					response?.data?.modules?.map((module, i) => (
						<ContentCardModule
							key={i}
							order={module.order}
							title={module.title}
							totalLesson={module.totalLessons}
							selected={selectedLesson?.moduleId === module._id}
							children={module.lessons.map((lesson, i) => (
								<ContentCardLesson
									key={i}
									order={lesson.order}
									title={lesson.title}
									hasVideo={lesson.hasVideo}
									totalAssets={lesson.totalAssets}
									videoDuration={lesson.duration}
									selected={
										selectedLesson?.moduleId ===
											module._id &&
										selectedLesson?.lessonId === lesson._id
									}
									onClick={() => {
										setSelectedLesson({
											moduleId: module._id,
											lessonId: lesson._id,
										});
									}}
									isQuizRequired={!lesson?.requireQuizPass}
									//isLocked={true}
								/>
							))}
						/>
					))}
			</>
		);
	};

	const lessonDetailsRender = () => {
		return (
			<>
				{loadingLesson && <LoadingDots />}
				{responseLesson?.data && !loadingLesson && !errorLesson && (
					<>
						{responseLesson?.data?.cloudflareVideoId && (
							<div className={styles.videoContainer}>
								{videoPlayerLoading && (
									<LoadingDots color="white" />
								)}
								<Stream
									src={
										responseLesson?.data?.cloudflareVideoId
									}
									controls
									className={styles.video}
									onError={(error) => console.log(error)}
									onLoadedData={() =>
										setVideoPlayerLoading(false)
									}
								/>
							</div>
						)}
						<div className={styles.lessonHeader}>
							<p className={styles.title}>
								Lesson {responseLesson?.data?.order}:{' '}
								{responseLesson?.data?.title}
							</p>
							<p className={styles.subtitle}>
								{responseLesson?.data?.description}
							</p>
						</div>
						<div className={styles.content}>
							{responseLesson?.data?.details && (
								<div
									dangerouslySetInnerHTML={{
										__html: responseLesson?.data?.details,
									}}
									className={styles.longDescription}
								></div>
							)}
						</div>
						<div className={styles.assets}>
							<h1 className={styles.heading}>Lesson assets</h1>
							{responseLesson?.data?.assets.length > 0 ? (
								responseLesson?.data?.assets.map((asset, i) => (
									<div
										key={i}
										className={styles.assetContainer}
									>
										<a
											href={asset.fileUrl}
											target="_blank"
											className={styles.title}
										>
											{i + 1}. {asset.title}
										</a>
									</div>
								))
							) : (
								<p className={styles.noAssets}>
									No assets available.
								</p>
							)}
						</div>
					</>
				)}
			</>
		);
	};

	return (
		<div className={styles.main}>
			{loading && <LoadingDots />}
			{!loading && !error && (
				<>
					<div className={styles.left}>{lessonDetailsRender()}</div>
					<div className={styles.right}>
						{courseContentListViewRender()}
					</div>
				</>
			)}
		</div>
	);
}
