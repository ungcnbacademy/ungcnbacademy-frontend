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
					<div>
						<h2>Title: {response?.data?.title}</h2>
						<p>Id: {response?.data?._id}</p>
						<p> Description: {response?.data?.description}</p>
						<p> Category: {response?.data?.category}</p>
						<p>
							{' '}
							Price: {getAmountsWithCommas(response?.data?.price)}
						</p>
						<p>
							{' '}
							Created At:{' '}
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
				<h2>Instructors</h2>
				{response?.data?.instructors &&
					response?.data?.instructors?.map((instructor, i) => (
						<div key={i} className={styles.instructor}>
							<p>Name: {instructor?.name}</p>
							<p>Designation: {instructor?.designation}</p>
							<p>Description: {instructor?.description}</p>
							<p>Bio: {instructor?.bio}</p>
							<h4>Social Links</h4>
							<p>Website: {instructor?.socialLinks?.website}</p>
							<p>LinkedIn: {instructor?.socialLinks?.linkedin}</p>
							<p>Twitter: {instructor?.socialLinks?.twitter}</p>
						</div>
					))}
			</div>
		);
	};

	const courseModuleRender = () => {
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
			},
			{},
		];
		return (
			<div>
				<div className={styles.header}>
					<h2>Modules</h2>
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
					<Image
						src={response?.data?.thumbnail || '/assets/noImage.svg'}
						alt="course image"
						width={820}
						height={360}
						className={styles.image}
					/>
					<br /> <br />
					{courseDetailsRender()}
					<br />
					{courseModuleRender()}
					<br />
					{courseInstructorRender()}
				</>
			)}
		</div>
	);
}
