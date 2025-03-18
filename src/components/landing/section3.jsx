import React from 'react';
import styles from './section3.module.css';
import Button from '../ui/button/button';
import CourseCard from '../atom/courseCard';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import Link from 'next/link';
import { formatDuration } from '@/utils/utils';

export default async function Section3() {
  const response = await getFetchRequests.getFeaturedCourses();
  const firstCourse = response?.data?.courses[0];

  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.container}>
            <h1 className={styles.title}>Our Courses</h1>
            <p className={styles.description}>
              Our learning portfolio offers a diverse range of online courses led by experts from national & global institutions,
              industry leaders, and academia. These courses feature insights into Bangladeshi and global perspectives from
              professionals representing UN agencies, international financial institutions, renowned universities, and leading
              sustainability organizations.
            </p>{' '}
            <p className={styles.description}>
              The UNGCNB Impact Academy Library provides a comprehensive collection of educational resources, offering on-demand
              access to expert-led lectures, case studies, and training materials designed to support lifelong learning in
              corporate sustainability, ESG, and responsible business practices.
            </p>
            <br />
            <Link href="/courses" className={styles.link}>
              <Button text="Browse Our Courses" />
            </Link>
            <br />
          </div>
        </div>
        <div className={styles.right}>
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
            maxWidth="300px"
          />
        </div>
      </div>
    </div>
  );
}
