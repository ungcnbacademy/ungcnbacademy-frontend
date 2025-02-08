'use client';
import Table from '@/components/ui/table/table';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import React, { useEffect, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import Tooltip from '@/components/ui/tooltip/tooltip';
import Tag from '@/components/ui/tag/tag';
import Pagination from '@/components/ui/pagination/pagination';
import { tableDefaultItemLimit } from '@/constants/constants';
import moment from 'moment';
import Link from 'next/link';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

import styles from './allLessons.module.css';
import Toast from '@/components/ui/toast/toast';
export default function AllLessons({ courseId, moduleId }) {
	const [response, error, loading, axiosFetch] = useAxios();
	const [responseDelete, errorDelete, loadingDelete, axiosDelete] =
		useAxios();
	const [refreshData, setRefreshData] = useState(false);
	const [message, setMessage] = useState({ text: '', variant: '' });

	const getAllLessons = (page, pageSize) => {
		if (!page) page = 1;
		if (!pageSize) pageSize = tableDefaultItemLimit;
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons`,
		});
	};

	useEffect(() => {
		getAllLessons();
	}, [refreshData]);

	const onClickDeleteHandler = (lessonId) => {
		setMessage();
		confirm('Are you sure you want to delete this lesson?') &&
			axiosDelete({
				method: 'DELETE',
				url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
			});
	};

	useEffect(() => {
		if (responseDelete?.message) {
			setMessage({ text: responseDelete?.message, variant: 'success' });
			setRefreshData(!refreshData);
		}
		if (errorDelete?.message) {
			setMessage({ text: errorDelete?.message, variant: 'error' });
		}
		if (loadingDelete) {
			setMessage({ text: 'Deleting...', variant: 'warning' });
		}
	}, [responseDelete, errorDelete, loadingDelete]);

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			render: (title, record) => (
				<Link
					href={`/admin/courses/lessons/${courseId}/${moduleId}/${record._id}`}
				>
					<div className={styles.title}>
						{`Lesson ${record.order}: ${title}`}
						<Tooltip content="Module details" placement="top">
							<IoMdInformationCircleOutline
								className={styles.infoIcon}
							/>
						</Tooltip>
					</div>
				</Link>
			),
		},
		{
			title: 'Description',
			dataIndex: 'description',
		},
		{
			title: 'Order',
			dataIndex: 'order',
		},
		{
			title: 'Published',
			dataIndex: 'isAccessible',
			render: (isAccessible) => (isAccessible ? 'Yes' : 'No'),
		},
		{
			title: 'Created at',
			dataIndex: 'createdAt',
			render: (createdAt) =>
				moment(createdAt).format('DD-MM-YYYY HH:mm A'),
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id) => (
				<MdDeleteOutline
					className={styles.deleteIcon}
					onClick={() => {
						onClickDeleteHandler(id);
					}}
				/>
			),
		},
	];
	return (
		<div className={styles.main}>
			{ message?.text && (
				<Toast text={message.text} variant={message.variant} />
			)}
			<div className={styles.tableHeader}>
				<div className={styles.tableHeaderLeft}>
					<Tooltip content="Refresh" placement="top">
						<BiRefresh
							className={styles.refreshIcon}
							onClick={() => setRefreshData(!refreshData)}
						/>
					</Tooltip>
					<Tag loading={loading}>
						<p>Total: {response?.data?.length || 0}</p>
					</Tag>
				</div>
				<Pagination
					currentPage={response?.data?.pagination?.currentPage || 1}
					totalPage={response?.data?.pagination?.totalPages || 1}
					setCurrentPage={(page) => {
						getAllCourses(page, tableDefaultItemLimit);
					}}
				/>
			</div>
			<Table
				columns={columns}
				dataSource={response?.data || []}
				loading={loading}
			/>
		</div>
	);
}
