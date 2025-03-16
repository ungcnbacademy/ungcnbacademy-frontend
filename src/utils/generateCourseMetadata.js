// utils/generateMetadata.js
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';

export async function generateCourseMetadata(courseId) {
  try {
    const response = await getFetchRequests.getCourseById(courseId);

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
        icons: {
          icon: 'https://esgeducation.netlify.app/favicon.ico',
          apple: 'https://esgeducation.netlify.app/apple-icon.png',
        },
        logo: 'https://esgeducation.netlify.app/logo.png',
      },
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
