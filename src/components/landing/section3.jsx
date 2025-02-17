import React from 'react';
import styles from './section3.module.css';
import Button from '../ui/button/button';
import CourseCard from '../atom/courseCard';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import Link from 'next/link';

export default async function Section3() {
	const response = await getFetchRequests.getFeaturedCourses();
	const firstCourse = response?.data?.courses[0];

	return (
		<div className={styles.overlay}>
			<div className={styles.main}>
				<div className={styles.left}>
					<div className={styles.container}>
						<h1 className={styles.title}>
							Our Specialized Courses
						</h1>
						<p className={styles.description}>
							You can expect the kinds of benefits that set you up
							for long-term professional and personal growth
						</p>
						<p className={styles.description}>
							1. Earn valuable credentials from top universities
							and companies. <br /> 2. Access career support and
							planning resources. <br />
							3. Learn from world-class university faculty and
							industry leaders. <br /> 4. Upskill at your pace
							with flexible hybrid or 100% online options. <br />{' '}
							5. Join a global network of professionals in your
							industry.
						</p>
						<br />
						<Link href="/courses" className={styles.link}>
							<Button text="Our Courses" variant="outLined" />
						</Link>
						<br />
					</div>
				</div>
				<div className={styles.right}>
					<CourseCard
						img={firstCourse?.thumbnail || '/assets/auth-bg.webp'}
						title={
							firstCourse?.title || 'ESG Investing and Analysis'
						}
						description={
							firstCourse?.description ||
							'Learn how to incorporate ESG factors into your investment strategy'
						}
						startTime="Anytime"
						duration="10"
						totalLectures="10"
						id={firstCourse?._id}
					/>
				</div>
			</div>
		</div>
	);
}
