'use client';
import React, { useState } from 'react';
import styles from './courseCard.module.css';
import Image from 'next/image';
import { FaRegCalendarAlt, FaRegFileAlt, FaArrowRight, FaRegClock } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import { truncateString } from '@/utils/utils';

export default function CourseCard({
  img = '/assets/noImage.svg',
  title = 'Title',
  description = 'Description',
  startTime = 'Anytime',
  duration = '',
  totalLectures = '',
  id,
  onClickLink,
  maxWidth = '400px',
}) {
  const [courseImage, setCourseImage] = useState(img);
  const onclickCourseHandler = () => {
    if (onClickLink) {
      redirect(onClickLink);
    } else {
      redirect(`/courses/${id}`);
    }
  };
  return (
    <div className={styles.main} onClick={() => onclickCourseHandler()} style={{ maxWidth: maxWidth }}>
      <Image
        src={courseImage}
        alt="Empty"
        width={300}
        height={200}
        className={styles.image}
        onError={() => setCourseImage('/assets/noImage.svg')}
      />
      <div className={styles.container}>
        <p className={styles.title}>{truncateString(title, 55)}</p>
        <p className={styles.description}>{truncateString(description, 120)}</p>
        <div className={styles.content}>
          <FaRegCalendarAlt />
          <p>{startTime}</p>
        </div>
        <div className={styles.content}>
          <FaRegClock />
          <p>{duration}</p>
        </div>
        <div className={styles.content}>
          <FaRegFileAlt />
          <p>{totalLectures}</p>
        </div>

        <div className={styles.detailsButton}>
          <p>Course Details</p>
          <FaArrowRight className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
