'use client';
import styles from './layout.module.css';
import UserMenu from '@/components/client/atom/userMenu';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { userRoles } from '@/utility/constants';
export default function Layout({ children }) {
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);
	if (typeof window !== 'undefined') {
		var userDetails = JSON.parse(localStorage.getItem('user'));
	}
	useEffect(() => {
		const allowedRoles = [userRoles.client.online.role];
		if (
			userDetails &&
			allowedRoles.includes(userDetails?.customer?.customerType)
		) {
			setIsClient(true);
		} else {
			router.push('/');
		}
	}, [userDetails?.customer?.customerType]);

	return (
		<>
			{isClient && (
				<main className={styles.main}>
					<div className={styles.userMenu}>
						<UserMenu />
					</div>
					<div className={styles.content}>{children}</div>
				</main>
			)}
		</>
	);
}
