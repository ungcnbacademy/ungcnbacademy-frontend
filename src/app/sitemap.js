import { companyInfo } from '@/constants/constants';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';

export default async function sitemap() {
  const baseUrl = companyInfo.website;

  // Define default routes
  const defaultRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
    },
  ];

  try {
    // Add proper error handling around the API call
    const response = await getFetchRequests.getAllCourses();

    // Safely handle the response with proper null/undefined checks
    const courses = response?.data?.courses?.map((course) => ({
      url: `${baseUrl}/courses/${course._id}`,
      lastModified: course?.updatedAt || new Date(),
      title: course?.title,
      image: course?.thumbnail,
    })) || [];

    return [...defaultRoutes, ...courses];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // If there's an error, return just the default routes
    return defaultRoutes;
  }
}