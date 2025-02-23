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
import { MdDeleteOutline } from 'react-icons/md';
import { LiaEdit } from 'react-icons/lia';
import styles from './allCourses.module.css';
import PopoverList from '@/components/ui/popover/popoverList';
import Toast from '@/components/ui/toast/toast';
import Drawer from '@/components/ui/drawer/drawer';
import CreateCourse from './createCourse';

export default function AllCourses() {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] = useAxios();
  const [refreshData, setRefreshData] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [editCourseId, setEditCourseId] = useState(null);
  const [message, setMessage] = useState({ text: '', variant: '' });
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
      setMessage({ text: 'Deleting course...', variant: 'warning' });
    }
  }, [responseDelete, errorDelete, loadingDelete]);

  const deleteCourseHandler = (id) => {
    setMessage();
    confirm('Are you sure you want to delete this course?') &&
      axiosFetchDelete({
        method: 'DELETE',
        url: `${configuration.courses}/${id}`,
      });
  };

  const drawerRender = () => {
    return (
      <>
        {isOpenDrawer && (
          <Drawer title="Edit Course" closeFunction={() => setIsOpenDrawer(false)} size="lg">
            <CreateCourse id={editCourseId} />
          </Drawer>
        )}
      </>
    );
  };

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
              <IoMdInformationCircleOutline className={styles.infoIcon} />
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
      render: (instructors) => instructors?.map((instructor) => instructor?.name).join(', '),
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      render: (createdAt) => moment(createdAt).format('DD-MM-YYYY HH:mm A'),
    },
    {
      title: '',
      dataIndex: '_id',
      render: (id) => (
        <PopoverList
          data={[
            {
              title: 'Edit',
              icon: <LiaEdit />,
              function: () => {
                setIsOpenDrawer(true);
                setEditCourseId(id);
              },
            },
            {
              title: 'Delete',
              icon: <MdDeleteOutline />,
              function: () => {
                deleteCourseHandler(id);
              },
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className={styles.main}>
      {drawerRender()}
      {message?.text && <Toast text={message?.text} variant={message?.variant} />}
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderLeft}>
          <Tooltip content="Refresh" placement="top">
            <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
          </Tooltip>
          <Tag loading={loading}>
            <p>Total: {response?.data?.pagination?.totalCourses || 0}</p>
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
      <Table columns={columns} dataSource={response?.data?.courses || []} loading={loading} />
    </div>
  );
}
