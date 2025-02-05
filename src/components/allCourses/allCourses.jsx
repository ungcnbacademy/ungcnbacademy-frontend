import React from 'react';
import styles from './allCourses.module.css';
import CourseCard from '../atom/courseCard';
import Input from '../ui/input/input';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
export default async function AllCourses() {
	const response = await getFetchRequests.getAllCourses();
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
					{response?.data?.courses.map((course) => (
						<CourseCard
							key={course._id}
							img={course.thumbnail || '/assets/noImage.svg'}
							title={course.title}
							description={course.description}
							startTime="Anytime"
							duration="10"
							totalLectures="10"
							id={course._id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
