import CourseDetails from '@/components/no-auth/allCourses/courseDetails';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import React from 'react';

export async function generateMetadata({ params }) {
  const courseId = (await params).id;
  const response = await getFetchRequests.getCourseById(courseId);
  return {
    title: response?.data?.title,
    description: response?.data?.description,
    openGraph: {
      title: response?.data?.title,
      description: response?.data?.description,
      images: [response?.data?.thumbnail],
    },
  };
}

export default async function Details({ params }) {
  const courseId = (await params).id;
  const response = await getFetchRequests.getCourseById(courseId);

  return <CourseDetails response={response} />;
}
