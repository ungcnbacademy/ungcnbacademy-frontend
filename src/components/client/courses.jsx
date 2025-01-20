import React from 'react';
import styles from './courses.module.css';
export default function Courses() {
	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>My Courses</h3>
			</div>
			<div className={styles.main}>All courses</div>
		</div>
	);
}
