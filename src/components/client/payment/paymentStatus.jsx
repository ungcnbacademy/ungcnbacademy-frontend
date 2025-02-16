'use client';
import React, { useEffect, useState } from 'react';
import styles from './paymentStatus.module.css';
import { IoCheckmarkCircle, IoCloseCircleSharp } from 'react-icons/io5';
import { clientPaymentStatus } from '@/constants/constants';
import { getAmountsWithCommas } from '@/utils/utils';
import Button from '@/components/ui/button/button';
import { redirect } from 'next/navigation';
export default function PaymentStatus({
	status = '',
	tranId = '',
	amount = 0,
}) {
	const [statusText, setStatusText] = useState('');
	const [icon, setIcon] = useState('');
	const [text, setText] = useState('');
	const [amountText, setAmountText] = useState('');
	useEffect(() => {
		if (status === clientPaymentStatus.success) {
			setStatusText('Successfully Purchased');
			setIcon(<IoCheckmarkCircle className={styles.successIcon} />);
			setText(`Transaction ID: ${tranId} `);
			setAmountText(`Amount: ${getAmountsWithCommas(amount)}`);
		} else if (status === clientPaymentStatus.failed) {
			setStatusText('Payment Failed');
			setText(`Transaction ID: ${tranId} `);
			setIcon(<IoCloseCircleSharp className={styles.failedIcon} />);
		} else if (status === clientPaymentStatus.cancelled) {
			setStatusText('Payment Cancelled');
			setText(`Transaction ID: ${tranId} `);
			setIcon(<IoCloseCircleSharp className={styles.failedIcon} />);
		}
	}, [status, tranId, amount]);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				{icon}
				<h3 className={styles.title}>{statusText}</h3>
				<p className={styles.text}>{text}</p>
				<p className={styles.amount}>{amountText}</p>
				<div className={styles.buttonContainer}>
					<Button
						text="Home page"
						variant="primary"
						onClick={() => {
							redirect('/');
						}}
					/>
					<Button
						text="My Courses"
						variant="outLined"
						onClick={() => {
							redirect('/client/my-courses');
						}}
					/>
				</div>
			</div>
		</div>
	);
}
