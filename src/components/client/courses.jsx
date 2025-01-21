import React from 'react';
import styles from './courses.module.css';
import CourseCard from '../atom/courseCard';
import Input from '../ui/input/input';
export default function Courses() {
	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>My Courses</h3>
			</div>
			<div className={styles.main}>
				<div className={styles.filter}>
					<p className={styles.text}></p>
					<Input
						type="search"
						placeholder="Search"
						variant="outLined"
						className={styles.search}
					/>
				</div>
				<div className={styles.container}>
					<CourseCard
						img="/assets/auth-bg.webp"
						title="ESG Investing and Analysis"
						description="Learn how to incorporate ESG factors into your investment strategy"
						startTime="Anytime"
						duration="10"
						totalLectures="10"
					/>
					<CourseCard
						img="/assets/auth-bg.webp"
						title="ESG Investing and Analysis"
						description="Learn how to incorporate ESG factors into your investment strategy"
						startTime="Anytime"
						duration="10"
						totalLectures="10"
					/>
					<CourseCard
						img="/assets/auth-bg.webp"
						title="ESG Investing and Analysis"
						description="Learn how to incorporate ESG factors into your investment strategy"
						startTime="Anytime"
						duration="10"
						totalLectures="10"
					/>
					<CourseCard
						img="/assets/auth-bg.webp"
						title="ESG Investing and Analysis"
						description="Learn how to incorporate ESG factors into your investment strategy"
						startTime="Anytime"
						duration="10"
						totalLectures="10"
					/>
					<CourseCard
						img="/assets/auth-bg.webp"
						title="ESG Investing and Analysis"
						description="Learn how to incorporate ESG factors into your investment strategy"
						startTime="Anytime"
						duration="10"
						totalLectures="10"
					/>
					<CourseCard
						img="/assets/auth-bg.webp"
						title="ESG Investing and Analysis"
						description="Learn how to incorporate ESG factors into your investment strategy"
						startTime="Anytime"
						duration="10"
						totalLectures="10"
					/>
				</div>
			</div>
		</div>
	);
}
