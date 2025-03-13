'use client';
import React, { useEffect } from 'react';
import styles from './purchasedCourses.module.css';
import CourseCard from '../atom/courseCard';
//import Input from '../ui/input/input';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '../ui/loading/loadingDots';
import FeaturedCourse from './atom/featuredCourse';
export default function PurchasedCourses({ featuredCourses = {} }) {
  const [response, error, loading, axiosFetch] = useAxios();
  useEffect(() => {
    axiosFetch({
      method: 'GET',
      url: configuration.client.enrolledCourses,
    });
  }, []);
  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        {loading && <LoadingDots />}
        <div className={styles.container}>
          <div className={styles.left}>
            {response?.data?.length > 0 &&
              response?.data?.map((course, i) => (
                <CourseCard
                  key={i}
                  img={course.course.thumbnail || '/assets/noImage.svg'}
                  title={course.course.title}
                  description={course.course.description}
                  startTime="Anytime"
                  duration="10 total hours"
                  totalLectures="10 lessons"
                  id={course.course._id}
                  onClickLink={`/client/my-courses/${course.course._id}`}
                  maxWidth="none"
                  buttonText="Start Learning"
                  getMoreDetails={true}
                />
              ))}
            {response?.data?.length === 0 && (
              <div className={styles.empty}>
                <p className={styles.text}>No Courses Enrolled</p>
              </div>
            )}
          </div>
          <div className={styles.right}>
            <FeaturedCourse firstCourse={featuredCourses} />
          </div>
        </div>
      </div>
    </div>
  );
}
