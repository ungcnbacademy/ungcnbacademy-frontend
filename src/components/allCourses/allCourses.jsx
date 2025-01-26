import React from 'react'
import styles from './allCourses.module.css';
import CourseCard from '../atom/courseCard';
import Input from '../ui/input/input';
export default function AllCourses() {
	return (
		<div className={styles.overlay}>
			<div className={styles.main}>
				<div className={styles.filter}>
					<h4 className={styles.text}>All Courses</h4>
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
