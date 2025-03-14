'use client';
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
import styles from './allFeedback.module.css';
import PopoverList from '@/components/ui/popover/popoverList';
import { MdDeleteOutline } from 'react-icons/md';
import { GoCodeReview } from 'react-icons/go';
import Modal from '@/components/ui/modal/modal';
import Toast from '@/components/ui/toast/toast';

export default function AllFeedback() {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] = useAxios();
  const [refreshData, setRefreshData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
	const [message, setMessage] = useState({ text: '', variant: '' });

  const getAllAdmins = (page, pageSize) => {
    if (!page) page = 1;
    if (!pageSize) pageSize = tableDefaultItemLimit;
    axiosFetch({
      method: 'Get',
      url: `${configuration.admin.reviews}?page=${page}&limit=${pageSize}&showDeleted=false`,
    });
  };
  useEffect(() => {
    getAllAdmins();
  }, [refreshData]);

  const modalViewHandler = () => {
    return (
      <Modal title="Feedback" isModalOpen={isModalOpen} closeFunction={() => setIsModalOpen(false)}>
        <div className={styles.modalContainer}>
          <p className={styles.courseTitle}>Course: {selectedReview?.course?.title}</p>
          <p className={styles.moduleTitle}>Module: {selectedReview?.module?.title}</p>
          <p className={styles.feedback}>{selectedReview?.feedback}</p>
          <div className={styles.userContainer}>
            <p className={styles.subTitle}>User information</p>
            <p> <b>Name: </b>{selectedReview?.user?.name}</p>
            <p><b>Email: </b> {selectedReview?.user?.email}</p>
            <p><b>Created at: </b> {moment(selectedReview?.createdAt).format('DD-MM-YYYY HH:mm A')}</p>
          </div>
        </div>
      </Modal>
    );
  };

  const deleteFeedbackHandler = ( courseId, moduleId, reviewId ) => {
    confirm('Are you sure you want to delete this feedback?') &&
      axiosFetchDelete({
        method: 'DELETE',
        url: `${configuration.courses}/${courseId}/modules/${moduleId}/reviews/${reviewId}`,
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
			setMessage({ text: 'Deleting feedback...', variant: 'info' });
		}
	}, [responseDelete?.message, errorDelete?.message, loadingDelete]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'user',
      render: (user) => user?.name,
    },
    {
      title: 'Email',
      dataIndex: 'user',
      render: (user) => user?.email,
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      render: (createdAt) => moment(createdAt).format('DD-MM-YYYY HH:mm A'),
    },
    {
      title: '',
      dataIndex: '',
      render: (_, record) => {
        return (
          <PopoverList
            data={[
              {
                title: 'View',
                icon: <GoCodeReview />,
                function: () => {
                  setSelectedReview(record);
                  setIsModalOpen(true);
                },
              },
              {
                title: 'Delete',
                icon: <MdDeleteOutline />,
                function: () => {
                  deleteFeedbackHandler(record?.course?.id, record?.module?.id, record?.id);
                },
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <div className={styles.main}>
      {modalViewHandler()}
			<Toast text={message?.text} variant={message?.variant}  />
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderLeft}>
          <Tooltip content="Refresh" placement="top">
            <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
          </Tooltip>
          <Tag loading={loading}>
            <p>Total: {response?.data?.pagination?.totalReviews || 0}</p>
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
      <Table columns={columns} dataSource={response?.data?.reviews} loading={loading} />
    </div>
  );
}
