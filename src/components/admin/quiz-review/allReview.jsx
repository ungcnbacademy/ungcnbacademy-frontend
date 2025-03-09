'use client';
import Table from '@/components/ui/table/table';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import { useEffect, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import Tooltip from '@/components/ui/tooltip/tooltip';
import Tag from '@/components/ui/tag/tag';
import Pagination from '@/components/ui/pagination/pagination';
import { tableDefaultItemLimit, userRoles } from '@/constants/constants';
import moment from 'moment';
import styles from './allReview.module.css';
import Link from 'next/link';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export default function AllReview() {
  const [response, error, loading, axiosFetch] = useAxios();
  const [refreshData, setRefreshData] = useState(false);
  const getAllUsers = (page, pageSize) => {
    if (!page) page = 1;
    if (!pageSize) pageSize = tableDefaultItemLimit;
    axiosFetch({
      method: 'Get',
      url: `${configuration.admin.quizReview}?page=${page}&limit=${pageSize}`,
    });
  };

  useEffect(() => {
    getAllUsers();
  }, [refreshData]);

  console.log(response);

  const columns = [
    {
      title: 'Quiz title',
      dataIndex: '',
      render: (_, record) => {
        return (
          <Link href={`/admin/quiz-review/${record?.attemptId}`}>
            <div className={styles.title}>
              {record?.quiz?.title}
              <Tooltip content="Answer details" placement="top">
                <IoMdInformationCircleOutline className={styles.infoIcon} />
              </Tooltip>
            </div>
          </Link>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'user',
      render: (user) => {
        return user?.name;
      },
    },
    {
      title: 'Email',
      dataIndex: 'user',
      render: (user) => {
        return user?.email;
      },
    },
    {
      title: 'Total question',
      dataIndex: 'textQuestionsCount',
    },

    {
      title: 'Submitted at',
      dataIndex: 'submittedAt',
      render: (submittedAt) => moment(submittedAt).format('DD-MM-YYYY HH:mm A'),
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderLeft}>
          <Tooltip content="Refresh" placement="top">
            <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
          </Tooltip>
          <Tag loading={loading}>
            <p>Total: {response?.data?.pagination?.totalUsers || 0}</p>
          </Tag>
        </div>
        <Pagination
          currentPage={response?.data?.pagination?.currentPage || 1}
          totalPage={response?.data?.pagination?.totalPages || 1}
          setCurrentPage={(page) => {
            getAllUsers(page, tableDefaultItemLimit);
          }}
        />
      </div>
      <Table columns={columns} dataSource={response?.data} loading={loading} />
    </div>
  );
}
