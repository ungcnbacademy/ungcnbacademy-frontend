'use client';
import React, { useEffect, useState } from 'react';
import styles from './timer.module.css';
export default function Timer({ initialTime }) {
	const [timeLeft, setTimeLeft] = useState(initialTime * 60);
	useEffect(() => {
		if (timeLeft <= 0) return;

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
			.toString()
			.padStart(2, '0')}`;
	};

	return (
		<div className={styles.main}>
			<p className={styles.title}>Remaining Time</p>
			<p className={styles.time}> {formatTime(timeLeft)}</p>{' '}
			{/* {timeLeft === 0 && <div className={styles.timeUp}>Time's up!</div>} */}
		</div>
	);
}
