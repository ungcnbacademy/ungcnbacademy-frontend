import CourseDetails from '@/components/allCourses/courseDetails';
import React from 'react';

export default async function Details({ params }) {
  const courseId = (await params).id;

  return (
    <div>
      <CourseDetails id={courseId} />
    </div>
  );
}
