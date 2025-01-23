import React from 'react';
import styles from './section3.module.css';
import Button from '../ui/button/button';
import CourseCard from '../atom/courseCard';
export default function Section3() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.container}>
					<h1 className={styles.title}>Our Specialized Courses</h1>
					<p className={styles.description}>
						You can expect the kinds of benefits that set you up for
						long-term professional and personal growth
					</p>
					<p className={styles.description}>
						1. Earn valuable credentials from top universities and
						companies. <br /> 2. Access career support and planning
						resources. <br />
						3. Learn from world-class university faculty and industry
						leaders. <br /> 4. Upskill at your pace with flexible
						hybrid or 100% online options. <br /> 5. Join a global
						network of professionals in your industry.
					</p>
					<br />
					<Button text="Our Courses" variant="outLined" />
					<br />
				</div>
			</div>
			<div className={styles.right}>
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
	);
}
