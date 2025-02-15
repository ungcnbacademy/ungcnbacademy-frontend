import React from 'react';
import styles from './section5.module.css';
import Image from 'next/image';
export default function Section5() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.title}>
						Learner outcomes on ESGeducation
					</p>
					<p className={styles.description}>
						77% of learners report career benefits, such as new
						skills, increased pay, and new job opportunities.
					</p>
					<p className={styles.description}>
						By engaging with our exceptional faculty, students will:
						<br /> <br />
						1. Develop critical thinking and problem-solving skills
						through real-world applications. <br /> 2. Gain insights
						from leading academics and industry experts. <br /> 3.
						Build a strong foundation in their chosen field,
						enriched by global perspectives. <br /> 4. Cultivate a
						passion for lifelong learning and professional growth."
					</p>
				</div>
				<div className={styles.right}>
					<Image
						src="/assets/landing/badge.png"
						alt="Empty"
						width={150}
						height={200}
						className={styles.image}
					/>
				</div>
			</div>
		</div>
	);
}
