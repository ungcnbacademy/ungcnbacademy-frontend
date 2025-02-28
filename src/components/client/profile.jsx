'use client';
import React, { useEffect } from 'react';
import styles from './profile.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Avatar from '../ui/avatar/avatar';
import moment from 'moment';
import LoadingDots from '../ui/loading/loadingDots';
import Button from '../ui/button/button';
import { useRouter } from 'next/navigation';
import ProgressCard from './atom/progressCard';
export default function Profile() {
  const [response, error, loading, axiosFetch] = useAxios();
  useEffect(() => {
    axiosFetch({
      method: 'GET',
      url: configuration.client.profile,
    });
  }, []);
  const router = useRouter();
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <h3 className={styles.title}>My Profile</h3>
      </div>
      {loading && <LoadingDots />}
      <div className={styles.main}>
        <div className={styles.container}>
          {response?.data && (
            <div className={styles.details}>
              <Avatar name={response?.data?.firstName} />
              <p className={styles.title}>{response?.data?.firstName + ' ' + response?.data?.lastName}</p>
              <p className={styles.subTitle}># {response?.data?._id}</p>
              <p className={styles.subTitle}>{response?.data?.email}</p>
              <p className={styles.subTitle}>Verified: {response?.data?.isEmailVerified ? 'Yes' : 'No'}</p>
              <p className={styles.subTitle}>User since: {moment(response?.data?.createdAt).format('lll')}</p>
              <br />
              <Button text="Edit Profile" />
            </div>
          )}

          {response?.data?.enrolledCourses && <h1 className={styles.heading}>Course Progress</h1>}
          <div className={styles.progressContainer}>
            {response?.data?.enrolledCourses.length < 1 && (
              <p className={styles.subTitle}>You have not enrolled in any course yet</p>
            )}
            {response?.data?.enrolledCourses.length > 0 &&
              response?.data?.enrolledCourses.map((course, i) => <ProgressCard key={i} courseId={course.course} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
