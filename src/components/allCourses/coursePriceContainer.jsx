'use client';
import React, { useState } from 'react';
import styles from './coursePriceContainer.module.css';
import { MdOutlineOndemandVideo, MdOutlineAssignment } from 'react-icons/md';
import { GoDesktopDownload } from 'react-icons/go';
import { SlTrophy } from 'react-icons/sl';
import Enroll from './enroll';
import { getAmountsWithCommas } from '@/utils/utils';
import Button from '../ui/button/button';
import Collapse from '../ui/collapse/collapse';
export default function CoursePriceContainer({ price = 1000, modules = [] }) {
	const [showModulePrice, setShowModulePrice] = useState(false);
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
				<p className={styles.price}>{getAmountsWithCommas(price)}</p>
				<p className={styles.previousPrice}>
					{getAmountsWithCommas(price * 1.3)}
				</p>
			</div>
			<div className={styles.enrollContainer}>
				<Enroll courseId={1} />
				<p className={styles.text}>
					Want to enroll in a single module?{' '}
					<span onClick={() => setShowModulePrice(!showModulePrice)}>
						Click here
					</span>
				</p>
			</div>
			{showModulePrice && (
				<div className={styles.modulesContainer}>
					{modules?.length < 1 && (
						<p className={styles.noModule}>No modules found</p>
					)}
					{modules?.map((module, i) => (
						<Collapse
							key={i}
							data={[
								{
									title: module.title,
									//description: module.description,
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
