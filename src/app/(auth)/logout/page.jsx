'use client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import styles from './page.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function Logout() {
	useEffect(() => {
		const userDetails = JSON.parse(localStorage.getItem('user'));
		if (userDetails) {
			localStorage.removeItem('user');
			setTimeout(() => {
				redirect('/');
			}, 1000);
		} else {
			redirect('/');
		}
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.logo}>
				<Link href="/">
					<Image
						src={'/logoBlack.svg'}
						alt="Logo"
						width={160}
						height={50}
					/>
				</Link>
				<p className={styles.text}>Please wait while we log you out</p>
			</div>
			<div className={styles.container}>
				 <LoadingDots/>
			</div>
		</div>
	);
}
