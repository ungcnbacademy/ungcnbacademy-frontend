import React from 'react';
import styles from './profile.module.css';
export default function Profile() {
	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>My Profile</h3>
			</div>
			<div className={styles.main}>
				<div className={styles.container}></div>
			</div>
		</div>
	);
}
