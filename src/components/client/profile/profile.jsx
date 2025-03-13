'use client';
import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Avatar from '../../ui/avatar/avatar';
import moment from 'moment';
import LoadingDots from '../../ui/loading/loadingDots';
import Button from '../../ui/button/button';
import ProgressCard from '../atom/progressCard';
import { redirect } from 'next/navigation';
import AllCourses from '../../no-auth/allCourses/allCourses';
import Drawer from '../../ui/drawer/drawer';
import EditProfile from './editProfile';
import AddProfilePicture from './addProfilePicture';
import CourseCard from '@/components/atom/courseCard';
import { formatDuration } from '@/utils/utils';

export default function Profile({ firstCourse }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [isDrawerOpenEditProfile, setIsDrawerOpenEditProfile] = useState(false);
  const [isDrawerOpenAddPicture, setIsDrawerOpenAddPicture] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    axiosFetch({
      method: 'GET',
      url: configuration.client.profile,
    });
  }, [refreshData]);

  const drawerRenderEditProfile = () => {
    return (
      <>
        {isDrawerOpenEditProfile && (
          <Drawer title="Edit Profile" closeFunction={() => setIsDrawerOpenEditProfile(false)}>
            <EditProfile refreshData={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  const drawerRenderAddPicture = () => {
    return (
      <>
        {isDrawerOpenAddPicture && (
          <Drawer title="Add Profile Picture" closeFunction={() => setIsDrawerOpenAddPicture(false)}>
            <AddProfilePicture refreshData={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  return (
    <div className={styles.overlay}>
      {drawerRenderEditProfile()}
      {drawerRenderAddPicture()}
      {loading && <LoadingDots />}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            {!loading && <h1 className={styles.heading}>Course Progress</h1>}
            <div className={styles.progressContainer}>
              {response?.data?.enrolledCourses.length < 1 && (
                <>
                  <p className={styles.subTitle}>You have not enrolled in any course yet</p>
                  <Button text="Browse All Courses" onClick={() => redirect('/courses')} />
                </>
              )}
              {response?.data?.enrolledCourses.length > 0 &&
                response?.data?.enrolledCourses.map((course, i) => <ProgressCard key={i} courseId={course.course} />)}
            </div>
          </div>
          <div className={styles.right}>
            {!loading && <h1 className={styles.heading}>My info</h1>}
            {response?.data && (
              <div className={styles.details}>
                <Avatar name={response?.data?.firstName} />
                <p className={styles.title}>{response?.data?.firstName + ' ' + response?.data?.lastName}</p>
                <p className={styles.subTitle}># {response?.data?._id}</p>
                <p className={styles.subTitle}>{response?.data?.email}</p>
                <p className={styles.subTitle}>User since: {moment(response?.data?.createdAt).format('lll')}</p>
                <br />
                <div className={styles.btnContainer}>
                  <Button text="Edit profile" onClick={() => setIsDrawerOpenEditProfile(true)} />
                  <Button text="Add profile picture" variant="outLined" onClick={() => setIsDrawerOpenAddPicture(true)} />
                  {/* <Button text="Logout" variant="dangerOutLined" onClick={() => redirect('/logout')} /> */}
                </div>
              </div>
            )}
            <div className={styles.sideBar}>
            <h1 className={styles.heading}>Featured Course</h1>
              <CourseCard
                img={firstCourse?.thumbnail || '/assets/auth-bg.webp'}
                title={firstCourse?.title || 'ESG Investing and Analysis'}
                description={firstCourse?.description || 'Learn how to incorporate ESG factors into your investment strategy'}
                startTime="Anytime"
                duration={formatDuration(firstCourse?.statistics?.totalDuration) || ''}
                totalLectures={
                  `${firstCourse?.statistics?.totalModules || 0} modules and ${
                    firstCourse?.statistics?.totalLessons || 0
                  } lectures` || ''
                }
                id={firstCourse?._id}
              />
              <Button text={"Browser All Courses"} onClick={() => redirect('/courses')} className={styles.btn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
