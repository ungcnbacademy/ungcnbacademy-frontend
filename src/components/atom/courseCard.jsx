'use client';
import React, { useEffect, useState } from 'react';
import styles from './courseCard.module.css';
import Image from 'next/image';
import { FaRegCalendarAlt, FaRegFileAlt, FaArrowRight, FaRegClock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { formatDuration, truncateString } from '@/utils/utils';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import { RiProgress2Line } from 'react-icons/ri';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function CourseCard({
  img = '/assets/noImage.svg',
  title = 'Title',
  description = 'Description',
  startTime = 'Anytime',
  duration = '',
  totalLectures = '',
  manualTime,
  id,
  onClickLink,
  maxWidth = '400px',
  buttonText = 'Course Details',
  getMoreDetails = false,
}) {
  const [courseImage, setCourseImage] = useState(img);
  const [response, error, loading, axiosFetch] = useAxios();
  const router = useRouter();

  useEffect(() => {
    if (getMoreDetails) {
      axiosFetch({
        method: 'Get',
        url: `${configuration.courses}/${id}`,
      });
    }
  }, []);

  const onclickCourseHandler = () => {
    if (onClickLink) {
      router.push(onClickLink);
    } else {
      router.push(`/courses/${id}`);
    }
  };
  const setDuration = () => {
    if (getMoreDetails) {
      return formatDuration(response?.data?.statistics.totalDuration || 0);
    } else {
      return duration;
    }
  };
  const setTotalLectures = () => {
    if (getMoreDetails) {
      return `${response?.data?.statistics.totalModules || 0} modules and ${
        response?.data?.statistics.totalLessons || 0
      } lessons`;
    } else {
      return totalLectures;
    }
  };
  const courseProgressRender = () => {
    return (
      <div className={styles.progressContainer}>
        <div className={styles.progressTextContainer}>
          <p className={styles.progressText}>Your progress: </p>
          <p className={styles.progressText}>{Number(response?.data?.progress?.overallProgress || 0).toFixed(2)}%</p>
        </div>

        <div className={styles.progressLineBackground}>
          <div className={styles.progressLine} style={{ width: `${response?.data?.progress?.overallProgress || 0}%` }}></div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.main} onClick={() => onclickCourseHandler()} style={{ maxWidth: maxWidth }}>
      <div className={styles.imageContainer}>
        <Image
          src={courseImage}
          alt="Empty"
          width={300}
          height={200}
          className={styles.image}
          onError={() => setCourseImage('/assets/noImage.svg')}
        />
      </div>

      <div className={styles.container}>
        <p className={styles.title}>{truncateString(title, 55)}</p>
        <p className={styles.description}>{truncateString(description, 120)}</p>
        <div className={styles.content}>
          <FaRegCalendarAlt />
          <p>{startTime}</p>
        </div>
        {duration && (
          <div className={styles.content}>
            <FaRegClock />
            <p> {setDuration()}</p>
          </div>
        )}
        {manualTime && (
          <div className={styles.content}>
            <FaRegClock />
            <p> {manualTime}</p>
          </div>
        )}
        <div className={styles.content}>
          <FaRegFileAlt />
          <p>{setTotalLectures()}</p>
        </div>
        {getMoreDetails && (
          <div className={styles.content}>
            <AiOutlineQuestionCircle />
            <p>{response?.data?.progress?.totalQuizzes || 0} quizzes </p>
          </div>
        )}

        {getMoreDetails && courseProgressRender()}
        <div className={styles.detailsButton}>
          <p>{buttonText}</p>
          <FaArrowRight className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
