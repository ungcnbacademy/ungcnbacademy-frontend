'use client';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import styles from './page.module.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import { getAmountsWithCommas } from '@/utility/utils';
import { orderStatus } from '@/utility/constants';

export default function OrderDetails({ params }) {
	const unwrappedParams = React.use(params);
	const paramsId = unwrappedParams.id;
	const [response, error, loading, axiosFetch] = useAxios();
	const [statusDetails, setStatusDetails] = useState({});

	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.client.singleOrder}${paramsId}`,
		});
	}, [paramsId]);

	useEffect(() => {
		setStatusDetails({
			status: orderStatus.find(
				(status) => status.value === response?.data?.orderStatus
			)?.label,
			background: orderStatus.find(
				(status) => status.value === response?.data?.orderStatus
			)?.background,
			color: orderStatus.find(
				(status) => status.value === response?.data?.orderStatus
			)?.color,
		});
	}, [response?.data?.orderStatus]);

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h2>Order Details</h2>
				<p className={styles.status} style={{color: statusDetails?.color, background: statusDetails?.background}}>{statusDetails?.status}</p>
			</div>

			<div className={styles.container}>
				<p>Date: {moment(response?.data?.createdAt).format('lll')}</p>
				<p>Order Id: {response?.data?._id}</p>
			</div>

			<p className={styles.subTitle}>Store information:</p>
			<div className={styles.container}>
				<Image
					src={
						response?.data?.stallId?.thumbnailUrl ||
						'/assets/noImage.svg'
					}
					alt="No image"
					width={50}
					height={50}
					className={styles.image}
				/>
				<p>{response?.data?.stallId?.motherStall}</p>
			</div>
			<p className={styles.subTitle}>Payment information:</p>
			<div className={styles.container}>
				<p>
					Total amount:{' '}
					{getAmountsWithCommas(response?.data?.totalAmount)}
				</p>
				<p>
					Delivery fee:{' '}
					{getAmountsWithCommas(response?.data?.deliveryFee)}
				</p>
				<p>Payment method: {response?.data?.paymentMethod}</p>
				<p>Order type: {response?.data?.orderType}</p>
			</div>
			<p className={styles.subTitle}>Order Items:</p>
			<div className={styles.container}>
				{response?.data?.orderItems.map((item, i) => {
					return (
						<div key={i}>
							<p>
								{i + 1}. {item?.foodName}, Quantity:{' '}
								{item?.quantity}, Price:{' '}
								{getAmountsWithCommas(item?.foodPrice)}
							</p>
						</div>
					);
				})}
			</div>
			<p className={styles.subTitle}>Address information:</p>
			<div className={styles.container}>
				<p>Street: {response?.data?.deliveryAddress?.street}</p>
				<p>Area: {response?.data?.deliveryAddress?.area}</p>
				<p>City: {response?.data?.deliveryAddress?.city}</p>
				<p>
					Postal Code: {response?.data?.deliveryAddress?.postalCode}
				</p>
				<p>
					Delivery instruction:{' '}
					{response?.data?.deliveryAddress?.deliveryInstructions}
				</p>
			</div>
		</div>
	);
}
