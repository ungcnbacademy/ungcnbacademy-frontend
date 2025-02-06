'use client';
import React, { useEffect } from 'react';
import styles from './profile.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Avatar from '../ui/avatar/avatar';
import moment from 'moment';
import LoadingDots from '../ui/loading/loadingDots';
import Button from '../ui/button/button';
import { IoArrowForward } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
export default function Profile() {
	const [response, error, loading, axiosFetch] = useAxios();
	useEffect(() => {
		axiosFetch({
			method: 'GET',
			url: configuration.client.profile,
		});
	}, []);
	const router = useRouter();
	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>My Profile</h3>
			</div>
			<div className={styles.main}>
				<div className={styles.container}>
					{response?.data && (
						<div className={styles.details}>
							<Avatar name={response?.data?.firstName} />
							<p className={styles.title}>
								{response?.data?.firstName +
									' ' +
									response?.data?.lastName}
							</p>
							<p className={styles.subTitle}>
								# {response?.data?._id}
							</p>
							<p className={styles.subTitle}>
								{response?.data?.email}
							</p>
							<p className={styles.subTitle}>
								Verified:{' '}
								{response?.data?.isEmailVerified ? 'Yes' : 'No'}
							</p>
							<p className={styles.subTitle}>
								User since:{' '}
								{moment(response?.data?.createdAt).format(
									'lll'
								)}
							</p>
							<br />
							<Button text="Edit Profile" />
						</div>
					)}

					<h1 className={styles.heading}>Course Progress</h1>
					{response?.data?.enrolledCourses.length > 0 &&
						response?.data?.enrolledCourses.map((course, i) => (
							<div className={styles.details} key={i}>
								<p className={styles.title2}>
									Environmental Social Governance (ESG) Expert
									Training
								</p>
								<p className={styles.subTitle}>
									Enrolled at:{' '}
									{moment(course?.enrolledAt).format('lll')}
								</p>
								<div className={styles.progressContainer}>
									<p className={styles.progressText}>
										Progress: 60%
									</p>
									<div
										className={
											styles.progressLineBackground
										}
									>
										<div
											className={styles.progressLine}
											style={{ width: '60%' }}
										></div>
									</div>
								</div>
								<div className={styles.startNowContainer} onClick={() => {router.push(`/client/my-courses/${course?.course}`)}}>
									<p className={styles.startNow}>Start now</p>
									<IoArrowForward className={styles.icon} />
								</div>
							</div>
						))}
					{loading && <LoadingDots />}
				</div>
			</div>
		</div>
	);
}
