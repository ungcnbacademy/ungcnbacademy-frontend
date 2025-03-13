'use client';
import Button from '@/components/ui/button/button';
import React from 'react';
import styles from './featuredCourse.module.css';
import { useRouter } from 'next/navigation';
import CourseCard from '@/components/atom/courseCard';
import { formatDuration } from '@/utils/utils';

export default function FeaturedCourse({ firstCourse }) {
  const router = useRouter();
  return (
    <div className={styles.sideBar}>
      <h1 className={styles.heading}>Featured Course</h1>
      <CourseCard
        img={firstCourse?.thumbnail || '/assets/auth-bg.webp'}
        title={firstCourse?.title || 'ESG Investing and Analysis'}
        description={firstCourse?.description || 'Learn how to incorporate ESG factors into your investment strategy'}
        startTime="Anytime"
        duration={formatDuration(firstCourse?.statistics?.totalDuration) || ''}
        totalLectures={
          `${firstCourse?.statistics?.totalModules || 0} modules and ${firstCourse?.statistics?.totalLessons || 0} lectures` || ''
        }
        id={firstCourse?._id}
      />
      <Button text={'Browser All Courses'} onClick={() => router.push('/courses')} className={styles.btn} />
    </div>
  );
}
