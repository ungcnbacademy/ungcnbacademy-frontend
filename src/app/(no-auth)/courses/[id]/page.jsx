import CourseDetails from '@/components/no-auth/allCourses/courseDetails';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import { generateCourseMetadata } from '@/utils/generateCourseMetadata';
import React from 'react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const courseId = resolvedParams.id;
  return await generateCourseMetadata(courseId);
}

export default async function Details({ params }) {
  const courseId = (await params).id;
  const response = await getFetchRequests.getCourseById(courseId);

  return <CourseDetails response={response} />;
}
