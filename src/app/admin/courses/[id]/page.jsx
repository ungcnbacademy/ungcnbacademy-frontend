'use client';
import Table from '@/components/ui/table/table';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import { getAmountsWithCommas } from '@/utils/utils';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';
import Drawer from '@/components/ui/drawer/drawer';
import Button from '@/components/ui/button/button';
import AllModules from '@/components/admin/courses/allModules';
import CreateModule from '@/components/admin/courses/createModule';
import { TbWorld } from 'react-icons/tb';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
export default function CourseDetails({ params }) {
	const unwrappedParams = React.use(params);
	const courseId = unwrappedParams.id;
	const [response, error, loading, axiosFetch] = useAxios();
	const [isDrawerOpenCreateModule, setIsDrawerOpenCreateModule] =
		useState(false);
	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${courseId}`,
		});
	}, [courseId]);

	const drawerRenderCreateModule = () => {
		return (
			<>
				{isDrawerOpenCreateModule && (
					<Drawer
						title="Create Module"
						closeFunction={() => setIsDrawerOpenCreateModule(false)}
					>
						<CreateModule id={courseId} />
					</Drawer>
				)}
			</>
		);
	};

	const courseDetailsRender = () => {
		return (
			<div>
				{response?.data && (
					<div className={styles.details}>
						<h2 className={styles.title}>
							{response?.data?.title}
						</h2>
						<p># {response?.data?._id}</p>
						<p> Description: {response?.data?.description}</p>
						<p> Category: {response?.data?.category}</p>
						<p>
							Price: {getAmountsWithCommas(response?.data?.price)}
						</p>
						<p>
							Created At:
							{moment(response?.data?.createdAt).format('lll')}
						</p>
					</div>
				)}
			</div>
		);
	};

	const courseInstructorRender = () => {
		return (
			<div>
				<h2 className={styles.title}>Instructors</h2>
				{response?.data?.instructors &&
					response?.data?.instructors?.map((instructor, i) => (
						<div key={i} className={styles.instructor}>
							<p>Name: {instructor?.name}</p>
							<p>Designation: {instructor?.designation}</p>
							<p>Description: {instructor?.description}</p>
							<p>Bio: {instructor?.bio}</p>
							<h5 className={styles.socialTitle}>Social Links</h5>
							<div className={styles.socialContent}>
								<TbWorld />
								{instructor?.socialLinks?.website ? (
									<a
										href={instructor?.socialLinks?.website}
										target="_blank"
										className={styles.socialLink}
									>
										{instructor?.socialLinks?.website}
									</a>
								) : (
									<p>Not available</p>
								)}
							</div>

							<div className={styles.socialContent}>
								<IoLogoLinkedin />
								{instructor?.socialLinks?.linkedin ? (
									<a
										href={instructor?.socialLinks?.linkedin}
										target="_blank"
										className={styles.socialLink}
									>
										{instructor?.socialLinks?.linkedin}
									</a>
								) : (
									<p>Not available</p>
								)}
							</div>
							<div className={styles.socialContent}>
								<AiOutlineTwitter />
								{instructor?.socialLinks?.twitter ? (
									<a
										href={instructor?.socialLinks?.twitter}
										target="_blank"
										className={styles.socialLink}
									>
										{instructor?.socialLinks?.twitter}
									</a>
								) : (
									<p>Not available</p>
								)}
							</div>
						</div>
					))}
			</div>
		);
	};

	const courseLongDescriptionRender = () => {
		return (
			<div className={styles.longDescriptionContainer}>
				<h2 className={styles.title}>Long Description</h2>
				<div className={styles.longDescription} dangerouslySetInnerHTML={{ __html: response?.data?.longDescription }} ></div>
			</div>
		);
	};

	const courseModuleRender = () => {
		return (
			<div>
				<div className={styles.header}>
					<h2 className={styles.title}>Modules</h2>
					<Button
						text="Create Module"
						variant="primary"
						onClick={() =>
							setIsDrawerOpenCreateModule(
								!isDrawerOpenCreateModule
							)
						}
					/>
				</div>
				<AllModules id={courseId} />
			</div>
		);
	};

	return (
		<div>
			{drawerRenderCreateModule()}
			{loading && <LoadingDots />}
			{!loading && !error && (
				<>
					{response?.data?.thumbnail && (
						<>
							<Image
								src={
									response?.data?.thumbnail ||
									'/assets/noImage.svg'
								}
								alt="course image"
								width={820}
								height={360}
								className={styles.image}
							/>
							<br /> <br />
						</>
					)}

					{courseDetailsRender()}
					<br />
					{courseModuleRender()}
					<br />
					{courseLongDescriptionRender()}
					<br />
					{courseInstructorRender()}
				</>
			)}
		</div>
	);
}
