import React from 'react';
import styles from './topSection.module.css';

export default function TopSection() {
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Contact Us</h1>
			<p className={styles.text}>
				Comprehensive Support & Specialized Cleaning, On Demand
			</p>
		</div>
	);
}
