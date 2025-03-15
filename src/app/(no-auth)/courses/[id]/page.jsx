import CourseDetails from '@/components/no-auth/allCourses/courseDetails';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import React from 'react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const courseId = resolvedParams.id;
  try {
    const response = await getFetchRequests.getCourseById(courseId);
    // Make sure we have valid data before returning metadata
    if (!response?.data) {
      return {
        title: 'Course Not Found',
        description: 'The requested course could not be found',
      };
    }

    return {
      title: response.data.title,
      description: response.data.description,
      openGraph: {
        title: response.data.title,
        description: response.data.description,
        images: [
          {
            url: new URL(response.data.thumbnail, 'https://esgeducation.netlify.app/ogimage.png').toString(),
            width: 1200,
            height: 630,
            alt: 'UNGCNB Academy',
          },
        ],
        siteName: 'USGCNB Academy',
        url: 'https://esgeducation.netlify.app',
        type: 'website',
        logo: 'https://esgeducation.netlify.app/logo.png',
      },
      // Twitter card metadata for Twitter sharing
      twitter: {
        card: 'summary_large_image',
        title: response.data.title,
        description: response.data.description,
        images: [response.data.thumbnail],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found',
    };
  }
}

export default async function Details({ params }) {
  const courseId = (await params).id;
  const response = await getFetchRequests.getCourseById(courseId);

  return <CourseDetails response={response} />;
}
