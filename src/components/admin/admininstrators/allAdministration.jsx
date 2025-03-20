import Table from '@/components/ui/table/table';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import React, { useEffect, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import Tooltip from '@/components/ui/tooltip/tooltip';
import Tag from '@/components/ui/tag/tag';
import Pagination from '@/components/ui/pagination/pagination';
import { tableDefaultItemLimit, userRoles } from '@/constants/constants';
import moment from 'moment';
import { MdDeleteOutline } from 'react-icons/md';
//import { LiaEdit } from 'react-icons/lia';
import styles from './allAdministration.module.css';
import PopoverList from '@/components/ui/popover/popoverList';
import Toast from '@/components/ui/toast/toast';
export default function AllAdministration({ refresh }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseDelete, errorDelete, loadingDelete, axiosDelete] = useAxios();
  const [refreshData, setRefreshData] = useState(false);
  const [message, setMessage] = useState({ text: '', variant: '' });
  const getAllAdmins = (page, pageSize) => {
    if (!page) page = 1;
    if (!pageSize) pageSize = tableDefaultItemLimit;
    axiosFetch({
      method: 'Get',
      url: `${configuration.admin.admin}?page=${page}&limit=${pageSize}&type=main`,
    });
  };

  useEffect(() => {
    getAllAdmins();
  }, [refreshData, refresh]);

  const onDeleteAdminHandler = (id) => {
    confirm('Are you sure you want to delete this admin?') &&
      axiosDelete({
        method: 'DELETE',
        url: `${configuration.admin.admin}/${id}`,
      });
  };

  useEffect(() => {
    if (responseDelete?.message) {
      setMessage({
        text: responseDelete?.message,
        variant: 'success',
      });
      setRefreshData(!refreshData);
    }
    if (errorDelete) {
      setMessage({ text: errorDelete?.message, variant: 'error' });
    }
    if (loadingDelete) {
      setMessage({ text: 'Deleting...', variant: 'info' });
    }
  }, [responseDelete, loadingDelete, errorDelete]);

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
      title: 'Role',
      dataIndex: 'role',
      render: (role) => {
        return <>{userRoles?.admin[role]?.title || userRoles?.client.title}</>;
      },
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      render: (createdAt) => moment(createdAt).format('DD-MM-YYYY HH:mm A'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <div className={styles.actionContainer}>
            <PopoverList
              data={[
                {
                  title: 'Delete',
                  icon: <MdDeleteOutline />,
                  function: () => {
                    onDeleteAdminHandler(record?._id);
                  },
                },
              ]}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.main}>
      <Toast text={message.text} variant={message.variant} />
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderLeft}>
          <Tooltip content="Refresh" placement="top">
            <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
          </Tooltip>
          <Tag loading={loading}>
            <p>Total Admins: {response?.data?.pagination?.totalUsers || 0}</p>
          </Tag>
        </div>
        <Pagination
          currentPage={response?.data?.pagination?.currentPage || 1}
          totalPage={response?.data?.pagination?.totalPages || 1}
          setCurrentPage={(page) => {
            getAllAdmins(page, tableDefaultItemLimit);
          }}
        />
      </div>
      <Table columns={columns} dataSource={response?.data?.users} loading={loading} />
    </div>
  );
}
