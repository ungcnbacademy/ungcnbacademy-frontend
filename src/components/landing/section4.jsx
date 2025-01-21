import React from 'react';
import styles from './section4.module.css';
import Button from '../ui/button/button';
export default function Section4() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<p className={styles.heading}>
					Empowering Minds Through Excellence
				</p>
				<p className={styles.title}>Meet Our Faculty</p>
				<p className={styles.description}>
					We believe that learning begins with exceptional mentorship.
					Our diverse team of educators brings a wealth of knowledge,
					experience, and innovation to guide you toward achieving
					your goals. Our courses and degree programs are taught by
					academics, practitioners, and global leaders. Learn about
					our faculty here.
				</p>
				<Button text="Meet Our Faculty" variant="secondary" />
			</div>
		</div>
	);
}
