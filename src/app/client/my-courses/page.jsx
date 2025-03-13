import Header from '@/components/atom/header';
import PurchasedCourses from '@/components/client/purchasedCourses';
export const metadata = { title: 'My Courses' };

export default function MyCourses() {
  return (
    <>
      <Header
        title={'My Courses'}
        description={'Educational resources from the world’s leading experts on sustainable development'}
        height="45vh"
      />
      <PurchasedCourses />
    </>
  );
}
