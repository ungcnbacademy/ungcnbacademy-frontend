import Header from '@/components/atom/header';
import PurchasedCourses from '@/components/client/purchasedCourses';
import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
export const metadata = { title: 'My Courses' };

export default async function MyCourses() {
  const response = await getFetchRequests.getFeaturedCourses();
  const firstCourse = response?.data?.courses[0];

  return (
    <>
      <Header
        title={'My Courses'}
        description={'Educational resources from the world’s leading experts on sustainable development'}
        height="45vh"
      />
      <PurchasedCourses featuredCourses={firstCourse} />
    </>
  );
}
