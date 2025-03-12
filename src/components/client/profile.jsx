'use client';
import React, { useEffect } from 'react';
import styles from './profile.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Avatar from '../ui/avatar/avatar';
import moment from 'moment';
import LoadingDots from '../ui/loading/loadingDots';
import Button from '../ui/button/button';
import ProgressCard from './atom/progressCard';
import { redirect } from 'next/navigation';

export default function Profile() {
  const [response, error, loading, axiosFetch] = useAxios();
  useEffect(() => {
    axiosFetch({
      method: 'GET',
      url: configuration.client.profile,
    });
  }, []);

  return (
    <div className={styles.overlay}>
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
                <p className={styles.subTitle}>Verified: {response?.data?.isEmailVerified ? 'Yes' : 'No'}</p>
                <p className={styles.subTitle}>User since: {moment(response?.data?.createdAt).format('lll')}</p>
                <br />
                <Button text="Edit Profile" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
