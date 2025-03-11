'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';
import PaymentStatus from '@/components/client/payment/paymentStatus';
import Header from '@/components/atom/header';

export default function Status() {
	const [slugs, setSlugs] = useState('');
	const searchParams = useSearchParams();
	const tranId = searchParams.get('tran_id');
	const amount = searchParams.get('amount');

	useEffect(() => {
		const url = new URL(window.location.href);
		const slugs = url.pathname.split('/').pop();
		setSlugs(slugs); // Store the value in state
	}, []);

	return (
		<div className={styles.overlay}>
			<Header
				title={'Payment Status'}
				description={'Educational resources from the world’s leading experts on sustainable development'}
				height='45vh'
			/>
			<PaymentStatus
				status={slugs}
				tranId={tranId || ''}
				amount={amount || 0}
			/>
		</div>
	);
}
