'use client';
import React, { useEffect, useState } from 'react';
import styles from './allCourses.module.css';
import CourseCard from '@/components/atom/courseCard';
import Input from '@/components/ui/input/input';
import useAxios from '@/hooks/useAxios';
import { useDebounceValue } from '@/hooks/useDebounceValue';
import { tableDefaultItemLimit } from '@/constants/constants';
import LoadingDots from '@/components/ui/loading/loadingDots';
import { configuration } from '@/configuration/configuration';
import Pagination from '@/components/ui/pagination/pagination';
import { formatDuration } from '@/utils/utils';
export default function AllCourses({ showSearch = true }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounceValue(search, 500);

  const getAllCoursesHandler = (page, pageSize) => {
    if (!page) page = 1;
    if (!pageSize) pageSize = tableDefaultItemLimit;

    const url =
      search && search !== ''
        ? `${configuration.courses}/public?search=${search}&page=${page}&limit=${pageSize}`
        : `${configuration.courses}/public?page=${page}&limit=${pageSize}`;

    axiosFetch({
      method: 'Get',
      url: url,
    });
  };

  useEffect(() => {
    getAllCoursesHandler();
  }, [debouncedSearch]);

  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        <div className={styles.filter}>
          <h4 className={styles.text}>All Courses</h4>
          {showSearch && (
            <Input
              type="search"
              placeholder="Search here..."
              variant="outLined"
              onChange={(e) => setSearch(e.target.value)}
              className={styles.search}
            />
          )}
        </div>
        {loading && <LoadingDots />}
        {response?.data && (
          <div className={styles.container}>
            {response?.data?.courses.map((course, i) => (
              <CourseCard
                key={i}
                img={course?.thumbnail || '/assets/noImage.svg'}
                title={course?.title || ''}
                description={course?.description || ''}
                startTime="Anytime"
                //duration={formatDuration(course?.statistics?.totalDuration)}
                totalLectures={`${course?.statistics?.totalModules || 0} modules and ${
                  course?.statistics?.totalLessons || 0
                } lectures`}
                id={course._id}
                maxWidth="none"
                manualTime={course?.courseTimeManual}
              />
            ))}
          </div>
        )}
        {response?.data && response?.data?.courses?.length != 0 && (
          <div className={styles.pagination}>
            <Pagination
              currentPage={response?.data?.pagination?.currentPage || 1}
              totalPage={response?.data?.pagination?.totalPages || 1}
              setCurrentPage={(page) => {
                getAllCoursesHandler(page, tableDefaultItemLimit);
              }}
            />
          </div>
        )}
        {(!response?.data || response?.data?.courses?.length === 0) && <small> No course found</small>}
      </div>
    </div>
  );
}
