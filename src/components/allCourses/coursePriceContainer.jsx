'use client';
import React, { useContext, useEffect, useState } from 'react';
import styles from './coursePriceContainer.module.css';
import { MdOutlineOndemandVideo, MdOutlineAssignment } from 'react-icons/md';
import { GoDesktopDownload } from 'react-icons/go';
import { SlTrophy } from 'react-icons/sl';
import { getAmountsWithCommas } from '@/utils/utils';
import Button from '../ui/button/button';
import Collapse from '../ui/collapse/collapse';
import { CartContext } from '@/context/cartContext';
import { useRouter } from 'next/navigation';
import { allAdminRoles, userRoles } from '@/constants/constants';
import Message from '../ui/message/message';
export default function CoursePriceContainer({ courseInfo }) {
	const [showModulePrice, setShowModulePrice] = useState(false);
	const { setGlobalCart } = useContext(CartContext);
	const [userDetails, setUserDetails] = useState();
	const [message, setMessage] = useState({ text: '', type: '' });
	const router = useRouter();

	useEffect(() => {
		setUserDetails(JSON.parse(localStorage.getItem('user')));
	}, []);

	const checkIfUserIsClient = () => {
		if (!userDetails) {
			router.push('/login');
			return true;
		} else if (allAdminRoles.includes(userDetails?.data?.role)) {
			setMessage({
				text: 'Admins are not allowed to buy courses',
				type: 'error',
			});
			return true;
		} else if (userDetails?.data?.role === userRoles.client.role) {
			return;
		}
	};

	const enrollInCorseHandler = () => {
		if (checkIfUserIsClient()) return;
		setGlobalCart({
			type: 'Full Course',
			courseTitle: courseInfo?.title,
			courseId: courseInfo?._id,
			price: courseInfo?.price,
			allModules: courseInfo?.modules,
		});
		router.push('/client/payment/checkout');
	};

	const enrollInModuleHandler = (module) => {
		if (checkIfUserIsClient()) return;
		setGlobalCart({
			type: 'Single Module',
			courseTitle: courseInfo?.title,
			courseId: courseInfo?._id,
			moduleId: module?._id,
			moduleOrder: module?.order,
			moduleTitle: module?.title,
			price: module?.price,
		});
		router.push('/client/payment/checkout');
	};

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<p className={styles.title}>
					This course includes the following:
				</p>
				<div className={styles.container}>
					<MdOutlineOndemandVideo />
					<p>On demand videos</p>
				</div>
				<div className={styles.container}>
					<GoDesktopDownload />
					<p>Downloadable resources</p>
				</div>
				<div className={styles.container}>
					<MdOutlineAssignment />
					<p>Assignments</p>
				</div>
				<div className={styles.container}>
					<SlTrophy />
					<p>Certificate of completion</p>
				</div>
			</div>
			
			<div className={styles.priceContainer}>
				<p className={styles.text}>Enroll in all modules at once for</p>
				<p className={styles.price}>
					{getAmountsWithCommas(courseInfo?.price)}
				</p>
				<p className={styles.previousPrice}>
					{getAmountsWithCommas(courseInfo?.price * 1.3)}
				</p>
			</div>
			<Message text={message.text} type={message.type} />
			<div className={styles.enrollContainer}>
				<Button
					text="Enroll in course"
					variant="secondary"
					className={styles.buttonCourse}
					onClick={() => enrollInCorseHandler()}
				/>
				<p className={styles.text}>
					Want to enroll in a single module?{' '}
					<span onClick={() => setShowModulePrice(!showModulePrice)}>
						Click here
					</span>
				</p>
			</div>
			{showModulePrice && (
				<div className={styles.modulesContainer}>
					{courseInfo?.modules?.length < 1 && (
						<p className={styles.noModule}>No modules found</p>
					)}
					{courseInfo?.modules?.map((module, i) => (
						<Collapse
							key={i}
							data={[
								{
									title: module.title,
									children: (
										<div
											className={
												styles.enrollModuleContainer
											}
										>
											<p className={styles.price}>
												Price:{' '}
												{getAmountsWithCommas(
													module.price
												)}
											</p>
											<Button
												text="Enroll in module"
												variant="secondary"
												className={styles.button}
												onClick={() =>
													enrollInModuleHandler(
														module
													)
												}
											/>
										</div>
									),
								},
							]}
						/>
					))}
				</div>
			)}
		</div>
	);
}
