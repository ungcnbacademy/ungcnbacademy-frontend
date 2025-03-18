import Header from '@/components/atom/header';
import AllCourses from '@/components/no-auth/allCourses/allCourses';
import React from 'react';
export const metadata = { title: 'All Courses' };

export default function Courses() {
  return (
    <div>
      <Header
        title={'All Courses'}
        description={'Educational resources from leading experts on corporate sustainability.'}
        image={'/assets/course-bg.webp'}
      />
      <AllCourses />
    </div>
  );
}
