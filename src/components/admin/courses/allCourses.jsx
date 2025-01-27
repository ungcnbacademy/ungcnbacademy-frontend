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

import styles from './allCourses.module.css';
import { getAmountsWithCommas } from '@/utils/utils';

export default function AllCourses() {
  const [response, error, loading, axiosFetch] = useAxios();
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

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
		},
		{
			title: 'Description',
			dataIndex: 'description',
		},
		{
			title: 'Category',
			dataIndex: 'category',
		},
		{
			title: 'Price',
			dataIndex: 'price',
      render: (price)=> getAmountsWithCommas(price),
		},{
      title: 'Instructor',
      dataIndex: 'instructors',
      render: (instructors) => instructors?.map((instructor) => instructor?.name).join(', '),
    },
		{
			title: 'Created at',
			dataIndex: 'createdAt',
			render: (createdAt) =>
				moment(createdAt).format('DD-MM-YYYY HH:mm A'),
		},
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
							Total Courses:{' '}
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
