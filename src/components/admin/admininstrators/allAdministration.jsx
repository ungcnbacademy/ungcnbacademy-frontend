import Table from '@/components/ui/table/table';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';

import React, { useEffect, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import styles from './allAdministration.module.css';
import Tooltip from '@/components/ui/tooltip/tooltip';
import Tag from '@/components/ui/tag/tag';
import Pagination from '@/components/ui/pagination/pagination';
import { tableDefaultItemLimit, userRoles } from '@/constants/constants';
import moment from 'moment';
export default function AllAdministration() {
	const [response, error, loading, axiosFetch] = useAxios();
	const [refreshData, setRefreshData] = useState(false);
	const getAllAdmins = (page, pageSize) => {
		if (!page) page = 1;
		if (!pageSize) pageSize = tableDefaultItemLimit;
		axiosFetch({
			method: 'Get',
			url: `${configuration.admin.admin}?page=${page}&limit=${pageSize}`,
		});
	};
	useEffect(() => {
		getAllAdmins();
	}, [refreshData]);

	const columns = [
		{
			title: 'First Name',
			dataIndex: 'firstName',
		},
		{
			title: 'Last Name',
			dataIndex: 'lastName',
		},
		{
			title: 'Email',
			dataIndex: 'email',
		},
		{
			title: 'Verified',
			dataIndex: 'isEmailVerified',
			render: (isEmailVerified) => {
				return <>{isEmailVerified ? 'Verified' : 'Not Verified'}</>;
			},
		},
		{
			title: 'Role',
			dataIndex: 'role',
			// render: (role) => {
			// 	return (
			// 		<>
			// 			{role === userRoles.admin.rechargerAdmin.role &&
			// 				userRoles.admin.rechargerAdmin.title}
			// 		</>
			// 	);
			// },
		},
		{
			title: 'Created at',
			dataIndex: 'createdAt',
			render: (createdAt) => moment(createdAt).format('DD-MM-YYYY'),
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
						<p>Total Admins: {response?.data?.pagination?.totalUsers || 0}</p>
					</Tag>
				</div>
				<Pagination
					currentPage={response?.data?.currentPage || 1}
					totalPage={response?.data?.totalPages || 1}
					setCurrentPage={(page) => {
						getAllAdmins(page, tableDefaultItemLimit);
					}}
				/>
			</div>
			<Table
				columns={columns}
				dataSource={response?.data?.users}
				loading={loading}
			/>
		</div>
	);
}
