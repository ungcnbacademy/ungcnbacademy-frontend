'use client';
import React, { useEffect } from 'react';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import moment from 'moment';
import LoadingDots from '@/components/ui/loading/loadingDots';
import { getAmountsWithCommas } from '@/utility/utils';
import { useRouter } from 'next/navigation';
export default function MyOrders() {
	const [response, error, loading, axiosFetch] = useAxios();
	const router = useRouter();
	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.client.profile}`,
		});
	}, []);

	const orderInfoRender = () => {
		return (
			<div className={styles.orderInfoContainer}>
				{response?.data?.orderHistory.map((order, i) => {
					return (
						<div key={i} className={styles.card} onClick={() => router.push(`/client/my-orders/${order?.orderId}`)}>
							<p className={styles.orderId}>Order Id: {order?.orderId}</p>
							<p>Order Date: {moment(order?.createdAt).format('lll')}</p>
							<p>Total amount: {getAmountsWithCommas(order?.totalAmount)}</p>
						</div>)
				})}
			</div>
		);
	};
	return (
		<div className={styles.main}>
			<h1 className={styles.pageTitle}>My Orders</h1>
			<br />
			<p className={styles.title}>Order information:</p>
			{response?.data && !loading && !error && orderInfoRender()}
			{loading && <LoadingDots />}
		</div>
	);
}
