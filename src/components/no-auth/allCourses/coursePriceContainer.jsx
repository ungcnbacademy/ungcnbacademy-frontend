'use client';
import React, { useContext, useEffect, useState } from 'react';
import styles from './coursePriceContainer.module.css';
import { MdOutlineOndemandVideo, MdOutlineAssignment } from 'react-icons/md';
import { GoDesktopDownload } from 'react-icons/go';
import { SlTrophy } from 'react-icons/sl';
import { getAmountsWithCommas } from '@/utils/utils';
import Button from '@/components/ui/button/button';
import Collapse from '@/components/ui/collapse/collapse';
import { CartContext } from '@/context/cartContext';
import { useRouter } from 'next/navigation';
import { allAdminRoles, userRoles } from '@/constants/constants';
import Message from '@/components/ui/message/message';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
export default function CoursePriceContainer({ courseInfo }) {
  const [showModulePrice, setShowModulePrice] = useState(false);
  const { setGlobalCart } = useContext(CartContext);
  const [userDetails, setUserDetails] = useState();
  const [message, setMessage] = useState({ text: '', type: '' });
  const router = useRouter();
  //calling the same api again to get the enrollment information
  const [response, error, loading, axiosFetch] = useAxios();
  const [enrolledModulesIdArray, setEnrolledModulesIdArray] = useState([]);

  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseInfo?._id}`,
    });
  }, []);

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    if (!response?.data) return;
    if (!response?.data?.enrollment?.type === 'module') return;
    setEnrolledModulesIdArray(response?.data?.enrollment?.enrolledModules.map((module) => module.module));
  }, [response?.data]);

  const checkIfUserIsClient = () => {
    if (!userDetails) {
      router.push('/login');
      return true;
    } else if (allAdminRoles.includes(userDetails?.data?.role)) {
      setMessage({
        text: 'Admins are not allowed to buy courses',
        type: 'error',
      });
      return true;
    } else if (userDetails?.data?.role === userRoles.client.role) {
      return;
    }
  };

  const enrollInCorseHandler = () => {
    if (checkIfUserIsClient()) return;
    setGlobalCart({
      type: 'Full Course',
      courseTitle: courseInfo?.title,
      courseId: courseInfo?._id,
      price: courseInfo?.price,
      allModules: courseInfo?.modules,
    });
    router.push('/client/payment/checkout');
  };

  const enrollInModuleHandler = (module) => {
    if (checkIfUserIsClient()) return;
    setGlobalCart({
      type: 'Single Module',
      courseTitle: courseInfo?.title,
      courseId: courseInfo?._id,
      moduleId: module?._id,
      moduleOrder: module?.order,
      moduleTitle: module?.title,
      price: module?.price,
    });
    router.push('/client/payment/checkout');
  };

  const alreadyEnrolledCourseHandler = () => {
    router.push(`/client/my-courses/${courseInfo?._id}`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p className={styles.title}>This course includes the following:</p>
        <div className={styles.container}>
          <MdOutlineOndemandVideo />
          <p>On demand videos</p>
        </div>
        <div className={styles.container}>
          <GoDesktopDownload />
          <p>Downloadable resources</p>
        </div>
        <div className={styles.container}>
          <MdOutlineAssignment />
          <p>Assignments</p>
        </div>
        <div className={styles.container}>
          <SlTrophy />
          <p>Certificate of completion</p>
        </div>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.text}>Enroll in all modules at once for</p>
        <p className={styles.price}>{getAmountsWithCommas(courseInfo?.price)}</p>
        {/* <p className={styles.previousPrice}>{getAmountsWithCommas(courseInfo?.price * 1.3)}</p> */}
      </div>
      <Message text={message.text} type={message.type} />
      <div className={styles.enrollContainer}>
        <Button
          text={response?.data?.enrollment?.type === 'full' ? 'Start learning...' : 'Enroll in course'}
          className={styles.buttonCourse}
          loading={loading}
          onClick={() => (response?.data?.enrollment?.type === 'full' ? alreadyEnrolledCourseHandler() : enrollInCorseHandler())}
        />
        {response?.data?.enrollment?.type !== 'full' && (
          <p className={styles.text}>
            Want to enroll in a single module? <span onClick={() => setShowModulePrice(!showModulePrice)}>Click here</span>
          </p>
        )}
        {response?.data?.enrollment?.type === 'full' && <p className={styles.text}>You already enrolled in this course.</p>}
      </div>
      {showModulePrice && response?.data?.enrollment?.type !== 'full' && (
        <div className={styles.modulesContainer}>
          {courseInfo?.modules?.length < 1 && <p className={styles.noModule}>No modules found</p>}
          {courseInfo?.modules?.map((module, i) => (
            <Collapse
              key={i}
              data={[
                {
                  title: module.title,
                  children: (
                    <div className={styles.enrollModuleContainer}>
                      <p className={styles.price}>Price: {getAmountsWithCommas(module.price)}</p>
                      <Button
                        text={enrolledModulesIdArray?.includes(module._id) ? 'Already enrolled' : 'Enroll in module'}
                        className={styles.button}
                        onClick={() => enrollInModuleHandler(module)}
                        disabled={enrolledModulesIdArray?.includes(module._id)}
                      />
                    </div>
                  ),
                },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
