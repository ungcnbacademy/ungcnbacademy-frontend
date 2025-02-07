'use client';
import React, { useEffect, useState } from 'react';
import styles from './progressBar.module.css';
export default function ProgressBar({ progress = 0, showPercent = true }) {
	const [text, setText] = useState('');

	useEffect(() => {
		if (progress >= 100) {
			setText('Completed, please wait...');
		} else if (progress <= 0) {
			setText('');
		} else {
			setText(`${progress}% Completed`);
		}
	}, [progress]);

	return (
		<div className={styles.main}>
			<div
				style={{ width: `${progress}%` }}
				className={styles.progress}
			></div>
			<div className={styles.bar}></div>
			{showPercent && <p className={styles.percent}>{text}</p>}
		</div>
	);
}
