'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Status() {
	const [slugs, setSlugs] = useState('');

	useEffect(() => {
		const url = new URL(window.location.href);
		const slugs = url.pathname.split('/').pop();
		setSlugs(slugs); // Store the value in state
	}, []);

	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>Payment status normal</h3>
			</div>
			<h4>{slugs}</h4> {/* Now this will work */}
		</div>
	);
}
