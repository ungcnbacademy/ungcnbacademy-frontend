'use client';
import DashboardMenu from '@/components/admin/atom/dashboardMenu';
import styles from './layout.module.css';
import LayoutHeader from '@/components/admin/atom/layoutHeader';
import { useEffect } from 'react';
import { allAdminRoles } from '@/constants/constants';

export default function Layout({ children }) {
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user'));
		if (!allAdminRoles.includes(userData?.data?.role)) {
			redirect('/');
		}
	}, []);
	return (
		<main className={styles.main}>
			<div className={styles.sidebar}>
				<DashboardMenu />
			</div>
			<div className={styles.content}>
				<LayoutHeader />
				<div className={styles.container}>{children}</div>
			</div>
		</main>
	);
}
