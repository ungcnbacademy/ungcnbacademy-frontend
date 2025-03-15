import { getFetchRequests } from '@/fetch ssr/getFetchRequests';

export default async function sitemap() {
  const baseUrl = 'https://esgeducation.netlify.app';
  const response = await getFetchRequests.getAllCourses();
  const courses = response?.data?.courses.map((course) => ({
    url: `${baseUrl}/courses/${course._id}`,
    lastModified: course?.updatedAt,
    title: course?.title,
    image: course?.thumbnail,
  }));
  return [
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
    ...courses,
  ];
}
