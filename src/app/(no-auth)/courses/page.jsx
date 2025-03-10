import Header from '@/components/atom/header';
import AllCourses from '@/components/no-auth/allCourses/allCourses';
import React from 'react';

export default function Courses() {
  return (
    <div>
      <Header title={'All Courses'} description={'All available courses'} />
      <AllCourses />
    </div>
  );
}
