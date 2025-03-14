import CourseDetails from '@/components/no-auth/allCourses/courseDetails';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import React from 'react';

// export async function generateMetadata({ params }) {
//   const courseId = (await params).id;
//   const response = await getFetchRequests.getCourseById(courseId);
//   return {
//     title: response?.data?.title,
//     description: response?.data?.description,
//     openGraph: {
//       title: response?.data?.title,
//       description: response?.data?.description,
//       images: [
//         {
//           url: response?.data?.thumbnail,
//           width: 851,
//           height: 312,
//           alt: 'UNGCNB Academy',
//         },
//       ],
//     },
//   };
// }

export async function generateMetadata({ params }) {
  try {
    const courseId = params.id;
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
            url: response.data.thumbnail,
            width: 851,
            height: 312,
            alt: 'UNGCNB Academy',
          },
        ],
        type: 'website',
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
      title: 'Course Details',
      description: 'Learn more about our courses',
    };
  }
}


export default async function Details({ params }) {
  const courseId = (await params).id;
  const response = await getFetchRequests.getCourseById(courseId);

  return <CourseDetails response={response} />;
}
