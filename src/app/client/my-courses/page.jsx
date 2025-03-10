import Header from '@/components/atom/header';
import PurchasedCourses from '@/components/client/purchasedCourses';
export default function MyCourses() {
  return (
    <>
      <Header title={'My Courses'} description={'My purchased courses'} />
      <PurchasedCourses />
    </>
  );
}
