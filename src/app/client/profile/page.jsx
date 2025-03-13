import Header from '@/components/atom/header';
import Profile from '@/components/client/profile/profile';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import React from 'react';
export const metadata = { title: 'My Profile' };

export default async function MyProfile() {
  const response = await getFetchRequests.getFeaturedCourses();
  const firstCourse = response?.data?.courses[0];

  return (
    <>
      <Header
        title={'My Profile'}
        description={'Passionate about transforming education through innovative technology solutions.'}
      />
      <Profile firstCourse={firstCourse} />
    </>
  );
}
