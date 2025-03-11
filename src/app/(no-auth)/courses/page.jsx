import Header from '@/components/atom/header';
import AllCourses from '@/components/no-auth/allCourses/allCourses';
import React from 'react';

export default function Courses() {
  return (
    <div>
      <Header
        title={'All Courses'}
        description={'Educational resources from the world’s leading experts on sustainable development'}
        image={'/assets/course-bg.webp'}
      />
      <AllCourses />
    </div>
  );
}
