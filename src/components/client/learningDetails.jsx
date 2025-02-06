'use client';
import React, { useEffect, useState } from 'react';
import styles from './learningDetails.module.css';
import { Stream } from '@cloudflare/stream-react';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '../ui/loading/loadingDots';
import Collapse from '../ui/collapse/collapse';
import ContentCardModule from './atom/contentCardModule';
import ContentCardLesson from './atom/contentCardLesson';
export default function LearningDetails({ id }) {
	const [response, error, loading, axiosFetch] = useAxios();
	const [selectedLesson, setSelectedLesson] = useState(null);
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

	return (
		<div className={styles.main}>
			{loading && <LoadingDots />}
			<div className={styles.left}>
				{loadingLesson && <LoadingDots />}
				{responseLesson?.data && !loadingLesson && !errorLesson && (
					<>
						<div className={styles.videoContainer}>
							<Stream
								src={responseLesson?.data?.cloudflareVideoId}
								controls
								className={styles.video}
								onError={(error) => console.log(error)}
							/>
						</div>
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
							<p>
								Eliminate Your Insomnia Now Build Strong Sleep
								Habits No More Insomnia! You Deserve a Good
								Night's Sleep - Banish Insomnia and Welcome Good
								Sleep Into Your Bedroom Insomnia is a common
								affliction, but often it can be eliminated or
								reduced through the practice of better daily
								habits. Insomnia is often a function of poor
								sleep hygiene. The good news is that you can
								drastically reduce your insomnia or in some
								cases eliminate insomnia by improving daily
								habits regarding your exercise, diet, cell phone
								use, and bedtime routines. Too often, drugs are
								the first resort for people suffering from
								insomnia. If you’ve been down that route before,
								you know that this is often a solution worse
								than the problem. Anyone seeking to eliminate or
								reduce insomnia should first focus on changing
								behaviors that reduce sleep. Specifically,
								improving diet and exercise can make a huge
								improvement. Next, developing proper bedtime
								rituals, including eliminating all access to
								screens at least one hour before bedtime. Then,
								your bedroom must be configured in a way to
								facilitate uninterrupted sleep. And finally, you
								need to use every trick and tool available to
								eliminate distractions from a sound night's
								sleep. Personal development expert TJ Walker
								will guide you through a specific process to
								help you eliminate the vast majority of the
								causes of common insomnia. After taking this
								course, you will no longer wonder whether you
								are harming your sleep through your specific
								habits. So if you’re ready to get a good night's
								sleep, go ahead and sign up for this course
								today. What do you have to lose except for the
								bags under your eyes?
							</p>
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
										 {i+1}.	{asset.title}
										</a>
									</div>
								))
							) : (
								<p className={styles.noAssets}>No assets available.</p>
							)}
						</div>
					</>
				)}
			</div>
			<div className={styles.right}>

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
									selected= {
										selectedLesson?.moduleId === module._id &&
										selectedLesson?.lessonId === lesson._id
									}
									onClick={() => {
										setSelectedLesson({
											moduleId: module._id,
											lessonId: lesson._id,
										});
									}}
								/>
							))}
						/>
					))}
			</div>
		</div>
	);
}
