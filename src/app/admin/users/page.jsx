'use client';
import React from 'react';
import styles from './page.module.css';

import AllUsers from '@/components/admin/users/allUsers';
export default function Users() {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h2 className={styles.title}>Users</h2>
			</div>
			<div className={styles.container}>
				<AllUsers />
			</div>
		</div>
	);
}
