'use client';
import React from 'react';
import styles from './contentCardLesson.module.css';
import { MdOutlineOndemandVideo, MdLock } from 'react-icons/md';

export default function ContentCardLesson({
	title,
	order,
	hasVideo,
	totalAssets,
	videoDuration,
	onClick = () => {},
	selected,
	checked = false,
	locked = false,
	lockMessage = 'Locked',
}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.LessonContainer}>
				<div
					className={`${styles.main} ${selected && styles.selected}`}
					onClick={onClick}
				>
					<div
						className={`${styles.check} ${
							checked && styles.checked
						}`}
					></div>
					<div className={styles.container}>
						<p className={styles.title}>
							Lesson {order}: {title}
						</p>
						<div className={styles.subtitle}>
							{hasVideo && <MdOutlineOndemandVideo />}
							{hasVideo && videoDuration && (
								<label>Duration {videoDuration} min,</label>
							)}
							<label>Total Assets {totalAssets},</label>
						</div>
					</div>
				</div>
			</div>
			{locked && (
				<div className={styles.locked}>
					<div className={styles.lockContainer}>
						<MdLock className={styles.lockIcon} />
						<p className={styles.lockText}>{lockMessage}</p>
					</div>
				</div>
			)}
		</div>
	);
}
