'use client';
import React from 'react';
import styles from './page.module.css';
import LearningDetails from '@/components/client/learningDetails';
export default function LearningDetailsPage({ params }) {
	const unwrappedParams = React.use(params);
	const courseId = unwrappedParams.id;
	return (
		<div className={styles.main}>
			<div style={{ height: '70px', background: 'var(--accent2)' }}></div>
			<LearningDetails id={courseId} />
		</div>
	);
}
