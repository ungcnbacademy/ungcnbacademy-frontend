'use client';
import React from 'react';
import styles from './page.module.css';
export default function Status() {

	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>Payment status</h3>
			</div>
		</div>
	);
}
