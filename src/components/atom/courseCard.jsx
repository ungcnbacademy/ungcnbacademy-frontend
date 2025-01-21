import React from 'react';
import styles from './courseCard.module.css';
import Image from 'next/image';
import {
	FaRegCalendarAlt,
	FaRegFileAlt,
	FaArrowRight,
	FaRegClock,
} from 'react-icons/fa';

export default function CourseCard({
	img = '/assets/noImage.svg',
	title = 'Title',
	description = 'Description',
	startTime = 'Anytime',
	duration = '',
	totalLectures = '',
}) {
	return (
		<div className={styles.main}>
			<Image
				src={img}
				alt="Empty"
				width={300}
				height={200}
				className={styles.image}
			/>
			<div className={styles.container}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
				<div className={styles.content}>
					<FaRegCalendarAlt />
					<p>{startTime}</p>
				</div>
				<div className={styles.content}>
					<FaRegClock />
					<p>{duration} total hours</p>
				</div>
				<div className={styles.content}>
					<FaRegFileAlt />
					<p>{totalLectures} lectures</p>
				</div>

				<div className={styles.detailsButton}>
					<p>Course Details</p>
					<FaArrowRight className={styles.icon} />
				</div>
			</div>
		</div>
	);
}
