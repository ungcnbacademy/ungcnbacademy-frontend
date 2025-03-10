import Header from '@/components/atom/header';
import PurchasedCourses from '@/components/client/purchasedCourses';
export default function MyCourses() {
  return (
    <>
      <Header title={'My Courses'} description={'Educational resources from the world’s leading experts on sustainable development'} />
      <PurchasedCourses />
    </>
  );
}
