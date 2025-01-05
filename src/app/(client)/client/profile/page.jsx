'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import moment from 'moment';
import LoadingDots from '@/components/ui/loading/loadingDots';
import Button from '@/components/ui/button/button';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import Toast from '@/components/ui/toast/toast';
export default function Profile() {
	const [response, error, loading, axiosFetch] = useAxios();
	const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] =
		useAxios();
	const [message, setMessage] = useState();
	const router = useRouter();
	const getUserInfo = () => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.client.profile}`,
		});
	};
	useEffect(() => {
		getUserInfo();
	}, []);

	const handleDelete = (id) => {
		if (confirm('Are you sure you want to delete this address?')) {
			axiosFetchDelete({
				method: 'Delete',
				url: `${configuration.client.address}/${id}`,
			});
		}
	};

	useEffect(() => {
		if (responseDelete?.message) {
			setMessage({ text: responseDelete?.message, variant: 'success' });
			getUserInfo();
		} else if (errorDelete?.message) {
			setMessage({ text: errorDelete?.message, variant: 'error' });
		}
	}, [responseDelete, errorDelete]);

	const userinfoRender = () => {
		return (
			<>
				<p className={styles.title}>Personal information:</p>
				<div className={styles.details}>
					<div className={styles.name}>
						<p className={styles.titleSpan}>Name:</p>
						{response?.data?.name}
					</div>
					<div className={styles.email}>
						<p className={styles.titleSpan}>Email:</p>
						{response?.data?.email}
					</div>
					<div className={styles.phone}>
						<p className={styles.titleSpan}>Phone:</p>
						{response?.data?.phone}{' '}
						<div className={styles.verified}>
							{response?.data?.isPhoneVerified
								? 'Verified'
								: 'Not verified'}
						</div>
					</div>
				</div>
				<p className={styles.title}>Account information:</p>
				<div className={styles.details}>
					<div className={styles.since}>
						<p className={styles.titleSpan}>Since:</p>
						{moment(response?.data?.createdAt).format('lll')}
					</div>
					<div className={styles.type}>
						<p className={styles.titleSpan}>Type:</p>
						{response?.data?.customerType}
					</div>
				</div>
				<p className={styles.title}>User address:</p>
				<div className={styles.addressContainer}>
					{response?.data?.addresses.length > 0 &&
						response?.data?.addresses?.map((address, index) => {
							return (
								<div key={index} className={styles.addressCard}>
									<div className={styles.addressDetails}>
										<p className={styles.titleSpan}>
											{address?.label}:
										</p>
										<p>
											{address.street}, {address?.area},{' '}
											{address?.city},{' '}
											{address?.postalCode}
										</p>
										{address?.isDefault && (
											<p className={styles.default}>
												{address?.isDefault
													? 'Default'
													: ''}
											</p>
										)}
									</div>
									<MdDelete
										className={styles.icon}
										onClick={() =>
											handleDelete(address._id)
										}
									/>
								</div>
							);
						})}
					{response?.data?.addresses.length < 1 && (
						<p className={styles.noAddress}>No address found</p>
					)}
					<Button
						text="Add address"
						variant="secondary"
						onClick={() => {
							router.push('/client/profile/add-address');
						}}
						className={styles.button}
					/>
				</div>
			</>
		);
	};
	return (
		<div className={styles.main}>
			<h1 className={styles.pageTitle}>Profile</h1>
			<br />
			{message?.text && (
				<Toast text={message?.text} variant={message?.variant} />
			)}
			{response?.data && !loading && !error && userinfoRender()}
			{loading && <LoadingDots />}
		</div>
	);
}
