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
import { getAmountsWithCommas } from '@/utils/utils';
import Link from 'next/link';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import styles from './allCourses.module.css';
import DotsInfo from '@/components/ui/threeDotsInfoButton/dotsInfo';
export default function AllCourses() {
	const [response, error, loading, axiosFetch] = useAxios();
	const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] = useAxios();
	const [refreshData, setRefreshData] = useState(false);
	const getAllCourses = (page, pageSize) => {
		if (!page) page = 1;
		if (!pageSize) pageSize = tableDefaultItemLimit;
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}?page=${page}&limit=${pageSize}`,
		});
	};
	useEffect(() => {
		getAllCourses();
	}, [refreshData]);

	const deleteCourseHandler = (id) => {
		confirm('Are you sure you want to delete this course?') &&
			axiosFetchDelete({
				method: 'DELETE',
				url: `${configuration.courses}/${id}`,
		})
	}

	useEffect(() => {
		if (responseDelete?.data) {
			setRefreshData(!refreshData);
		}
	}, [responseDelete]);

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			render: (title, record) => (
				<Link href={`/admin/courses/${record._id}`}>
					<div className={styles.title}>
						{title}
						<Tooltip content="Course details" placement="top">
							<IoMdInformationCircleOutline
								className={styles.infoIcon}
							/>
						</Tooltip>
					</div>
				</Link>
			),
		},
		{
			title: 'Category',
			dataIndex: 'category',
		},
		{
			title: 'Enrollments',
			dataIndex: 'totalStudents',
		},
		{
			title: 'Price',
			dataIndex: 'price',
			render: (price) => getAmountsWithCommas(price),
		},
		{
			title: 'Instructor',
			dataIndex: 'instructors',
			render: (instructors) =>
				instructors?.map((instructor) => instructor?.name).join(', '),
		},
		{
			title: 'Created at',
			dataIndex: 'createdAt',
			render: (createdAt) =>
				moment(createdAt).format('DD-MM-YYYY HH:mm A'),
		},{
			title: '',
			dataIndex: '_id',
			render: (id) => (
				<DotsInfo data={[{title: 'Delete', function: () => {deleteCourseHandler(id)}}]} />
			)
		}
	];

	return (
		<div className={styles.main}>
			<div className={styles.tableHeader}>
				<div className={styles.tableHeaderLeft}>
					<Tooltip content="Refresh" placement="top">
						<BiRefresh
							className={styles.refreshIcon}
							onClick={() => setRefreshData(!refreshData)}
						/>
					</Tooltip>
					<Tag loading={loading}>
						<p>
							Total:{' '}
							{response?.data?.pagination?.totalCourses || 0}
						</p>
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
				dataSource={response?.data?.courses || []}
				loading={loading}
			/>
		</div>
	);
}
